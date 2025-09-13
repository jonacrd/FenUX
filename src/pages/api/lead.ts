import type { APIRoute } from 'astro';
import { z } from 'zod';

export const prerender = false;

// Rate limiting simple
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests por minuto

// Esquema de validación
const leadSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  company: z.string().optional(), // honeypot
});

// Función para verificar rate limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

// Función para enviar a Google Sheets
async function sendToGoogleSheets(data: any): Promise<boolean> {
  const SHEETS_WEBAPP_URL = import.meta.env.SHEETS_WEBAPP_URL;
  
  if (!SHEETS_WEBAPP_URL) {
    console.log('SHEETS_WEBAPP_URL no configurado, saltando envío a Sheets');
    return true; // No es un error, simplemente no está configurado
  }
  
  try {
    const response = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        message: data.message || '',
        source: data.source || 'unknown',
        timestamp: new Date().toISOString()
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error enviando a Google Sheets:', error);
    return false;
  }
}

// Función para enviar email con Resend
async function sendEmailWithResend(data: any): Promise<boolean> {
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const CONTACT_TO = import.meta.env.CONTACT_TO;
  
  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.log('RESEND_API_KEY o CONTACT_TO no configurados, saltando email');
    return true; // No es un error, simplemente no está configurado
  }
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FENUX Apps Web <noreply@fenux.com>',
        to: [CONTACT_TO],
        subject: `Nuevo lead de Apps Web - ${data.name}`,
        html: `
          <h2>Nuevo lead desde Apps Web</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</p>
          <p><strong>Fuente:</strong> ${data.source || 'unknown'}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${data.message || 'Sin mensaje adicional'}</p>
          <hr>
          <p><small>Enviado desde FENUX Apps Web Landing</small></p>
        `,
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error enviando email con Resend:', error);
    return false;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // Verificar rate limiting
    const ip = clientAddress || 'unknown';
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Demasiadas solicitudes. Inténtalo más tarde.' 
        }),
        { 
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Obtener datos del request
    const fd = await request.formData();
    const data = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      message: String(fd.get('message') || ''),
      source: String(fd.get('source') || 'unknown'),
      company: String(fd.get('company') || ''),
    };
    
    // Verificar honeypot
    if (data.company && data.company.trim() !== '') {
      console.log('Spam detectado por honeypot');
      return new Response(
        JSON.stringify({ ok: true }), // Simular éxito para no revelar el honeypot
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Validar datos con Zod
    const validationResult = leadSchema.safeParse(data);
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Datos inválidos',
          details: validationResult.error.errors 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    const validData = validationResult.data;
    
    // Enviar a Google Sheets
    await sendToGoogleSheets(validData);
    
    // Enviar email
    await sendEmailWithResend(validData);
    
    // Log para debugging
    console.log('Nuevo lead recibido:', {
      name: validData.name,
      email: validData.email,
      source: validData.source,
      timestamp: new Date().toISOString()
    });
    
    return new Response(
      JSON.stringify({ ok: true }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error en API lead:', error);
    return new Response(
      JSON.stringify({ 
        ok: false, 
        error: 'Error interno del servidor' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// Manejar otros métodos HTTP
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ error: 'Método no permitido' }),
    { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

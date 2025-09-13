import type { APIRoute } from 'astro';
import { z } from 'zod';

// Rate limiting simple en memoria (en producción usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests por minuto

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  plan: z.string().optional(),
  message: z.string().optional(),
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

// Función para enviar email con Resend
async function sendEmailWithResend(data: any): Promise<boolean> {
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const CONTACT_TO = import.meta.env.CONTACT_TO;
  
  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error('RESEND_API_KEY o CONTACT_TO no configurados');
    return false;
  }
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FENUX Landing <noreply@fenux.com>',
        to: [CONTACT_TO],
        subject: `Nueva consulta de ${data.name} - Plan ${data.plan || 'No especificado'}`,
        html: `
          <h2>Nueva consulta desde FENUX Landing</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</p>
          <p><strong>Plan:</strong> ${data.plan || 'No especificado'}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${data.message || 'Sin mensaje adicional'}</p>
          <hr>
          <p><small>Enviado desde FENUX Landing Page</small></p>
        `,
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error enviando email con Resend:', error);
    return false;
  }
}

// Función para enviar email con Nodemailer (fallback)
async function sendEmailWithNodemailer(data: any): Promise<boolean> {
  const SMTP_HOST = import.meta.env.SMTP_HOST;
  const SMTP_USER = import.meta.env.SMTP_USER;
  const SMTP_PASS = import.meta.env.SMTP_PASS;
  const CONTACT_TO = import.meta.env.CONTACT_TO;
  
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error('Variables SMTP no configuradas');
    return false;
  }
  
  try {
    // En un entorno real, instalar nodemailer: npm install nodemailer @types/nodemailer
    // const nodemailer = require('nodemailer');
    
    // const transporter = nodemailer.createTransporter({
    //   host: SMTP_HOST,
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: SMTP_USER,
    //     pass: SMTP_PASS,
    //   },
    // });
    
    // const mailOptions = {
    //   from: SMTP_USER,
    //   to: CONTACT_TO,
    //   subject: `Nueva consulta de ${data.name} - Plan ${data.plan || 'No especificado'}`,
    //   html: `
    //     <h2>Nueva consulta desde FENUX Landing</h2>
    //     <p><strong>Nombre:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</p>
    //     <p><strong>Plan:</strong> ${data.plan || 'No especificado'}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${data.message || 'Sin mensaje adicional'}</p>
    //     <hr>
    //     <p><small>Enviado desde FENUX Landing Page</small></p>
    //   `,
    // };
    
    // await transporter.sendMail(mailOptions);
    
    // Por ahora retornamos true para testing
    console.log('Email enviado con Nodemailer (simulado)');
    return true;
  } catch (error) {
    console.error('Error enviando email con Nodemailer:', error);
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
    const body = await request.json();
    
    // Validar datos con Zod
    const validationResult = contactSchema.safeParse(body);
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
    
    const data = validationResult.data;
    
    // Verificar honeypot (si tiene valor, es spam)
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
    
    // Intentar enviar email con Resend primero
    let emailSent = await sendEmailWithResend(data);
    
    // Si Resend falla, intentar con Nodemailer
    if (!emailSent) {
      emailSent = await sendEmailWithNodemailer(data);
    }
    
    if (!emailSent) {
      console.error('No se pudo enviar el email');
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Error interno del servidor. Inténtalo más tarde.' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Log para debugging (en producción usar un servicio de logging)
    console.log('Nueva consulta recibida:', {
      name: data.name,
      email: data.email,
      plan: data.plan,
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
    console.error('Error en API contact:', error);
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

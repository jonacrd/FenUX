# 🚀 Guía de Personalización de Demo

Esta guía te explica cómo personalizar fácilmente la página `/demo` para cada cliente o proyecto.

## 📁 Archivos Creados

### Página Principal
- `src/pages/demo.astro` - Página principal de demo
- `src/layouts/Base.astro` - Layout base con configuración global

### Componentes Reutilizables
- `src/components/FormDemo.astro` - Formulario de contacto reutilizable
- `src/components/BeneficiosDemo.astro` - Sección de beneficios
- `src/components/ComoFuncionaDemo.astro` - Sección "Cómo funciona"

## ⚙️ Personalización Rápida

### 1. Configuración Básica (src/pages/demo.astro)

Busca la sección `DEMO_CONFIG` y modifica:

```javascript
const DEMO_CONFIG = {
  // Información básica
  title: "Sistema Demo - Transforma tu Negocio",
  description: "Descubre cómo nuestro sistema puede revolucionar tu empresa...",
  companyName: "Tu Empresa",
  productName: "Sistema Demo",
  
  // URLs y enlaces
  whatsappNumber: "580000000000", // ← CAMBIAR AQUÍ
  whatsappMessage: "Hola%20quiero%20la%20demo",
  formspreeId: "TU_ID_FORMSPREE", // ← CAMBIAR AQUÍ
  
  // Contenido del hero
  heroTitle: "Transforma tu negocio con nuestro sistema",
  heroSubtitle: "Solución completa que automatiza procesos...",
  
  // Mockup
  mockupImage: "/images/mockups/demo-mockup.png", // ← CAMBIAR AQUÍ
  mockupAlt: "Mockup del sistema demo",
};
```

### 2. Configuración Global (src/layouts/Base.astro)

Busca la sección `BRAND_CONFIG` y modifica:

```javascript
const BRAND_CONFIG = {
  // Logo - reemplazar con la URL de tu logo
  logo: "/logos/logo.png",
  logoWhite: "/logos/logoblanco.png",
  
  // Enlaces de contacto
  whatsappNumber: "580000000000", // ← CAMBIAR AQUÍ
  whatsappMessage: "Hola%20quiero%20la%20demo",
  
  // Formspree - reemplazar con tu ID real
  formspreeId: "TU_ID_FORMSPREE", // ← CAMBIAR AQUÍ
  
  // Chatbot - reemplazar con tu script real
  chatbotScript: "https://static.landbot.io/landbot-3/landbot-chatbot.js",
};
```

### 3. Analytics (src/layouts/Base.astro)

Reemplaza los IDs de analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Meta Pixel -->
fbq('init', 'META_PIXEL_ID');
```

## 🎨 Personalización Visual

### Colores
Los colores se mantienen consistentes con el proyecto actual:
- Primario: `#C0176C`
- Secundario: `#D2137D`
- Acento: `#FF8A00`

### Imágenes Necesarias
1. **Mockup del sistema**: `/images/mockups/demo-mockup.png`
2. **Logo**: `/logos/logo.png` y `/logos/logoblanco.png`
3. **Open Graph**: `/images/og-demo.jpg`

## 📝 Contenido Personalizable

### Beneficios
Modifica el array `benefits` en `DEMO_CONFIG`:

```javascript
benefits: [
  {
    icon: "🚀",
    title: "Implementación rápida",
    description: "Sistema operativo en menos de 48 horas..."
  },
  // Añadir más beneficios...
]
```

### Pasos del Proceso
Modifica el array `steps` en `DEMO_CONFIG`:

```javascript
steps: [
  {
    number: "01",
    title: "Solicita tu demo",
    description: "Completa el formulario y agenda..."
  },
  // Añadir más pasos...
]
```

## 🔧 Funcionalidades Incluidas

### ✅ Formulario de Contacto
- **Campos**: Nombre, Email, WhatsApp
- **Validación**: En tiempo real
- **Envío**: A Formspree configurado
- **UTMs**: Captura automática de parámetros
- **Mensajes**: Confirmación y error

### ✅ Chatbot
- **Script**: Placeholder para Landbot/Tidio
- **Posición**: Esquina inferior derecha
- **Configuración**: En `BRAND_CONFIG.chatbotScript`

### ✅ Botón WhatsApp Flotante
- **Visibilidad**: Solo en mobile
- **UTMs**: Automáticos en el mensaje
- **Configuración**: En `BRAND_CONFIG.whatsappNumber`

### ✅ Analytics
- **Google Analytics**: PageView y eventos
- **Meta Pixel**: Lead tracking
- **Eventos**: CTA clicks, form submissions

### ✅ Responsive Design
- **Mobile-first**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl
- **Componentes**: Adaptables a todas las pantallas

## 🚀 Despliegue

1. **Configurar Formspree**:
   - Crear cuenta en formspree.io
   - Obtener ID del formulario
   - Reemplazar `TU_ID_FORMSPREE`

2. **Configurar Analytics**:
   - Google Analytics 4
   - Meta Pixel
   - Reemplazar IDs en Base.astro

3. **Configurar Chatbot**:
   - Landbot, Tidio, o similar
   - Reemplazar script en Base.astro

4. **Subir Imágenes**:
   - Mockup del sistema
   - Logos de la empresa
   - Imagen Open Graph

5. **Desplegar**:
   - `npm run build`
   - Subir a Vercel/Netlify

## 📋 Checklist de Personalización

- [ ] Cambiar `whatsappNumber` en ambos archivos
- [ ] Configurar `formspreeId` en ambos archivos
- [ ] Actualizar `title` y `description`
- [ ] Cambiar `heroTitle` y `heroSubtitle`
- [ ] Subir mockup del sistema
- [ ] Subir logos de la empresa
- [ ] Configurar analytics (GA4 + Meta Pixel)
- [ ] Configurar chatbot
- [ ] Personalizar beneficios y pasos
- [ ] Probar formulario de contacto
- [ ] Probar botón WhatsApp
- [ ] Verificar responsive design

## 🎯 Resultado Final

Una página de demo completamente funcional con:
- Hero atractivo con mockup
- Formulario de contacto funcional
- Secciones de beneficios y proceso
- Chatbot integrado
- Botón WhatsApp flotante
- Analytics completo
- Diseño responsive
- Fácil personalización

¡Listo para generar leads! 🚀

## 🤖 Chatbot Landbot Integrado

### Landbot Funcional Incluido
- **Script oficial**: Landbot 3.0.0 integrado
- **Configuración**: URL de configuración de tu bot
- **Funcionalidad completa**: Chat interactivo con tu flujo de Landbot
- **Diseño**: Interfaz nativa de Landbot
- **Personalizable**: Fácil cambio de configuración

### Personalizar Chatbot

#### Landbot (Ya configurado)
El script de Landbot ya está integrado como chatbot flotante:

```javascript
// En Base.astro - BRAND_CONFIG
chatbotScript: "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs",
landbotConfig: "https://storage.googleapis.com/landbot.online/v3/H-3131692-XMRW5AQKBIILVQQU/index.json",

// Script real de Landbot (ya integrado)
window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot = new Landbot.Livechat({
  configUrl: 'URL_DE_TU_CONFIG',
});
```

#### Otros Chatbots (Tidio, etc.)
Para usar otro chatbot:

1. **Reemplazar en Base.astro**:
```javascript
chatbotScript: "//code.tidio.co/your-tidio-id.js"
landbotConfig: "" // Dejar vacío
```

2. **Comentar el script de Landbot**:
```html
<!-- Landbot Script -->
<!-- <script type="module" src={BRAND_CONFIG.chatbotScript}></script> -->
```

## 🎯 Sistema de Captación Completo

La página `/demo` ahora incluye **TODO el sistema captaclientes**:

- ✅ **Hero con mini-formulario** - Captura inmediata
- ✅ **Sección "Qué incluye"** - Explica beneficios
- ✅ **Sección "Cómo funciona"** - Proceso en 4 pasos
- ✅ **Planes y precios** - Comparativa de opciones
- ✅ **Testimonios** - Prueba social
- ✅ **Formulario de reserva** - Captura completa
- ✅ **Video y QR** - Múltiples puntos de contacto
- ✅ **Botón WhatsApp flotante** - Contacto directo
- ✅ **Chatbot funcional** - Atención 24/7

### Resultado Final
Una landing page completa de captación de clientes con:
- **Múltiples puntos de conversión**
- **Chatbot funcional de demostración**
- **Sistema de formularios completo**
- **Tracking de UTMs automático**
- **Diseño responsive premium**
- **Fácil personalización**

¡Perfecto para generar leads! 🚀

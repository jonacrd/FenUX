# Configuración Sistema Captaclientes Ágil

## Archivos modificados/creados

### Página principal
- `src/pages/es/servicios/landing-portfolios/index.astro` - Landing principal actualizada

### Componentes nuevos
- `src/components/HeroCaptaclientes.astro` - Hero específico para el sistema (versión original)
- `src/components/HeroCaptaclientesNuevo.astro` - Hero con mini-formulario en lugar de Calendly
- `src/components/QueIncluye.astro` - Sección "Qué incluye"
- `src/components/ComoFunciona.astro` - Sección "Cómo funciona"
- `src/components/PricingCaptaclientes.astro` - Planes comparativos
- `src/components/TestimoniosCaptaclientes.astro` - Testimonios y logos
- `src/components/FormularioCaptaclientes.astro` - Formulario de reserva
- `src/components/VideoYQR.astro` - Sección de video y QR
- `src/components/BotonWhatsApp.astro` - Botón flotante WhatsApp

### Estilos
- `src/styles/captaclientes.css` - Estilos específicos del sistema
- `src/lib/analytics.ts` - Funciones de tracking actualizadas

## Configuración requerida

### 1. Enlaces de Calendly
En `src/components/HeroCaptaclientes.astro` y `src/components/VideoYQR.astro`:
```javascript
const calendlyUrl = "https://calendly.com/TU_USUARIO/30min";
```
**Reemplazar `TU_USUARIO` con tu usuario de Calendly real**

### 2. Número de WhatsApp
En `src/pages/es/servicios/landing-portfolios/index.astro`:
```javascript
const WHATSAPP = "+580000000000";
```
**Reemplazar con tu número de WhatsApp real (formato internacional)**

### 3. URLs de WhatsApp
En todos los componentes que usan WhatsApp:
```javascript
const whatsappUrl = "https://wa.me/580000000000?text=Hola%20vengo%20del%20anuncio%20quiero%20la%20demo";
```
**Reemplazar `580000000000` con tu número real**

### 4. Analytics IDs
En `src/pages/es/servicios/landing-portfolios/index.astro`:
```javascript
const GA4_ID = "G-XXXXXXX";
const ADS_ID = "AW-XXXXXXX";
```
**Reemplazar con tus IDs reales de Google Analytics y Google Ads**

### 5. Meta Pixel ID
En `src/components/MetaPixel.astro`:
```javascript
const PIXEL_ID = "REEMPLAZA_POR_TU_ID";
```
**Reemplazar con tu ID de Meta Pixel real**

### 6. Dominio
En `src/pages/es/servicios/landing-portfolios/index.astro`:
```javascript
const DOMAIN = "https://fen-ux-gqcp.vercel.app";
```
**Reemplazar con tu dominio real**

## Características implementadas

### ✅ Hero Section
- Título: "Sistema que capta clientes en 48 h (versión operativa)"
- Subtítulo: "Landing + Bot WhatsApp + Automatización. Demo sin pago adelantado."
- Botón WhatsApp para contacto inmediato
- **Mini-formulario elegante** con campos: Nombre, Email, Teléfono (opcional)
- Botón "Reservar demo gratuita" con gradiente de marca
- Texto: "Sin compromiso. Te mostramos cómo funciona antes de pagar."
- Mockups con sello "Implementación ágil"
- Badges: "Entrega versión operativa en 48h", "Sin pago adelantado", "Cupos limitados"

### ✅ Sección "Qué incluye"
- 4 bloques con iconos
- Landing optimizada
- Bot WhatsApp entrenado
- Automatización básica (Google Sheets + alerta)
- 7 días de acompañamiento

### ✅ Sección "Cómo funciona"
- 4 pasos numerados
- Diagnóstico express (10 min)
- Demo gratuita con tus datos
- Versión operativa en 48 h
- Ajustes y arranque

### ✅ Planes comparativos
- Estándar: $99.000 CLP (5 días)
- Ágil 48h: $550.000 CLP (Sistema completo)
- Banner: "Sin pago adelantado — pagas cuando apruebes la demo"
- Scroll automático al formulario al seleccionar plan

### ✅ Testimonios y logos
- Carrusel de 3 testimonios
- Logos de herramientas: WhatsApp, Google Sheets, Vercel, Astro

### ✅ Mini-formulario en Hero
- **Campos**: Nombre (required), Email (required), Teléfono (opcional)
- **Diseño**: Fondo ultra-sutil (`bg-white/5`) con borde sutil, inputs con fondo semi-transparente
- **Estilo**: Inputs con texto blanco y placeholders suaves, focus ring naranja sutil
- **Validación**: En tiempo real con mensajes de error suaves
- **Envío**: POST a `/api/contact` con tracking de UTMs
- **UX**: Botón con estado de carga, mensajes de confirmación sutiles
- **Responsive**: Mobile-first, se adapta perfectamente a todas las pantallas
- **Integración**: Diseño no invasivo que se integra naturalmente con el hero

### ✅ Formulario de reserva (sección completa)
- Campos: Nombre, Email, WhatsApp, Sector, Plan
- Validación completa
- Tracking de UTMs
- Mensaje de confirmación con enlace WhatsApp

### ✅ Botón flotante WhatsApp
- Visible solo en mobile
- UTMs automáticos en el mensaje
- Animación de pulso

### ✅ Sección Video y QR
- Placeholder para video demo
- QR para Calendly (solo desktop)
- Enlace de respaldo

### ✅ Analytics y tracking
- Google Analytics 4
- Meta Pixel
- Tracking de CTAs
- Tracking de formularios
- Captura de UTMs

### ✅ SEO y accesibilidad
- Schema JSON-LD Product
- Meta tags optimizados
- Contraste AA
- aria-labels en CTAs
- Soporte para reduced motion
- High contrast mode

## URLs de prueba

Para probar el tracking de UTMs, usa URLs como:
```
https://tu-dominio.com/es/servicios/landing-portfolios?utm_source=facebook&utm_campaign=test
https://tu-dominio.com/es/servicios/landing-portfolios?utm_source=google&utm_campaign=ads
```

## Próximos pasos

1. **Configurar todos los enlaces y IDs** según las instrucciones arriba
2. **Probar la funcionalidad** en desarrollo
3. **Desplegar en Vercel**
4. **Configurar el endpoint de Google Sheets** en `/api/contact` si es necesario
5. **Crear el QR real** para Calendly
6. **Grabar el video demo** y reemplazar el placeholder

## Notas técnicas

- La página está optimizada para mobile-first
- Usa tipografías fluidas con `clamp()`
- Grid responsivo de 1 columna en mobile a 2+ en desktop
- Aspect ratios optimizados para mockups
- Loading lazy para imágenes no críticas
- Sin CLS (Cumulative Layout Shift)

# 🚀 Guía de Despliegue

Esta guía te ayudará a desplegar el proyecto en GitHub y Vercel.

## 📋 Prerrequisitos

- Cuenta de GitHub
- Cuenta de Vercel
- Node.js 18+ instalado localmente

## 🔧 Configuración Inicial

### 1. Configurar el dominio en astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://tu-dominio.vercel.app', // Cambiar por tu dominio
  // ... resto de la configuración
});
```

### 2. Actualizar información en README.md

- Cambiar `tu-usuario` por tu usuario de GitHub
- Cambiar `tu-email@ejemplo.com` por tu email
- Cambiar `tu-sitio.com` por tu sitio web

## 🐙 Despliegue en GitHub

### 1. Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `landings-servicios`
4. Descripción: `Landing pages modernas para servicios web`
5. Marca como público o privado
6. **NO** inicialices con README (ya existe)

### 2. Subir código a GitHub

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: Landing pages para servicios web"

# Agregar repositorio remoto
git remote add origin https://github.com/tu-usuario/landings-servicios.git

# Subir código
git push -u origin main
```

### 3. Configurar GitHub Pages (Opcional)

Si quieres usar GitHub Pages en lugar de Vercel:

1. Ve a Settings > Pages
2. Source: GitHub Actions
3. El workflow ya está configurado en `.github/workflows/deploy.yml`

## ⚡ Despliegue en Vercel

### 1. Conectar con GitHub

1. Ve a [Vercel](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Importa el repositorio `landings-servicios`

### 2. Configuración de Vercel

Vercel detectará automáticamente que es un proyecto Astro:

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Variables de Entorno (Opcional)

Si necesitas variables de entorno:

1. Ve a Project Settings > Environment Variables
2. Agrega las variables necesarias:
   - `SITE_URL`: `https://tu-dominio.vercel.app`
   - `GA_TRACKING_ID`: `G-XXXXXXXXXX` (si usas Google Analytics)

### 4. Desplegar

1. Haz clic en "Deploy"
2. Vercel construirá y desplegará automáticamente
3. Obtendrás una URL como: `https://landings-servicios-xxx.vercel.app`

## 🔄 Actualizaciones Automáticas

### Con Vercel

- Cada push a `main` desplegará automáticamente
- Pull requests crean previews automáticos
- Rollbacks disponibles en el dashboard

### Con GitHub Pages

- Cada push a `main` ejecuta el workflow
- Despliega automáticamente a GitHub Pages
- URL: `https://tu-usuario.github.io/landings-servicios`

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar tipos (opcional)
npm run build:check
```

## 📱 URLs del Sitio

Una vez desplegado, tendrás estas URLs:

### Español
- `/` - Página principal
- `/es/servicios/redisenio` - Rediseño web
- `/es/servicios/landing-portfolios` - Landing pages
- `/es/servicios/apps-web` - Aplicaciones web

### Inglés
- `/en/` - Home page
- `/en/services/website-redesign` - Website redesign
- `/en/services/landing-portfolios` - Landing pages
- `/en/services/web-apps` - Web applications

## 🔧 Solución de Problemas

### Error de Build

Si el build falla:

1. Verifica que todas las dependencias estén instaladas
2. Ejecuta `npm run build` localmente
3. Revisa los logs en Vercel

### Error de TypeScript

El proyecto está configurado para ignorar errores de TypeScript en producción. Si necesitas arreglarlos:

```bash
npm run build:check
```

### Error de Terser

Si hay problemas con terser:

1. El proyecto usa `esbuild` por defecto
2. Si necesitas terser, instálalo: `npm install --save-dev terser`

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs en Vercel/GitHub
2. Verifica que el build funcione localmente
3. Consulta la documentación de [Astro](https://docs.astro.build)
4. Consulta la documentación de [Vercel](https://vercel.com/docs)

## 🎉 ¡Listo!

Tu proyecto ya está desplegado y funcionando. Puedes:

- Hacer cambios y push para actualizaciones automáticas
- Configurar un dominio personalizado en Vercel
- Agregar más funcionalidades
- Optimizar el rendimiento

¡Felicitaciones! 🚀

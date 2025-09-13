# FenNuX - Desarrollo Web Premium

Un proyecto moderno de desarrollo web premium desarrollado con Astro, React y Tailwind CSS. Especializados en landing pages de alta conversión, rediseño web moderno y aplicaciones web escalables.

## 🚀 Características

- **Astro 4.0** - Framework moderno para sitios estáticos
- **React 19** - Componentes interactivos
- **Tailwind CSS** - Estilos utilitarios
- **TypeScript** - Tipado estático
- **Responsive Design** - Mobile-first
- **Carruseles Automáticos** - Animaciones suaves
- **SEO Optimizado** - Meta tags y sitemap
- **Meta Pixel** - Tracking de conversiones
- **Analytics Avanzado** - Google Analytics + Meta Pixel

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── ui/             # Componentes de UI base
│   └── ...
├── pages/              # Páginas de Astro
│   ├── es/             # Versión en español
│   └── en/             # Versión en inglés
├── styles/             # Estilos globales
├── lib/                # Utilidades
└── i18n/               # Archivos de traducción
```

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/landings-servicios.git
   cd landings-servicios
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar con GitHub**
   - Subir el código a GitHub
   - Conectar el repositorio en Vercel
   - Desplegar automáticamente

2. **Configuración de Vercel**
   - Framework: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`

### GitHub Pages

1. **Configurar GitHub Actions**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 📱 Páginas Disponibles

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

## 📊 Meta Pixel & Analytics

### Configuración de Meta Pixel

El proyecto incluye integración completa de Meta Pixel para tracking de conversiones:

1. **Configurar variable de entorno:**
   ```bash
   PUBLIC_META_PIXEL_ID=tu_pixel_id_aqui
   ```

2. **Eventos trackeados automáticamente:**
   - `PageView` - Carga de página
   - `CTA_Click` - Clics en botones principales
   - `Lead` - Envío exitoso del formulario de contacto

3. **Eventos personalizados:**
   - CTA Hero: `{ place: 'hero' }`
   - Lead con plan: `{ plan: 'standard|flash', source: 'landing' }`

### UTM para Campañas

Para campañas de Meta Ads, usa estos UTM parameters:

```
https://TU_SUBDOMINIO.vercel.app/?utm_source=meta&utm_medium=cpc&utm_campaign=landing_flash
```

**Parámetros recomendados:**
- `utm_source=meta` - Fuente de tráfico
- `utm_medium=cpc` - Medio de pago
- `utm_campaign=landing_flash` - Nombre de campaña
- `utm_content=hero_button` - Contenido específico (opcional)
- `utm_term=landing_page` - Palabra clave (opcional)

### Testing

1. **Verificar en Meta Events Manager:**
   - Ve a Events Manager > Test Events
   - Verifica que lleguen los eventos: PageView, CTA_Click, Lead

2. **Sin Pixel ID configurado:**
   - No genera errores
   - Solo muestra warning en consola
   - Funcionalidad normal del sitio

## 🎨 Componentes Principales

- **HeroRedesignCarrusel** - Hero con carruseles automáticos
- **ReusableHeader** - Header reutilizable
- **LandingContent** - Contenido de landing pages
- **WhatsApp Button** - Botón flotante de WhatsApp

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run astro` - CLI de Astro

## 📦 Dependencias Principales

- **Astro** - Framework principal
- **React** - Componentes interactivos
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Radix UI** - Componentes accesibles

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas:
- **Español** (es) - Idioma principal
- **Inglés** (en) - Idioma secundario

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: tu-email@ejemplo.com
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **Website**: https://tu-sitio.com
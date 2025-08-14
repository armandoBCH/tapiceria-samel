# 🪑 Tapicería Samel - E-commerce Premium

Un sitio web moderno y elegante para servicios de tapicería y restauración de muebles, desarrollado con las últimas tecnologías web.

![Tapicería Samel](https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg)

## ✨ Características Principales

### 🎨 Diseño Premium
- **Mobile-First**: Diseño completamente responsive optimizado para móviles
- **Paleta de colores personalizada**: Basada en el logo de la empresa (#c3a8ec, #c4a9ee, #c5aaef, #c2a8ec, #c6aaf0)
- **Animaciones fluidas**: Implementadas con Framer Motion para una experiencia premium
- **Micro-interacciones**: Hover states, transiciones suaves y feedback visual

### 📱 Páginas Implementadas
- **🏠 Landing Page**: Hero impactante con antes/después, galería destacada, testimonios
- **🛋️ Catálogo**: Grid filtrable con búsqueda y categorías
- **📄 Páginas de Producto**: Vistas detalladas con galería, especificaciones y reseñas
- **📝 Presupuesto**: Formulario interactivo con subida de imágenes
- **🖼️ Galería**: Modal interactivo con filtros por categoría
- **ℹ️ Nosotros**: Historia, equipo, valores y estadísticas
- **🔧 Servicios**: Catálogo detallado de servicios con precios
- **📞 Contacto**: Información completa con mapa integrado

### 🚀 Tecnologías Utilizadas

#### Frontend
- **Next.js 14+**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework CSS utility-first
- **Framer Motion**: Animaciones y transiciones avanzadas
- **React Hook Form**: Manejo eficiente de formularios
- **Zod**: Validación de esquemas

#### Backend & Base de Datos
- **Supabase**: Backend-as-a-Service completo
- **PostgreSQL**: Base de datos relacional
- **Supabase Storage**: Almacenamiento de imágenes
- **Row Level Security**: Seguridad a nivel de fila

#### Infraestructura
- **Vercel**: Plataforma de despliegue optimizada
- **Docker**: Contenedorización para desarrollo local
- **Git**: Control de versiones

## 🗄️ Estructura de Base de Datos

### Tablas Principales

```sql
-- Productos/Servicios
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url VARCHAR(500),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Solicitudes de Presupuesto
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  product_category VARCHAR(100),
  description TEXT NOT NULL,
  image_urls TEXT[],
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Testimonios
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  testimonial TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/tapiceria-samel.git
cd tapiceria-samel
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Editar `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Ejecutar migraciones de base de datos**
```bash
# Conectar a Supabase y ejecutar las migraciones SQL
```

5. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

### Docker (Opcional)

```bash
# Construir imagen
docker build -t tapiceria-samel .

# Ejecutar contenedor
docker run -p 3000:3000 tapiceria-samel
```

## 🚀 Despliegue en Producción

### Vercel (Recomendado)

1. **Conectar repositorio a Vercel**
2. **Configurar variables de entorno en Vercel**
3. **Desplegar automáticamente**

```bash
# O usando Vercel CLI
npm i -g vercel
vercel --prod
```

### Variables de Entorno Requeridas
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## 📊 Funcionalidades Clave

### 🎯 SEO Optimizado
- Meta tags dinámicos
- Open Graph y Twitter Cards
- Sitemap automático
- URLs amigables
- Structured data

### 📱 Experiencia Mobile-First
- Diseño responsive en todos los breakpoints
- Navegación táctil optimizada
- Carga rápida de imágenes
- Gestos intuitivos

### 🔒 Seguridad
- Validación de formularios client-side y server-side
- Sanitización de datos
- Row Level Security en Supabase
- Rate limiting en APIs

### ⚡ Performance
- Lazy loading de imágenes
- Code splitting automático
- Optimización de bundle
- Caching inteligente

## 🎨 Guía de Estilo

### Paleta de Colores
```css
:root {
  --primary: #c3a8ec;
  --primary-light: #c4a9ee;
  --primary-lighter: #c5aaef;
  --primary-dark: #c2a8ec;
  --primary-darker: #c6aaf0;
}
```

### Tipografía
- **Font Family**: Inter (Google Fonts)
- **Heading Scale**: 1.25 (Major Third)
- **Line Height**: 1.5 para texto, 1.2 para títulos
- **Font Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Espaciado
- **Sistema base**: 8px
- **Contenedores**: max-width: 1280px
- **Padding**: 16px móvil, 24px tablet, 32px desktop

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Tests con coverage
npm run test:coverage

# Tests e2e
npm run test:e2e
```

## 📈 Analytics y Monitoreo

### Métricas Implementadas
- Google Analytics 4
- Conversion tracking
- Performance monitoring
- Error tracking con Sentry

### KPIs Principales
- Tasa de conversión de presupuestos
- Tiempo en página
- Bounce rate
- Core Web Vitals

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📝 Roadmap

### Próximas Funcionalidades
- [ ] Sistema de citas online
- [ ] Chat en vivo
- [ ] Blog integrado
- [ ] Sistema de reviews
- [ ] Panel de administración
- [ ] App móvil nativa
- [ ] Integración con CRM
- [ ] Sistema de pagos online

## 📞 Soporte

Para soporte técnico o consultas:
- **Email**: soporte@tapiceriasamel.com
- **WhatsApp**: +1 234 567 890
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/tapiceria-samel/issues)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Tapicería Samel**

*Transformando muebles, creando experiencias digitales excepcionales.*
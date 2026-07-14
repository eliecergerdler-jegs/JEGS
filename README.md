# JEGS Digital — Refactorización y Optimización

Este repositorio contiene la base de código del sitio web de JEGS Digital (`jegs.digital`), construido con React, TypeScript, Vite, Tailwind CSS v4, y Framer Motion.

---

## Estructura del Proyecto

- `src/components/`: Componentes interactivos y de interfaz (Header, Portfolio, CustomCursor, etc.).
- `src/pages/`: Páginas del sitio (Home, Services, DetailPage, ProjectDetailPage, NotFoundPage, etc.).
- `src/contexts/`: Manejo de estados globales (Idioma/LanguageContext).
- `src/i18n/`: Archivos de traducciones separados (`es.ts`, `en.ts`).
- `public/`: Assets estáticos optimizados (Favicon, Sitemap, Robots, Imágenes).
- `scripts/`: Scripts locales de procesamiento de assets (optimización de imágenes).

---

## Primeros Pasos

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Ejecutar Servidor de Desarrollo
```bash
npm run dev
```
El sitio estará disponible en [http://localhost:5173](http://localhost:5173).

### 3. Compilar para Producción
```bash
npm run build
```

---

## Scripts Locales

### Optimización de Imágenes del Portafolio
Para procesar y optimizar las imágenes del portafolio del formato original PNG a WebP de alta compresión:

```bash
npm run optimize-images
```

*Nota: Asegúrate de agregar el script correspondiente en el `package.json` para facilitar su ejecución:*
```json
"optimize-images": "node scripts/optimize-images.mjs"
```

El script realiza lo siguiente:
1. Lee `public/Imagenes/Portfolio/Cards_Home/*.png` y genera `.webp` de 800px de ancho y calidad 80.
2. Lee `public/Imagenes/Portfolio/FullPages/*.png` y genera `.webp` de 1400px de ancho y calidad 80.
3. Comprime y optimiza la imagen `public/Imagenes/og-image-v1.png` a menos de 200 KB conservando el formato PNG para compatibilidad Open Graph.
4. Renombra los archivos en kebab-case sin caracteres especiales ni espacios.
5. Elimina los archivos `.png` originales y limpia los assets no utilizados.

---

## Despliegue

El sitio está configurado para desplegarse automáticamente en Vercel. 
Cada fusión de Pull Request o push directo a las ramas `master` o `main` activa:
1. **GitHub Actions (CI)**: Corre linting (`npm run lint`) y builds de producción (`npm run build`) para verificar la estabilidad de la rama.
2. **Vercel Deployments**: Realiza la compilación final y distribuye a producción.

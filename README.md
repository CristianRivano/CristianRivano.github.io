# Nanai — Masajes a Domicilio

Sitio de React con Vite, publicado en GitHub Pages desde la rama `main` y la raíz del repositorio.

- **Dominio principal:** https://rivano.click/
- **Repositorio:** https://github.com/CristianRivano/CristianRivano.github.io

## Requisitos

Node.js 22 o posterior y npm.

## Desarrollo local

```sh
npm install
npm run dev
```

Vite sirve el proyecto desde `src/` y recarga los cambios durante el desarrollo.

## Build para GitHub Pages

```sh
npm run build
```

El comando compila el cliente y la entrada SSR, prerenderiza React para entregar el contenido desde el HTML inicial y copia el resultado a `index.html` y `assets/react/` en la raíz publicada por Pages. Conserva `CNAME`, `robots.txt`, `sitemap.xml` y los recursos del sitio. Revisa el diff generado antes de confirmar cambios.

## Estilos

El CSS de producción está compilado en `assets/site.min.css` para evitar cargar Tailwind desde CDN en cada visita. Para regenerarlo después de cambiar clases o estilos, ejecuta desde la raíz:

```sh
npx --yes tailwindcss@3.4.17 -i assets/tailwind.input.css -o assets/site.min.css --minify --config tailwind.config.cjs
```

## Datos del sitio

- WhatsApp de contacto: +56 9 8987 8687.
- Canonical, Open Graph, schema y sitemap apuntan a `https://rivano.click/`.
- `CNAME` mantiene el dominio personalizado.
- La reserva se coordina por WhatsApp; enviar el formulario prepara un mensaje y no confirma una hora automáticamente.

Antes de añadir ubicación exacta, áreas servidas detalladas, nuevas tarifas, horarios fijos o fotografías del profesional, confirma los datos directamente con el negocio.

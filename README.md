# Nanai — Masajes a Domicilio

Sitio estático publicado con GitHub Pages en https://cristianrivano.github.io/.

## Estilos

El CSS de producción está compilado en `assets/site.min.css` para evitar cargar Tailwind desde CDN en cada visita. Para regenerarlo al cambiar clases o estilos, desde la raíz del proyecto ejecuta:

```sh
npx --yes tailwindcss@3.4.17 -i assets/tailwind.input.css -o assets/site.min.css --minify --config tailwind.config.cjs
```

## Contenido pendiente de validar

Antes de añadir ubicación, áreas servidas, tarifas, horarios, redes sociales o fotografías, confirma los datos directamente con el negocio. El formulario y los enlaces usan el WhatsApp facilitado: +56 9 8987 8687.

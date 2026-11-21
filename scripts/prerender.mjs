import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const distRoot = resolve(projectRoot, "dist");
const serverEntry = resolve(projectRoot, "dist-ssr", "entry-server.js");
const htmlPath = resolve(distRoot, "index.html");

const { render } = await import(pathToFileURL(serverEntry).href);
const html = await readFile(htmlPath, "utf8");
const rootMarker = '<div id="root"></div>';
if (!html.includes(rootMarker)) {
  throw new Error("No se encontró el nodo #root vacío en el HTML generado por Vite.");
}

const renderedApp = render();
if (!renderedApp.includes('id="site-shell"') || !renderedApp.includes('id="servicios"')) {
  throw new Error("El render del servidor no contiene el contenido principal del sitio.");
}
await writeFile(htmlPath, html.replace(rootMarker, `<div id="root">${renderedApp}</div>`));
console.log("Prerender React guardado en dist/index.html");

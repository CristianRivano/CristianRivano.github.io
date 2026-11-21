import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const distRoot = resolve(projectRoot, "dist");
const builtHtml = await readFile(resolve(distRoot, "index.html"));
const publishedAssets = resolve(projectRoot, "assets", "react");

await rm(publishedAssets, { recursive: true, force: true });
await mkdir(publishedAssets, { recursive: true });
await cp(resolve(distRoot, "assets", "react"), publishedAssets, { recursive: true });
await writeFile(resolve(projectRoot, "index.html"), builtHtml);
console.log("GitHub Pages preparado: index.html y assets/react publicados en la raíz.");

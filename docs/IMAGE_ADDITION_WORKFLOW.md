# Workflow para Agregar Imágenes a Artículos

## Proceso Escalable y Eficiente

### Pasos para Agregar una Imagen:

1. **Preparar la imagen:**
   - Coloca la imagen en `public/images/articles/`
   - Nombra el archivo: `blog-post-XX-[slug].png`
   - Ejemplo: `blog-post-09-rv-covers.png`

2. **Notificar al asistente:**
   - Dime el número del artículo (ej: "Article 9")
   - Confirma el nombre del archivo
   - O simplemente di: "Agrega la imagen X para el artículo Y"

3. **El asistente realizará:**
   - Agregará el campo `featuredImage` al artículo en `articles-comprehensive.json`
   - Verificará que el archivo exista
   - Hará commit y push

4. **Verificar:**
   - Espera 1-2 minutos para el deploy en Vercel
   - Verifica en modo incógnito para evitar caché
   - La imagen aparecerá en:
     - Hero del artículo (full-width)
     - Article card en el grid de articles

### Checklist de Artículos:

- [x] Article 8: `blog-post-08-rv-mattress.png` ✅
- [x] Article 23: `blog-post-23-camping-light.png` ✅
- [ ] Article 1: `blog-post-01-berkey-water-filter`
- [ ] Article 2: `blog-post-02-berkey-water-filtration`
- [ ] Article 3: `blog-post-03-berkey-countertop-water-filter`
- [ ] Article 4: `blog-post-04-berkey-water-filter-website`
- [ ] Article 5: `blog-post-05-berkey-water-filter-filters`
- [ ] Article 6: `blog-post-06-rv-accessories`
- [ ] Article 7: `blog-post-07-recreational-vehicle-accessories`
- [ ] Article 9: `blog-post-09-rv-covers`
- [ ] Article 10: `blog-post-10-camping-gear`
- [ ] Article 11: `blog-post-11-rv-queen-mattress`
- [ ] Article 12: `blog-post-12-toy-hauler`
- [ ] Article 13: `blog-post-13-rv-furniture`
- [ ] Article 14: `blog-post-14-rv-parts-near-me`
- [ ] Article 15: `blog-post-15-rv-air-conditioner`
- [ ] Article 16: `blog-post-16-rv-roof-sealant`
- [ ] Article 17: `blog-post-17-5th-wheel`
- [ ] Article 18: `blog-post-18-fifth-wheel`
- [ ] Article 19: `blog-post-19-rv-antifreeze`
- [ ] Article 20: `blog-post-20-camper-queen-mattress`
- [ ] Article 21: `blog-post-21-rv-water-pump`
- [ ] Article 22: `blog-post-22-rv-supplies-near-me`

### Notas Importantes:

- **Nombres de archivos:** Deben seguir el patrón `blog-post-XX-[slug].png`
- **Formato:** PNG recomendado (también funciona JPG, pero PNG es mejor para calidad)
- **Tamaño:** Recomendado 1200x630px o proporción 16:9 para hero images
- **Caché:** Si no aparece inmediatamente, verifica en modo incógnito o limpia la caché
- **Git:** Las imágenes deben estar en Git para desplegarse en Vercel

### Comandos Útiles:

```bash
# Verificar si una imagen existe
ls public/images/articles/blog-post-XX-*.png

# Agregar imagen a Git manualmente (si es necesario)
git add public/images/articles/blog-post-XX-*.png
git commit -m "feat: add image for article XX"
git push origin main
```



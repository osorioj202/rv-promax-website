# Proceso de Publicación de Artículos - Workflow Escalable

## 🎯 Objetivo
Publicar artículos HTML individuales de manera eficiente, escalable y sin errores.

## 📋 Workflow Paso a Paso

### 1️⃣ Preparación del Artículo
- Asegurarse de que el archivo HTML está en `blog/blog_post_{NUMERO}_{keyword}.html`
- Verificar estructura del HTML (metadata en `<head>` y primeros `<hr />`)

### 2️⃣ Procesar el Artículo
```bash
node scripts/process-single-article.js {NUMERO}
```
**Ejemplo:**
```bash
node scripts/process-single-article.js 23
```

El script:
- ✅ Extrae metadata (title, description, keyword, searches, word count)
- ✅ Extrae productos y enlaces de Amazon
- ✅ Limpia y formatea el HTML
- ✅ Agrega clases CSS necesarias
- ✅ Actualiza `src/lib/articles-comprehensive.json`

### 3️⃣ Verificar Compilación
```bash
npm run build
```
- Si hay errores, corregirlos antes de continuar

### 4️⃣ Verificar Productos Extraídos
```bash
node -e "const data = require('./src/lib/articles-comprehensive.json'); const art = data.find(a => a.slug.includes('blog-post-{NUMERO}')); console.log(JSON.stringify(art.products, null, 2));"
```

### 5️⃣ Deploy
```bash
git add .
git commit -m "feat: add article {NUMERO} - {TOPIC}"
git push
```

### 6️⃣ Verificación Post-Deploy
- Verificar en producción: `https://tu-sitio.com/articles/blog-post-{NUMERO}-{keyword}`
- Verificar productos y enlaces de afiliados
- Verificar responsive design

## 🔧 Troubleshooting

### Productos no se extraen correctamente
**Problema:** El patrón regex no captura todos los productos.

**Solución:** Verificar estructura HTML:
- Cada producto debe tener: `<h3>{N}. <strong>Nombre – Badge</strong></h3>`
- Dentro de cada bloque debe haber: `<strong>Price:</strong>` y enlace de Amazon

### Enlaces de afiliados incorrectos
**Problema:** Enlaces apuntan a productos equivocados.

**Solución:** 
1. Verificar HTML original
2. Probar enlaces manualmente
3. Corregir en el JSON si es necesario
4. Re-procesar: `node scripts/process-single-article.js {NUMERO}`

### Error de compilación
**Problema:** Build falla con JSON inválido.

**Solución:**
1. Verificar JSON con: `node -e "JSON.parse(require('fs').readFileSync('src/lib/articles-comprehensive.json'))"`
2. Corregir JSON manualmente si es necesario
3. Volver a hacer build

## 📦 Estructura del Processor Script

### Funciones Principales

#### `extractMetadata(htmlContent)`
Extrae del HTML:
- Title
- Meta description
- Target keyword
- Monthly searches
- Word count
- Post number

#### `extractProducts(htmlContent)`
Extrae productos:
- Patrón: `<h3>{N}. <strong>Nombre – Badge</strong></h3>`
- Busca: Precio, enlace Amazon, descripción
- Retorna: Array de productos con estructura completa

#### `cleanHtmlContent(htmlContent)`
- Remueve tags de metadata
- Agrega clases CSS
- Formatea para renderizado

#### `convertHtmlToJson(htmlContent, filename)`
Combina todo y genera el objeto JSON final

## 🚀 Escalabilidad

### Para 100+ Artículos:
1. **Batch Processing** (próxima mejora):
   ```bash
   node scripts/process-multiple-articles.js 24 25 26 27 28
   ```

2. **Validación Automática**:
   - Verificar que todos los productos tengan enlaces
   - Verificar que precios sean válidos
   - Validar estructura JSON

3. **Testing**:
   - Snapshots de renders
   - Validación de enlaces
   - Performance testing

## 📊 Checklist Pre-Deploy

- [ ] Script ejecutado exitosamente
- [ ] Build compila sin errores
- [ ] Productos extraídos correctamente
- [ ] Enlaces de afiliados verificados
- [ ] Metadata completa
- [ ] Commit message descriptivo
- [ ] Push exitoso

## 🎓 Ejemplos de Uso

### Artículo simple (5 productos)
```bash
node scripts/process-single-article.js 23
npm run build
git add . && git commit -m "feat: add article 23 - camping lights" && git push
```

### Re-procesar artículo existente
```bash
# Corregir HTML primero
node scripts/process-single-article.js 8  # Sobrescribe artículo 8
npm run build
git add . && git commit -m "fix: update article 8" && git push
```

## 🔍 Debugging

### Ver contenido extraído
```bash
node -e "const fs = require('fs'); const html = fs.readFileSync('blog/blog_post_23_camping_light.html', 'utf8'); const processor = require('./scripts/process-single-article.js'); console.log(JSON.stringify(processor.convertHtmlToJson(html, 'blog_post_23.html'), null, 2));"
```

### Ver productos específicos
```bash
node -e "const data = require('./src/lib/articles-comprehensive.json'); data.filter(a => a.slug.includes('camping')).forEach(a => console.log(a.slug, ':', a.products.length, 'products'));"
```

## 📝 Notas Importantes

1. **El script actualiza artículos existentes**, no los duplica
2. **Los productos se ordenan por número** (Top Pick, Premium, etc.)
3. **El precio se guarda sin símbolo $** (se agrega en el frontend)
4. **Los em dashes (–) se detectan automáticamente**
5. **El contenido se limpia automáticamente** de metadata

## 🎯 Próximas Mejoras

- [ ] Batch processing para múltiples artículos
- [ ] Validación automática de enlaces de Amazon
- [ ] Detección automática de imágenes
- [ ] Generación automática de excerpts
- [ ] Testing automatizado
- [ ] CI/CD integration


const fs = require('fs');
const path = require('path');

/**
 * PROCESADOR DE ARTÍCULOS HTML A JSON
 * Procesa un artículo HTML individual y lo convierte al formato JSON del sitio
 */

function extractMetadata(htmlContent) {
    const title = htmlContent.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || '';
    const metaDesc = htmlContent.match(/meta_description:\s*(.*?)(?:\n|$)/i)?.[1]?.trim() || '';
    const keyword = htmlContent.match(/target_keyword:\s*(.*?)(?:\n|$)/i)?.[1]?.trim() || '';
    const searches = htmlContent.match(/monthly_searches:\s*(\d+)/i)?.[1] || '0';
    const wordCount = htmlContent.match(/word_count:\s*([\d,]+)/i)?.[1]?.replace(/,/g, '') || '0';
    const postNumber = htmlContent.match(/post_number:\s*(\d+)/i)?.[1] || '';
    
    return {
        title,
        metaDescription: metaDesc,
        targetKeyword: keyword,
        monthlySearches: parseInt(searches),
        wordCount: parseInt(wordCount),
        postNumber
    };
}

function extractProducts(htmlContent) {
    const products = [];
    
    // Buscar todas las instancias de productos con sus enlaces de Amazon
    // Patrón simplificado: captura todo el contenido de <strong>
    const productPattern = /<h3>(\d+)\.\s+<strong>(.*?)<\/strong><\/h3>([\s\S]*?)(?=<hr|<h3>)/gi;
    const productMatches = [...htmlContent.matchAll(productPattern)];
    
    productMatches.forEach((match, index) => {
        const num = match[1];
        const fullText = match[2]?.trim();
        const contentSection = match[3];
        
        // Separar nombre y badge (pueden estar juntos separados por –)
        // Usamos el ÚLTIMO em dash como separador
        const lastDashIdx = fullText.lastIndexOf('–');
        let productName = fullText;
        let badge = '';
        if (lastDashIdx !== -1) {
            productName = fullText.substring(0, lastDashIdx).trim();
            badge = fullText.substring(lastDashIdx + 1).trim();
        }
        
        // Buscar precio
        const priceMatch = contentSection.match(/<strong>Price:<\/strong>\s*\$?([^<\n]+)/i);
        const price = priceMatch ? priceMatch[1].trim() : '';
        
        // Buscar enlace de Amazon
        const amazonLink = contentSection.match(/<a href="(https:\/\/www\.amazon\.com\/[^"]+)">/i)?.[1];
        
        if (productName && amazonLink) {
            products.push({
                name: productName,
                url: amazonLink,
                badge: badge || (index === 0 ? 'Top Pick' : index === 1 ? 'Premium' : 'Best Value'),
                price: price,
                description: '' // Se puede extraer después si es necesario
            });
        }
    });
    
    return products;
}

function cleanHtmlContent(htmlContent) {
    // Remover DOCTYPE, HTML, HEAD, BODY tags
    let content = htmlContent
        .replace(/<!DOCTYPE[^>]*>/gi, '')
        .replace(/<html[^>]*>/gi, '')
        .replace(/<\/html>/gi, '')
        .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
        .replace(/<body[^>]*>/gi, '')
        .replace(/<\/body>/gi, '');
    
    // Remover la sección de metadata (entre los dos primeros <hr />)
    const hrMatches = content.match(/<hr\s*\/?>/g);
    if (hrMatches && hrMatches.length >= 2) {
        const firstHrIndex = content.indexOf('<hr');
        const secondHrIndex = content.indexOf('<hr', firstHrIndex + 1);
        if (secondHrIndex !== -1) {
            content = content.substring(secondHrIndex);
        }
    }
    
    // Agregar clases CSS a elementos HTML
    content = content
        .replace(/<h1>([^<]+)<\/h1>/, '<h1 class="main-title">$1</h1>')
        .replace(/<h1>([^<]+)<\/h1>/, '<h1 class="subtitle">$1</h1>') // Segundo h1
        .replace(/<h2>([^<]+)<\/h2>/g, '<h2 class="section-heading">$1</h2>')
        .replace(/<h3>([^<]+)<\/h3>/g, '<h3 class="subsection-heading">$1</h3>')
        .replace(/<p>([^<]+)<\/p>/g, '<p class="article-paragraph">$1</p>')
        .replace(/<ul>/g, '<ul class="article-list">')
        .replace(/<ol>/g, '<ol class="article-list">')
        .replace(/<li>/g, '<li class="article-list-item">')
        .replace(/<table>/g, '<table class="article-table">')
        .replace(/<th>/g, '<th class="table-header">')
        .replace(/<td>/g, '<td class="table-cell">')
        .replace(/<a href="([^"]+)"(?! class="article-link")>/g, '<a href="$1" class="article-link">')
        .replace(/<blockquote>/g, '<blockquote class="article-blockquote">')
        .replace(/<code>/g, '<code class="article-code">');
    
    return content.trim();
}

function convertHtmlToJson(htmlContent, filename) {
    const metadata = extractMetadata(htmlContent);
    const products = extractProducts(htmlContent);
    const cleanContent = cleanHtmlContent(htmlContent);
    
    // Generar slug del nombre del archivo
    const slug = filename.replace('.html', '').replace(/_/g, '-');
    
    return {
        slug,
        title: metadata.title.replace('| Expert Reviews & Buying Tips 2025', '').trim(),
        targetKeyword: metadata.targetKeyword,
        monthlySearches: metadata.monthlySearches,
        category: 'RV & Camping',
        metaDescription: metadata.metaDescription,
        publishedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        wordCount: metadata.wordCount,
        products,
        content: cleanContent
    };
}

function processSingleArticle(articleNumber) {
    console.log(`🚀 Procesando artículo ${articleNumber}...\n`);
    
    const blogDir = path.join(__dirname, '..', 'blog');
    const outputFile = path.join(__dirname, '..', 'src', 'lib', 'articles-comprehensive.json');
    
    try {
        // Buscar archivo del artículo
        const files = fs.readdirSync(blogDir).filter(file => 
            file.startsWith(`blog_post_${articleNumber}_`) && file.endsWith('.html')
        );
        
        if (files.length === 0) {
            console.error(`❌ No se encontró archivo para el artículo ${articleNumber}`);
            return null;
        }
        
        const filename = files[0];
        const filePath = path.join(blogDir, filename);
        
        console.log(`📄 Archivo encontrado: ${filename}`);
        
        // Leer y procesar HTML
        const htmlContent = fs.readFileSync(filePath, 'utf8');
        const articleData = convertHtmlToJson(htmlContent, filename);
        
        console.log(`✅ Artículo procesado: ${articleData.title}`);
        console.log(`📦 Productos extraídos: ${articleData.products.length}`);
        
        // Cargar artículos existentes
        let articles = [];
        if (fs.existsSync(outputFile)) {
            const existingData = fs.readFileSync(outputFile, 'utf8');
            articles = JSON.parse(existingData);
        }
        
        // Verificar si el artículo ya existe
        const existingIndex = articles.findIndex(a => a.slug === articleData.slug);
        if (existingIndex !== -1) {
            console.log(`⚠️  El artículo ya existe. Actualizando...`);
            articles[existingIndex] = articleData;
        } else {
            console.log(`➕ Agregando nuevo artículo...`);
            articles.push(articleData);
        }
        
        // Ordenar artículos por número de post (si existe)
        articles.sort((a, b) => {
            const numA = parseInt(a.slug.match(/blog-post-(\d+)/)?.[1] || '0');
            const numB = parseInt(b.slug.match(/blog-post-(\d+)/)?.[1] || '0');
            return numA - numB;
        });
        
        // Guardar archivo
        fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
        
        console.log(`\n🎉 ¡Proceso completado!`);
        console.log(`📊 Total de artículos en el sistema: ${articles.length}`);
        console.log(`💾 Guardado en: ${outputFile}`);
        console.log(`\n📋 Próximos pasos:`);
        console.log(`1. Verifica el resultado en local: npm run dev`);
        console.log(`2. Revisa los enlaces de afiliados de Amazon`);
        console.log(`3. Haz commit y push: git commit -am "feat: agregar artículo ${articleNumber}"`);
        
        return articleData;
        
    } catch (error) {
        console.error('❌ Error durante el procesamiento:', error.message);
        console.error(error.stack);
        return null;
    }
}

// Ejecutar si se llama directamente
if (require.main === module) {
    const articleNumber = process.argv[2];
    
    if (!articleNumber) {
        console.error('❌ Error: Debes especificar el número del artículo');
        console.log('📝 Uso: node scripts/process-single-article.js 23');
        process.exit(1);
    }
    
    processSingleArticle(articleNumber);
}

module.exports = { processSingleArticle, convertHtmlToJson };


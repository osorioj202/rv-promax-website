const fs = require('fs');
const path = require('path');

// Amazon Associates Configuration
// These are placeholder values for Amazon Associates application
// You'll get your actual values after Amazon approves your application
const AMAZON_ASSOCIATE_ID = 'rvpromax-20'; // This will be your actual Associate ID after approval
const AMAZON_TAG = 'rvpromax-20'; // This will be your actual Amazon tag after approval

// Real Berkey Product Database with ASINs
const BERKEY_PRODUCTS = {
  'big-berkey': {
    asin: 'B001QW1B5E',
    name: 'Big Berkey Water Filter System',
    price: '$280 - $320',
    description: '2.25-gallon capacity, removes viruses, bacteria, heavy metals, chlorine, and VOCs. Compact and durable.'
  },
  'travel-berkey': {
    asin: 'B001QW1B5E', // Same as Big Berkey for now - you'll need to find the actual Travel Berkey ASIN
    name: 'Travel Berkey Water Filter System',
    price: '$250 - $280',
    description: '1.5-gallon capacity, lightweight, perfect for solo travelers or couples. Easy to pack and store.'
  },
  'royal-berkey': {
    asin: 'B001QW1B5E', // Same as Big Berkey for now - you'll need to find the actual Royal Berkey ASIN
    name: 'Royal Berkey Water Filter System',
    price: '$350 - $400',
    description: '3.25-gallon capacity, ideal for families or groups, excellent filtration performance.'
  },
  'crown-berkey': {
    asin: 'B001QW1B5E', // Same as Big Berkey for now - you'll need to find the actual Crown Berkey ASIN
    name: 'Crown Berkey Water Filter System',
    price: '$400+',
    description: '6-gallon capacity, best for large groups or extended trips, robust stainless steel construction.'
  },
  'pf2-filters': {
    asin: 'B001QW1B5E', // You'll need to find the actual PF-2 filters ASIN
    name: 'Berkey PF-2 Fluoride and Arsenic Reduction Filters (Pair)',
    price: '$90 - $110',
    description: 'Add-on filters to reduce fluoride, arsenic, and other heavy metals. Compatible with all Black Berkey elements.'
  },
  'pre-filter': {
    asin: 'B001QW1B5E', // You'll need to find the actual pre-filter ASIN
    name: 'Berkey Pre-Filter Element',
    price: '$40 - $50',
    description: 'Removes sediment and large particles before water enters Black Berkey elements, extends filter life.'
  },
  'travel-case': {
    asin: 'B001QW1B5E', // You'll need to find the actual travel case ASIN
    name: 'Berkey Stainless Steel Travel Case',
    price: '$60 - $80',
    description: 'Durable case for Travel Berkey, protects filter during transport and storage.'
  }
};

// Function to create Amazon Associates link
function createAmazonLink(asin, searchTerm = '') {
  const baseUrl = searchTerm 
    ? `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`
    : `https://www.amazon.com/dp/${asin}`;
  
  // For Amazon Associates application, use standard format
  // After approval, you'll get your actual tag and can update these values
  return `${baseUrl}?tag=${AMAZON_TAG}&linkCode=ur2&linkId=${AMAZON_ASSOCIATE_ID}`;
}

// Function to extract metadata from HTML content
function extractMetadata(htmlContent) {
    // Extract title from <title> tag
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled Article';
    
    // Extract meta description from the content
    const metaDescMatch = htmlContent.match(/meta_description:\s*(.*?)(?:\n|$)/i);
    const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : '';
    
    // Extract target keyword
    const keywordMatch = htmlContent.match(/target_keyword:\s*(.*?)(?:\n|$)/i);
    const targetKeyword = keywordMatch ? keywordMatch[1].trim() : '';
    
    // Extract monthly searches
    const searchesMatch = htmlContent.match(/monthly_searches:\s*(\d+)/i);
    const monthlySearches = searchesMatch ? parseInt(searchesMatch[1]) : 0;
    
    // Extract word count
    const wordCountMatch = htmlContent.match(/word_count:\s*([\d,]+)/i);
    const wordCount = wordCountMatch ? parseInt(wordCountMatch[1].replace(/,/g, '')) : 0;
    
    // Extract affiliate products and convert to proper product objects
    const productsMatch = htmlContent.match(/affiliate_products:\s*(.*?)(?:\n|$)/i);
    const products = productsMatch ? productsMatch[1].split(',').map((p, index) => {
        const productName = p.trim();
        let productKey = 'big-berkey'; // default
        
        // Map product names to our product database keys
        if (productName.toLowerCase().includes('top-rated')) productKey = 'big-berkey';
        else if (productName.toLowerCase().includes('professional')) productKey = 'pf2-filters';
        else if (productName.toLowerCase().includes('budget-friendly')) productKey = 'travel-berkey';
        else if (productName.toLowerCase().includes('premium')) productKey = 'royal-berkey';
        else if (productName.toLowerCase().includes('installation')) productKey = 'pre-filter';
        
        const product = BERKEY_PRODUCTS[productKey];
        
        return {
            name: product.name,
            url: createAmazonLink(product.asin),
            badge: index === 0 ? 'Top Pick' : index === 1 ? 'Premium' : 'Best Value',
            price: product.price,
            description: product.description
        };
    }) : [];
    
    return {
        title,
        metaDescription,
        targetKeyword,
        monthlySearches,
        wordCount,
        products
    };
}

// Function to clean HTML content and extract the main article body
function cleanHtmlContent(htmlContent) {
    // Remove the <!DOCTYPE>, <html>, <head>, and <body> tags
    let content = htmlContent
        .replace(/<!DOCTYPE[^>]*>/gi, '')
        .replace(/<html[^>]*>/gi, '')
        .replace(/<\/html>/gi, '')
        .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
        .replace(/<body[^>]*>/gi, '')
        .replace(/<\/body>/gi, '');
    
    // Remove the metadata section (everything between the first two <hr /> tags)
    const hrMatches = content.match(/<hr\s*\/?>/g);
    if (hrMatches && hrMatches.length >= 2) {
        const firstHrIndex = content.indexOf('<hr');
        const secondHrIndex = content.indexOf('<hr', firstHrIndex + 1);
        if (secondHrIndex !== -1) {
            content = content.substring(secondHrIndex);
        }
    }
    
    // Add Amazon Associates disclaimer before the last <hr />
    const lastHrIndex = content.lastIndexOf('<hr');
    if (lastHrIndex !== -1) {
        const disclaimer = `
<div class="amazon-disclaimer" style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 30px 0; font-size: 14px; color: #6c757d;">
    <h4 style="color: #495057; margin-top: 0; margin-bottom: 15px;">📝 Disclosure</h4>
    <p style="margin-bottom: 10px;"><strong>As an Amazon Associate, I earn from qualifying purchases.</strong> This means that if you click on an Amazon link on this site and make a purchase, I may receive a small commission at no extra cost to you.</p>
    <p style="margin-bottom: 0;">I only recommend products that I genuinely believe will be helpful to RV owners and camping enthusiasts. Your support helps keep this site running and allows me to continue providing valuable content.</p>
</div>`;
        content = content.substring(0, lastHrIndex) + disclaimer + content.substring(lastHrIndex);
    }
    
    // Replace Amazon links with proper affiliate links
    content = content
        .replace(/<a href="https:\/\/www\.amazon\.com\/dp\/B001QW1B5E">View on Amazon<\/a>/g, (match, offset, string) => {
            // Find which product this link belongs to based on context
            const beforeText = string.substring(Math.max(0, offset - 200), offset);
            if (beforeText.includes('Big Berkey')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['big-berkey'].asin)}" class="article-link">View on Amazon</a>`;
            } else if (beforeText.includes('Travel Berkey')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['travel-berkey'].asin)}" class="article-link">View on Amazon</a>`;
            } else if (beforeText.includes('Royal Berkey')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['royal-berkey'].asin)}" class="article-link">View on Amazon</a>`;
            } else if (beforeText.includes('Crown Berkey')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['crown-berkey'].asin)}" class="article-link">View on Amazon</a>`;
            } else if (beforeText.includes('PF-2') || beforeText.includes('Fluoride')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['pf2-filters'].asin)}" class="article-link">View on Amazon</a>`;
            } else if (beforeText.includes('Pre-Filter')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['pre-filter'].asin)}" class="article-link">View on Amazon</a>`;
            } else if (beforeText.includes('Travel Case')) {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['travel-case'].asin)}" class="article-link">View on Amazon</a>`;
            } else {
                return `<a href="${createAmazonLink(BERKEY_PRODUCTS['big-berkey'].asin)}" class="article-link">View on Amazon</a>`;
            }
        })
        .replace(/<a href="https:\/\/www\.amazon\.com\/s\?k=berkey\+water\+filter">Shop Berkey Water Filters on Amazon Now<\/a>/g, 
            `<a href="${createAmazonLink('', 'berkey water filter')}" class="article-link">Shop Berkey Water Filters on Amazon Now</a>`);

    // Add CSS classes to HTML elements
    content = content
        // Add class to first h1 (main title)
        .replace(/<h1>([^<]+)<\/h1>/, '<h1 class="main-title">$1</h1>')
        // Add class to second h1 (subtitle)
        .replace(/<h1>([^<]+)<\/h1>/, '<h1 class="subtitle">$1</h1>')
        // Add classes to h2 headings
        .replace(/<h2>([^<]+)<\/h2>/g, '<h2 class="section-heading">$1</h2>')
        // Add classes to h3 headings
        .replace(/<h3>([^<]+)<\/h3>/g, '<h3 class="subsection-heading">$1</h3>')
        // Add classes to paragraphs
        .replace(/<p>([^<]+)<\/p>/g, '<p class="article-paragraph">$1</p>')
        // Add classes to lists
        .replace(/<ul>/g, '<ul class="article-list">')
        .replace(/<ol>/g, '<ol class="article-list">')
        .replace(/<li>/g, '<li class="article-list-item">')
        // Add classes to tables
        .replace(/<table>/g, '<table class="article-table">')
        .replace(/<th>/g, '<th class="table-header">')
        .replace(/<td>/g, '<td class="table-cell">')
        // Add classes to links (but preserve existing class="article-link")
        .replace(/<a href="([^"]+)"(?! class="article-link")>/g, '<a href="$1" class="article-link">')
        // Add classes to blockquotes
        .replace(/<blockquote>/g, '<blockquote class="article-blockquote">')
        // Add classes to code
        .replace(/<code>/g, '<code class="article-code">');
    
    return content.trim();
}

// Function to convert HTML article to JSON format
function convertHtmlToJson(htmlContent, filename) {
    const metadata = extractMetadata(htmlContent);
    const cleanContent = cleanHtmlContent(htmlContent);
    
    // Generate slug from filename
    const slug = filename.replace('.html', '').replace(/_/g, '-');
    
    return {
        slug,
        title: metadata.title,
        targetKeyword: metadata.targetKeyword,
        monthlySearches: metadata.monthlySearches,
        category: 'RV & Camping',
        metaDescription: metadata.metaDescription,
        publishedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        wordCount: metadata.wordCount,
        products: metadata.products,
        content: cleanContent
    };
}

// Main conversion function
async function convertAllHtmlArticles() {
    const blogDir = path.join(__dirname, '..', 'blog');
    const outputFile = path.join(__dirname, '..', 'src', 'lib', 'articles-comprehensive.json');
    
    console.log('🚀 Starting conversion of HTML blog articles to JSON format...');
    
    try {
        // Check if blog directory exists
        if (!fs.existsSync(blogDir)) {
            console.log('📁 Blog directory not found.');
            return;
        }
        
        const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.html'));
        console.log(`📄 Found ${files.length} HTML files to process`);
        
        if (files.length === 0) {
            console.log('📝 No HTML files found. Creating empty articles array.');
            fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
            return;
        }
        
        // Process articles 11-20 (next 10 articles)
        const filesToProcess = files.filter(file => {
            const match = file.match(/blog_post_(\d+)_/);
            if (match) {
                const num = parseInt(match[1]);
                return num >= 11 && num <= 20;
            }
            return false;
        });
        
        // Load existing articles
        let articles = [];
        if (fs.existsSync(outputFile)) {
            try {
                const existingData = fs.readFileSync(outputFile, 'utf8');
                articles = JSON.parse(existingData);
                console.log(`📚 Loaded ${articles.length} existing articles`);
            } catch (error) {
                console.log('📝 No existing articles found, starting fresh');
                articles = [];
            }
        }
        
        for (const file of filesToProcess) {
            const filePath = path.join(blogDir, file);
            
            console.log(`📄 Processing: ${file}`);
            
            try {
                const htmlContent = fs.readFileSync(filePath, 'utf8');
                const articleData = convertHtmlToJson(htmlContent, file);
                articles.push(articleData);
                
                console.log(`✅ Converted: ${articleData.title}`);
            } catch (error) {
                console.error(`❌ Error processing ${file}:`, error.message);
            }
        }
        
        // Write the comprehensive articles file
        fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
        
        console.log(`\n🎉 Conversion complete!`);
        console.log(`📊 Processed ${articles.length} articles`);
        console.log(`💾 Saved to: ${outputFile}`);
        console.log(`\n📋 Next steps:`);
        console.log(`1. Check the website to see the styled articles`);
        console.log(`2. Run this script again to process more articles`);
        
    } catch (error) {
        console.error('❌ Error during conversion:', error);
    }
}

// Run the conversion
if (require.main === module) {
    convertAllHtmlArticles();
}

module.exports = { convertAllHtmlArticles, convertHtmlToJson };

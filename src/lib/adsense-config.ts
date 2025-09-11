// src/lib/adsense-config.ts
// Configuración centralizada para Google AdSense
// 🔁 Cambia estos valores por tus códigos reales cuando los tengas

export const ADSENSE_CONFIG = {
  // Tu Publisher ID de AdSense (ej: ca-pub-1234567890123456)
  PUBLISHER_ID: 'ca-pub-YOUR_PUBLISHER_ID',
  
  // IDs de slots de anuncios
  SLOTS: {
    // Anuncio en el header de la página
    HEADER: 'YOUR_HEADER_AD_SLOT_ID',
    
    // Anuncio después del contenido del artículo
    ARTICLE_CONTENT: 'YOUR_ARTICLE_CONTENT_AD_SLOT_ID',
    
    // Anuncio después de los productos
    PRODUCTS: 'YOUR_PRODUCTS_AD_SLOT_ID',
    
    // Anuncio en la barra lateral
    SIDEBAR: 'YOUR_SIDEBAR_AD_SLOT_ID',
    
    // Anuncio en el footer
    FOOTER: 'YOUR_FOOTER_AD_SLOT_ID',
    
    // Anuncio en la página principal
    HOME: 'YOUR_HOME_AD_SLOT_ID',
    
    // Anuncio en páginas de categoría
    CATEGORY: 'YOUR_CATEGORY_AD_SLOT_ID',
  },
  
  // Configuración de anuncios por tipo de página
  PAGE_ADS: {
    home: [
      { slot: 'HOME', position: 'after-hero' },
      { slot: 'HOME', position: 'after-categories' },
    ],
    article: [
      { slot: 'ARTICLE_CONTENT', position: 'after-content' },
      { slot: 'PRODUCTS', position: 'after-products' },
    ],
    category: [
      { slot: 'CATEGORY', position: 'after-products' },
      { slot: 'CATEGORY', position: 'after-content' },
    ],
  },
  
  // Configuración de anuncios responsivos
  RESPONSIVE: {
    mobile: {
      maxWidth: '100%',
      height: 'auto',
    },
    tablet: {
      maxWidth: '728px',
      height: '90px',
    },
    desktop: {
      maxWidth: '728px',
      height: '90px',
    },
  },
  
  // Configuración de anuncios de texto
  TEXT_ADS: {
    enabled: true,
    maxAds: 3,
    style: {
      backgroundColor: '#f8f9fa',
      borderColor: '#dee2e6',
      textColor: '#495057',
      titleColor: '#212529',
      urlColor: '#6c757d',
    },
  },
  
  // Configuración de anuncios de display
  DISPLAY_ADS: {
    enabled: true,
    formats: ['auto', 'fluid', 'rectangle'],
    responsive: true,
  },
  
  // Configuración de anuncios de video
  VIDEO_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios de video
    autoplay: false,
    muted: true,
  },
  
  // Configuración de anuncios de búsqueda
  SEARCH_ADS: {
    enabled: false, // Cambia a true si planeas usar AdSense para búsqueda
    searchBoxId: 'search-box',
  },
  
  // Configuración de anuncios de contenido
  CONTENT_ADS: {
    enabled: true,
    maxAds: 2,
    minWords: 200, // Mínimo de palabras antes de mostrar un anuncio
    spacing: 'paragraph', // 'paragraph', 'section', 'custom'
  },
  
  // Configuración de anuncios de navegación
  NAVIGATION_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios de navegación
    position: 'top',
  },
  
  // Configuración de anuncios de comentarios
  COMMENTS_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en comentarios
    position: 'after-comments',
  },
  
  // Configuración de anuncios de productos
  PRODUCT_ADS: {
    enabled: true,
    position: 'after-product-list',
    maxAds: 1,
  },
  
  // Configuración de anuncios de categorías
  CATEGORY_ADS: {
    enabled: true,
    position: 'after-category-description',
    maxAds: 1,
  },
  
  // Configuración de anuncios de artículos relacionados
  RELATED_ARTICLES_ADS: {
    enabled: true,
    position: 'after-related-articles',
    maxAds: 1,
  },
  
  // Configuración de anuncios de breadcrumbs
  BREADCRUMB_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en breadcrumbs
    position: 'after-breadcrumbs',
  },
  
  // Configuración de anuncios de meta información
  META_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en meta información
    position: 'after-meta',
  },
  
  // Configuración de anuncios de disclosure
  DISCLOSURE_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en disclosure
    position: 'after-disclosure',
  },
  
  // Configuración de anuncios de navegación de artículos
  ARTICLE_NAVIGATION_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en navegación de artículos
    position: 'after-navigation',
  },
  
  // Configuración de anuncios de paginación
  PAGINATION_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en paginación
    position: 'after-pagination',
  },
  
  // Configuración de anuncios de búsqueda de artículos
  ARTICLE_SEARCH_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en búsqueda de artículos
    position: 'after-search-results',
  },
  
  // Configuración de anuncios de filtros
  FILTER_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en filtros
    position: 'after-filters',
  },
  
  // Configuración de anuncios de ordenamiento
  SORTING_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en ordenamiento
    position: 'after-sorting',
  },
  
  // Configuración de anuncios de resultados
  RESULTS_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en resultados
    position: 'after-results',
  },
  
  // Configuración de anuncios de paginación de resultados
  RESULTS_PAGINATION_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en paginación de resultados
    position: 'after-results-pagination',
  },
  
  // Configuración de anuncios de búsqueda de productos
  PRODUCT_SEARCH_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en búsqueda de productos
    position: 'after-product-search-results',
  },
  
  // Configuración de anuncios de filtros de productos
  PRODUCT_FILTER_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en filtros de productos
    position: 'after-product-filters',
  },
  
  // Configuración de anuncios de ordenamiento de productos
  PRODUCT_SORTING_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en ordenamiento de productos
    position: 'after-product-sorting',
  },
  
  // Configuración de anuncios de resultados de productos
  PRODUCT_RESULTS_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en resultados de productos
    position: 'after-product-results',
  },
  
  // Configuración de anuncios de paginación de productos
  PRODUCT_PAGINATION_ADS: {
    enabled: false, // Cambia a true si planeas usar anuncios en paginación de productos
    position: 'after-product-pagination',
  },
};

// Función helper para obtener la configuración de anuncios por página
export function getPageAds(pageType: keyof typeof ADSENSE_CONFIG.PAGE_ADS) {
  return ADSENSE_CONFIG.PAGE_ADS[pageType] || [];
}

// Función helper para obtener la configuración de un slot específico
export function getSlotConfig(slotKey: keyof typeof ADSENSE_CONFIG.SLOTS) {
  return {
    client: ADSENSE_CONFIG.PUBLISHER_ID,
    slot: ADSENSE_CONFIG.SLOTS[slotKey],
  };
}

// Función helper para verificar si AdSense está habilitado
export function isAdSenseEnabled() {
  return ADSENSE_CONFIG.PUBLISHER_ID !== 'ca-pub-YOUR_PUBLISHER_ID';
}

// Función helper para obtener anuncios por posición
export function getAdsByPosition(pageType: string, position: string) {
  const pageAds = ADSENSE_CONFIG.PAGE_ADS[pageType as keyof typeof ADSENSE_CONFIG.PAGE_ADS];
  if (!pageAds) return [];
  
  return pageAds.filter(ad => ad.position === position);
}

// Función helper para obtener anuncios por tipo
export function getAdsByType(type: keyof typeof ADSENSE_CONFIG) {
  return ADSENSE_CONFIG[type];
}

// Función helper para obtener anuncios por formato
export function getAdsByFormat(format: string) {
  return ADSENSE_CONFIG.DISPLAY_ADS.formats.includes(format as any);
}

// Función helper para obtener anuncios por responsividad
export function getAdsByResponsiveness(responsive: boolean) {
  return ADSENSE_CONFIG.DISPLAY_ADS.responsive === responsive;
}

// Función helper para obtener anuncios por habilitación
export function getAdsByEnabled(enabled: boolean) {
  return Object.entries(ADSENSE_CONFIG)
    .filter(([key, value]) => typeof value === 'object' && value.enabled === enabled)
    .map(([key]) => key);
}

// Función helper para obtener anuncios por posición personalizada
export function getAdsByCustomPosition(position: string) {
  return Object.entries(ADSENSE_CONFIG)
    .filter(([key, value]) => typeof value === 'object' && value.position === position)
    .map(([key]) => key);
}

// Función helper para obtener anuncios por tipo de página
export function getAdsByPageType(pageType: string) {
  return ADSENSE_CONFIG.PAGE_ADS[pageType as keyof typeof ADSENSE_CONFIG.PAGE_ADS] || [];
}

// Función helper para obtener anuncios por tipo de contenido
export function getAdsByContentType(contentType: string) {
  return Object.entries(ADSENSE_CONFIG)
    .filter(([key, value]) => typeof value === 'object' && value.enabled && key.includes(contentType))
    .map(([key]) => key);
}

// Función helper para obtener anuncios por tipo de anuncio
export function getAdsByAdType(adType: string) {
  return Object.entries(ADSENSE_CONFIG)
    .filter(([key, value]) => typeof value === 'object' && value.enabled && key.includes(adType))
    .map(([key]) => key);
}

// Función helper para obtener anuncios por tipo de dispositivo
export function getAdsByDeviceType(deviceType: keyof typeof ADSENSE_CONFIG.RESPONSIVE) {
  return ADSENSE_CONFIG.RESPONSIVE[deviceType];
}

// Función helper para obtener anuncios por tipo de pantalla
export function getAdsByScreenType(screenType: string) {
  return Object.entries(ADSENSE_CONFIG.RESPONSIVE)
    .filter(([key, value]) => key.includes(screenType))
    .map(([key, value]) => ({ type: key, config: value }));
}

// Función helper para obtener anuncios por tipo de anuncio de texto
export function getTextAds() {
  return ADSENSE_CONFIG.TEXT_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de display
export function getDisplayAds() {
  return ADSENSE_CONFIG.DISPLAY_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de video
export function getVideoAds() {
  return ADSENSE_CONFIG.VIDEO_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de búsqueda
export function getSearchAds() {
  return ADSENSE_CONFIG.SEARCH_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de contenido
export function getContentAds() {
  return ADSENSE_CONFIG.CONTENT_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de navegación
export function getNavigationAds() {
  return ADSENSE_CONFIG.NAVIGATION_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de comentarios
export function getCommentsAds() {
  return ADSENSE_CONFIG.COMMENTS_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de productos
export function getProductAds() {
  return ADSENSE_CONFIG.PRODUCT_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de categorías
export function getCategoryAds() {
  return ADSENSE_CONFIG.CATEGORY_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de artículos relacionados
export function getRelatedArticlesAds() {
  return ADSENSE_CONFIG.RELATED_ARTICLES_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de breadcrumbs
export function getBreadcrumbAds() {
  return ADSENSE_CONFIG.BREADCRUMB_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de meta información
export function getMetaAds() {
  return ADSENSE_CONFIG.META_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de disclosure
export function getDisclosureAds() {
  return ADSENSE_CONFIG.DISCLOSURE_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de navegación de artículos
export function getArticleNavigationAds() {
  return ADSENSE_CONFIG.ARTICLE_NAVIGATION_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de paginación
export function getPaginationAds() {
  return ADSENSE_CONFIG.PAGINATION_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de búsqueda de artículos
export function getArticleSearchAds() {
  return ADSENSE_CONFIG.ARTICLE_SEARCH_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de filtros
export function getFilterAds() {
  return ADSENSE_CONFIG.FILTER_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de ordenamiento
export function getSortingAds() {
  return ADSENSE_CONFIG.SORTING_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de resultados
export function getResultsAds() {
  return ADSENSE_CONFIG.RESULTS_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de paginación de resultados
export function getResultsPaginationAds() {
  return ADSENSE_CONFIG.RESULTS_PAGINATION_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de búsqueda de productos
export function getProductSearchAds() {
  return ADSENSE_CONFIG.PRODUCT_SEARCH_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de filtros de productos
export function getProductFilterAds() {
  return ADSENSE_CONFIG.PRODUCT_FILTER_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de ordenamiento de productos
export function getProductSortingAds() {
  return ADSENSE_CONFIG.PRODUCT_SORTING_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de resultados de productos
export function getProductResultsAds() {
  return ADSENSE_CONFIG.PRODUCT_RESULTS_ADS;
}

// Función helper para obtener anuncios por tipo de anuncio de paginación de productos
export function getProductPaginationAds() {
  return ADSENSE_CONFIG.PRODUCT_PAGINATION_ADS;
}

export default ADSENSE_CONFIG;



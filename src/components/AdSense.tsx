// src/components/AdSense.tsx
'use client';

import { useEffect } from 'react';
import { useState } from 'react';

interface AdSenseProps {
  client: string; // ca-pub-XXXXXXXXXXXXXXXX
  slot: string; // Ad slot ID
  format?: 'auto' | 'fluid' | 'rectangle' | 'banner' | 'leaderboard' | 'skyscraper';
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({ 
  client, 
  slot, 
  format = 'auto', 
  responsive = true,
  style,
  className = ''
}: AdSenseProps) {
  useEffect(() => {
    try {
      // Cargar AdSense si no está ya cargado
      if (typeof window !== 'undefined' && !window.adsbygoogle) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('data-ad-client', client);
        document.head.appendChild(script);
      }

      // Renderizar el anuncio
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading AdSense:', error);
    }
  }, [client, slot]);

  // Solo renderizar en el cliente
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}

// Componentes predefinidos para diferentes tipos de anuncios
export function AdSenseBanner({ client, slot }: { client: string; slot: string }) {
  return (
    <AdSense
      client={client}
      slot={slot}
      format="banner"
      responsive={true}
      className="my-8 text-center"
    />
  );
}

export function AdSenseSidebar({ client, slot }: { client: string; slot: string }) {
  return (
    <AdSense
      client={client}
      slot={slot}
      format="rectangle"
      responsive={false}
      className="my-8 text-center"
      style={{ width: '300px', height: '250px' }}
    />
  );
}

export function AdSenseArticle({ client, slot }: { client: string; slot: string }) {
  return (
    <AdSense
      client={client}
      slot={slot}
      format="auto"
      responsive={true}
      className="my-8 text-center"
    />
  );
}

// Hook para verificar si AdSense está disponible
export function useAdSense() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(!!window.adsbygoogle);
    }
  }, []);

  return isLoaded;
}



// src/components/CanonicalURL.tsx
import Head from 'next/head';

interface CanonicalURLProps {
  url: string;
}

export default function CanonicalURL({ url }: CanonicalURLProps) {
  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  );
}

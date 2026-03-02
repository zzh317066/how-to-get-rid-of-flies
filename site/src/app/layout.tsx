import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Tiles } from '@/components/ui/tiles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://howtogetridofflies.top'),
  title: 'FlyAway Guide | How to Get Rid of Flies Fast',
  description: 'Identify the type of flies in your home and remove them fast with our tailored removal guides and AI identifier.',
  openGraph: {
    title: 'FlyAway Guide | How to Get Rid of Flies Fast',
    description: 'Identify the type of flies in your home and remove them fast with our tailored removal guides and AI identifier.',
    url: 'https://howtogetridofflies.top',
    siteName: 'FlyAway Guide',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6155455223911546"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background flex flex-col font-sans antialiased text-foreground relative`}>
        <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
          <div className="absolute inset-0 pointer-events-auto">
            <Tiles
              rows={24}
              cols={24}
              tileSize="lg"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-10" />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

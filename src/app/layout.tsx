import type { Metadata, Viewport } from 'next';

import Layout from '@/lib/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'Liga Colaborativa | Espaço dos Povos, Culturas e da Natureza';

export const metadata: Metadata = {
  title: APP_NAME,
  description:
    'Um espaço web3 com propósito de conectar redes, saberes, dados e impulsionar ações regenerativas.',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: '',
    title: 'Liga Colaborativa',
    description: 'Plataforma Colaborativa dos Povos, Culturas e da Natureza',
    images: {
      url: '',
      alt: '',
    },
  },
  twitter: {
    creator: '@jvittor',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;

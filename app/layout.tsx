import type { Metadata } from 'next';
import './globals.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/entry.css';
import { ThemeScript } from '@/components/theme/ThemeScript';
import { BarScrollTop } from '@/components/site/BarScrollTop';

const description =
  'Software engineer. A notebook of engineering thinking worth keeping, and the things I build.';

export const metadata: Metadata = {
  title: 'niftymonkey.dev',
  description,
  icons: {
    icon: [{ url: '/logo-small.png' }, { url: '/logo.png', sizes: '512x512' }],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'niftymonkey.dev',
    description,
    url: 'https://niftymonkey.dev',
    siteName: 'niftymonkey.dev',
    type: 'website',
    images: [
      {
        url: 'https://niftymonkey.dev/logo.png',
        width: 512,
        height: 512,
        alt: 'niftymonkey.dev logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'niftymonkey.dev',
    description,
    images: ['https://niftymonkey.dev/logo.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        {children}
        <BarScrollTop />
      </body>
    </html>
  );
}

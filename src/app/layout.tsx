import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felipe Rodrigues Batista',
  description: 'My portfolio personal page, created with Tailwind CSS ans Next.js',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
    </html>
  );
}

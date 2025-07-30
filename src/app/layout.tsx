import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ThemeSwitch } from '@/components/theme-switch';
import { FabMenu } from '@/components/fab-menu';
import { TypographyProvider } from '@/components/typography-provider';

export const metadata: Metadata = {
  title: 'Darzi: AI Resume Tailor Suite',
  description: 'Tailor your resume for any job with AI precision.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Slab:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TypographyProvider>
            <div className="fixed top-4 right-4 z-50">
              <ThemeSwitch />
            </div>
            <main className="flex-1">
              {children}
            </main>
            <FabMenu />
            <Toaster />
          </TypographyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Frontend Mentor',
  description: 'QR code component',
  icons: {
    icon: '/images/horse.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

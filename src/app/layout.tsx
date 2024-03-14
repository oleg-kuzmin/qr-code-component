import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

{
  // <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  // <title>Frontend Mentor | QR code component</title>
}

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

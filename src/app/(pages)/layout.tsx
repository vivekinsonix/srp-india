import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import GlobalSpinner from '../components/spinner/GlobalSpinner';
import './globals.css';
import Footer from '../components/footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SRP US Logistics',
  description: 'SRP US Logistics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Global Spinner */}
        <GlobalSpinner />

        {/* App Content */}
        {children}
      <Footer />

      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import GlobalSpinner from '../components/spinner/GlobalSpinner';
import './globals.css';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Toaster from '../components/toaster/Toaster';
import { ThemeProvider } from 'flowbite-react';
import { customTheme } from './theme';
import Head from 'next/head';

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
      <Head>
        <link rel="icon" href="/srp-us-white.png" type="image/png" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider theme={customTheme}>
          <GlobalSpinner />
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "./Navbar";
import { Theme } from '@radix-ui/themes';
import Footer from './Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Techkun",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Theme>
          <Navbar />
          <div className="h-16"></div>
          <main className=''>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}

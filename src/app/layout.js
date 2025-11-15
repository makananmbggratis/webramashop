"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./utilities/Navbar";
import Footer from "./utilities/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hide = ["/Payments"]; // daftar halaman tanpa footer

  const dontShow = !hide.includes(pathname);
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {dontShow && <Navbar />}
        {children}
        {dontShow && <Footer />}
      </body>
    </html>
  );
}

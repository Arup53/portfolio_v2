import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arup_dev",
  description: "How you doin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Other <meta> tags */}
        <Script
          defer
          data-domain="portfolio-v2-omega-smoky.vercel.app"
          src="https://analytics-sandy-five.vercel.app/tracking-script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

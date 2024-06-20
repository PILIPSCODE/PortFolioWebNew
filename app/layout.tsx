import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sleep from "@/Feature/Sleep";
import ToasterContext from "./context/ToasterContext";
import Script from "next/script";
import AuthContext from "./context/AuthContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilipus",
  description: "Hello this is My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="overflow-x-hidden scroll-smooth">
      <head>
      <meta name="google-adsense-account" content={`${process.env.NEXT_PUBLIC_ADSENSE}`}/>
      </head>
      <AuthContext>
      
      <body className={inter.className}>
      <Script id="gtm-script" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NW5R351V40"/>
        <Script id="gtm-script2">
          {`
          <!-- Google tag (gtag.js) -->
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-NW5R351V40');
          `}
        </Script>
        <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE}`}
     crossOrigin="anonymous"></Script>

        {children}
        <Sleep />
        <ToasterContext/>
        
      </body>
      </AuthContext>

      
    </html>
  );
}

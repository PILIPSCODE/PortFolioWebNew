import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sleep from "@/components/Sleep";

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
      <body className={inter.className}>
        {children}
        <Sleep />
      </body>
    </html>
  );
}

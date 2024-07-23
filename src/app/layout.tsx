import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/contexts/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Shop",
  description: "O melhor e-commerce de itens de energia solar do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-br">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

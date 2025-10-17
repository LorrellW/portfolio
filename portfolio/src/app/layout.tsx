//file: app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/header"; // keep if your file is header.tsx
import Footer from "./components/footer";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorrell Winfield",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-dvh`} >
        <Providers>
          {/* Page chrome */}
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer >
              <Footer />
            </footer>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

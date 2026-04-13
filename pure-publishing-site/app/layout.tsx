import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";

/* ─── Fonts ────────────────────────────────────────────────────────
   Syne  — display / headings (variable weight 400–800)
   Nunito — body text (self-hosted via @fontsource for offline builds)

   On Vercel these can be swapped back to next/font/google — the
   CSS variable names are identical so no other files need changing:

     import { Syne, Nunito } from "next/font/google";
     const syne   = Syne({ subsets: ["latin"], weight: ["400","600","700","800"], variable: "--font-syne",   display: "swap" });
     const nunito = Nunito({ subsets: ["latin"], weight: ["400","600","700","800"], variable: "--font-nunito", display: "swap" });
────────────────────────────────────────────────────────────────── */

const syne = localFont({
  src: [
    {
      path: "../public/fonts/syne-variable.woff2",
      style: "normal",
      weight: "400 800",
    },
  ],
  variable: "--font-syne",
  display: "swap",
});

const nunito = localFont({
  src: [
    { path: "../public/fonts/nunito-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nunito-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/nunito-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/nunito-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Publishing | AI Copywriting & Website Design",
    template: "%s | Pure Publishing",
  },
  description:
    "AI-powered copywriting and beautiful website design for businesses in Hastings, East Sussex and beyond.",
  keywords: ["copywriting", "website design", "AI content", "Hastings", "East Sussex"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Pure Publishing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${syne.variable} ${nunito.variable}`}>
      <body className="font-nunito antialiased flex flex-col min-h-screen">
        {/* Scroll-triggered animation system */}
        <AnimationObserver />

        {/* Fixed navigation */}
        <Navbar />

        {/* Page content — padded below the fixed nav */}
        <main className="flex-1 pt-16">{children}</main>

        {/* Shared footer */}
        <Footer />
      </body>
    </html>
  );
}

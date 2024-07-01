import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "../components/Footer";
import localFont from "next/font/local";
import "./globals.css";

const DMSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../fonts/DMSans.ttf", weight: "100 400 900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Brewww Studio",
  description: "We craft unbounded brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${DMSans.variable}`}>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <main className="flex min-h-svh flex-col">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Metadata } from "next";
import { SEO_Config } from "./seo-config";

export const metadata: Metadata = SEO_Config;

const DMSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../fonts/DMSans.ttf", weight: "100 400 900", style: "normal" },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${DMSans.variable}`}>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <main className="flex min-h-svh flex-col">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}

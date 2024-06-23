import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "../components/Footer";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-gray-950 text-gray-50 antialiased">
        <main className="flex min-h-svh flex-col">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

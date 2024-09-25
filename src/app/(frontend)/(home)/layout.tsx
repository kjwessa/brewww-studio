import localFont from "next/font/local";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Brewww Studio",
    template: "%s | Brewww Studio",
  },
  description: "Brewww Studio - We craft unbounded brands",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brewww.studio",
    siteName: "Brewww Studio",
    images: [
      {
        url: "https://brewww.studio/oh-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brewww Studio",
      },
    ],
  },
  authors: [{ name: "Brewww Studio" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    types: {
      "application/atom+xml": [
        { url: "https://www.facebook.com/brewwwstudio", title: "Facebook" },
        { url: "https://www.instagram.com/brewwwstudio", title: "Instagram" },
      ],
    },
  },
};

const DMSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../../fonts/DMSans.ttf", weight: "100 400 900", style: "normal" },
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
      </body>
    </html>
  );
}

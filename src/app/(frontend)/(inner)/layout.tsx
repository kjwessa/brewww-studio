import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Metadata } from "next";
import HeaderServer from "@/app/blocks/global/Header/Server";
import FooterServer from "@/app/blocks/global/Footer/Server";

const DMSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    {
      path: "../../fonts/DMSans.ttf",
      weight: "100 400 900",
      style: "normal",
    },
  ],
});

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${DMSans.variable}`}>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <HeaderServer />
        <div className="">{children}</div>
        <FooterServer />
        <SpeedInsights />
      </body>
    </html>
  );
}

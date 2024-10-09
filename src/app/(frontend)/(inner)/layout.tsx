import localFont from "next/font/local";
import "@/styles/globals.css";
import { Metadata } from "next";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import { GridGuide } from "@/components/GridGuide/index";
import { Grain } from "@/components/Grain/index";

export const metadata: Metadata = {
  title: "Inner Pages",
  description: "Inner pages of Brewww Studio",
};

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

const BebasNeue = localFont({
  variable: "--font-bebas-neue",
  display: "swap",
  src: [
    {
      path: "../../fonts/BebasNeue.ttf",
      weight: "400",
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
    <html lang="en" className={`${DMSans.variable} ${BebasNeue.variable}`}>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <Grain>
          <Header />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </Grain>
        <GridGuide />
      </body>
    </html>
  );
}

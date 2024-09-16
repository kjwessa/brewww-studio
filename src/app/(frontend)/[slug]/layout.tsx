import localFont from "next/font/local";
import "@/styles/globals.css";
import { Metadata } from "next";
import Header from "@/app/components/Header/index";
import Footer from "@/app/components/Footer/index";

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
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

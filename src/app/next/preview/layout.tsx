import localFont from "next/font/local";
import "@/styles/globals.css";
import { GridGuide } from "@/components/GridGuide/index";
import { Grain } from "@/components/Grain/index";

const DMSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    {
      path: "../../../fonts/DMSans.ttf",
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
      path: "../../../fonts/BebasNeue.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${DMSans.variable} ${BebasNeue.variable}`}>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <Grain>
          <main className="min-h-[80vh]">{children}</main>
        </Grain>
        <GridGuide />
      </body>
    </html>
  );
}

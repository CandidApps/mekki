import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { PracticeJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const display = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Obstetrics & Gynecology in Libertyville, IL | Dr. Yasir Mekki",
    template: "%s | Alliance OB/GYN",
  },
  description:
    "Dr. Yasir A. Mekki provides experienced obstetrics and gynecology care in Libertyville, IL, including pregnancy care, women’s health, and gynecologic surgery. English, Arabic & Spanish.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Obstetrics & Gynecology in Libertyville, IL | Dr. Yasir Mekki",
    description:
      "Board certified obstetrician gynecologist and experienced gynecologic surgeon serving Lake County since 1998.",
    images: [
      {
        url: "/images/dr-yasir-mekki-obgyn-libertyville.png",
        alt: "Dr. Yasir Mekki, board certified obstetrician gynecologist in Libertyville, Illinois",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="site-shell min-h-full flex flex-col pb-20 md:pb-0">
        <PracticeJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

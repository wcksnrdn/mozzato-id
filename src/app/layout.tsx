import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mozzato.site"),
  title: {
    default: "Mozzato | Best Potato Cheese Bread",
    template: "%s | Mozzato",
  },
  description:
    "Mozzato brings you the best potato cheese bread in town — soft, fluffy, cheesy, and irresistible. Stay Cheesy, Stretch Easy!",
  keywords: [
    "Mozzato",
    "cheese bread",
    "potato cheese bread",
    "cheesy bread",
    "stuffed bread",
    "cheese stuffed bun",
    "mozzarella bread",
    "stretchy cheese bread",
    "cheese bun",
    "korean cheese bread",
    "korean potato cheese bun",
    "cheesy potato bun",
    "baked cheese bread",
    "cheese filled bread",
    "cheddar bread",
    "soft potato bun",
    "creamy cheese bread",
    "premium cheese bread",
    "cheese lovers bread",
    "best cheesy bread online",
    "mozzarella stuffed bread",
    "mozzato cheese bread",
    "cheesy snacks",
    "homemade potato bread",
    "artisan bread with cheese",
    "sweet and savory bread",
    "cheese bun delivery",
  ],
  alternates: {
    canonical: "https://mozzato.site",
  },
  openGraph: {
    title: "Mozzato | Best Potato Cheese Bread Online",
    description:
      "Indulge in Mozzato’s cheesy, soft and stretchy potato cheese bread. A bite of heaven in every slice.",
    url: "https://mozzato.site",
    siteName: "Mozzato",
    images: [
      {
        url: "https://mozzato.site/images/herosectionmozatto.png", // ganti kalau udah ada gambar final
        width: 1200,
        height: 630,
        alt: "Mozzato Potato Cheese Bread",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozzato | Soft, Stretchy Potato Cheese Bread",
    description:
      "Stay Cheesy, Stretch Easy — discover the ultimate potato cheese bread from Mozzato.",
    images: ["https://mozzato.site/mozattocoklat.png"],
    creator: "@mozzatoid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" dir="ltr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}

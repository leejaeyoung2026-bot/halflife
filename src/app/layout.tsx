import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HalfLife — Drug Half-Life Visualizer",
    template: "%s | HalfLife by Vibed Lab",
  },
  description:
    "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Interactive charts for 30+ drugs. Built by a pharmacist.",
  openGraph: {
    title: "HalfLife — Drug Half-Life Visualizer",
    description:
      "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Interactive charts for 30+ drugs. Built by a pharmacist.",
    url: "https://halflife.vibed-lab.com",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HalfLife — Drug Half-Life Visualizer",
    description:
      "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Built by a pharmacist.",
  },
  metadataBase: new URL("https://halflife.vibed-lab.com"),
  manifest: "/manifest.json",
  other: {
    "google-adsense-account": "ca-pub-6874320463657568",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6874320463657568"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6WTB59J1FT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6WTB59J1FT');`}
        </Script>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd />
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

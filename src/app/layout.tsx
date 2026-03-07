import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  title: "HalfLife — Drug Half-Life Visualizer",
  description:
    "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Interactive charts for single and multiple doses.",
  openGraph: {
    title: "HalfLife — Drug Half-Life Visualizer",
    description:
      "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Interactive charts for single and multiple doses.",
    url: "https://halflife.vibed-lab.com",
    siteName: "HalfLife by Vibed Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HalfLife — Drug Half-Life Visualizer",
    description:
      "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations.",
  },
  metadataBase: new URL("https://halflife.vibed-lab.com"),
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
      <body className="antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://licambikapur.com"),

  title: {
    default: "LIC Ambikapur – LIC Plans, Policy Guides & Insurance Advice",
    template: "%s | LIC Ambikapur",
  },

  description:
    "Discover the latest LIC plans, policy guides, and insurance advice from LIC Ambikapur (Ajay Satnami). Get expert insights on LIC term plans, child plans, pension schemes, health insurance, and financial planning.",

  keywords: [
    "LIC plans",
    "LIC Ambikapur",
    "LIC term insurance",
    "LIC child plan",
    "LIC pension plan",
    "LIC health insurance",
    "LIC premium calculator",
    "LIC agent career",
    "LIC policy guides",
    "insurance tips",
  ],

  alternates: {
    canonical: "https://licambikapur.com",
  },

  openGraph: {
    title: "LIC Ambikapur – Expert LIC Plans & Insurance Guidance",
    description:
      "Get detailed guides and advice on LIC plans including term, child, pension, and health insurance. LIC Ambikapur helps you choose the best LIC plan for your needs.",
    url: "https://licambikapur.com",
    siteName: "LIC Ambikapur",
    type: "website",
    images: [
      {
        url: "https://licambikapur.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LIC Ambikapur – LIC Plans & Policy Guidance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LIC Ambikapur – LIC Plans & Insurance Tips",
    description:
      "Explore LIC term plans, child plans, pension schemes, health insurance, and expert policy guidance from LIC Ambikapur.",
    images: ["https://licambikapur.com/og-image.jpg"],
    creator: "@licambikapur",
  },

  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   bing: "YOUR_BING_VERIFICATION_CODE",
  // },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

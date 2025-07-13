import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/components/SessionWrapper";
import { icons } from "lucide-react";
import { PWAInstallProvider } from "@/context/PWAInstallContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gorakhpur",
  description: "Hemophilia welfare society gorakhpur",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Hemophilia", "Hemophilia Society", "Hemophilia Society Gorakhpur", "Hemophilia Society Uttar Pradesh", "Hemophilia Society India"],
  themeColor: "#00ff00",
  authors: [{ name: "Harsh chaudhary", url: "https://www.linkedin.com/in/harsh-chaudhary-b9826229a/" }],
  creator: "Harsh chaudhary",
  publisher: "Harsh chaudhary",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/icons/logo-192.png",
    shortcut: "/icons/logo-192.png",
    apple: "/icons/logo-192.png",
    other: {
      rel: "icon",
      url: "/icons/logo-192.png",
    },
  },

  openGraph: {
    title: "Hemophilia Welfare Society",
    description: "Hemophilia welfare society gorakhpur",
    url: "https://hemophilia-dusky.vercel.app/",
    siteName: "Hemophilia Welfare Society",
    images: [{ url: "/icons/logo-192.png" }],
  },
  applicationName: "Hemophilia Welfare Society",
};

export default function RootLayout({ children, Component, pageProps }) {
  return (
    <html lang="en">
    <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/logo-192.png" />
      <link rel="icon" href="/icons/logo-192.png" />
      <meta name="theme-color" content="#00ff00" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWAInstallProvider>  
        <SessionWrapper>
        <Navbar />
        <Toaster />
        {children}
        </SessionWrapper>
        </PWAInstallProvider>
      </body>
     
    </html>
  );
}

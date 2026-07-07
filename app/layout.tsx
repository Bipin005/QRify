import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QRify - Free QR Code Generator",
    template: "%s | QRify",
  },
  description:
    "Generate QR codes instantly for URLs, WiFi, Email, Phone numbers, SMS and more. Fast, secure and completely free.",
  keywords: [
    "QR Code Generator",
    "Free QR Generator",
    "WiFi QR Code",
    "URL QR Code",
    "Email QR",
    "Phone QR",
    "SMS QR",
  ],
  authors: [{ name: "QRify" }],
  creator: "QRify",
  metadataBase: new URL("https://yourdomain.com"), // Replace after buying domain
  openGraph: {
    title: "QRify",
    description: "Generate beautiful QR Codes instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
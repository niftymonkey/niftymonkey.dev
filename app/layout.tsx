import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "niftymonkey.dev",
  description: "Where coffee fuels code and curiosity. Code experiments and side projects.",
  icons: {
    icon: [
      { url: "/logo-small.png" },
      { url: "/logo.png", sizes: "512x512" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "niftymonkey.dev",
    description: "Where coffee fuels code and curiosity. Code experiments and side projects.",
    url: "https://niftymonkey.dev",
    siteName: "niftymonkey.dev",
    type: "website",
    images: [
      {
        url: "https://niftymonkey.dev/logo.png",
        width: 512,
        height: 512,
        alt: "niftymonkey.dev logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "niftymonkey.dev",
    description: "Where coffee fuels code and curiosity. Code experiments and side projects.",
    images: ["https://niftymonkey.dev/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  JetBrains_Mono,
  IBM_Plex_Mono,
  Source_Code_Pro,
  DM_Sans,
  Literata,
  Courier_Prime,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en" className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} ${sourceCodePro.variable} ${dmSans.variable} ${literata.variable} ${courierPrime.variable}`}>
      <body className="font-mono antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}

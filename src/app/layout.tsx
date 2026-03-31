import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Şenol Berk Çivgın - DMD Kas Hastası | Bağış Kampanyası",
  description:
    "Duchenne Musküler Distrofi (DMD) hastası Şenol Berk Çivgın için gen tedavisi bağış kampanyası. Valilik izinli, Türkiye geneli yardım toplama.",
  keywords: [
    "DMD",
    "Duchenne Musküler Distrofi",
    "Şenol Berk",
    "bağış",
    "gen tedavisi",
    "Elevidys",
    "yardım kampanyası",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Şenol Berk İçin Bir Hayat Ver",
    description:
      "DMD hastası Şenol Berk'in gen tedavisi için bağış kampanyası. Valilik izinli.",
    type: "website",
    url: "https://dmdsenolberk.com",
    images: ["/images/senolberk.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

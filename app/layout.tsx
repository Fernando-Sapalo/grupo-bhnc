import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grupobhnc.com"),

  title: {
    default: "Grupo BHNC | Soluções Industriais em Angola",
    template: "%s | Grupo BHNC",
  },

  description:
    "Grupo BHNC — empresa angolana especializada em Man-Power, serviços Offshore e Onshore, Manutenção Industrial e comercialização de produtos e equipamentos para os setores de óleo e gás, energia, indústria e construção.",

  applicationName: "Grupo BHNC",

  keywords: [
    "Grupo BHNC",
    "BHNC Angola",
    "Man-Power Angola",
    "Offshore Angola",
    "Onshore Angola",
    "Manutenção Industrial Angola",
    "Óleo e Gás Angola",
    "Equipamentos Industriais Angola",
    "Produtos Industriais Angola",
    "Serviços Industriais Angola",
    "Luanda",
    "Angola",
  ],

  authors: [
    {
      name: "Grupo BHNC",
    },
  ],

  creator: "Grupo BHNC",
  publisher: "Grupo BHNC",

  category: "Industrial Services",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      {
        url: "/images/globe.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/globe.png",
    apple: "/images/globe.png",
  },

  openGraph: {
    type: "website",
    locale: "pt_AO",
    siteName: "Grupo BHNC",
    title: "Grupo BHNC | Soluções Industriais em Angola",
    description:
      "Soluções em Man-Power, Offshore, Onshore, Manutenção Industrial, equipamentos e produtos para os setores de óleo e gás, energia, indústria e construção.",
    images: [
      {
        url: "/logos/logo-navbar-cropped.png",
        width: 1200,
        height: 630,
        alt: "Grupo BHNC — Comércio Geral e Prestação de Serviços",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grupo BHNC | Soluções Industriais em Angola",
    description:
      "Man-Power, Offshore, Onshore, Manutenção Industrial e soluções para os setores industrial, energético e de óleo e gás em Angola.",
    images: ["/logos/logo-navbar-cropped.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    <html lang="pt-AO">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
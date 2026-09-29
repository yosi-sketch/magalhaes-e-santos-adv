import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.magalhaesysantos.adv.br"),
  title: "Magalhães & Santos Advocacia Especializada | Itajubá - MG",
  description:
    "Advocacia estratégica e resolutiva conduzida pelo Dr. Blener Magalhães e pela Dra. Joyce Santos. Excelência em Litígio Civil, Direito de Família & Divórcio e Direito do Trabalho. Nota 5,0 no Google com 63 avaliações. Sede na Av. Cel. Carneiro Júnior, 124 - Sl 03, Centro, Itajubá - MG e atendimento digital em todo o Brasil.",
  keywords: [
    "Magalhães & Santos Advocacia",
    "Magalhães e Santos Advocacia Especializada",
    "Dr. Blener Magalhães",
    "Dra. Joyce Santos",
    "advogados em Itajubá",
    "advogado divórcio Itajubá",
    "advogado litígio civil Itajubá",
    "advogado trabalhista Itajubá",
    "direito de família e sucessões",
    "advocacia especializada Minas Gerais",
    "escritório de advocacia em Itajubá",
  ],
  authors: [
    { name: "Dr. Blener Magalhães" },
    { name: "Dra. Joyce Santos" },
  ],
  creator: "Magalhães & Santos Advocacia Especializada",
  publisher: "Magalhães & Santos Advocacia Especializada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.magalhaesysantos.adv.br",
    title: "Magalhães & Santos Advocacia Especializada | Itajubá - MG",
    description:
      "Defesa jurídica estratégica, rigor técnico e dedicação artesanal. Nota 5,0 no Google com 63 avaliações unânimes. Atendimento presencial em Itajubá - MG e on-line para todo o Brasil.",
    siteName: "Magalhães & Santos Advocacia Especializada",
    images: [
      {
        url: "/logo_magalhaes_santos_alta_qualidade_1000x1000.png",
        width: 1000,
        height: 1000,
        alt: "Magalhães & Santos Advocacia Especializada",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-clip bg-brand-950 font-sans text-brand-50 antialiased selection:bg-brand-900 selection:text-gold-300">
        {children}
      </body>
    </html>
  );
}

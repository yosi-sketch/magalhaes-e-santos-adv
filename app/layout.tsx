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
  themeColor: "#01364f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barbaracarolis.adv.br"),
  title: "Dra. Bárbara Carolis | Advocacia & Consultoria Jurídica em Itajubá - MG",
  description:
    "Advocacia estratégica, rigor técnico e atendimento dedicado conduzido pela Dra. Bárbara Carolis (OAB/MG 168.000). Especialista em Direito do Trabalho e Direito Digital. Atendimento presencial na Av. Cel. Carneiro Júnior, 57 - Sl 1004, Centro, Itajubá - MG e on-line para todo o Brasil.",
  keywords: [
    "Dra. Bárbara Carolis",
    "Bárbara Carolis Advogados",
    "advogada em Itajubá",
    "OAB MG 168000",
    "advogada trabalhista Itajubá",
    "direito digital e marcas INPI",
    "direito civil e contratos Itajubá",
    "direito de família e sucessões",
    "advocacia especializada Minas Gerais",
  ],
  authors: [{ name: "Dra. Bárbara Carolis Lima Diniz" }],
  creator: "Bárbara Carolis Advogados",
  publisher: "Bárbara Carolis Advogados",
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
    url: "https://www.barbaracarolis.adv.br",
    title: "Dra. Bárbara Carolis | Advocacia de Alta Precisão em Itajubá - MG",
    description:
      "Advocacia estratégica com dedicação exclusiva a cada causa. Nota 5,0 no Google com 44 avaliações. Atendimento presencial em Itajubá - MG e on-line para todo o Brasil.",
    siteName: "Bárbara Carolis Advogados",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 410,
        alt: "Bárbara Carolis Advogados",
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
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-gold-300">
        {children}
      </body>
    </html>
  );
}

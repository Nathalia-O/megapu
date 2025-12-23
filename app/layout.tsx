import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEGA Poliuretanos | Referência em tecnologia de poliuretanos",
  description:
    "Representantes oficiais de multinacional de poliuretanos, com soluções de alta qualidade e identidade visual preservada.",
  openGraph: {
    title: "MEGA Poliuretanos",
    description:
      "Tecnologia de ponta em poliuretanos, identidade tradicional preservada e parceria com multinacional do setor.",
    url: "https://www.megapu.com.br",
    siteName: "MEGA Poliuretanos",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}

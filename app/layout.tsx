import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Endoscopia | Endoscopia e videocirurgia veterinária",
  description: "Endoscopia veterinária, videocirurgia, cirurgia a laser e implantes com equipe especializada e atendimento 24 horas em São Paulo e Grande São Paulo.",
  metadataBase: new URL("https://petendoscopia.com"),
  openGraph: { title: "Pet Endoscopia", description: "Procedimentos veterinários minimamente invasivos com equipe especializada.", type: "website", locale: "pt_BR" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}

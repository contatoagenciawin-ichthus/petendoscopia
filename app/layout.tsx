import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Pet Endoscopia | Endoscopia e videocirurgia veterinária", template: "%s | Pet Endoscopia" },
  description: "Endoscopia veterinária, videocirurgia, cirurgia a laser e implantes com equipe especializada e atendimento 24 horas em São Paulo e Grande São Paulo.",
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: { title: "Pet Endoscopia", description: "Procedimentos veterinários minimamente invasivos com equipe especializada.", type: "website", locale: "pt_BR", url: "/", siteName: site.name, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pet Endoscopia — endoscopia e videocirurgia veterinária" }] },
  twitter: { card: "summary_large_image", title: "Pet Endoscopia", description: "Endoscopia e videocirurgia veterinária com equipe especializada.", images: ["/opengraph-image"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/apple-icon" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "VeterinaryCare", name: site.name, url: site.url, telephone: site.phoneE164, email: site.email, areaServed: ["São Paulo", "Grande São Paulo"], description: "Equipe especializada em endoscopia, videocirurgia e procedimentos veterinários minimamente invasivos.", sameAs: ["https://www.instagram.com/petendoscopia"] };
  return <html lang="pt-BR"><body className={geist.variable}><Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}

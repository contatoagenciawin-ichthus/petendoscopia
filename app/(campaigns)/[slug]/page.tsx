import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns, type CampaignSlug } from "../campaign-data";
import { ContactForm } from "@/components/ContactForm";
import { CampaignTracker } from "@/components/CampaignTracker";
import { TrackedLink } from "@/components/TrackedLink";
import { site, sourceMessage, whatsappUrl } from "@/lib/site";

export function generateStaticParams() { return Object.keys(campaigns).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const campaign = campaigns[slug as CampaignSlug]; if (!campaign) return {};
  return { title: `${campaign.eyebrow} | Pet Endoscopia`, description: campaign.description, alternates: { canonical: `/${slug}` }, openGraph: { title: `${campaign.eyebrow} | Pet Endoscopia`, description: campaign.description, url: `/${slug}`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pet Endoscopia" }] } };
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const campaign = campaigns[slug as CampaignSlug]; if (!campaign) notFound();
  const wa = whatsappUrl(sourceMessage(`/${slug}`));
  return <main><CampaignTracker campaign={slug} />
    <div className="topbar">Triagem e disponibilidade 24 horas, todos os dias.</div>
    <header className="header campaign-header"><Link className="brand" href="/" aria-label="Pet Endoscopia — início"><Image className="brand-logo" src="/logo-pet.png" alt="Pet Endoscopia" width={280} height={120} priority unoptimized /></Link><nav aria-label="Navegação da página"><a href="#indicacoes">Quando pode ser indicado</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a></nav><TrackedLink className="button button-small" href={wa} target="_blank" rel="noreferrer" event="whatsapp_click" data={{ source: slug, cta: "header" }}>Falar no WhatsApp</TrackedLink></header>
    <section className="campaign-hero"><div><p className="eyebrow">{campaign.eyebrow}</p><h1>{campaign.title}</h1><p className="lead">{campaign.description}</p><div className="actions"><TrackedLink className="button" href={wa} target="_blank" rel="noreferrer" event="whatsapp_click" data={{ source: slug, cta: "hero" }}>Solicitar orientação</TrackedLink><a className="button button-outline" href="#contato">Enviar dados do caso</a></div></div><Image src={slug === "videocirurgia-veterinaria" ? "/images/videocirurgia.jpg" : slug === "para-veterinarios" ? "/images/equipe-procedimento.webp" : "/hero-pet-endoscopia.webp"} alt={slug === "videocirurgia-veterinaria" ? "Equipe da Pet Endoscopia durante procedimento de videocirurgia veterinária" : "Equipe Pet Endoscopia em procedimento veterinário"} width={1080} height={1350} priority unoptimized sizes="(max-width: 1050px) 100vw, 50vw" /></section>
    <section className="campaign-intro"><p className="eyebrow">Avaliação especializada</p><h2>{campaign.intro}</h2></section>
    <section className="campaign-section" id="indicacoes"><div><p className="eyebrow">Situações frequentes</p><h2>Quando pode ser indicado</h2><p>A indicação e a urgência devem ser definidas após avaliação veterinária.</p></div><ul>{campaign.indications.map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section className="campaign-band" id="como-funciona"><div><p className="eyebrow">Atendimento volante</p><h2>Estrutura especializada onde o paciente estiver.</h2></div><div><p>{campaign.procedure}</p><p><strong>Área prioritária:</strong> {site.region}. Atendimentos em outras localidades são avaliados sob demanda.</p><p><strong>Disponibilidade 24 horas:</strong> refere-se à triagem e ao acionamento da equipe; o horário e o local do procedimento dependem da urgência, disponibilidade e estrutura necessária.</p></div></section>
    <section className="faq" id="duvidas"><p className="eyebrow">Dúvidas frequentes</p><h2>Informações para decidir os próximos passos.</h2><div>{campaign.faq.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="contact-section" id="contato"><div><p className="eyebrow">Contato inicial</p><h2>Conte o essencial. A equipe orienta o próximo passo.</h2><p>Este formulário organiza as informações e abre uma mensagem pronta no WhatsApp. Ele não substitui avaliação veterinária nem atendimento emergencial presencial.</p></div><ContactForm source={`/${slug}`} /></section>
    <footer><Link className="brand footer-brand" href="/"><Image className="brand-logo" src="/logo-pet.png" alt="Pet Endoscopia" width={280} height={120} unoptimized /></Link><div><p>{site.region}</p><p><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a> · <a href={`mailto:${site.email}`}>{site.email}</a></p></div><p>© 2026 Pet Endoscopia</p></footer>
  </main>;
}

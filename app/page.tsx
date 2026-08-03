import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { TrackedLink } from "@/components/TrackedLink";
import { sourceMessage, whatsappUrl } from "@/lib/site";

const whatsapp = whatsappUrl(sourceMessage("inicial"));
const tutorWhatsapp = whatsappUrl(sourceMessage("inicial — tutores", "tutor"));
const vetWhatsapp = whatsappUrl(sourceMessage("inicial — veterinários", "veterinario"));
const clinicWhatsapp = whatsappUrl(sourceMessage("inicial — clínicas e hospitais", "clinica"));
const instagram = "https://www.instagram.com/petendoscopia";
const specialization = "https://cetacvet.com/especializacao-em-endoscopia-vet/";
const minivet = "https://minivet.com.br/";

const services = [
  { n: "01", title: "Endoscopia veterinária", text: "Diagnóstico, biópsias e terapias por técnicas minimamente invasivas, incluindo digestiva, respiratória, urinária e otológica." },
  { n: "02", title: "Videocirurgia", text: "Procedimentos cirúrgicos por vídeo, com precisão técnica e menor trauma para o paciente." },
  { n: "03", title: "Cirurgia a laser", text: "Tecnologia aplicada a procedimentos que exigem controle, precisão e recuperação cuidadosa." },
  { n: "04", title: "Implantes", text: "Soluções avançadas conduzidas por equipe experiente e estrutura especializada." },
];

export default function Home() {
  return (
    <main>
      <div className="topbar">Atendimento 24 horas, todos os dias da semana.</div>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Pet Endoscopia — início">
          <Image className="brand-logo" src="/logo-pet.png" alt="Pet Endoscopia" width={280} height={120} priority unoptimized />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#veterinarios">Para veterinários</a><a href="#equipe">Equipe</a><a href="#conteudos">Conteúdos</a>
        </nav>
        <TrackedLink className="button button-small" href={whatsapp} target="_blank" rel="noreferrer" event="whatsapp_click" data={{source:"home",cta:"header"}}>Falar no WhatsApp</TrackedLink>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Endoscopia e procedimentos veterinários</p>
          <h1>Atendimento especializado onde seu paciente estiver.</h1>
          <p className="lead">Endoscopia veterinária, videocirurgia e procedimentos minimamente invasivos com equipe especializada e disponibilidade 24 horas.</p>
          <div className="actions">
            <TrackedLink className="button" href={whatsapp} target="_blank" rel="noreferrer" event="whatsapp_click" data={{source:"home",cta:"hero"}}>Solicitar atendimento</TrackedLink>
            <a className="button button-outline" href="#veterinarios">Sou veterinário ou clínica</a>
          </div>
          <div className="proof" aria-label="Números da Pet Endoscopia">
            <div><strong>13 anos</strong><span>de atuação especializada</span></div>
            <div><strong>+10 mil</strong><span>procedimentos realizados</span></div>
            <div><strong>24/7</strong><span>disponibilidade para atendimento</span></div>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/images/luiz-endoscopia.jpg" alt="Dr. Luiz Lima com equipamento de endoscopia veterinária" width={1080} height={1350} priority unoptimized sizes="(max-width: 1050px) 100vw, 56vw" />
          <div className="floating-card"><span>Atendimento móvel</span><strong>Estrutura completa em clínicas e hospitais</strong></div>
        </div>
      </section>

      <section className="intro" id="servicos">
        <div><p className="eyebrow">Especialização que amplia possibilidades</p><h2>Muito além da endoscopia digestiva.</h2></div>
        <p>A Pet Endoscopia reúne experiência, tecnologia e uma equipe multidisciplinar para realizar diferentes modalidades de endoscopia, procedimentos diagnósticos, terapêuticos e cirurgias minimamente invasivas.</p>
      </section>

      <section className="services">
        {services.map((service) => <article key={service.n}><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p><TrackedLink href={whatsappUrl(`Olá, vim pelo serviço “${service.title}” na página inicial da Pet Endoscopia e gostaria de orientação.`)} target="_blank" rel="noreferrer" event="whatsapp_click" data={{source:"home",cta:`service_${service.n}`}}>Conversar sobre este serviço →</TrackedLink></article>)}
      </section>

      <section className="real-work" aria-label="Pet Endoscopia em atendimento">
        <div className="real-work-main">
          <Image src="/images/equipe-procedimento.webp" alt="Equipe da Pet Endoscopia realizando um procedimento veterinário" width={1050} height={1400} sizes="(max-width: 800px) 100vw, 60vw" unoptimized />
        </div>
        <div className="real-work-side">
          <Image src="/images/estrutura-endoscopia.webp" alt="Estrutura de equipamentos de endoscopia veterinária" width={900} height={1200} sizes="(max-width: 800px) 100vw, 32vw" unoptimized />
          <div className="real-work-note"><span>Na prática</span><strong>Tecnologia, equipe e estrutura levadas até clínicas e hospitais.</strong></div>
        </div>
      </section>

      <section className="audience" id="veterinarios">
        <div className="audience-card tutor"><p className="eyebrow">Para tutores</p><h2>Orientação clara em um momento que pede agilidade.</h2><p>Nossa equipe explica o fluxo de atendimento e atua em conjunto com o veterinário responsável pelo seu animal.</p><TrackedLink className="text-link" href={tutorWhatsapp} target="_blank" rel="noreferrer" event="tutor_contact" data={{source:"home",cta:"audience_tutor"}}>Falar como tutor(a) →</TrackedLink></div>
        <div className="audience-card vet"><p className="eyebrow">Para veterinários, clínicas e hospitais</p><h2>Uma equipe especializada para somar ao seu atendimento.</h2><p>Levamos estrutura, experiência técnica e suporte para procedimentos em clínicas e hospitais de São Paulo e Grande São Paulo.</p><div className="audience-links"><TrackedLink className="text-link" href={vetWhatsapp} target="_blank" rel="noreferrer" event="veterinarian_contact" data={{source:"home",cta:"audience_vet"}}>Sou médico-veterinário →</TrackedLink><TrackedLink className="text-link" href={clinicWhatsapp} target="_blank" rel="noreferrer" event="clinic_contact" data={{source:"home",cta:"audience_clinic"}}>Falo por clínica ou hospital →</TrackedLink></div></div>
      </section>

      <section className="authority" id="equipe">
        <div className="authority-heading"><p className="eyebrow">Experiência e confiança</p><h2>Referência construída na prática e compartilhada na formação de profissionais.</h2><Image src="/images/luiz-palestra.webp" alt="Dr. Luiz Lima palestrando em evento de endoscopia veterinária" width={900} height={1200} sizes="(max-width: 680px) 100vw, 42vw" unoptimized /></div>
        <div className="authority-copy"><p>Liderada pelo Dr. Luiz Lima, a Pet Endoscopia atua com uma equipe formada por endoscopistas, cirurgiões, gastroenterologistas clínicos e parceiros anestesistas.</p><p>A trajetória inclui formação internacional, atuação acadêmica e participação em entidades dedicadas à endoscopia e à videocirurgia veterinária.</p><div className="education-links" aria-label="Formação profissional"><span>Formação profissional</span><a href={specialization} target="_blank" rel="noreferrer">Especialização em Endoscopia Veterinária ↗</a><a href={minivet} target="_blank" rel="noreferrer">Minivet Courses ↗</a></div><div className="rating"><strong>4,9/5</strong><span>avaliação na Petlove, parceria há mais de 10 anos</span></div></div>
      </section>

      <section className="wildlife">
        <div className="wildlife-media">
          <Image src="/images/atendimento-leao.webp" alt="Dr. Luiz Lima durante atendimento veterinário a um leão" width={960} height={1200} sizes="(max-width: 800px) 100vw, 50vw" unoptimized />
          <span className="wildlife-caption">Atendimento realizado em parceria com instituição responsável</span>
        </div>
        <div className="wildlife-copy">
          <p className="eyebrow">Experiência além do convencional</p>
          <h2>Atuação também em casos envolvendo animais silvestres.</h2>
          <p>Além do atendimento a cães e gatos, a experiência da Pet Endoscopia permite atuar, sob demanda, em casos específicos de animais silvestres, sempre em parceria com santuários e instituições especializadas.</p>
          <p>É uma frente altamente específica, apoiada pelo mesmo rigor técnico, estrutura e planejamento aplicados aos demais pacientes.</p>
          <span className="wildlife-tag">Atuação especializada sob demanda</span>
        </div>
      </section>

      <section className="content-section" id="conteudos">
        <p className="eyebrow">Informação para cuidar melhor</p><h2>Conteúdos sobre exames, procedimentos e saúde veterinária.</h2><p>Em breve, novos artigos técnicos para tutores, veterinários e equipes clínicas.</p>
      </section>

      <section className="contact-section" id="contato"><div><p className="eyebrow">Contato inicial</p><h2>Envie as informações essenciais do caso.</h2><p>Você será direcionado ao WhatsApp com uma mensagem organizada. Em emergência, procure também atendimento veterinário presencial imediato.</p></div><ContactForm source="página inicial" /></section>

      <section className="final-cta"><p className="eyebrow">Triagem e disponibilidade 24 horas</p><h2>Precisa de uma equipe especializada?</h2><p>Conte brevemente o caso e informe sua localização. O horário e o local do procedimento dependem da urgência, disponibilidade e estrutura necessária.</p><TrackedLink className="button light" href={whatsapp} target="_blank" rel="noreferrer" event="whatsapp_click" data={{source:"home",cta:"final"}}>Falar com a Pet Endoscopia</TrackedLink></section>

      <footer><a className="brand footer-brand" href="#inicio" aria-label="Pet Endoscopia — voltar ao início"><Image className="brand-logo" src="/logo-pet.png" alt="Pet Endoscopia" width={280} height={120} unoptimized /></a><div><p>São Paulo e Grande São Paulo</p><p><a href="tel:+5511969086688">(11) 96908-6688</a> · <a href="mailto:petendoscopia@outlook.com">petendoscopia@outlook.com</a></p><p className="footer-links"><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={specialization} target="_blank" rel="noreferrer">Especialização ↗</a><a href={minivet} target="_blank" rel="noreferrer">Minivet Courses ↗</a></p></div><p>© 2026 Pet Endoscopia</p></footer>
    </main>
  );
}

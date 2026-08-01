import Image from "next/image";

const whatsapp = "https://wa.me/5511969086688?text=Olá%2C%20vim%20pelo%20site%20da%20Pet%20Endoscopia%20e%20gostaria%20de%20informações%20sobre%20atendimento.";

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
          <span className="brand-mark">PE</span>
          <span><strong>Pet Endoscopia</strong><small>Medicina veterinária avançada</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#veterinarios">Para veterinários</a><a href="#equipe">Equipe</a><a href="#conteudos">Conteúdos</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Endoscopia e procedimentos veterinários</p>
          <h1>Atendimento especializado onde seu paciente estiver.</h1>
          <p className="lead">Endoscopia veterinária, videocirurgia e procedimentos minimamente invasivos com equipe especializada e disponibilidade 24 horas.</p>
          <div className="actions">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Solicitar atendimento</a>
            <a className="button button-outline" href="#veterinarios">Sou veterinário ou clínica</a>
          </div>
          <div className="proof" aria-label="Números da Pet Endoscopia">
            <div><strong>13 anos</strong><span>de atuação especializada</span></div>
            <div><strong>+10 mil</strong><span>procedimentos realizados</span></div>
            <div><strong>24/7</strong><span>disponibilidade para atendimento</span></div>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/hero-pet-endoscopia.webp" alt="Equipe veterinária realizando procedimento de endoscopia" width={1448} height={1086} priority unoptimized sizes="(max-width: 1050px) 100vw, 56vw" />
          <div className="floating-card"><span>Atendimento móvel</span><strong>Estrutura completa em clínicas e hospitais</strong></div>
        </div>
      </section>

      <section className="intro" id="servicos">
        <div><p className="eyebrow">Especialização que amplia possibilidades</p><h2>Muito além da endoscopia digestiva.</h2></div>
        <p>A Pet Endoscopia reúne experiência, tecnologia e uma equipe multidisciplinar para realizar diferentes modalidades de endoscopia, procedimentos diagnósticos, terapêuticos e cirurgias minimamente invasivas.</p>
      </section>

      <section className="services">
        {services.map((service) => <article key={service.n}><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre este serviço →</a></article>)}
      </section>

      <section className="audience" id="veterinarios">
        <div className="audience-card tutor"><p className="eyebrow">Para tutores</p><h2>Orientação clara em um momento que pede agilidade.</h2><p>Nossa equipe explica o fluxo de atendimento e atua em conjunto com o veterinário responsável pelo seu animal.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Falar com a equipe →</a></div>
        <div className="audience-card vet"><p className="eyebrow">Para veterinários e clínicas</p><h2>Uma equipe especializada para somar ao seu atendimento.</h2><p>Levamos estrutura, experiência técnica e suporte para procedimentos em clínicas e hospitais de São Paulo e Grande São Paulo.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Acionar a Pet Endoscopia →</a></div>
      </section>

      <section className="authority" id="equipe">
        <div><p className="eyebrow">Experiência e confiança</p><h2>Referência construída na prática e compartilhada na formação de profissionais.</h2></div>
        <div className="authority-copy"><p>Liderada pelo Dr. Luiz Lima, a Pet Endoscopia atua com uma equipe formada por endoscopistas, cirurgiões, gastroenterologistas clínicos e parceiros anestesistas.</p><p>A trajetória inclui formação internacional, atuação acadêmica e participação em entidades dedicadas à endoscopia e à videocirurgia veterinária.</p><div className="rating"><strong>4,9/5</strong><span>avaliação na Petlove, parceria há mais de 10 anos</span></div></div>
      </section>

      <section className="content-section" id="conteudos">
        <p className="eyebrow">Informação para cuidar melhor</p><h2>Conteúdos sobre exames, procedimentos e saúde veterinária.</h2><p>Em breve, novos artigos técnicos para tutores, veterinários e equipes clínicas.</p>
      </section>

      <section className="final-cta"><p className="eyebrow">Atendimento 24 horas</p><h2>Precisa de uma equipe especializada?</h2><p>Conte brevemente o caso e informe sua localização. Nossa equipe orientará os próximos passos.</p><a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Falar com a Pet Endoscopia</a></section>

      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">PE</span><span><strong>Pet Endoscopia</strong><small>Medicina veterinária avançada</small></span></a><div><p>São Paulo e Grande São Paulo</p><p><a href="tel:+5511969086688">(11) 96908-6688</a> · <a href="mailto:petendoscopia@outlook.com">petendoscopia@outlook.com</a></p></div><p>© 2026 Pet Endoscopia</p></footer>
    </main>
  );
}

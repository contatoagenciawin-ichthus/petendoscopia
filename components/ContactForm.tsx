"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl, type ContactProfile } from "@/lib/site";
import { track } from "@/lib/tracking";

export function ContactForm({ source = "site" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const profile = form.get("profile") as ContactProfile;
    const required = ["profile", "city", "species", "case", "urgency"];
    if (required.some((field) => !String(form.get(field) || "").trim())) { setStatus("error"); return; }
    const profileLabel = profile === "tutor" ? "Tutor(a)" : profile === "veterinario" ? "Médico(a)-veterinário(a)" : "Clínica/hospital";
    const message = [
      `Olá, vim pela página ${source} da Pet Endoscopia.`,
      `Perfil: ${profileLabel}`,
      `Cidade: ${form.get("city")}`,
      `Espécie: ${form.get("species")}`,
      `Caso: ${form.get("case")}`,
      `Encaminhamento/exames: ${form.get("exams") || "Não informado"}`,
      `Urgência: ${form.get("urgency")}`,
    ].join("\n");
    track("form_submit", { source, profile });
    track(profile === "tutor" ? "tutor_contact" : profile === "clinica" ? "clinic_contact" : "veterinarian_contact", { source, method: "form_to_whatsapp" });
    setStatus("success");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="field"><label htmlFor={`${source}-profile`}>Você é</label><select id={`${source}-profile`} name="profile" defaultValue="" required><option value="" disabled>Selecione</option><option value="tutor">Tutor(a)</option><option value="veterinario">Médico(a)-veterinário(a)</option><option value="clinica">Clínica ou hospital</option></select></div>
    <div className="form-grid"><div className="field"><label htmlFor={`${source}-city`}>Cidade</label><input id={`${source}-city`} name="city" autoComplete="address-level2" required /></div><div className="field"><label htmlFor={`${source}-species`}>Espécie do animal</label><input id={`${source}-species`} name="species" placeholder="Cão, gato ou outra" required /></div></div>
    <div className="field"><label htmlFor={`${source}-case`}>Breve descrição do caso</label><textarea id={`${source}-case`} name="case" rows={3} required /></div>
    <div className="form-grid"><div className="field"><label htmlFor={`${source}-exams`}>Possui encaminhamento ou exames?</label><select id={`${source}-exams`} name="exams" defaultValue=""><option value="">Não informado</option><option>Sim</option><option>Não</option><option>Em andamento</option></select></div><div className="field"><label htmlFor={`${source}-urgency`}>Nível de urgência</label><select id={`${source}-urgency`} name="urgency" defaultValue="" required><option value="" disabled>Selecione</option><option>Emergência / agora</option><option>Nas próximas 24 horas</option><option>Agendamento</option><option>Quero orientação</option></select></div></div>
    <button className="button" type="submit">Enviar informações pelo WhatsApp</button>
    <p className="form-help">Ao continuar, você será direcionado ao WhatsApp {site.phoneDisplay}. O envio da mensagem só ocorre após sua confirmação.</p>
    {status === "error" && <p className="form-status error" role="alert">Preencha os campos essenciais para continuarmos.</p>}
    {status === "success" && <p className="form-status success" role="status">Informações preparadas. Se o WhatsApp não abriu, verifique o bloqueio de pop-ups e tente novamente.</p>}
  </form>;
}

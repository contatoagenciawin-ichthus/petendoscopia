export const site = {
  name: "Pet Endoscopia",
  url: "https://www.petendoscopia.com",
  email: "petendoscopia@outlook.com",
  phoneDisplay: "(11) 96908-6688",
  phoneE164: "+5511969086688",
  whatsapp: "5511969086688",
  region: "São Paulo capital e Grande São Paulo",
};

export type ContactProfile = "tutor" | "veterinario" | "clinica";

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function sourceMessage(source: string, profile?: ContactProfile) {
  const intro = profile === "tutor"
    ? "Olá, sou tutor(a) e"
    : profile === "veterinario"
      ? "Olá, sou médico(a)-veterinário(a) e"
      : profile === "clinica"
        ? "Olá, falo por uma clínica/hospital e"
        : "Olá,";
  return `${intro} vim pela página ${source} da Pet Endoscopia. Gostaria de orientação sobre um caso.`;
}

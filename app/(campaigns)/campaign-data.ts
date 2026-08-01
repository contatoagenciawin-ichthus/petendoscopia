export const campaigns = {
  "endoscopia-veterinaria": {
    eyebrow: "Endoscopia veterinária",
    title: "Avaliação especializada com abordagem minimamente invasiva.",
    description: "Exames diagnósticos e terapêuticos realizados por equipe experiente, com estrutura móvel em clínicas e hospitais.",
    intro: "A endoscopia permite visualizar estruturas internas, coletar amostras e, em situações selecionadas, realizar tratamentos sem cirurgia aberta.",
    indications: ["Vômitos ou regurgitação recorrentes", "Suspeita de corpo estranho", "Alterações digestivas ou respiratórias", "Necessidade de biópsia ou avaliação direta", "Investigação urinária ou otológica, conforme indicação"],
    procedure: "O caso é avaliado junto ao veterinário responsável. A equipe orienta o preparo, leva os equipamentos ao local combinado e conduz o procedimento com suporte da clínica ou hospital e planejamento anestésico.",
    faq: [["A endoscopia substitui todos os exames?", "Não. Ela integra a investigação e deve ser indicada conforme o quadro, os exames anteriores e a avaliação veterinária."], ["É necessário encaminhamento?", "O atendimento é coordenado com o médico-veterinário responsável. Se você é tutor, nossa equipe orienta como organizar esse fluxo."], ["Onde o procedimento é realizado?", "Em clínicas e hospitais com estrutura compatível, com prioridade para São Paulo e Grande São Paulo. Outros locais podem ser avaliados sob demanda."]],
  },
  "remocao-de-corpo-estranho": {
    eyebrow: "Remoção de corpo estranho",
    title: "Agilidade para avaliar e remover corpos estranhos quando a endoscopia é indicada.",
    description: "Triagem especializada e atendimento móvel para casos suspeitos ou confirmados em cães, gatos e outros pacientes.",
    intro: "Objetos ingeridos ou alojados no trato digestivo podem exigir avaliação rápida. Em casos selecionados, a retirada endoscópica evita uma cirurgia aberta, mas a decisão depende da localização, do objeto e do estado do animal.",
    indications: ["Ingestão presenciada de objeto", "Vômitos, salivação ou dificuldade para engolir", "Objeto identificado em exame de imagem", "Suspeita clínica de obstrução", "Necessidade de definição rápida da melhor abordagem"],
    procedure: "Recebemos as informações iniciais e os exames disponíveis, alinhamos o caso com a equipe veterinária e definimos se há indicação e condições para a tentativa endoscópica. Situações emergenciais exigem avaliação imediata em clínica ou hospital.",
    faq: [["Todo corpo estranho pode ser retirado por endoscopia?", "Não. Localização, formato, tempo de ingestão e condição clínica definem se a técnica é segura e viável."], ["Devo esperar para ver se o objeto sai sozinho?", "Não tome essa decisão sem avaliação veterinária. Alguns objetos podem causar obstrução, perfuração ou outras complicações."], ["Quais informações devo enviar?", "Cidade, espécie, horário provável da ingestão, sintomas, tipo de objeto e exames já realizados ajudam na triagem inicial."]],
  },
  "videocirurgia-veterinaria": {
    eyebrow: "Videocirurgia veterinária",
    title: "Cirurgia por vídeo com precisão e menor trauma ao paciente.",
    description: "Equipe e tecnologia para procedimentos minimamente invasivos realizados em parceria com clínicas, hospitais e veterinários.",
    intro: "A videocirurgia utiliza pequenas incisões e visualização ampliada para realizar procedimentos selecionados. A indicação considera o diagnóstico, as condições do paciente e a estrutura necessária.",
    indications: ["Procedimentos abdominais ou torácicos selecionados", "Casos com indicação de abordagem minimamente invasiva", "Necessidade de inspeção e coleta de material", "Planejamento conjunto com cirurgião e anestesista", "Busca por menor trauma cirúrgico quando tecnicamente possível"],
    procedure: "A Pet Endoscopia avalia o caso com a equipe assistente, planeja equipamentos e profissionais envolvidos e realiza o procedimento em ambiente hospitalar compatível.",
    faq: [["Videocirurgia serve para qualquer cirurgia?", "Não. A indicação depende do procedimento, do quadro clínico e da avaliação da equipe responsável."], ["Quais podem ser os benefícios?", "Em casos adequados, pequenas incisões, visualização ampliada e menor trauma tecidual podem favorecer a recuperação."], ["A equipe atende fora de São Paulo?", "A prioridade operacional é São Paulo e Grande São Paulo, mas outras localidades podem ser avaliadas sob demanda."]],
  },
  "para-veterinarios": {
    eyebrow: "Para veterinários, clínicas e hospitais",
    title: "Uma equipe especializada para ampliar as possibilidades do seu atendimento.",
    description: "Suporte técnico, equipamentos e profissionais para endoscopia e videocirurgia no local onde seu paciente já é atendido.",
    intro: "Atuamos como parceiros da equipe assistente, preservando a relação com o cliente e somando experiência em procedimentos diagnósticos, terapêuticos e minimamente invasivos.",
    indications: ["Necessidade de endoscopia diagnóstica ou terapêutica", "Suspeita ou confirmação de corpo estranho", "Planejamento de videocirurgia", "Demanda por equipe e equipamentos especializados", "Discussão técnica de indicação e logística"],
    procedure: "Envie o resumo do caso, localização, exames e grau de urgência. A equipe avalia indicação, disponibilidade, estrutura do local, anestesia e materiais para organizar o atendimento volante.",
    faq: [["A Pet Endoscopia leva os equipamentos?", "Sim. O atendimento volante leva estrutura especializada e é planejado conforme o procedimento e as condições do local."], ["Como funciona a relação com o tutor?", "A atuação é integrada ao veterinário e à instituição solicitante, com comunicação clara sobre responsabilidades e fluxo do caso."], ["Qual é a área de atendimento?", "A prioridade é São Paulo capital e Grande São Paulo. Demandas de outras localidades são analisadas individualmente."]],
  },
} as const;

export type CampaignSlug = keyof typeof campaigns;

export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  sectors: string[];
};

export const servicesDetail: ServiceDetail[] = [
  {
    slug: "man-power",
    title: "Man-Power",
    summary: "Fornecimento de mão de obra especializada para o sector industrial.",
    description:
      "Gerimos equipas técnicas especializadas em várias frentes de trabalho — do workshop à logística — com processos rigorosos de controlo de qualidade e segurança.",
    highlights: [
      "Mecânicos especializados em wellhead e tie-in",
      "Equipas de soldadura certificadas",
      "Gestão de ferramentas e inventário técnico",
      "Supervisão e controlo de qualidade dedicados",
    ],
    sectors: ["Óleo e gás", "Energia", "Indústria"],
  },
  {
    slug: "offshore",
    title: "Offshore",
    summary: "Serviços de offshore para plataformas de petróleo e gás.",
    description:
      "Operamos em ambientes offshore desafiadores, com equipas certificadas para manutenção, reparo e gestão de projetos em plataformas de produção.",
    highlights: [
      "Manutenção e reparo de equipamentos críticos",
      "Gestão de riscos e segurança offshore",
      "Suporte logístico e de abastecimento",
      "Treino e desenvolvimento de equipas",
    ],
    sectors: ["Óleo e gás", "Energia", "Construção naval"],
  },
  {
    slug: "onshore",
    title: "Onshore",
    summary: "Soluções onshore para operações terrestres na indústria.",
    description:
      "Fornecemos soluções personalizadas para operações terrestres nos setores de óleo e gás, energia e construção, com equipas experientes em múltiplos sectores.",
    highlights: [
      "Fornecimento de mão de obra especializada",
      "Manutenção e reparo de equipamentos",
      "Gestão de projetos e operações",
      "Suporte logístico completo",
    ],
    sectors: ["Óleo e gás", "Energia", "Indústria", "Construção"],
  },
  {
    slug: "manutencao-industrial",
    title: "Manutenção Industrial",
    summary: "Manutenção preventiva e corretiva para máxima eficiência operacional.",
    description:
      "Garantimos a continuidade operacional dos seus equipamentos com manutenção preventiva e corretiva, inspeção técnica e gestão de stock de peças.",
    highlights: [
      "Manutenção preventiva e corretiva",
      "Lubrificação de sistemas hidráulicos e pneumáticos",
      "Inspeção e teste de equipamentos",
      "Gestão de stock de peças e materiais",
    ],
    sectors: ["Óleo e gás", "Energia", "Alimentos e bebidas", "Farmacêutica", "Química"],
  },
];

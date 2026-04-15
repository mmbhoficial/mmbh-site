// app/(pages)/documentos/data/documentos-data.ts
export const documentosData = {
  categorias: [
    {
      id: "manifestos",
      nome: "Manifestos",
      descricao: "Documentos políticos e declarações públicas do movimento",
      icon: "📜",
      cor: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      id: "pesquisas",
      nome: "Pesquisas & Dossiês",
      descricao: "Estudos científicos e levantamentos de dados",
      icon: "📊",
      cor: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      id: "educativos",
      nome: "Materiais Educativos",
      descricao: "Guias, cartilhas e materiais de formação",
      icon: "📚",
      cor: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      id: "juridicos",
      nome: "Jurídicos",
      descricao: "Modelos de petições, pareceres e documentos legais",
      icon: "⚖️",
      cor: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
  ],

  documentos: [
    {
      id: "manifesto-2024",
      titulo: "Manifesto 2024: Bolando o Futuro",
      descricao:
        "Documento político da Marcha da Maconha BH para 2024. Apresenta nossa análise de conjuntura e propostas para a regulamentação democrática da maconha.",
      categoria: "manifestos",
      data: "Maio 2024",
      paginas: 12,
      tamanho: "2.4 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
      destaque: true,
    },
    {
      id: "dossie-racismo-mg",
      titulo: "Dossiê: Racismo e Proibicionismo em Minas Gerais",
      descricao:
        "Análise dos impactos raciais da guerra às drogas em MG. Dados sobre encarceramento, violência policial e desigualdade.",
      categoria: "pesquisas",
      data: "Novembro 2023",
      paginas: 48,
      tamanho: "5.1 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
      destaque: true,
    },
    {
      id: "guia-reducao-danos",
      titulo: "Guia de Redução de Danos - Edição 2024",
      descricao:
        "Manual prático sobre uso consciente e seguro da maconha. Informações sobre dosagem, métodos de consumo e cuidados.",
      categoria: "educativos",
      data: "Janeiro 2024",
      paginas: 24,
      tamanho: "3.8 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      id: "modelo-hc-cultivo",
      titulo: "Modelo de Habeas Corpus para Cultivo",
      descricao:
        "Petição modelo para solicitação de HC preventivo para cultivo de maconha para uso pessoal e medicinal.",
      categoria: "juridicos",
      data: "Março 2024",
      paginas: 8,
      tamanho: "1.2 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      id: "carta-principios",
      titulo: "Carta de Princípios MMBH - Versão Oficial",
      descricao:
        "Documento fundador do movimento. Define nossos valores, métodos de organização e horizontes políticos.",
      categoria: "manifestos",
      data: "2020 (Atualizado)",
      paginas: 6,
      tamanho: "1.5 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      id: "estudo-maconha-sus",
      titulo: "Estudo: Maconha Medicinal no SUS - Uma Proposta",
      descricao:
        "Proposta técnica para implementação do acesso gratuito à maconha medicinal através do Sistema Único de Saúde.",
      categoria: "pesquisas",
      data: "Julho 2023",
      paginas: 36,
      tamanho: "4.2 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      id: "cartilha-direitos",
      titulo: "Cartilha: Seus Direitos em Caso de Apreensão",
      descricao:
        "Guia prático sobre o que fazer e quais direitos exercer em caso de abordagem policial ou apreensão de maconha.",
      categoria: "educativos",
      data: "Agosto 2023",
      paginas: 16,
      tamanho: "2.1 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      id: "parecer-juridico-anvisa",
      titulo: "Parecer: Regulamentação da ANVISA",
      descricao:
        "Análise jurídica das resoluções da ANVISA sobre maconha medicinal e propostas de melhorias regulatórias.",
      categoria: "juridicos",
      data: "Fevereiro 2024",
      paginas: 20,
      tamanho: "2.9 MB",
      cor: "bg-linear-to-r from-emerald-500 to-green-500",
    },
  ],
};

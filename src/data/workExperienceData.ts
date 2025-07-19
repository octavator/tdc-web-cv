export interface WorkExperienceData {
  companyName: string | { french: string; english: string };
  timeRange: { french: string; english: string };
  location: string;
  description: { french: string; english: string };
  positions?: Position[];
  singlePosition?: SinglePosition;
}

export interface Position {
  title: { french: string; english: string };
  timeRange: { french: string; english: string };
  tasks: { french: string[]; english: string[] };
}

export interface SinglePosition {
  title: { french: string; english: string };
  tasks: { french: string[]; english: string[] };
}

export const workExperienceData: WorkExperienceData[] = [
  {
    companyName: "KBRW",
    timeRange: {
      french: "Oct 2020 - Aujourd'hui",
      english: "Oct 2020 - Today",
    },
    location: "Paris",
    description: {
      french:
        "Éditeur SaaS spécialisé en systèmes de gestion de commandes et d'entrepôts critiques. Clients CAC40: Michelin, BUT, Conforama, Carrefour",
      english:
        "SaaS editor specialized in critical order and warehouse management systems. CAC40 clients: Michelin, BUT, Conforama, Carrefour",
    },
    positions: [
      {
        title: {
          french: "Sr. Engineering Project Manager",
          english: "Sr. Engineering Project Manager",
        },
        timeRange: {
          french: "Juil 2024 - Aujourd'hui",
          english: "Jul 2024 - Today",
        },
        tasks: {
          french: [
            "Élaboration et validation de décisions architecturales affectant l'entreprise",
            "Conception, cadrage et chiffrage de nouvelles applications critiques",
            "Garant des exigences non fonctionnelles: Michelin Europe, BUT & Conforama WMS, Carrefour Espagne",
            "Stratégies de migration avec emphase sur mitigation des risques",
          ],
          english: [
            "Development and validation of architectural decisions affecting the company",
            "Design, scoping and estimation of critical new applications",
            "Guardian of non-functional requirements: Michelin Europe, BUT & Conforama WMS, Carrefour Spain",
            "Migration strategies with emphasis on risk mitigation",
          ],
        },
      },
      {
        title: {
          french: "Lead Solution Engineer & Manager",
          english: "Lead Solution Engineer & Manager",
        },
        timeRange: {
          french: "Déc 2022 - Aujourd'hui",
          english: "Dec 2022 - Today",
        },
        tasks: {
          french: [
            "Lead Dev Order Capture System Michelin: équipe de 12 développeurs pour la plateforme Europe",
            "Architecture & décommissionnement Legacy, nouveau flux EDI européen, agrégation fournisseurs",
            "Plan de Reprise d'Activité (DRP) applications critiques, astreinte multi-clients",
            "Recrutement, mentorat, amélioration qualité releases et bonnes pratiques",
          ],
          english: [
            "Lead Dev Order Capture System Michelin: 12-developer team for Europe platform",
            "Architecture & Legacy decommissioning, new European EDI flow, supplier aggregation",
            "Disaster Recovery Plan (DRP) for critical applications, multi-client on-call",
            "Recruitment, mentoring, release quality improvement and best practices",
          ],
        },
      },
      {
        title: {
          french: "Ingénieur Logiciel Sr. & Manager",
          english: "Sr. Software Engineer & Manager",
        },
        timeRange: {
          french: "Déc 2021 - Déc 2022",
          english: "Dec 2021 - Dec 2022",
        },
        tasks: {
          french: [
            "Features essentielles Order Capture Michelin: administration offres, éligibilité, recherche produit",
            "Projet agrégation stocks distributeurs partenaires, intégration sites existants",
            "Cadrage, chiffrage, conception, management équipe développement",
            "Astreinte applications critiques multi-clients (Michelin, PSA, Ba&sh, Cora, Brico-Dépôt)",
          ],
          english: [
            "Essential Order Capture Michelin features: offer administration, eligibility, product search",
            "Partner distributor stock aggregation project, integration with existing sites",
            "Scoping, estimation, design, development team management",
            "Critical multi-client applications on-call (Michelin, PSA, Ba&sh, Cora, Brico-Dépôt)",
          ],
        },
      },
      {
        title: {
          french: "Ingénieur Développeur",
          english: "Software Engineer",
        },
        timeRange: {
          french: "Oct 2020 - Déc 2021",
          english: "Oct 2020 - Dec 2021",
        },
        tasks: {
          french: [
            "Évolutions site Michelin prise de commande Europe & Thaïlande, remplacement plateforme Bibserve",
            "Maintenance OMS & WMS Jardiland en solo, développement dropshipping complet",
            "Développement intranet/extranet BAPIF avec problématiques UX pour bénévoles",
          ],
          english: [
            "Michelin Europe & Thailand order capture site evolution, Bibserve platform replacement",
            "Solo Jardiland OMS & WMS maintenance, complete dropshipping development",
            "BAPIF intranet/extranet development with UX challenges for volunteers",
          ],
        },
      },
    ],
  },
  {
    companyName: "CoachLab",
    timeRange: {
      french: "Juil 2021 - Déc 2022",
      english: "Jul 2021 - Dec 2022",
    },
    location: "Paris",
    description: {
      french:
        "Développement end-to-end d'une plateforme SaaS de mise en relation pour coachs. MVP complet avec visio-conférence, gestion d'agenda et paiements",
      english:
        "End-to-end development of a SaaS coaching platform. Complete MVP with video conferencing, scheduling and payment processing",
    },
    singlePosition: {
      title: {
        french: "Co-fondateur & CTO",
        english: "Co-founder & CTO",
      },
      tasks: {
        french: [
          "Architecture et développement complet plateforme de mise en relation coachs-clients",
          "Intégrations critiques: Stripe (paiements), Twilio (visio-conférence), AWS (infrastructure)",
          "Stack technique: ReactJS frontend, Elixir backend, PostgreSQL, Docker",
          "Préparation go-to-market avec investissement BPI France (10k€)",
        ],
        english: [
          "Full platform architecture and development for coach-client matching",
          "Critical integrations: Stripe (payments), Twilio (video conferencing), AWS (infrastructure)",
          "Tech stack: ReactJS frontend, Elixir backend, PostgreSQL, Docker",
          "Go-to-market preparation with BPI France investment (€10k)",
        ],
      },
    },
  },
  {
    companyName: "Suricats Consulting",
    timeRange: {
      french: "Mar 2020 - Sep 2020",
      english: "Mar 2020 - Sep 2020",
    },
    location: "Paris",
    description: {
      french:
        "Cabinet de conseil en transformation digitale. Mécénat de compétences avec Solidarités International",
      english:
        "Digital transformation consulting firm. Skills-based volunteering with Solidarités International",
    },
    singlePosition: {
      title: {
        french: "Consultant Junior",
        english: "Junior Consultant",
      },
      tasks: {
        french: [
          "Améliorations UI/UX e-commerce DoubleSens & Giftsforchange (PrestaShop, WordPress)",
          "Mécénat Solidarités International: audit UX, roadmap améliorations techniques sur Octopus.solidarites.org",
          "Développement projet interne: mobile, IoT, IA et APIs",
        ],
        english: [
          "UI/UX improvements for DoubleSens & Giftsforchange e-commerce (PrestaShop, WordPress)",
          "Solidarités International volunteering: UX audit, traffic study, Octopus.solidarites.org roadmap",
          "Internal project development: mobile, IoT, AI and APIs",
        ],
      },
    },
  },
  {
    companyName: "Creads",
    timeRange: {
      french: "Juil 2016 - Déc 2016 & Avr 2018 - Sep 2018",
      english: "Jul 2016 - Dec 2016 & Apr 2018 - Sep 2018",
    },
    location: "Paris",
    description: {
      french:
        "Plateforme créative B2B de mise en relation freelances et clients. Formation développement web en équipe agile",
      english:
        "Creative B2B platform connecting freelancers and clients. Web development training in agile team",
    },
    singlePosition: {
      title: {
        french: "Développeur Web",
        english: "Web Developer",
      },
      tasks: {
        french: [
          "Développement fonctionnalités core: portfolio créatifs, système messaging client-designer",
          "Refactoring architecture plateforme, ré-implémentation routing pour améliorer efficacité équipe",
          "Formation méthodologie Agile Scrum, bonnes pratiques développement web",
        ],
        english: [
          "Core feature development: creative portfolios, client-designer messaging system",
          "Platform architecture refactoring, routing re-implementation to improve team efficiency",
          "Agile Scrum methodology training, web development best practices",
        ],
      },
    },
  },
];

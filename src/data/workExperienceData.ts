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
        "SaaS éditeur - systèmes critiques CAC40: Michelin, BUT, Conforama, Carrefour",
      english:
        "SaaS editor - critical systems for CAC40: Michelin, BUT, Conforama, Carrefour",
    },
    positions: [
      {
        title: {
          french: "Solutions Architect - Tech Leader",
          english: "Solutions Architect - Tech Leader",
        },
        timeRange: {
          french: "Avr 2024 - Aujourd'hui",
          english: "Apr 2024 - Today",
        },
        tasks: {
          french: [
            "Architecture NFR (scalabilité, fiabilité, sécurité) pour dizaines d'apps critiques CAC40",
            "Conception & migration sécurisée plateforme export maritime Michelin (~1Md€ revenue)",
            "Collaboration Dev/Ops/Security pour transformation digitale Michelin",
            "Optimisation performance & coûts environnement haute disponibilité industriel",
          ],
          english: [
            "NFR architecture (scalability, reliability, security) for dozens of critical CAC40 apps",
            "Design & safe migration of Michelin overseas export platform (~€1B revenue)",
            "Cross-functional Dev/Ops/Security collaboration for Michelin digital transformation",
            "Performance & cost optimization in high-availability industrial environment",
          ],
        },
      },
      {
        title: {
          french: "Lead Solution Engineer & Manager",
          english: "Lead Solution Engineer & Manager",
        },
        timeRange: {
          french: "Déc 2022 - Avr 2024",
          english: "Dec 2022 - Apr 2024",
        },
        tasks: {
          french: [
            "Lead technique équipe 12 dev: plateforme e-commerce Michelin Europe (millions €/an)",
            "Décommissionnement legacy, nouveau flux EDI européen",
            "DRP applications critiques, recrutement & mentorat équipe",
          ],
          english: [
            "Technical lead 12-dev team: Michelin Europe e-commerce platform (millions €/year)",
            "Decommissioning legacy architecture, new European EDI flow",
            "Critical apps DRP, team recruitment & mentoring",
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
            "Features Order Capture Michelin: offres, éligibilité, recherche produit",
            "Agrégation stocks distributeurs, management équipe développement",
            "Astreinte applications critiques multi-clients",
          ],
          english: [
            "Order Capture Michelin features: offers, eligibility, product search",
            "Distributor stock aggregation, development team management",
            "Critical multi-client applications on-call",
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
            "Évolutions site Michelin Europe & Thaïlande, remplacement Bibserve",
            "Maintenance OMS & WMS Jardiland, développement dropshipping",
          ],
          english: [
            "Michelin Europe & Thailand site evolution, Bibserve replacement",
            "Jardiland OMS & WMS maintenance, dropshipping development",
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
        "Plateforme SaaS coaching: visio, agenda, paiements. MVP complet",
      english:
        "SaaS coaching platform: video, scheduling, payments. Complete MVP",
    },
    singlePosition: {
      title: {
        french: "Co-fondateur & CTO",
        english: "Co-founder & CTO",
      },
      tasks: {
        french: [
          "Architecture & développement plateforme coachs-clients",
          "Intégrations: Stripe, Twilio, AWS - Stack: ReactJS, Elixir, Docker",
        ],
        english: [
          "Platform architecture & development for coach-client matching",
          "Integrations: Stripe, Twilio, AWS - Stack: ReactJS, Elixir, Docker",
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
        "Conseil transformation digitale & mécénat Solidarités International",
      english:
        "Digital transformation consulting & Solidarités International volunteering",
    },
    singlePosition: {
      title: {
        french: "Consultant Junior",
        english: "Junior Consultant",
      },
      tasks: {
        french: [
          "Améliorations UI/UX e-commerce (PrestaShop, WordPress)",
          "Audit UX Solidarités International, développement mobile/IoT/IA",
        ],
        english: [
          "E-commerce UI/UX improvements (PrestaShop, WordPress)",
          "Solidarités International UX audit, mobile/IoT/AI development",
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
        "Plateforme B2B freelances-clients. Formation développement web agile",
      english:
        "B2B freelancer-client platform. Agile web development training",
    },
    singlePosition: {
      title: {
        french: "Développeur Web",
        english: "Web Developer",
      },
      tasks: {
        french: [
          "Développement portfolios créatifs, messaging client-designer",
          "Refactoring architecture, formation Agile Scrum",
        ],
        english: [
          "Creative portfolios development, client-designer messaging",
          "Architecture refactoring, Agile Scrum training",
        ],
      },
    },
  },
];

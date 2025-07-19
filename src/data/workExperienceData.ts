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
            "Lead technique équipe 15 dev: plateforme e-commerce Michelin Europe (millions €/an)",
            "Architecture & décommissionnement Legacy, nouveau flux EDI européen",
            "Plan de Reprise d'Activité (DRP) de 20~ applications critiques",
            "Recrutement, mentorat, amélioration qualité releases et bonnes pratiques",
          ],
          english: [
            "Technical lead 15-dev team: Michelin Europe e-commerce platform (millions €/year)", //@TODO: checker combien de millions en CA passent sur EUROPE seulement (S2S + UI)
            "Architecture & Legacy decommissioning, new European EDI flow",
            "Disaster Recovery Plan (DRP) for 20~ critical applications",
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
            "Projet agrégation stocks distributeurs partenaires (10+ millions de valeur)",
            "Cadrage, chiffrage, conception & management de l'équipe développement",
            "Astreinte applications critiques multi-clients (Michelin, Stellantis, Ba&sh..)",
          ],
          english: [
            "Essential Order Capture Michelin features: offer administration, eligibility, product search",
            "Partner distributor stock aggregation project (10+ millions in value)",
            "Scoping, estimation, design & management of development team",
            "Critical multi-client applications on-call (Michelin, Stellantis, Ba&sh..)",
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
            "Évolutions site Michelin prise de commande Europe & Thaïlande & nouveau site pour CSR",
            "Maintenance OMS & WMS Jardiland en solo, développement dropshipping complet",
            "Développement intranet/extranet Banque Alimentaire Paris & Ile-de-France ",
          ],
          english: [
            "Michelin Europe & Thailand order capture evolution + brand new platform for CSR",
            "Solo Jardiland OMS & WMS maintenance, complete dropshipping development",
            "Banque Alimentaire Paris & Ile-de-France intranet/extranet development",
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
          "Architecture & développement complet plateforme de mise en relation coachs-clients",
          "Intégrations critiques: Stripe, Twilio (visio-conférence), AWS",
          "Stack technique: ReactJS, Elixir, Docker",
        ],
        english: [
          "Full platform architecture and development for coach-client matching",
          "Critical integrations: Stripe, Twilio (video conferencing), AWS",
          "Tech stack: ReactJS, Elixir, Docker",
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

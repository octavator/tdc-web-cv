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
        "SaaS éditeur - systèmes critiques CAC40: Michelin, BUT, Carrefour..",
      english:
        "SaaS editor - critical systems for CAC40: Michelin, BUT, Carrefour..",
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
            "Conception & migration sécurisée plateforme export maritime Michelin (~1Md€ de CA)",
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
            "Lead technique équipe 15 dev: plateforme e-commerce Michelin Europe (250+ millions €/an)",
            "Architecture & décommissionnement Legacy, nouveau flux EDI européen",
            "Plan de Reprise d'Activité (DRP) de 20~ applications critiques",
            "Formations, processus, qualité releases et bonnes pratiques",
          ],
          english: [
            "Technical lead 15-dev team: Michelin Europe e-commerce platform (250+ millions €/year)",
            "Architecture & Legacy decommissioning, new European EDI flow",
            "Disaster Recovery Plan (DRP) for 20~ critical applications",
            "Mentoring, processus, release quality and best practices",
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
            "Features centrales Order Capture Michelin: administration offres, éligibilité, recherche produit..",
            "Projet agrégation stocks distributeurs partenaires",
            "Cadrage, conception & management de l'équipe de dev",
            "Astreinte applications critiques multi-clients (Michelin, Stellantis, Ba&sh..)",
          ],
          english: [
            "Core Michelin Order Capture features: offer administration, eligibility, product search..",
            "Partner distributor stock aggregation project (10+ millions in value)",
            "Scoping, design & management of development team",
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
            "Évolutions site Michelin prise de commande Europe",
            "Maintenance & évolution OMS & WMS Jardiland en solo",
            "Développement intranet/extranet BAPIF",
          ],
          english: [
            "Michelin Europe & Thailand order capture site evolution",
            "Solo Jardiland OMS & WMS maintenance & evolution",
            "BAPIF new intranet/extranet development",
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
          "Architecture & développement complet plateforme",
          "Intégrations critiques: Stripe, Twilio, AWS",
        ],
        english: [
          "Full platform architecture and development",
          "Critical integrations: Stripe, Twilio, AWS",
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
          "Améliorations UI/UX sites e-commerce",
          "Audit UX Solidarités International, mobile/IoT/IA",
        ],
        english: [
          "E-commerce sites UI/UX improvements",
          "Solidarités International UX audit, mobile/IoT/AI",
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
          "Portfolios créatifs, messaging client-designer",
          "Refactoring architecture, formation Agile Scrum",
        ],
        english: [
          "Creative portfolios, client-designer messaging",
          "Architecture refactoring, Agile Scrum training",
        ],
      },
    },
  },
];

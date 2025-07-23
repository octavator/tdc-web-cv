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
        "SaaS éditeur - systèmes critiques CAC40: Orange, Michelin, LVMH, Stellantis..",
      english:
        "SaaS editor - critical systems for CAC40: Orange, Michelin, LVMH, Stellantis..",
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
            "Garant NFRs multi-clients (scalabilité, fiabilité, sécurité..)",
            "Conception de la plateforme grands exports Michelin (~1Md€ de CA)",
            "Migration d'infrastructure sur nouveau cloud bare-metal (150+ VMs)",
          ],
          english: [
            "NFRs guardian for multiples clients (scalability, reliability, security..)",
            "Design of Michelin's overseas export platform (~€1B revenue)",
            "Migration of infrastructure on new bare-metal cloud (150+ VMs)",
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
            "Lead technique équipe 18 devs: plateforme e-commerce Michelin Europe (250+ millions €/an)",
            "Features centrales site Europe Michelin: recherche produit, panier, commandes..",
            "Plan de Reprise d'Activité (DRP) de 20~ applications critiques",
            "Astreinte mensuelle d'applications critiques: Stellantis, Michelin..",
          ],
          english: [
            "Technical lead 18-devs team: Michelin Europe e-commerce platform (250+ millions €/year)",
            "Core Michelin Order Capture features: product search, cart, orders..",
            "Disaster Recovery Plan (DRP) for 20~ critical applications",
            "Monthly on-call critical applications : Stellantis, Michelin..",
          ],
        },
      },
      {
        title: {
          french: "Ingénieur Logiciel Sr. & Manager",
          english: "Sr. Software Engineer & Manager",
        },
        timeRange: {
          french: "Oct 2020 - Déc 2022",
          english: "Oct 2020 - Dec 2022",
        },
        tasks: {
          french: [
            "Agrégation stocks partenaires Michelin (10+ millions €/an)",
            "Évolutions site Michelin prise de commande Europe",
            "Gestion des commandes & stocks magasins Jardiland (200+)",
            "Nouvel intranet & extranet Banque Alimentaire Paris & IdF",
          ],
          english: [
            "Michelin's partners' stocks aggregation (10+ millions €/year)",
            "Michelin Europe & Thailand order capture evolution",
            "Order & stock management for Jardiland stores (200+)",
            "New Banque Alimentaire intranet & extranet for Paris & IdF",
          ],
        },
      },
    ],
  },
  {
    companyName: "CoachLab, Co-founder & CTO",
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
    // singlePosition: {
    //   title: {
    //     french: "Co-fondateur & CTO",
    //     english: "Co-founder & CTO",
    //   },
    //   tasks: {
    //     french: [
    //       "Architecture & développement complet plateforme",
    //       "Intégrations critiques: Stripe, Twilio, AWS",
    //     ],
    //     english: [
    //       "Full platform architecture and development",
    //       "Critical integrations: Stripe, Twilio, AWS",
    //     ],
    //   },
    // },
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
    // singlePosition: {
    //   title: {
    //     french: "Consultant Junior",
    //     english: "Junior Consultant",
    //   },
    //   tasks: {
    //     french: [
    //       "Améliorations UI/UX sites e-commerce",
    //       "Audit UX Solidarités International, mobile/IoT/IA",
    //     ],
    //     english: [
    //       "E-commerce sites UI/UX improvements",
    //       "Solidarités International UX audit, mobile/IoT/AI",
    //     ],
    //   },
    // },
  },
  // First 2 Internships, not essential
  // {
  //   companyName: "Creads",
  //   timeRange: {
  //     french: "Juil 2016 - Déc 2016 & Avr 2018 - Sep 2018",
  //     english: "Jul 2016 - Dec 2016 & Apr 2018 - Sep 2018",
  //   },
  //   location: "Paris",
  //   description: {
  //     french:
  //       "Plateforme B2B freelances-clients. Formation développement web agile",
  //     english:
  //       "B2B freelancer-client platform. Agile web development training",
  //   },
  //   singlePosition: {
  //     title: {
  //       french: "Développeur Web",
  //       english: "Web Developer",
  //     },
  //     tasks: {
  //       french: [
  //         "Portfolios créatifs, messaging client-designer",
  //         "Refactoring architecture, formation Agile Scrum",
  //       ],
  //       english: [
  //         "Creative portfolios, client-designer messaging",
  //         "Architecture refactoring, Agile Scrum training",
  //       ],
  //     },
  //   },
  // },
];

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
        "Editeur SaaS basé sur le cloud spécialisé en système de gestion de commandes et d'entrepôts. 150 employés",
      english:
        "Cloud-based SaaS start-up dealing with order and warehouse management systems. 150 employees",
    },
    positions: [
      {
        title: { french: "Tech Lead", english: "Tech Lead" },
        timeRange: {
          french: "Mai 2025 - Aujourd'hui",
          english: "May 2025 - Today",
        },
        tasks: {
          french: [
            "Tech Lead pour l'équipe Business du département Product - Apporter expertise technique & métier à la construction de fonctionnalités transversales sur notre plateforme SaaS destinées aux entreprises du CAC40 pour configurer, gérer et opérer leurs systèmes de gestion.",
          ],
          english: [
            "Leading the product team responsible for the features allowing our CAC40 clients to configure, manage, and operate their OMS & WMS through KBRW's platform",
          ],
        },
      },
      {
        title: {
          french: "Architecte Solutions",
          english: "Solutions Architect",
        },
        timeRange: {
          french: "Mar 2024 - Aujourd'hui",
          english: "Mar 2024 - Today",
        },
        tasks: {
          french: [
            "Architecte Full-stack de la plateforme de prise de commande de Michelin à destination de toute l'Europe",
            "Architecte Full-stack responsable du WMS pour BUT & Conforama",
          ],
          english: [
            "Full-stack Architect of Michelin's order capture & order management system for Europe",
            "Full-stack Architect in charge of BUT's & Conforama's WMS",
          ],
        },
      },
      {
        title: {
          french: "Lead Ingénieur Solutions",
          english: "Lead Solution Engineer",
        },
        timeRange: {
          french: "Oct 2022 - Mar 2024",
          english: "Oct 2022 - Mar 2024",
        },
        tasks: {
          french: [
            "Tech Lead in charge of 8 developers working on Michelin's new order management system for Europe",
            "Implémentation d'un flux business plus performant et hautement paramétrable pour la prise de commande et la gestion de commandes Michelin en Europe",
            "Remplacement de l'ancien système de prise de commande Europe pour Michelin avec une emphase sur la mitigation des risques",
          ],
          english: [
            "Main Lead of a team of 16 developers and a dozen business analysts working on Michelin's new order management system for Europe",
            "Implemented an optimized and highly configurable business process for Michelin's order capture & management in Europe",
            "Replaced Michelin's 30 years old legacy order capture for Europe with an emphasis on mitigating risks",
          ],
        },
      },
      {
        title: {
          french: "Sr. Développeur Full-stack",
          english: "Sr. Full-stack Software Engineer",
        },
        timeRange: {
          french: "Sep 2021 - Oct 2022",
          english: "Sep 2021 - Oct 2022",
        },
        tasks: {
          french: [
            "EBM",
            "Implémentation d'un Design System en ReactJS from scratch pour Michelin",
          ],
          english: [
            "Designed & implemented Michelin's new aggregated service connected to dozens of partner wholesalers",
            "Implemented a Design System in ReactJS from scratch for Michelin",
          ],
        },
      },
      {
        title: {
          french: "Jr. Développeur full-stack",
          english: "Jr. Full-stack Software Engineer",
        },
        timeRange: {
          french: "Oct 2020 - Sep 2021",
          english: "Oct 2020 - Sep 2021",
        },
        tasks: {
          french: [
            "Implémentation du nouveau front-office & back-office de la BAPIF pour leurs collectes bi-annuelles",
            "Implémentation du drop-shipping dans la gestion des stocks & des commandes pour Jardiland. Gestion autonome du run en production en parallèle",
          ],
          english: [
            "Implemented the new front-office & back-office of the BAPIF for their bi-annual collections",
            "Implemented drop-shipping as part of stock & order management for Jardiland (OMS & WMS). Autonomous run in production in parallel",
          ],
        },
      },
    ],
  },
  {
    companyName: "Suricats Consulting",
    timeRange: {
      french: "Sep 2019 - Mar 2020",
      english: "Sep 2019 - Mar 2020",
    },
    location: "Paris",
    description: {
      french: "Cabinet de conseil en transformation digitale. 40 employés",
      english: "Digital transformation consulting firm. 40 employees",
    },
    singlePosition: {
      title: {
        french: "Développeur full-stack junior",
        english: "Jr. Full-stack Software Engineer",
      },
      tasks: {
        french: [
          "Prestation autonome sur le site d'information participatif de Solidarités International sur la gestion des eaux noires",
        ],
        english: [
          "Autonomous mission to improve Solidarités International's participative information website on human waste management in zones suffering from humanitarian crisis",
        ],
      },
    },
  },
  {
    companyName: "Creads",
    timeRange: {
      french: "Sep 2017 - Sep 2018",
      english: "Sep 2017 - Sep 2018",
    },
    location: "Paris",
    description: {
      french:
        "Plateforme de mise en relation entre créatifs freelances et clients. 40 employés",
      english:
        "Digital matching platform for freelancing designers and businesses. 40 employees",
    },
    singlePosition: {
      title: {
        french: "Développeur full-stack junior",
        english: "Jr. Full-stack Software Engineer",
      },
      tasks: {
        french: [
          "Membre de l'équipe technique agile responsable de la plateforme SaaS",
        ],
        english: ["Member of the agile team in charge of the SaaS platform"],
      },
    },
  },
  {
    companyName: { french: "Projet personnel", english: "Personal project" },
    timeRange: {
      french: "Fev 2021 - Mar 2022",
      english: "Feb 2021 - Mar 2022",
    },
    location: "Paris",
    description: {
      french:
        "Plateforme de mise en relation, réservation & visio-conférence pour tout type de coaching",
      english:
        "Digital platform to help coaches with appointment management, payment and video-conference.",
    },
    singlePosition: {
      title: { french: "", english: "" }, // No title for personal project
      tasks: {
        french: [
          "Conception & implémentation de la plateforme & de son infrastructure (ReactJS / Elixir sur AWS via Docker)",
        ],
        english: [
          "Designed & implemented the whole platform & its infrastructure (ReactJS / Elixir on AWS through Docker)",
        ],
      },
    },
  },
];

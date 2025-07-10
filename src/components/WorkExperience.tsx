import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquare as faSquareRegular } from "@fortawesome/free-regular-svg-icons";
import { useLanguageStore } from '../store/useLanguageStore';

const SquareIcon = () => (
  <span className="inline-block w-3 h-3 bg-blue-600 rounded-sm mt-1 mr-1"></span>
);

const WorkExperience: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6">
      <div className="section-title text-xl font-bold mb-4">
        Experience
      </div>

      {/* KBRW */}
      <div className="xp-block mb-6">
        <div className="xp-establishment font-semibold">
          <span className="xp-client-name">KBRW</span>
          <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
            <div className="xp-timerange">{isFrench ? "Oct 2020 - Aujourd'hui" : "Oct 2020 - Today"}</div>
            <div className="xp-location">Paris</div>
          </div>
        </div>
        <div className="xp-establishment-resume text-gray-700 mb-2">
          {isFrench
            ? "Editeur SaaS basé sur le cloud spécialisé en système de gestion de commandes et d'entrepôts. 150 employés"
            : "Cloud-based SaaS start-up dealing with order and warehouse management systems. 150 employees"}
        </div>
        <div className="xp-list ml-4">
          {/* Tech Lead */}
          <div className="xp-title font-bold mt-2">
            {isFrench ? "Tech Lead" : "Tech Lead"}
            <div className="xp-extra-infos text-xs text-gray-500">
              <div className="xp-timerange">{isFrench ? "Mai 2025 - Aujourd'hui" : "May 2025 - Today"}</div>
            </div>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Tech Lead pour l'équipe Business du département Product - Apporter expertise technique & métier à la construction de fonctionnalités transversales sur notre plateforme SaaS destinées aux entreprises du CAC40 pour configurer, gérer et opérer leurs systèmes de gestion."
                : "Leading the product team responsible for the features allowing our CAC40 clients to configure, manage, and operate their OMS & WMS through KBRW's platform"}
            </span>
          </div>

          {/* Solutions Architect */}
          <div className="xp-title font-bold mt-2">
            {isFrench ? "Architecte Solutions" : "Solutions Architect"}
            <div className="xp-extra-infos text-xs text-gray-500">
              <div className="xp-timerange">{isFrench ? "Mar 2024 - Aujourd'hui" : "Mar 2024 - Today"}</div>
            </div>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Architecte Full-stack de la plateforme de prise de commande de Michelin à destination de toute l'Europe"
                : "Full-stack Architect of Michelin's order capture & order management system for Europe"}
            </span>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Architecte Full-stack responsable du WMS pour BUT & Conforama"
                : "Full-stack Architect in charge of BUT's & Conforama's WMS"}
            </span>
          </div>

          {/* Lead Solution Engineer */}
          <div className="xp-title font-bold mt-2">
            {isFrench ? "Lead Ingénieur Solutions" : "Lead Solution Engineer"}
            <div className="xp-extra-infos text-xs text-gray-500">
              <div className="xp-timerange">{isFrench ? "Oct 2022 - Mar 2024" : "Oct 2022 - Mar 2024"}</div>
            </div>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Tech Lead in charge of 8 developers working on Michelin's new order management system for Europe"
                : "Main Lead of a team of 16 developers and a dozen business analysts working on Michelin's new order management system for Europe"}
            </span>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Implémentation d'un flux business plus performant et hautement paramétrable pour la prise de commande et la gestion de commandes Michelin en Europe"
                : "Implemented an optimized and highly configurable business process for Michelin's order capture & management in Europe"}
            </span>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Remplacement de l'ancien système de prise de commande Europe pour Michelin avec une emphase sur la mitigation des risques"
                : "Replaced Michelin's 30 years old legacy order capture for Europe with an emphasis on mitigating risks"}
            </span>
          </div>

          {/* Sr. Full-stack Software Engineer */}
          <div className="xp-title font-bold mt-2">
            {isFrench ? "Sr. Développeur Full-stack" : "Sr. Full-stack Software Engineer"}
            <div className="xp-extra-infos text-xs text-gray-500">
              <div className="xp-timerange">{isFrench ? "Sep 2021 - Oct 2022" : "Sep 2021 - Oct 2022"}</div>
            </div>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "EBM"
                : "Designed & implemented Michelin's new aggregated service connected to dozens of partner wholesalers"}
            </span>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Implémentation d'un Design System en ReactJS from scratch pour Michelin"
                : "Implemented a Design System in ReactJS from scratch for Michelin"}
            </span>
          </div>

          {/* Jr. Full-stack Software Engineer */}
          <div className="xp-title font-bold mt-2">
            {isFrench ? "Jr. Développeur full-stack " : "Jr. Full-stack Software Engineer"}
            <div className="xp-extra-infos text-xs text-gray-500">
              <div className="xp-timerange">{isFrench ? "Oct 2020 - Sep 2021" : "Oct 2020 - Sep 2021"}</div>
            </div>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Implémentation du nouveau front-office & back-office de la BAPIF pour leurs collectes bi-annuelles"
                : "Implemented the new front-office & back-office of the BAPIF for their bi-annual collections"}
            </span>
          </div>
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Implémentation du drop-shipping dans la gestion des stocks & des commandes pour Jardiland. Gestion autonome du run en production en parallèle"
                : "Implemented drop-shipping as part of stock & order management for Jardiland (OMS & WMS). Autonomous run in production in parallel"}
            </span>
          </div>
        </div>
      </div>

      {/* Suricats Consulting */}
      <div className="xp-block mb-6">
        <div className="xp-establishment font-semibold">
          <span className="xp-client-name">Suricats Consulting</span>
          <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
            <div className="xp-timerange">{isFrench ? "Sep 2019 - Mar 2020" : "Sep 2019 - Mar 2020"}</div>
            <div className="xp-location">Paris</div>
          </div>
        </div>
        <div className="xp-establishment-resume text-gray-700 mb-2">
          {isFrench
            ? "Cabinet de conseil en transformation digitale. 40 employés"
            : "Digital transformation consulting firm. 40 employees"}
        </div>
        <div className="xp-title font-bold mt-2">
          {isFrench ? "Développeur full-stack junior" : "Jr. Full-stack Software Engineer"}
        </div>
        <div className="xp-list ml-4">
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Prestation autonome sur le site d'information participatif de Solidarités International sur la gestion des eaux noires"
                : "Autonomous mission to improve Solidarités International's participative information website on human waste management in zones suffering from humanitarian crisis"}
            </span>
          </div>
        </div>
      </div>

      {/* Creads */}
      <div className="xp-block mb-6">
        <div className="xp-establishment font-semibold">
          <span className="xp-client-name">Creads</span>
          <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
            <div className="xp-timerange">{isFrench ? "Sep 2017 - Sep 2018" : "Sep 2017 - Sep 2018"}</div>
            <div className="xp-location">Paris</div>
          </div>
        </div>
        <div className="xp-establishment-resume text-gray-700 mb-2">
          {isFrench
            ? "Plateforme de mise en relation entre créatifs freelances et clients. 40 employés"
            : "Digital matching platform for freelancing designers and businesses. 40 employees"}
        </div>
        <div className="xp-title font-bold mt-2">
          {isFrench ? "Développeur full-stack junior" : "Jr. Full-stack Software Engineer"}
        </div>
        <div className="xp-list ml-4">
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Membre de l'équipe technique agile d'une dizaine de personnes responsable du run & du build de la plateforme SaaS"
                : "Full member of a 10 people agile team in charge of building & running their SaaS platform"}
            </span>
          </div>
        </div>
      </div>

      {/* Personal project */}
      <div className="xp-block mb-6">
        <div className="xp-establishment font-semibold">
          {isFrench ? "Projet personnel" : "Personal project"}
          <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
            <div className="xp-timerange">{isFrench ? "Fev 2021 - Mar 2022" : "Feb 2021 - Mar 2022"}</div>
            <div className="xp-location">Paris</div>
          </div>
        </div>
        <div className="xp-establishment-resume text-gray-700 mb-2">
          {isFrench
            ? "Plateforme de mise en relation, réservation & visio-conférence pour tout type de coaching"
            : "Digital platform to help coaches with appointment management, payment and video-conference."}
        </div>
        <div className="xp-list ml-4">
          <div className="xp-item flex items-start gap-2">
            <SquareIcon />
            <span>
              {isFrench
                ? "Conception & implémentation de la plateforme & de son infrastructure (ReactJS / Elixir sur AWS via Docker)"
                : "Designed & implemented the whole platform & its infrastructure (ReactJS / Elixir on AWS through Docker)"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience; 
import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const CoursesTraining: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-8 tracking-wide">
        {isFrench ? "Formation Continue" : "Continuing Education"}
      </div>

      <div className="space-y-4">
        <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
          <div className="xp-establishment flex items-start justify-between">
            <div className="xp-client-name text-lg font-semibold text-cv-secondary">
              SecNum Académie - Cybersécurité
            </div>
            <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
              <div className="xp-timerange mb-1">2023</div>
              <div className="xp-location text-xs">ANSSI</div>
            </div>
          </div>
        </div>

        <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
          <div className="xp-establishment flex items-start justify-between">
            <div className="xp-client-name text-lg font-semibold text-cv-secondary">
              Formation Leadership Technique
            </div>
            <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
              <div className="xp-timerange mb-1">2022</div>
              <div className="xp-location text-xs">Formation Continue</div>
            </div>
          </div>
        </div>

        <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
          <div className="xp-establishment flex items-start justify-between">
            <div className="xp-client-name text-lg font-semibold text-cv-secondary">
              Architecture Microservices & DevOps
            </div>
            <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
              <div className="xp-timerange mb-1">2021</div>
              <div className="xp-location text-xs">
                Formation Professionnelle
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTraining;

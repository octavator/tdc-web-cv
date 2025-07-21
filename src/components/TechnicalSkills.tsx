import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const skills = [
  {
    titleFr: "Architecture Logicielle",
    titleEn: "Software Architecture",
    mastery: 90,
  },
  {
    titleFr: "Elixir & Systèmes Critiques",
    titleEn: "Elixir & Critical Systems",
    mastery: 95,
  },
  {
    titleFr: "ReactJS & Full-stack",
    titleEn: "ReactJS & Full-stack",
    mastery: 90,
  },
  {
    titleFr: "Leadership d'Équipe",
    titleEn: "Team Leadership",
    mastery: 90,
  },
  {
    titleFr: "DevOps & Infrastructure",
    titleEn: "DevOps & Infrastructure",
    mastery: 85,
  },
];

const TechnicalSkills: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const getMasteryWidth = (mastery: number) => {
    // Direct width for the colored bar
    return `${mastery}%`;
  };

  return (
    <div className="w-full bg-white rounded-lg p-4 border border-gray-100 mb-4">
      <div className="section-title text-base font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-4 tracking-wide">
        {isFrench ? "Expertises Techniques" : "Technical Expertise"}
      </div>
      {skills.map((skill, idx) => (
        <div className="technical-section flex flex-col mb-3 group" key={idx}>
          <div className="flex items-center justify-between mb-2">
            <div className="technical-title font-semibold text-cv-dark-grey text-base">
              {isFrench ? skill.titleFr : skill.titleEn}
            </div>
            <div className="text-sm font-bold text-cv-primary">
              {skill.mastery}%
            </div>
          </div>
          <div
            className="technical-mastery border border-cv-primary/20 h-3 bg-gray-200 rounded-full overflow-hidden"
          >
            <div
              className="h-full rounded-full"
              style={{ 
                width: getMasteryWidth(skill.mastery),
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 40%, var(--accent-color) 80%)'
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;

import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const skills = [
  {
    titleFr: "Architecture Logicielle",
    titleEn: "Software Architecture",
    mastery: 85,
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
    const emptyWidth = (100 - mastery) * 2.4; // 240px total width, so 2.4px per percent
    return `${emptyWidth}px`;
  };

  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
      <div className="section-title text-base font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-4 tracking-wide">
        {isFrench ? "Expertises Techniques" : "Technical Expertise"}
      </div>
      {skills.map((skill, idx) => (
        <div className="technical-section flex flex-col mb-5 group" key={idx}>
          <div className="flex items-center justify-between mb-2">
            <div className="technical-title font-semibold text-cv-dark-grey text-base">
              {isFrench ? skill.titleFr : skill.titleEn}
            </div>
            <div className="text-sm font-bold text-cv-primary">
              {skill.mastery}%
            </div>
          </div>
          <div
            className="technical-mastery border border-cv-primary/20 h-3 flex flex-row-reverse bg-gradient-to-r from-cv-primary to-cv-secondary rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300"
            style={{ width: "240px" }}
          >
            <div
              className="bg-gradient-to-r from-gray-100 to-gray-200 h-full transition-all duration-500 ease-out"
              style={{ width: getMasteryWidth(skill.mastery) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;

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
    mastery: 90,
  },
  {
    titleFr: "Leadership Engineering",
    titleEn: "Engineering Leadership",
    mastery: 80,
  },
  {
    titleFr: "ReactJS & Full-stack",
    titleEn: "ReactJS & Full-stack",
    mastery: 80,
  },
  {
    titleFr: "DevOps & Infrastructure",
    titleEn: "DevOps & Infrastructure",
    mastery: 70,
  },
];

const TechnicalSkills: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const getMasteryWidth = (mastery: number) => {
    const emptyWidth = (100 - mastery) * 2; // 200px total width, so 2px per percent
    return `${emptyWidth}px`;
  };

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
      <div className="section-title text-lg font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-6">
        {isFrench ? "Expertises Clés" : "Core Expertise"}
      </div>
      {skills.map((skill, idx) => (
        <div className="technical-section flex flex-col mb-6" key={idx}>
          <div className="technical-title font-medium text-cv-dark-grey mb-3">
            {isFrench ? skill.titleFr : skill.titleEn}
          </div>
          <div
            className="technical-mastery border border-cv-primary h-3 flex flex-row-reverse bg-cv-primary rounded-full overflow-hidden shadow-sm"
            style={{ width: "200px" }}
          >
            <div
              className="bg-gray-200 h-full transition-all duration-300"
              style={{ width: getMasteryWidth(skill.mastery) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;

import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const skills = [
  {
    titleFr: "Gestion de projet",
    titleEn: "Project Management",
    mastery: 90,
  },
  {
    titleFr: "Architecture Logicielle",
    titleEn: "Software Architecture",
    mastery: 80,
  },
  {
    titleFr: "ReactJS",
    titleEn: "ReactJS",
    mastery: 80,
  },
  {
    titleFr: "Python",
    titleEn: "Python",
    mastery: 70,
  },
  {
    titleFr: "DevOps",
    titleEn: "DevOps",
    mastery: 70,
  },
];

const TechnicalSkills: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const getMasteryWidth = (mastery: number) => {
    const emptyWidth = (100 - mastery) * 1.5; // 150px total width, so 1.5px per percent
    return `${emptyWidth}px`;
  };

  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-light-grey border-b border-cv-secondary my-2 pb-2">
        {isFrench ? "Compétences" : "Skills"}
      </div>
      {skills.map((skill, idx) => (
        <div className="technical-section flex flex-col mb-4" key={idx}>
          <div className="technical-title my-1 first:mt-0">
            {isFrench ? skill.titleFr : skill.titleEn}
          </div>
          <div
            className="technical-mastery border border-cv-secondary h-2 flex flex-row-reverse bg-cv-secondary mb-2"
            style={{ width: "150px" }}
          >
            <div
              className="bg-white h-full"
              style={{ width: getMasteryWidth(skill.mastery) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;

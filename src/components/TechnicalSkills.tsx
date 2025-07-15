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

  return (
    <div className="my-6">
      <div className="section-title text-xl font-bold mb-4">
        {isFrench ? "Compétences" : "Skills"}
      </div>
      {skills.map((skill, idx) => (
        <div className="technical-section mb-4" key={idx}>
          <div className="technical-title font-semibold mb-1">
            {isFrench ? skill.titleFr : skill.titleEn}
          </div>
          <div className="technical-mastery bg-gray-200 rounded h-3 w-full">
            <div
              className="rounded h-3 bg-blue-600"
              style={{ width: `${skill.mastery}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;

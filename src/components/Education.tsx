import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="w-full bg-white rounded-lg p-3 pb-0 border border-gray-100 mb-3">
      <div className="section-title text-base font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-3 tracking-wide">
        {isFrench ? "Diplôme" : "Education"}
      </div>

      <div className="space-y-2">
        <EducationItem
          establishment="EPITECH"
          name="Master in Computer Science"
          frenchName="Master en Informatique"
          graduationYear="2020"
          location="Paris"
        />
      </div>
      <div className="space-y-2">
        <EducationItem
          establishment="Cambridge University"
          name="Proficiency in English"
          frenchName="Proficiency in English"
          graduationYear="2011"
        />
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
      <div className="section-title text-base font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-4 tracking-wide">
        {isFrench ? "Formation" : "Education"}
      </div>

      <div className="space-y-2">
        <EducationItem
          establishment="EPITECH"
          name="Master in Computer Science"
          frenchName="Master en Informatique"
          timeRange="2015 - 2020"
          location="Paris"
        />
      </div>
    </div>
  );
};

export default Education;

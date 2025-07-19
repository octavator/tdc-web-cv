import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-8 tracking-wide">
        {isFrench ? "Formation Exécutive" : "Executive Education"}
      </div>

      <div className="space-y-4">
        <EducationItem
          name="EPITECH - Master of Engineering, Computer Science"
          frenchName="EPITECH - Master of Engineering, Informatique"
          timeRange="2015 - 2020"
          location="Paris"
        />
      </div>
    </div>
  );
};

export default Education;

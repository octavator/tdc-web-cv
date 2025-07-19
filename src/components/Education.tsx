import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-8">
        {isFrench ? "Formation & Leadership" : "Education & Leadership"}
      </div>

      <div className="space-y-4">
        <EducationItem
          name="EPITECH - Master of Engineering, Computer Science"
          frenchName="EPITECH - Master of Engineering, Informatique"
          timeRange="2015 - 2020"
          location="Paris"
        />

        <EducationItem
          name="Executive Leadership in Technology"
          frenchName="Leadership Exécutif en Technologie"
          timeRange="2022 - 2024"
          location="Continuous Executive Development"
        />

        <EducationItem
          name="Cambridge Certificate of Proficiency in English (C2)"
          frenchName="Cambridge Certificate of Proficiency in English (C2)"
          timeRange="2011"
          location="Cambridge, UK"
        />

        <EducationItem
          name="Enterprise Architecture & System Design"
          frenchName="Architecture d'Entreprise & Conception Système"
          timeRange="2021 - 2023"
          location="Professional Certification"
        />
      </div>
    </div>
  );
};

export default Education;

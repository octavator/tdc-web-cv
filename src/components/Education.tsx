import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import EducationItem from "./EducationItem";

const Education: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-light-grey border-b border-cv-secondary my-2 pb-2">
        {isFrench ? "Formation" : "Education"}
      </div>

      <EducationItem name="EPITECH" timeRange="2015 - 2020" location="Paris" />

      <EducationItem
        name="Certificate of Proficiency in English (C2 Level)"
        frenchName="Certificat de compétence en anglais (niveau C2)"
        timeRange="2011"
      />
    </div>
  );
};

export default Education;

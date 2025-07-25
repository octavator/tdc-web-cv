import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

interface EducationItemProps {
  name: string;
  establishment: string;
  frenchName?: string;
  graduationYear: string;
  location?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  name,
  establishment,
  frenchName,
  graduationYear,
  location,
}) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="flex flex-col mb-3">
      <div className="flex items-center justify-between mb-0.5">
        <div className="text-sm font-semibold text-cv-dark-grey">
          {establishment}
          <br/>
          {isFrench && frenchName ? frenchName : name}
        </div>
        <div className="text-xs font-semibold text-cv-primary text-end">
          {graduationYear}
        </div>
      </div>
      {location && (
        <div className="text-xs text-cv-light-grey">
          {location}
        </div>
      )}
    </div>
  );
};

export default EducationItem;

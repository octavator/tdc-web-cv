import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

interface EducationItemProps {
  name: string;
  frenchName?: string;
  timeRange: string;
  location?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  name,
  frenchName,
  timeRange,
  location,
}) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="xp-block education-block mb-3">
      <div className="xp-establishment text-base font-bold text-cv-secondary mb-1 flex items-center">
        <span className="xp-client-name">
          {isFrench && frenchName ? frenchName : name}
        </span>
        <div className="xp-extra-infos ml-3 text-cv-light-grey text-xs flex justify-between flex-1">
          <div className="xp-timerange">{timeRange}</div>
          {location && <div className="xp-location">{location}</div>}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;

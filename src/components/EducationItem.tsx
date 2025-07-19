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
    <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
      <div className="xp-establishment flex items-start justify-between">
        <div className="xp-client-name text-lg font-semibold text-cv-secondary">
          {isFrench && frenchName ? frenchName : name}
        </div>
        <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
          <div className="xp-timerange mb-1">{timeRange}</div>
          {location && <div className="xp-location text-xs">{location}</div>}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;

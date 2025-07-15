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
    <div className="xp-block education-block mb-4">
      <div className="xp-establishment font-semibold">
        <span className="xp-client-name">
          {isFrench && frenchName ? frenchName : name}
        </span>
        <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
          <div className="xp-timerange">{timeRange}</div>
          {location && <div className="xp-location">{location}</div>}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;

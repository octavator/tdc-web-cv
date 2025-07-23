import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { WorkExperienceData } from "../data/workExperienceData";
import WorkExperiencePosition from "./WorkExperiencePosition";
import WorkExperienceTask from "./WorkExperienceTask";

interface WorkExperienceItemProps {
  data: WorkExperienceData;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ data }) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const companyName =
    typeof data.companyName === "string"
      ? data.companyName
      : isFrench
        ? data.companyName.french
        : data.companyName.english;

  const timeRange = isFrench ? data.timeRange.french : data.timeRange.english;
  const description = isFrench
    ? data.description.french
    : data.description.english;

  return (
    <div className="xp-block bg-white rounded-xl pb-0 border border-gray-100 mb-4 border-l-4 border-l-cv-primary">
      <div className="xp-establishment text-lg font-semibold text-cv-primary mb-1.5 flex items-center justify-between">
        <span className="xp-client-name">{companyName}</span>
        <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex items-end">
          <div className="xp-location mr-1">{data.location},</div>
          <div className="xp-timerange">{timeRange}</div>
        </div>
      </div>
      <div className="xp-establishment-resume text-xs font-medium italic text-cv-light-grey mb-1 leading-relaxed">
        {description}
      </div>

      {data.positions ? (
        <div className="xp-list space-y-3">
          {data.positions.map((position, index) => (
            <WorkExperiencePosition key={index} position={position} />
          ))}
        </div>
      ) : data.singlePosition ? (
        <div className="bg-gray-50 rounded-lg p-3">
          {data.singlePosition.title.french && (
            <div className="xp-title text-base font-semibold text-cv-secondary mb-2">
              {isFrench
                ? data.singlePosition.title.french
                : data.singlePosition.title.english}
            </div>
          )}
          <div className="xp-list space-y-1.5">
            {(isFrench
              ? data.singlePosition.tasks.french
              : data.singlePosition.tasks.english
            ).map((task, index) => (
              <WorkExperienceTask key={index} task={task} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WorkExperienceItem;

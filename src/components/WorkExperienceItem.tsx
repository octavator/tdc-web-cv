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
    <div className="xp-block mb-6">
      <div className="xp-establishment font-semibold">
        <span className="xp-client-name">{companyName}</span>
        <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
          <div className="xp-timerange">{timeRange}</div>
          <div className="xp-location">{data.location}</div>
        </div>
      </div>
      <div className="xp-establishment-resume text-gray-700 mb-2">
        {description}
      </div>

      {data.positions ? (
        <div className="xp-list ml-4">
          {data.positions.map((position, index) => (
            <WorkExperiencePosition key={index} position={position} />
          ))}
        </div>
      ) : data.singlePosition ? (
        <div>
          {data.singlePosition.title.french && (
            <div className="xp-title font-bold mt-2">
              {isFrench
                ? data.singlePosition.title.french
                : data.singlePosition.title.english}
            </div>
          )}
          <div className="xp-list ml-4">
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

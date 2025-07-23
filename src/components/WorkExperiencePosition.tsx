import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { Position } from "../data/workExperienceData";
import WorkExperienceTask from "./WorkExperienceTask";

interface WorkExperiencePositionProps {
  position: Position;
}

const WorkExperiencePosition: React.FC<WorkExperiencePositionProps> = ({
  position,
}) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const title = isFrench ? position.title.french : position.title.english;
  const timeRange = isFrench
    ? position.timeRange.french
    : position.timeRange.english;
  const tasks = isFrench ? position.tasks.french : position.tasks.english;

  return (
    <div className="xp-position bg-gray-50 rounded-lg p-3 mb-3 pb-1" >
      <div className="xp-title flex items-start justify-between mb-2">
        <div className="text-base font-semibold text-cv-secondary">{title}</div>
        <div className="xp-extra-infos text-cv-light-grey text-sm font-medium">
          <div className="xp-timerange">{timeRange}</div>
        </div>
      </div>
      <div className="xp-list space-y-1.5">
        {tasks.map((task, index) => (
          <WorkExperienceTask key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperiencePosition;

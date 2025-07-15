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
    <div>
      <div className="xp-title font-bold mt-2">
        {title}
        <div className="xp-extra-infos text-xs text-gray-500">
          <div className="xp-timerange">{timeRange}</div>
        </div>
      </div>
      <div className="xp-list ml-4">
        {tasks.map((task, index) => (
          <WorkExperienceTask key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperiencePosition;

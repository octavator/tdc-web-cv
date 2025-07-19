import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

interface WorkExperienceTaskProps {
  task: string;
}

const WorkExperienceTask: React.FC<WorkExperienceTaskProps> = ({ task }) => {
  return (
    <div className="xp-item flex items-start mt-1">
      <FontAwesomeIcon
        icon={faSquare}
        className="start-list-icon text-cv-secondary mr-2 text-xs mt-0.5"
      />
      <span>{task}</span>
    </div>
  );
};

export default WorkExperienceTask;

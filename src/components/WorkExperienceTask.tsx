import React from "react";

interface WorkExperienceTaskProps {
  task: string;
}

const WorkExperienceTask: React.FC<WorkExperienceTaskProps> = ({ task }) => {
  return (
    <div className="xp-item flex items-start py-1">
      <div className="w-2 h-2 bg-cv-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <span className="text-cv-dark-grey leading-relaxed font-medium">
        {task}
      </span>
    </div>
  );
};

export default WorkExperienceTask;

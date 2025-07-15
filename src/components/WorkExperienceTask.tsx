import React from "react";

const SquareIcon = () => (
  <span className="inline-block w-3 h-3 bg-blue-600 rounded-sm mt-1 mr-1"></span>
);

interface WorkExperienceTaskProps {
  task: string;
}

const WorkExperienceTask: React.FC<WorkExperienceTaskProps> = ({ task }) => {
  return (
    <div className="xp-item flex items-start gap-2">
      <SquareIcon />
      <span>{task}</span>
    </div>
  );
};

export default WorkExperienceTask;

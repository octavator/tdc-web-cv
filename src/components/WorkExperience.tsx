import React from "react";

import { workExperienceData } from "../data/workExperienceData";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperience: React.FC = () => {
  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-light-grey border-b border-cv-secondary my-2 pb-2">
        Experience
      </div>

      {workExperienceData.map((experience, index) => (
        <WorkExperienceItem key={index} data={experience} />
      ))}
    </div>
  );
};

export default WorkExperience;

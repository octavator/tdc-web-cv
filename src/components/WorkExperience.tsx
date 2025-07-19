import React from "react";

import { workExperienceData } from "../data/workExperienceData";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperience: React.FC = () => {
  return (
    <div className="my-4 w-full">
      <div className="section-title text-base font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-4">
        Experience
      </div>

      <div className="space-y-4">
        {workExperienceData.map((experience, index) => (
          <WorkExperienceItem key={index} data={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

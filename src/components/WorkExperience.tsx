import React from "react";

import { workExperienceData } from "../data/workExperienceData";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperience: React.FC = () => {
  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-8">
        Experience
      </div>

      <div className="space-y-6">
        {workExperienceData.map((experience, index) => (
          <WorkExperienceItem key={index} data={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

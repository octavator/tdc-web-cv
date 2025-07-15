import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { workExperienceData } from "../data/workExperienceData";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperience: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6">
      <div className="section-title text-xl font-bold mb-4">Experience</div>

      {workExperienceData.map((experience, index) => (
        <WorkExperienceItem key={index} data={experience} />
      ))}
    </div>
  );
};

export default WorkExperience;

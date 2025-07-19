import React from "react";

const CoursesTraining: React.FC = () => {
  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-light-grey border-b border-cv-secondary my-2 pb-2">
        Formations
      </div>

      <div className="xp-block education-block mb-3">
        <div className="xp-establishment text-base font-bold text-cv-secondary mb-1 flex items-center">
          <span className="xp-client-name">SecNum académie</span>
          <div className="xp-extra-infos ml-3 text-cv-light-grey text-xs flex justify-between flex-1">
            <div className="xp-timerange">2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTraining;

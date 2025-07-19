import React from "react";

const CoursesTraining: React.FC = () => {
  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-8">
        Executive Development
      </div>

      <div className="space-y-4">
        <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
          <div className="xp-establishment flex items-start justify-between">
            <div className="xp-client-name text-lg font-semibold text-cv-secondary">
              VP Engineering Leadership Program
            </div>
            <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
              <div className="xp-timerange mb-1">2024</div>
              <div className="xp-location text-xs">
                Tech Leadership Institute
              </div>
            </div>
          </div>
        </div>

        <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
          <div className="xp-establishment flex items-start justify-between">
            <div className="xp-client-name text-lg font-semibold text-cv-secondary">
              Fintech Architecture & Regulation
            </div>
            <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
              <div className="xp-timerange mb-1">2023</div>
              <div className="xp-location text-xs">
                Financial Innovation Academy
              </div>
            </div>
          </div>
        </div>

        <div className="xp-block education-block bg-white rounded-lg p-5 shadow-sm border border-gray-100 mb-4 border-l-4 border-l-cv-accent">
          <div className="xp-establishment flex items-start justify-between">
            <div className="xp-client-name text-lg font-semibold text-cv-secondary">
              SecNum Académie - Cybersecurity
            </div>
            <div className="xp-extra-infos text-cv-light-grey text-sm font-medium flex flex-col items-end">
              <div className="xp-timerange mb-1">2023</div>
              <div className="xp-location text-xs">ANSSI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTraining;

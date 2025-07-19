import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

interface Course {
  title: string;
  year: string;
  organization: string;
}

const CoursesTraining: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const courses: Course[] = [
    {
      title: "Management",
      year: "2025",
      organization: "Chapters",
    },
    {
      title: "Intervenant FIAB",
      year: "2024-2025",
      organization: "IMT Atlantique",
    },
    {
      title: "Cybersécurité",
      year: "2023",
      organization: "ANSSI",
    },
    {
      title: "Proficiency in English (C2)",
      year: "2011",
      organization: "Cambridge University, UK",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
      <div className="section-title text-lg font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-8 tracking-wide">
        {isFrench ? "Formation Continue" : "Continuing Education"}
      </div>
      <div className="space-y-3">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

const CourseItem: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-semibold text-cv-dark-grey">
          {course.title}
        </div>
        <div className="text-xs font-bold text-cv-primary">
          {course.year}
        </div>
      </div>
      <div className="text-xs text-cv-light-grey">
        {course.organization}
      </div>
    </div>
  );
};

export default CoursesTraining;

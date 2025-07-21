import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

interface Course {
  title: { french: string; english: string };
  year: string;
  organization: string;
}

const CoursesTraining: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  const courses: Course[] = [
    {
      title: { french: "Management", english: "Management" },
      year: "2025",
      organization: "Chapters",
    },
    {
      title: { french: "Intervenant FIAB", english: "FIAB Trainor" },
      year: "2024-2025",
      organization: "IMT Atlantique",
    },
    {
      title: { french: "Cybersécurité", english: "Cybersecurity" },
      year: "2023",
      organization: "ANSSI",
    },
    {
      title: { french: "Proficiency in English (C2)", english: "Proficiency in English (C2)" },
      year: "2011",
      organization: "Cambridge University, UK",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg p-4 border border-gray-100 mb-4">
      <div className="section-title text-base font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-4 tracking-wide">
        {isFrench ? "Formation Continue" : "Continuing Education"}
      </div>
      <div className="space-y-2">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

const CourseItem: React.FC<{ course: Course }> = ({ course }) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="flex flex-col mb-3">
      <div className="flex items-center justify-between mb-0.5">
        <div className="text-sm font-semibold text-cv-dark-grey">
          {isFrench ? course.title.french : course.title.english}
        </div>
        <div className="text-xs font-bold text-cv-primary text-end">
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

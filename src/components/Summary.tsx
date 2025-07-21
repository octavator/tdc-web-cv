import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const Summary: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="summary bg-gradient-to-r from-cv-primary to-cv-secondary text-white p-3 mb-2 rounded-xl">
      <h1
        className={`text-2xl font-bold mb-1 text-white tracking-tight ${isCensored ? "blur-md select-none" : ""}`}
      >
        Théophile de Cagny
      </h1>
      <h3 className="summary-subtitle text-base font-bold mb-1 text-blue-100 block">
        {isFrench
          ? "Solutions Architect & Tech Leader"
          : "Solutions Architect & Tech Leader"}
      </h3>
      <div className="summary-resume text-sm text-blue-50 leading-snug max-w-4xl">
        {isFrench
          ? "Solutions Architect expérimenté ayant dirigé une équipe de 18 développeurs et supervisé architecturalement 20+ ingénieurs sur des projets stratégiques CAC40. Expert en systèmes critiques haute disponibilité et transformation digitale. Je combine expertise technique approfondie en Elixir/React/DevOps et leadership d'équipe pour créer des solutions durables et performantes."
          : "Experienced Solutions Architect who led a 18-developer team and architecturally supervised 20+ engineers on strategic CAC40 projects. Expert in critical high-availability systems and digital transformation. I combine deep technical expertise in Elixir/React/DevOps and team leadership to create sustainable, high-performance solutions."}
      </div>
    </div>
  );
};

export default Summary;

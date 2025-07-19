import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const Summary: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="summary bg-gradient-to-r from-cv-primary to-cv-secondary text-white p-5 mb-4 rounded-xl shadow-lg">
      <h1
        className={`text-3xl font-bold mb-2 text-white tracking-tight ${isCensored ? "blur-md select-none" : ""}`}
      >
        Théophile de Cagny
      </h1>
      <h3 className="summary-subtitle text-lg font-medium mb-3 text-blue-100 block">
        {isFrench
          ? "Solutions Architect & Tech Leader • CTO Ready"
          : "Solutions Architect & Tech Leader • CTO Ready"}
      </h3>
      <div className="summary-resume text-base text-blue-50 leading-relaxed max-w-4xl">
        {isFrench
          ? "Solutions Architect expérimenté ayant dirigé une équipe de 15 développeurs et supervisé architecturalement 20+ ingénieurs sur des projets stratégiques CAC40. Expert en systèmes critiques haute disponibilité et transformation digitale. Je combine expertise technique approfondie en Elixir/React/DevOps et leadership d'équipe pour créer des solutions durables et performantes. Passionné par l'innovation tech au service de l'impact positif."
          : "Experienced Solutions Architect who led a 15-developer team and architecturally supervised 20+ engineers on strategic CAC40 projects. Expert in critical high-availability systems and digital transformation. I combine deep technical expertise in Elixir/React/DevOps and team leadership to create sustainable, high-performance solutions. Passionate about tech innovation for positive impact."}
      </div>
    </div>
  );
};

export default Summary;

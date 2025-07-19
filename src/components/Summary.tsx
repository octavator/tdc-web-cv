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
      <div className="summary-resume text-sm text-blue-50 leading-relaxed max-w-4xl">
        {isFrench
          ? "Solutions Architect avec équipe de 15 développeurs sur projets CAC40. Expert systèmes critiques et transformation digitale. Elixir/React/DevOps + leadership pour solutions durables et performantes."
          : "Solutions Architect leading 15-developer team on CAC40 projects. Expert in critical systems and digital transformation. Elixir/React/DevOps + leadership for sustainable, high-performance solutions."}
      </div>
    </div>
  );
};

export default Summary;

import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const Summary: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="summary text-center my-6">
      <h1
        className={`text-3xl font-bold mb-2 ${isCensored ? "blur-md select-none" : ""}`}
      >
        Théophile de Cagny
      </h1>
      <h3 className="summary-subtitle text-xl font-semibold mb-2">
        {isFrench
          ? "Developpeur Full-stack Sr. |  Program Manager | Sr. Engineering Project Manager - Architecte Solution"
          : "Sr. Engineering Project Manager | Program Manager |Sr. Full-stack Engineer | Solutions Architect"}
      </h3>
      <div className="summary-resume text-base text-gray-700">
        {isFrench
          ? "Fort de tout ce que j'ai appris dans la logistique, je cherche à me" +
            "ré-orienter vers le secteur à impact positif pour mettre mon éventail de compétences," +
            "ma passion et mon engagement au service du bien commun et de la société."
          : ""}
      </div>
    </div>
  );
};

export default Summary;

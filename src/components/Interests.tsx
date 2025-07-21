import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import InterestItem from "./InterestItem";
import {
  faMeteor,
  faChessBoard,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Interests: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="w-full bg-white rounded-lg p-4 border border-gray-100 mb-4">
      <div className="section-title text-base font-bold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-4 tracking-wide">
        {isFrench ? "Centres d'Intérêt" : "Interests"}
      </div>
      <InterestItem
        frenchText="IA & Open Source"
        englishText="AI & Open Source"
        icon={faMeteor}
      />

      <InterestItem
        frenchText="Échecs & Stratégie"
        englishText="Chess & Strategy"
        icon={faChessBoard}
      />

      <InterestItem
        frenchText="Transition Énergétique"
        englishText="Energy Transition"
        icon={faBook}
      />

      {/*  Pretty much everybody likes music

        <InterestItem frenchText="Musique" englishText="Music" icon={faMusic} />

      */}
    </div>
  );
};

export default Interests;

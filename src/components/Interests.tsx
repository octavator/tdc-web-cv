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
    <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
      <div className="section-title text-lg font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-3 mb-6">
        {isFrench ? "Engagements" : "Leadership & Impact"}
      </div>
      <InterestItem
        frenchText="Finance Durable & Green Tech"
        englishText="Sustainable Finance & Green Tech"
        icon={faMeteor}
      />

      <InterestItem
        frenchText="Innovation Blockchain Impact"
        englishText="Blockchain for Positive Impact"
        icon={faChessBoard}
      />

      <InterestItem
        frenchText="Rénovation Énergétique"
        englishText="Energy-Efficient Home Renovation"
        icon={faBook}
      />

      {/*  Pretty much everybody likes music

        <InterestItem frenchText="Musique" englishText="Music" icon={faMusic} />

      */}
    </div>
  );
};

export default Interests;

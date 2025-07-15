import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeteor,
  faChessBoard,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useLanguageStore } from "../store/useLanguageStore";

interface InterestItemProps {
  frenchText: string;
  englishText: string;
  icon: IconDefinition;
}

const Interests: React.FC = () => {
  return (
    <div className="my-6">
      <div className="section-title text-xl font-bold mb-4">Hobbies</div>
      <InterestItem
        frenchText="Physique / Astronomie"
        englishText="Physics / Astronomy"
        icon={faMeteor}
      />

      <InterestItem
        frenchText="Echecs"
        englishText="Chess"
        icon={faChessBoard}
      />

      <InterestItem
        frenchText="Philosophie"
        englishText="Philosophy"
        icon={faBook}
      />

      {/*  Pretty much everybody likes music

        <InterestItem frenchText="Musique" englishText="Music" icon={faMusic} />

      */}
    </div>
  );
};

const InterestItem: React.FC<InterestItemProps> = ({
  frenchText,
  englishText,
  icon,
}) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="interest-element flex items-center mb-2">
      <div className="interest-icon mr-2">
        <FontAwesomeIcon icon={icon} className="text-blue-600" />
      </div>
      <div className="interest-text">{isFrench ? frenchText : englishText}</div>
    </div>
  );
};

export default Interests;

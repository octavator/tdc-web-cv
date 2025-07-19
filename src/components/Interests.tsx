import React from "react";
import InterestItem from "./InterestItem";
import {
  faMeteor,
  faChessBoard,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Interests: React.FC = () => {
  return (
    <div className="my-6 w-full">
      <div className="section-title text-lg font-bold uppercase text-cv-light-grey border-b border-cv-secondary my-2 pb-2">
        Hobbies
      </div>
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

export default Interests;

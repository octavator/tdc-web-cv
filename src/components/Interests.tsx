import React from "react";
import InterestItem from "./InterestItem";
import {
  faMeteor,
  faChessBoard,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

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

export default Interests;

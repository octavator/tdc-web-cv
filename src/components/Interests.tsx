import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faChessBoard, faBook } from "@fortawesome/free-solid-svg-icons";
import { useLanguageStore } from '../store/useLanguageStore';

const Interests: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="my-6">
      <div className="section-title text-xl font-bold mb-4">Hobbies</div>
      {/*
      <div className="interest-element flex items-center mb-2">
        <div className="interest-icon mr-2">
          <FontAwesomeIcon icon={faMusic} className="text-blue-600" />
        </div>
        <div className="interest-text">
          {isFrench ? "Musique" : "Music"}
        </div>
      </div>
      */}
      <div className="interest-element flex items-center mb-2">
        <div className="interest-icon mr-2">
          <FontAwesomeIcon icon={faMeteor} className="text-blue-600" />
        </div>
        <div className="interest-text">
          {isFrench ? "Astronomie" : "Astronomy"}
        </div>
      </div>
      <div className="interest-element flex items-center mb-2">
        <div className="interest-icon mr-2">
          <FontAwesomeIcon icon={faChessBoard} className="text-blue-600" />
        </div>
        <div className="interest-text">
          {isFrench ? "Echecs" : "Chess"}
        </div>
      </div>
      <div className="interest-element flex items-center mb-2">
        <div className="interest-icon mr-2">
          <FontAwesomeIcon icon={faBook} className="text-blue-600" />
        </div>
        <div className="interest-text">
          {isFrench ? "Philosophie" : "Philosophy"}
        </div>
      </div>
    </div>
  );
};

export default Interests; 
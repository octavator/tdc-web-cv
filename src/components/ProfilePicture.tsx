import React from "react";
import profileImg from "../assets/cropped_photo_corpo_bg.jpg";
import { useCensoredStore } from "../store/useCensoredStore";

const ProfilePicture: React.FC = () => {
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="profile-picture mb-6 flex justify-center">
      <div className="relative">
        <img
          src={profileImg}
          alt="Profil"
          className={`rounded-xl w-48 h-48 object-cover shadow-lg border-4 border-white ring-4 ring-cv-primary/20 ${
            isCensored ? "blur-md select-none" : ""
          }`}
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-cv-primary/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default ProfilePicture;

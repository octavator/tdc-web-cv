import React from "react";
import profileImg from "../assets/cropped_photo_corpo_bg.jpg";
import { useCensoredStore } from "../store/useCensoredStore";

const ProfilePicture: React.FC = () => {
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    // @TODO: check image properties are alright for every screen size
    <div className="profile-picture flex justify-center my-6">
      <img
        src={profileImg}
        alt="Profil"
        className={`rounded-full w-40 h-40 object-cover border-4 border-blue-600 shadow-lg ${
          isCensored ? "blur-md select-none" : ""
        }`}
      />
    </div>
  );
};

export default ProfilePicture;

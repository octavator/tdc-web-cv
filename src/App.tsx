import React from "react";
import ModeSwitcher from "./components/ModeSwitcher";
import Summary from "./components/Summary";
import ProfilePicture from "./components/ProfilePicture";
import PersonalInfos from "./components/PersonalInfos";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Interests from "./components/Interests";
import TechnicalSkills from "./components/TechnicalSkills";
import CoursesTraining from "./components/CoursesTraining";

function App() {
  return (
    <div className="App p-4">
      <ModeSwitcher />
      <Summary />
      <ProfilePicture />
      <PersonalInfos />
      <Education />
      <WorkExperience />
      <Interests />
      <TechnicalSkills />
      {/* <CoursesTraining /> */}
    </div>
  );
}

export default App;

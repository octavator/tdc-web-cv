import React from "react";
import ModeSwitcher from "./components/ModeSwitcher";
import Summary from "./components/Summary";
import ProfilePicture from "./components/ProfilePicture";
import PersonalInfos from "./components/PersonalInfos";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Interests from "./components/Interests";
import TechnicalSkills from "./components/TechnicalSkills";
// import CoursesTraining from "./components/CoursesTraining";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="fixed top-4 right-4 z-10">
        <ModeSwitcher />
      </div>

      <div className="container">
        <div className="flex-column">
          <ProfilePicture />
          <PersonalInfos />
          <TechnicalSkills />
          <Education />
          {/* <CoursesTraining /> */}
          <Interests />
        </div>
        <div className="flex-column main-column">
          <Summary />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}

export default App;

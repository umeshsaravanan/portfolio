import React from "react";
import Header from "./Component/Header/Header";
import TopContainer from "./Component/TopContainer/TopContainer";
import SkillContainer from "./Component/SkillContainer/SkillContainer";
import ProjectContainer from "./Component/ProjectContainer/ProjectContainer";
import "./App.css"
import ExperienceContainer from "./Component/ExperienceContainer/ExperienceContainer";
import Contact from "./Component/Contact/Contact";


const App=()=>{
  return(
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>
    </div>
  )
}
export default App;
import React from "react"; // Note the use of styles
import Name from "./components/home/kids/Name";
import Intro from "./components/shared/Headings/HeadingPrimary";
import Banner from "./components/home/Banner";
// import TestRedux from "./components/home/TestRedux";
import Projects from "./components/home/projects/Projects";
import Skills from "./components/home/skills/Skills";
import WrapperServerSkills from "./components/home/skills/WrapperServerSkills";
import MoreProjects from "./components/home/more-projects/MoreProjects";
import OtherWorks from "./components/home/other-works/OtherWorks";

export default async function Page() {
  return (
    <div
      id="landing-page"
      className=" scroll-container hide-scrollbar overflow-scroll"
      style={{ color: "white" }}
    >
      {" "}
      {/* <HeightHome /> */}
      <Banner />
      <Projects />
      <WrapperServerSkills />
      <MoreProjects />
      <OtherWorks />
    </div>
  );
}

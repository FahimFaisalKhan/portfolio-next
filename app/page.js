import React from "react" // Note the use of styles
import Name from "./components/home/banner/kids/Name"
import Intro from "./components/shared/Headings/HeadingPrimary"
import Banner from "./components/home/banner/Banner"
// import TestRedux from "./components/home/TestRedux";
import Projects from "./components/home/projects/Projects"
import Skills from "./components/home/skills/Skills"
import WrapperServerSkills from "./components/home/skills/WrapperServerSkills"
import MoreProjects from "./components/home/more-projects/MoreProjects"
import OtherWorks from "./components/home/other-works/OtherWorks"
import WrapperPageScroll from "./wrapper-page-scroll"
import LanguagesFrameWorks from "./components/home/lanuages-frameworks/LanguagesFrameWorks"
import Footer from "./components/shared/Footer/Footer"

export default async function Page() {
    const lanFrames = [
        {
            title: "JavaScript",
            usage: [
                "language",
                "Frontend web-development",
                "Backend web-development",
            ],
            details:
                "I implement interactive website functionalities using JavaScript, enabling user interactions with the server and database. With Node.js, I build efficient servers that communicate seamlessly with databases like MongoDB.",
        },
        {
            title: "Python",
            usage: [
                "language",
                "Backend web-development",
                "Data analysis",
                "Data visualization",
                "Data management",
            ],
            details:
                "I build efficient backend servers with Python frameworks, manage databases like PostgreSQL, and create predictive ML models, turning raw data into actionable insights.",
        },
        {
            title: "React",
            usage: [
                "Library",
                "Frontend web-development",
                "Single Page Application",
            ],
            details:
                "I create efficient single-page applications (SPAs) with ReactJS, using npm packages to deliver a smooth, user-friendly experience.",
        },
        {
            title: "Next.js",
            usage: ["Framework", "Frontend/Back web-development", "SSR/SSG"],
            details:
                "My expertise in Next.js allows me to build high-quality web applications with React, leveraging both server-side rendering (SSR) and static site generation (SSG) for optimal performance.",
        },
    ]
    return (
        <>
            {" "}
            {/* <HeightHome /> */} <Banner />
            <Projects />
            <WrapperServerSkills />
            <MoreProjects />
            <OtherWorks />
            <LanguagesFrameWorks data={lanFrames} />
        </>
    )
}

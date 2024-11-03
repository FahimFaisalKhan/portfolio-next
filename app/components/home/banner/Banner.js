import React from "react"
import Name from "./kids/Name"

import Tags from "./kids/Tags"
import IntroText from "./kids/IntroText"
import SectionWrapper from "./kids/SectionWrapper"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"
import Image from "next/image"
import { me } from "@/public/images"

const interests = [
    "Web Development",

    "Web Scrapping",
    "Machine Learning",
    "Data Analysis",
    "A.I",
    "Database Management",
    "Automation Scripts",
]

const Banner = () => {
    return (
        <SectionWrapper aria-hidden="true" Wrapper>
            <div className="banner">
                <div className="banner-left">
                    <div className="mt-2 ">
                        <Name />
                    </div>
                    <div className="mt-2 ">
                        <HeadingPrimary spread={true} text={"WELCOME"} />
                    </div>
                    <IntroText />
                    <Tags interests={interests} />
                </div>
                <div className="banner-right  ">
                    <Image
                        // style={{ height: "100%", width: "auto" }}
                        className="img-responsive fade-out-bottom"
                        src={me}
                        alt="Fahim Faisal Khan"
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Banner

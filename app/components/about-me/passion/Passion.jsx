import React from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"
import Banner from "../banner/Banner"
import { meGuitar } from "@/public/images"

const Passion = () => {
    return (
        <div style={{ background: "var(--base)" }}>
            {" "}
            <section
                aria-hidden="true"
                className="section width-control"
                id="passion"
            >
                <div className="passion">
                    {" "}
                    <div style={{ textAlign: "center" }}>
                        <HeadingPrimary text={"Passion"} />
                    </div>
                    <Banner
                        section={"passion"}
                        pOne="My passion for technology is intertwined with a love for creativity, exploration, and constant learning. Just as I enjoy playing the guitar, I find rhythm and harmony in coding, where each line and structure contribute to a cohesive, engaging experience. At Niiu Digital, I’ve come to appreciate the impact of user-centered design, and I aim to create applications that resonate with users much like a favorite melody or a well-told story."
                        pTwo={
                            "Beyond development, my interests in travel, reading, and exploring new technologies inspire me to approach challenges from fresh perspectives. Each journey, book, or song broadens my understanding, which I bring back to my work in web development. For me, creating digital solutions is about weaving diverse experiences into something meaningful and accessible, making technology a valuable companion on users' journeys."
                        }
                        img={meGuitar}
                        alt={"Fahim Guitar"}
                    />
                </div>
            </section>
        </div>
    )
}

export default Passion

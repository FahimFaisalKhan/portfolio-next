import React from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"
import LanfFrameCard from "./kids/LanfFrameCard"

const LanguagesFrameWorks = ({ data }) => {
    return (
        <div style={{ background: "var(--base2)" }}>
            <section
                aria-hidden="true"
                className="section width-control"
                id="languages-frameworks"
            >
                <div style={{ width: "100%" }}>
                    {" "}
                    <div
                        style={{
                            marginBottom: "5rem",
                            marginTop: "3rem",
                            textAlign: "center",
                        }}
                    >
                        <HeadingPrimary spread={false} text={"Techstack"} />
                    </div>
                    <div className="lan-frame">
                        {data.map((lanframe, index) => (
                            <LanfFrameCard
                                key={lanframe.title}
                                data={lanframe}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LanguagesFrameWorks

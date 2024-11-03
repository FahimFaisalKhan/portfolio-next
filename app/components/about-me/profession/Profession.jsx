"use client"
import React, { useEffect, useState } from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"
import { useObserver } from "@/hooks/useObserver"

const Profession = ({ data, pOne, pTwo, title, id, pThree }) => {
    const { isIntersecting } = useObserver(id, 0.3)
    // useEffect(() => {
    //     console.log("intersecting", isIntersecting)
    // }, [isIntersecting])
    const [unit, setUnit] = useState(null)
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window?.screen?.availWidth > 992) {
                setUnit(5)
            } else {
                setUnit(3.5)
            }
        }
    }, [])
    return (
        <div style={{ background: "var(--base2)" }}>
            {" "}
            <section
                aria-hidden="true"
                className="section width-control"
                id={id}
            >
                <div className="profession">
                    {" "}
                    <div style={{ textAlign: "center" }}>
                        <HeadingPrimary text={title} />
                    </div>
                    <div className="profession-content ">
                        <div className="profession-content-description">
                            {" "}
                            <p className="para-base">{pOne}</p>
                            <p className="para-base">{pTwo}</p>
                            <p className="para-base">{pThree}</p>
                        </div>
                        <div className="profession-content-positions">
                            {data.map(
                                ({ company, des, joined, left }, index) => (
                                    <div
                                        key={company}
                                        className={`profession-content-positions-role  ${
                                            "class-" + index
                                        } ${
                                            (index + 1) % 2 == 0
                                                ? "profession-content-positions-role-straight"
                                                : "profession-content-positions-role-reverse"
                                        }`}
                                        style={{
                                            height: left
                                                ? `${(left - joined) * unit}rem`
                                                : window?.screen?.availWidth >
                                                  992
                                                ? "5rem"
                                                : "3.5rem",
                                        }}
                                    >
                                        {" "}
                                        <div className="profession-content-positions-role-left">
                                            {" "}
                                            <p
                                                className={`profession-content-positions-role-left-title ${
                                                    index % 2 == 0
                                                        ? "text-start"
                                                        : "text-end"
                                                } `}
                                            >
                                                <span> {company}</span>
                                            </p>
                                            <i
                                                className={`profession-content-positions-role-left-designation ${
                                                    index % 2 == 0
                                                        ? "text-start"
                                                        : "text-end"
                                                } `}
                                            >
                                                {des}
                                            </i>
                                        </div>
                                        <div className="profession-content-positions-role-progress">
                                            <div
                                                style={{
                                                    transitionDelay: `${
                                                        0.6 * index
                                                    }s`,
                                                }}
                                                className={`profession-content-positions-role-progress-circle ${
                                                    isIntersecting
                                                        ? "bg-pos-top"
                                                        : ""
                                                }`}
                                            ></div>
                                            <div
                                                style={{
                                                    transitionDelay: `${
                                                        1 * index
                                                    }s`,
                                                }}
                                                className={`profession-content-positions-role-progress-line ${
                                                    isIntersecting
                                                        ? "bg-pos-top bg-pos-top-2"
                                                        : ""
                                                }`}
                                            ></div>
                                        </div>
                                        <div className="profession-content-positions-role-right">
                                            {" "}
                                            <p
                                                className={`profession-content-positions-role-right-year ${
                                                    index % 2 == 0
                                                        ? "text-end"
                                                        : "text-start"
                                                }  `}
                                            >
                                                {joined}
                                            </p>
                                            <p
                                                className={`${
                                                    index % 2 == 0
                                                        ? "text-end"
                                                        : "text-start"
                                                } `}
                                            >
                                                <i className="profession-content-positions-role-right-year-left">
                                                    {" "}
                                                    {left ? left : ""}
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                            {/* <div
                                className="profession-content-positions-role profession-content-positions-role"
                                style={{ height: "10rem" }}
                            >
                                {" "}
                                <div className="profession-content-positions-role-left">
                                    <p className="profession-content-positions-role-left-title">
                                        NiiU Digital
                                    </p>
                                    <i className="profession-content-positions-role-left-designation">
                                        Full-STack Developer
                                    </i>
                                </div>
                                <div className="profession-content-positions-role-progress">
                                    <div
                                        className={`profession-content-positions-role-progress-circle ${
                                            isIntersecting ? "bg-pos-top" : ""
                                        }`}
                                    ></div>
                                    <div
                                        className={`profession-content-positions-role-progress-line ${
                                            isIntersecting ? "bg-pos-top" : ""
                                        }`}
                                    ></div>
                                </div>
                                <div className="profession-content-positions-role-right">
                                    <p className="profession-content-positions-role-right-uear">
                                        2022
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profession

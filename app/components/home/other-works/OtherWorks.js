"use client"
import React, { useEffect, useRef, useState } from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"

import OtherWork from "./kids/OtherWork"
import { useDispatch, useSelector } from "react-redux"
import { setCurSection } from "@/redux/slieces/sectionsSlice"
import { useObserver } from "@/hooks/useObserver"
import Certificates from "./kids/cerificates/Certificates"
import ArcadeGames from "./kids/arc-games/ArcadeGames"

const otherWorksData = [
    {
        title: "certificates",
        name: "certification",
        text: "Achivements throughout my journey",
        component: <Certificates />,
    },
    {
        title: "Arcade Games",
        name: "games",
        text: "I developed some arcade games with Python.",
        component: <ArcadeGames />,
    },
    // {
    //     title: "CERTIFICATIONS",
    //     name: "certification",
    //     text: "Achivements throughout my journey",
    //     component: <Certificates />,
    // },

    // {
    //     title: "Web Scrapping",
    //     name: "scrapping",
    //     text: "Web scrapper programmes developed in Python.",
    // },
]
const OtherWorks = () => {
    const scrollableContainerRef = useRef(null)
    const { curPageSections, curSection } = useSelector(
        (state) => state.pageSections
    )
    const dispatch = useDispatch()
    const [scrolling, setScrolling] = useState(0)
    const { isIntersecting } = useObserver(scrollableContainerRef)
    const { isIntersecting: prevElemIntersecting } =
        useObserver("more-projects")
    const [scrollDir, setScrollDir] = useState(null)
    const [top, setTop] = useState(0)
    useEffect(() => {
        const scrollContainerElem = document.getElementById("home-page")
        const containerTop = scrollContainerElem.getBoundingClientRect().top
        setTop(containerTop)
    }, [])
    // useEffect(() => {
    //     const elem = document.querySelector(".scroll-container")
    //     // console.log(isIntersecting)

    //     if (isIntersecting) {
    //         elem.style.overflowY = "hidden"
    //         elem.scrollIntoView({ behaviour: "instant" })

    //         // const value = window
    //         //     .getComputedStyle(elem)
    //         //     .getPropertyValue("overflow-y")
    //         // console.log(value)
    //         //DETECT SCROLL DOWN , IF SCROLLS DOWN AFTER ELEM BEING HIDDEN TAKE TO NEXT CARD
    //     }
    // }, [isIntersecting])
    const [isStartofSticky, setIsstartofSticky] = useState(true)
    const [isEndOfStickyElement, setIsEndOfStickyElement] = useState(false)
    const handleScroll = (e) => {
        // console.log(e)
        const container = scrollableContainerRef.current
        const scrollPosition = container.scrollTop
        const scrollHeight = container.scrollHeight
        const clientHeight = container.clientHeight
        // console.log(scrollHeight - clientHeight, scrollPosition)
        setScrolling(scrollPosition)
        // Check if the user has scrolled to the end of the sticky element
        if (scrollHeight - clientHeight === scrollPosition) {
            setIsEndOfStickyElement(true)
        } else {
            setIsEndOfStickyElement(false)
        }
        if (scrollPosition === 0) {
            setIsstartofSticky(true)
        } else {
            setIsstartofSticky(false)
        }
    }
    // useEffect(() => {
    //     const elem = document.querySelector(".scroll-container")
    //     console.log(isEndOfStickyElement, isStartofSticky)
    //     // if (!isEndOfStickyElement || isStartofSticky) {
    //     //     elem.style.overflowY = "scroll"
    //     // } else {
    //     //     elem.style.overflowY = "hidden"
    //     // }
    //     console.log(scrollDir, isEndOfStickyElement, isStartofSticky)

    //     if (
    //         (scrollDir === "DOWN" && isEndOfStickyElement) ||
    //         (scrollDir === "UP" && isStartofSticky)
    //     ) {
    //         elem.style.overflowY = "scroll"
    //     }
    //     const nextElem = document.getElementById("dummy")
    //     const prevElem = document.getElementById("more-projects")
    //     // if (scrollDir === "DOWN" && isEndOfStickyElement) {
    //     //     nextElem.scrollIntoView({ behaviour: "smooth" })
    //     // }
    //     // if (scrollDir === "UP" && isStartofSticky) {
    //     //     prevElem.scrollIntoView({ behaviour: "smooth" })
    //     // }
    // }, [isStartofSticky, isEndOfStickyElement, scrollDir])
    useEffect(() => {
        const scrollContainerElem = document.getElementById("landing-page")
        console.log("exec")
        console.log(isIntersecting, prevElemIntersecting, "visibility check")
        if (scrollContainerElem) {
            if (isIntersecting) {
                setTimeout(() => {
                    scrollContainerElem?.classList.remove("overflow-y-scroll")
                    scrollContainerElem?.classList.add("overflow-y-disabled")
                }, 200)
            } else {
                setTimeout(() => {
                    scrollContainerElem?.classList.remove("overflow-y-disabled")
                    scrollContainerElem?.classList.add("overflow-y-scroll")
                }, 200)
            }
        }
    }, [isIntersecting, prevElemIntersecting])
    return (
        <div
            style={{
                background: "var(--base)",
            }}
        >
            <section
                aria-hidden="true"
                id="other-works"
                className="section "
                style={{ position: "relative" }}
            >
                <div
                    className="other-works-cards  "
                    ref={scrollableContainerRef}
                    onScroll={handleScroll}
                    onWheel={(e) => {
                        console.log(e.deltaY)
                        if (
                            e.deltaY < 0 &&
                            isStartofSticky
                            //  &&
                            // window?.screen?.availWidth > 992
                        ) {
                            setScrollDir("UP")
                            const prevElem =
                                document.getElementById("more-projects")
                            // console.log(
                            //     "screen width",
                            //     window.screen.availWidth
                            // )
                            prevElem.scrollIntoView({ behaviour: "smooth" })
                        } else if (
                            e.deltaY > 0 &&
                            isEndOfStickyElement
                            //  &&
                            // window?.screen?.availWidth > 992
                        ) {
                            setScrollDir("DOWN")
                            const nextElem = document.getElementById(
                                "languages-frameworks"
                            )
                            nextElem.scrollIntoView({ behaviour: "smooth" })
                        }
                    }}
                    id="parent"
                    style={{}}
                >
                    {/* <div
                            style={{}}
                            className="other-works-cards-indiv other-works-cards-indiv-scrapping width-control"
                        >
                            ok bhai
                        </div>
                        <div
                            style={{}}
                            className="other-works-cards-indiv other-works-cards-indiv-games width-control"
                        >
                            jiaga
                        </div>
                        <div
                            style={{}}
                            className="other-works-cards-indiv other-works-cards-indiv-lames width-control"
                        >
                            jiaga
                        </div> */}
                    {otherWorksData.map(
                        ({ name, text, title, component }, index) => (
                            <OtherWork
                                key={index}
                                name={name}
                                text={text}
                                index={index}
                                scrolling={scrolling}
                                title={title}
                                component={component}
                                setIsstartofSticky={setIsstartofSticky}
                                scrollDir={scrollDir}
                                top={top}
                            >
                                {component}
                            </OtherWork>
                        )
                    )}
                </div>
            </section>
        </div>
    )
}

export default OtherWorks

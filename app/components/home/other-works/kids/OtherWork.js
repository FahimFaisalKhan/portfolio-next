"use client"
import HeadingPrimary from "@/app/components/shared/Headings/HeadingPrimary"
import { useObserver } from "@/hooks/useObserver"
import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

export default function OtherWork({
    name,
    text,
    index,
    scrolling,

    title,
    children,
    setIsstartofSticky,
    scrollDir,
    top,
}) {
    const workRef = useRef(null)
    const { isIntersecting } = useObserver(workRef)
    const scrollDirection = useSelector(
        (state) => state.trackScroll.scrollDirection
    )
    function calculatePercentage(x, index) {
        // console.log(x)
        if (x < 0 || x > 1496) {
            return null // Handle out-of-range inputs
        }
        const maxScale = 1.25 // Maximum scale when scrollTop is 0
        const minScale = 1 + index / 100 // Minimum scale when scrollTop is 1496
        const scaleFactor = minScale - maxScale
        const maxScrollTop = 1496
        const scale = minScale - (x / maxScrollTop) * scaleFactor
        return scale
    }
    // useEffect(() => {
    //     console.log(index + 1, isIntersecting, scrollDir)

    //     if (scrollDir === "DOWNMOVE" && isIntersecting && index === 1) {
    //         console.log("move to next section")
    //     } else if (scrollDir === "UPMOVE" && isIntersecting && index === 0) {
    //         console.log("move to previous section")
    //     }
    // }, [isIntersecting, index, scrollDir])
    // useEffect(() => {
    //     console.log(index)
    //     if (scrollDirection === "DOWN" && isIntersecting && index === 2) {
    //         console.log("move to next section")
    //     }
    //     if (scrollDirection === "UP" && isIntersecting && index === 0) {
    //         console.log("move to previous section")
    //     }
    // }, [scrollDirection, isIntersecting])
    // useEffect(() => {
    //     const ref = workRef.current

    //     // console.log(ref.offsetTop, index)
    //     // console.log(ref.offsetTop)
    //     // console.log(index === 0 && ref.offsetTop === 96)
    //     // if (index === 0 && ref.offsetTop === 96) {
    //     //     setIsstartofSticky(true)
    //     // }
    //     // if (index === 0 && ref.offsetTop !== 96) {
    //     //     setIsstartofSticky(false)
    //     // }
    //     console.log("exing scale")
    //     const scale = calculatePercentage(ref.offsetTop)
    //     console.log("exing scale", ref.offsetTop, index)
    //     ref.style.transform = `scale(${scale})`
    // }, [workRef, scrolling, index])
    const handleScroll = () => {
        const ref = workRef.current
        const scale = calculatePercentage(ref.offsetTop)
        ref.style.transform = `scale(${scale})`
        console.log("exing scroll")
    }
    useEffect(() => {
        const ref = workRef.current // Replace with the ref of your target element

        const elementTop = ref.getBoundingClientRect().top
        // const distanceFromTop = elementTop - containerTop

        const scale = calculatePercentage(elementTop, index)
        ref.style.transform = `scale(${scale})`

        // Log initial proximity to top and also whenever the container scrolls

        // const container = document.getElementById("landing-page")
        // // Attach the scroll event listener to log proximity as the container scrolls
        // container.addEventListener("scroll", logProximityToTop)

        // // Cleanup event listener on component unmount
        // return () => container.removeEventListener("scroll", logProximityToTop)
    }, [scrolling])
    useEffect(() => {
        const ref = workRef.current
        const increment = 5
        if (index !== 0) ref.style.top = `${index + increment}rem`
    }, [])
    return (
        <div
            onScroll={handleScroll}
            ref={workRef}
            className={`other-works-cards-indiv other-works-cards-indiv-${name} width-control`}
        >
            <div className="text-center ">
                <HeadingPrimary spread={false} text={title} />
            </div>
            <p
                className="heading-tertiary leading-2 mb-2 text-center mx-auto"
                style={{ width: "", color: "var(--quaternary)" }}
            >
                {text}
            </p>
            {children}
        </div>
    )
}

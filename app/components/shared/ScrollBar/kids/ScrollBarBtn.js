"use client"
import { useObserver } from "@/hooks/useObserver"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

const ScrollBarBtn = ({ id, index }) => {
    const { isIntersecting } = useObserver(id)

    const [secIntersecting, setSecIntersecting] = useState(false)
    const scrollbtnref = useRef(index)
    const curPageSecIds = useSelector(
        (state) => state.pageSections.curPageSections
    )
    const visibleSectionId = useSelector(
        (state) => state.pageSections.curSection
    )
    const handleClick = (e) => {
        e.preventDefault()

        const element = document.getElementById(id)

        element.scrollIntoView({ behavior: "smooth" })

        // scrollbtnref.current.classList.remove("scrollbar-btn-active");
        // setTimeout(() => {
        //   scrollbtnref.current.classList.add("scrollbar-btn-active");
        // }, 500);
    }
    // useEffect(() => {
    //   if (index % 2 === 1 && isIntersecting) {
    //     const bodyElem = document?.getElementById("main-body");
    //     bodyElem.style.background = "var(--base2)";
    //   } else if (index % 2 === 0 && isIntersecting) {
    //     const bodyElem = document?.getElementById("main-body");
    //     bodyElem.style.background = "var(--base)";
    //   }
    // }, [index, isIntersecting]);
    useEffect(() => {
        console.log("in", visibleSectionId, id)
    }, [visibleSectionId, id])
    return (
        <button
            onClick={handleClick}
            ref={scrollbtnref}
            className={`scrollbar-btn  ${
                isIntersecting ? "scrollbar-btn-active" : ""
            }`}
        ></button>
    )
}

export default ScrollBarBtn

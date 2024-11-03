"use client"
import React, { useEffect, useState } from "react"
import ScrollBarBtn from "./kids/ScrollBarBtn"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"

const ScrollBar = () => {
    const pathname = usePathname()
    const [sectionIds, setSectionIds] = useState([])
    const curPageSecIds = useSelector(
        (state) => state.pageSections.curPageSections
    )
    const visibleSectionId = useSelector(
        (state) => state.pageSections.curSection
    )
    // useEffect(() => {
    //     const sections = document.querySelectorAll(".section")
    //     // console.log(sections);
    //     // [...sections].forEach((sec) => console.log(sec.getAttribute("id")));

    //     const sectionIdsArray = Array.from(sections, (sec) =>
    //         sec.getAttribute("id")
    //     )
    //     // console.log(sectionIdsArray);
    //     sectionIdsArray.length && setSectionIds(sectionIdsArray)
    // }, [])
    useEffect(() => {
        console.log(curPageSecIds, visibleSectionId)
    }, [curPageSecIds, visibleSectionId])
    return (
        <div className="scrollbar z-high">
            {curPageSecIds.map((id, index) => (
                <ScrollBarBtn key={index} id={id} index={index} />
            ))}
        </div>
    )
}

export default ScrollBar

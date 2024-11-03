"use client"
import { setScrollDirection } from "@/redux/slieces/scrollSlice"
import { setCurSection, setSections } from "@/redux/slieces/sectionsSlice"
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "./components/shared/Footer/Footer"

export default function WrapperPageScroll({ children, id }) {
    const options = {
        // Your options here, for example:
        duration: 500,
        smooth: true,
    }
    const curPageSecIds = useSelector(
        (state) => state.pageSections.curPageSections
    )
    const visibleSectionId = useSelector(
        (state) => state.pageSections.curSection
    )
    const containerRef = useRef(null)

    // const [scrollDirection, setScrollDirection] = useState("NUTRAL")
    useEffect(() => {
        const scrollContainer = document.querySelector(".scroll-containerr")
    }, [])
    // useEffect(() => {

    //     const visElem = document.getElementById(visibleSectionId)
    //     visElem?.setAttribute("aria-hidden", "false")
    // }, [visibleSectionId])
    useEffect(() => {
        console.log(curPageSecIds, visibleSectionId)
    }, [curPageSecIds, visibleSectionId])
    const [dispatched, setDispatched] = useState(false)
    const dispatch = useDispatch()
    const handleScroll = (e) => {
        const scrollContainer = containerRef?.current
        const delta = e.deltaY

        if (delta > 0) {
            dispatch(setScrollDirection("DOWN"))
        } else if (delta < 0) {
            dispatch(setScrollDirection("UP"))
        }
        if (e.deltaY > 0 && !dispatched) {
            if (
                curPageSecIds.indexOf(visibleSectionId) <
                curPageSecIds.length - 1
            ) {
                dispatch(
                    setCurSection(
                        curPageSecIds[
                            curPageSecIds.indexOf(visibleSectionId) + 1
                        ]
                    )
                )
                const newVisbElem = document.getElementById(
                    curPageSecIds[curPageSecIds.indexOf(visibleSectionId) + 1]
                )
                setDispatched(true)
            }
        } else if (e.deltaY < 0 && !dispatched) {
            if (curPageSecIds.indexOf(visibleSectionId) > 0) {
                dispatch(
                    setCurSection(
                        curPageSecIds[
                            curPageSecIds.indexOf(visibleSectionId) - 1
                        ]
                    )
                )
                const newVisibleElem = document.getElementById(
                    curPageSecIds[curPageSecIds.indexOf(visibleSectionId) - 1]
                )
                setDispatched(true)
            }
        }

        setDispatched(false)

        // if (e.deltaY < 0) {
        //     scrollContainer.scrollBy({ top: -window.innerHeight, behavior: "smooth", })
        // } else if (e.deltaY > 0) {
        //     scrollContainer.scrollBy({ top: window.innerHeight, behavior: "smooth", })
        // }
    }

    // useEffect(() => {

    //     const prevVisibleElem = document.getElementById(visibleSectionId)
    //     setTimeout(() => {
    //         if (scrollDirection === "DOWN") {

    //         }
    //         if (scrollDirection === "UP") {
    //         }
    //     }, 1000)
    // }, [scrollDirection])

    return (
        <div
            ref={containerRef}
            onWheelCapture={(e) => {
                handleScroll(e)
            }}
            id={id}
            className=" scroll-container hide-scrollbar overflow-y-scroll"
            style={{ color: "white" }}
        >
            {children}
        </div>
    )
}

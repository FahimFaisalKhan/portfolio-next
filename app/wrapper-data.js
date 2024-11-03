"use client"
import { setData } from "@/redux/slieces/dataSlice"
import { setCurSection, setSections } from "@/redux/slieces/sectionsSlice"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const ReduxInitialData = ({ data }) => {
    const dispatch = useDispatch()
    const pathname = usePathname()
    useEffect(() => {
        const sections = document.querySelectorAll(".section")

        const sectionIdsArray = Array.from(sections, (sec) =>
            sec.getAttribute("id")
        )

        if (sectionIdsArray.length) {
            dispatch(setSections(sectionIdsArray))
            dispatch(setCurSection(sectionIdsArray[0]))
        }
    }, [pathname, dispatch])

    dispatch(setData(data))
    return <></>
}

export default ReduxInitialData

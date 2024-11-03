"use client"
import React, { useRef } from "react"
import Tag from "../../../shared/Navbar/Tag"
import { useObserver } from "@/hooks/useObserver"

const Tags = ({ interests }) => {
    const mainBannerTagRef = useRef()
    const { isIntersecting } = useObserver(mainBannerTagRef)
    return (
        <div className=" tag" ref={mainBannerTagRef}>
            {interests.map((interest, index) => (
                <Tag
                    isIntersecting={isIntersecting}
                    key={index}
                    text={interest}
                    index={index}
                />
            ))}
        </div>
    )
}

export default Tags

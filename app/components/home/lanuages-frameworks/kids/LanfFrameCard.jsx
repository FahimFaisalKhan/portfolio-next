"use client"
import { useObserver } from "@/hooks/useObserver"
import React, { useRef } from "react"

const LanfFrameCard = ({ data, index }) => {
    const lanframeRef = useRef(null)
    const { isIntersecting } = useObserver(lanframeRef)
    const { title, details, usage } = data

    return (
        <div
            ref={lanframeRef}
            className={`${index % 2 ? "push-down" : ""} lan-frame-card ${
                isIntersecting
                    ? "lan-frame-card-visible"
                    : "lan-frame-card-hidden"
            } `}
        >
            <h2 className="lan-frame-card-title">{title}</h2>
            <div className="lan-frame-card-usage">
                {usage.map((use) => (
                    <p key={use} className="lan-frame-card-usage-item">
                        • {use}
                    </p>
                ))}
            </div>
            <p className="lan-frame-card-detail">{details}</p>
        </div>
    )
}

export default LanfFrameCard

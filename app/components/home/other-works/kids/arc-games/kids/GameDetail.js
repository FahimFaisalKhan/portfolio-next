"use client"
import React, { useState } from "react"

const GameDetail = ({ details }) => {
    const [contracted, setcontracted] = useState(true)
    return (
        <p className="arc-game-card-details">
            {details.split(" ").length > 20 ? (
                <>
                    {details
                        .split(" ")
                        .splice(0, contracted ? 20 : details.split(" ").length)
                        .join(" ")}
                    <span
                        onClick={() => setcontracted(!contracted)}
                        style={{
                            color: " var(--quaternary)",
                            cursor: "pointer",
                        }}
                    >
                        {contracted ? "...See more" : "  -See less"}
                    </span>
                </>
            ) : (
                details
            )}
        </p>
    )
}

export default GameDetail

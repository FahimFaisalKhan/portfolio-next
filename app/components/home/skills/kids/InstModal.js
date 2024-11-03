"use client"
import React from "react"

const InstModal = ({ setCookie, setInsModalShown, insModalShown }) => {
    const handleClick = (e) => {
        e.preventDefault() // Prevent default button behavior
        setInsModalShown(false)
        setCookie()
    }
    return (
        <div className={`${!insModalShown ? "d-none" : ""} ins-modal`}>
            <div className="ins-modal-body">
                <p className="para-lg">Click any technology to know details</p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                    }}
                >
                    <button
                        onClick={handleClick}
                        style={{
                            background: "var(--focus)",
                            color: "var(--base)",
                            fontWeight: 600,
                        }}
                        className="btn "
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InstModal

"use client"
import React, { useRef } from "react"

const Ref = ({ children }) => {
    const homebannerRef = useRef(null)

    return (
        <div style={{ background: "var(--base)" }}>
            <section
                aria-hidden="true"
                id="home-banner"
                className=" section width-control"
                ref={homebannerRef}
            >
                {children}
            </section>
        </div>
    )
}

export default Ref

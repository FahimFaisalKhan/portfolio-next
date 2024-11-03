import React from "react"
import Skills from "./Skills"
import { cookies } from "next/headers"
const WrapperServerSkills = async () => {
    const cookieStore = cookies()
    const isRead = cookieStore.get("inst-read")
    const hasInsRead = cookieStore.has("inst-read")

    // console.log("hasRead", hasInsRead);

    const setCookie = async () => {
        "use server"
        cookies().set("inst-read", true, { secure: true })
    }
    return (
        <div style={{ background: "var(--base)" }}>
            <Skills setCookie={setCookie} hasRead={hasInsRead} />
        </div>
    )
}

export default WrapperServerSkills

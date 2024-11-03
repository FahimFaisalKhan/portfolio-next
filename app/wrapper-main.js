"use client"
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import WrapperPageScroll from "./wrapper-page-scroll"
import Footer from "./components/shared/Footer/Footer"
import { usePathname } from "next/navigation"

const Wrapper = ({ children }) => {
    const vidref = useRef(null)
    const pathname = usePathname()
    useEffect(() => {
        if (vidref?.current) {
            vidref.current.playbackRate = 0.8
        }
    }, [])
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                document
                    .getElementById("home-page")
                    .scrollTo({ top: 0, behavior: "auto" })
            }, 300)
        }
    }, [pathname])
    useEffect(() => {
        if ("serviceWorker" in window?.navigator && "Notification" in window) {
            ;(async () => {
                const registration =
                    await window?.navigator?.serviceWorker?.register(
                        "/service-worker.js",
                        { scope: "/" }
                    )
            })()
        }
    }, [])

    const { curPageSections: curPagesectionIds, curSection } = useSelector(
        (state) => state.pageSections
    )
    const dispatch = useDispatch()

    const showNotificationModal = async () => {
        const permission = await window.Notification?.requestPermission()
        console.log("permission", permission)
        //get this permission from  server/dabase mostprobably
        if (permission === "granted") {
            console.log("granted per")
            new Notification("HI There", {
                body: "This is a notification",
            })
        }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            // document.querySelector(".scroll-container").scrollTo({ top: 600, behavior: "smooth" })
        }
    }, [])

    return (
        <>
            {/* <video ref={vidref} autoPlay muted loop id="main-video">
        <source src="/videos/dark-sky.mp4" type="video/mp4" />
      </video> */}
            {/* <button
        style={{
          background: "red",
          width: "10rem",
          height: "5rem",
          position: "absolute",
          top: "5rem",
          zIndex: 300,
          left: "-10rem",
        }}
        onClick={showNotificationModal}
      >
        Allow
        <br />
        <i>
          <small>This will be a modal </small>
        </i>
      </button> */}
            <WrapperPageScroll id={"home-page"}>{children}</WrapperPageScroll>
        </>
    )
}

export default Wrapper

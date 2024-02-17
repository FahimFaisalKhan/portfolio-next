"use client";
import React, { useEffect, useRef } from "react";

const Wrapper = ({ children }) => {
  const vidref = useRef(null);
  useEffect(() => {
    if (vidref?.current) {
      vidref.current.playbackRate = 0.8;
    }
  }, []);

  useEffect(() => {
    if ("serviceWorker" in window?.navigator && "Notification" in window) {
      (async () => {
        const registration = await window?.navigator?.serviceWorker?.register(
          "/service-worker.js",
          { scope: "/" }
        );
        // console.log(registration);
      })();
    }
  }, []);
  const showNotificationModal = async () => {
    const permission = await window.Notification?.requestPermission();
    console.log("permission", permission);
    //get this permission from  server/dabase mostprobably
    if (permission === "granted") {
      console.log("granted per");
      new Notification("HI There", {
        body: "This is a notification",
      });
    }
  };
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
      {children}
    </>
  );
};

export default Wrapper;

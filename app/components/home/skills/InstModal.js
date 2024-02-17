"use client";
import React from "react";

const InstModal = ({ setCookie }) => {
  return (
    <div className="ins-modal">
      <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          width: "25rem",
          height: "auto",
          borderRadius: "20px",
          color: "black",
          padding: "1rem",
          alignItems: "flex-start",
          rowGap: "2rem",
          position: "absolute",
          top: "30%",
          left: "15%",
        }}
        className=""
      >
        <p>Double Click any technology to know details</p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button
            onClick={() => setCookie()}
            style={{ background: "green", padding: "0.5rem" }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstModal;

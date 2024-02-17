"use client";
import React from "react";

const DDemoLaura = () => {
  const generateRandom = () => {
    console.log(Math.floor(Math.random() * 10));
  };
  return (
    <div>
      <button onClick={generateRandom} style={{ background: "redz" }}>
        click here
      </button>
    </div>
  );
};

export default DDemoLaura;

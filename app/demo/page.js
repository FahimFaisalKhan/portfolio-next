import React from "react";
import DDemoLaura from "../components/demo/DemoLaura";

const Demo = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div style={{ color: "black" }}>
      Demo page
      <div>
        <DDemoLaura />
      </div>
    </div>
  );
};

export default Demo;

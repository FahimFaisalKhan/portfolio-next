import React from "react";

const HamButton = ({ hamOpen, setHamopen }) => {
  return (
    <div
      onClick={() => setHamopen(!hamOpen)}
      className={`ham-button ${
        hamOpen ? "ham-button-clicked" : "ham-button-unclicked"
      }`}
    >
      <div className="ham-button-wrapper">
        {" "}
        <p className={`line line-1 ${hamOpen ? "line-1-clicked" : ""}`}></p>
        <p
          className={`line line-2  ${
            hamOpen ? "hidden line-2-clicked" : "block"
          }`}
        ></p>
        <p className={`line line-3 ${hamOpen ? "line-3-clicked" : ""}`}></p>
      </div>
    </div>
  );
};

export default HamButton;

"use client";
import React, { useEffect, useState } from "react";
import ScrollBarBtn from "./kids/ScrollBarBtn";

const ScrollBar = () => {
  const [sectionIds, setSectionIds] = useState([]);
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    // console.log(sections);
    // [...sections].forEach((sec) => console.log(sec.getAttribute("id")));

    const sectionIdsArray = Array.from(sections, (sec) =>
      sec.getAttribute("id")
    );
    // console.log(sectionIdsArray);
    sectionIdsArray.length && setSectionIds(sectionIdsArray);
  }, []);

  return (
    <div className="scrollbar">
      {sectionIds.map((id, index) => (
        <ScrollBarBtn key={index} id={id} index={index} />
      ))}
    </div>
  );
};

export default ScrollBar;

"use client";
import React, { useEffect, useRef, useState } from "react";

const HeadingPrimary = ({ text, spread }) => {
  const introRef = useRef();
  // console.log(text.split(""));
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        entry.isIntersecting
          ? setIsIntersecting(true)
          : setIsIntersecting(false);
      },
      { threshold: 0.2 }
    );

    observer.observe(introRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={introRef} className="heading-primary">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`${isIntersecting && "heading-primary-animate"} ${
            spread ? "px-13" : "px-8"
          }`}
        >
          {letter}
        </span>
      ))}
    </h2>
  );
};

export default HeadingPrimary;

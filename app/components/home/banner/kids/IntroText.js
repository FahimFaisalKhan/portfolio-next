"use client";
import { useObserver } from "@/hooks/useObserver";
import React, { useRef } from "react";

const IntroText = () => {
  const introTextRef = useRef();

  const { isIntersecting } = useObserver(introTextRef);
  return (
    <p ref={introTextRef} className="para-base ">
      <span
        className={`intro-text ${
          isIntersecting ? "visible" : "highly-invisible"
        }`}
      >
        To my portfolio. I am a computer programmer with a knack for turning
        complex ideas into elegant code. Adept at problem-solving and
        innovation, my work reflects a commitment to creating seamless digital
        experiences and pushing the boundaries of what technology can achieve.
      </span>
    </p>
  );
};

export default IntroText;

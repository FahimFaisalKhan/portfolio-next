"use client";
import { useObserver } from "@/hooks/useObserver";
import React, { useRef } from "react";

const Tag = ({ text, index, isIntersecting }) => {
  return (
    <div
      className={`tag-item  ${
        isIntersecting
          ? "tag-item-transition-back"
          : !isIntersecting
          ? index % 2
            ? "tag-item-right"
            : "tag-item-left"
          : ""
      }`}
    >
      <span className="tag-item-text">{text}</span>
    </div>
  );
};

export default Tag;

"use client";
import React, { useEffect, useState } from "react";
import HamButton from "./kids/HamButton";
import Link from "next/link";

const Navbar = () => {
  const [hamOpen, setHamopen] = useState(false);
  // useEffect(() => {
  //   const htmlElem = document.getElementsByTagName("html")[0];
  //   if (hamOpen) {
  //     htmlElem.style.overflowY = "hidden";
  //   } else {
  //     htmlElem.style.overflowY = "auto";
  //   }
  // }, [hamOpen]);
  return (
    <section className="ham-container">
      <div className={`ham ${hamOpen ? "h-full-vh" : ""}`}>
        <HamButton hamOpen={hamOpen} setHamopen={setHamopen} />
        <div
          className={`ham-body ${
            !hamOpen ? "hidden " : "block scale-up-overflow ham-body-opened "
          }`}
        ></div>
        <nav
          className={`ham-content  ${
            !hamOpen ? "highly-invisible " : " highly-visible transition-slow"
          }`}
          style={{ color: "#0000FF" }}
        >
          <Link
            onClick={() => setHamopen(false)}
            style={{ color: "green" }}
            href={"/demo"}
          >
            Demo
          </Link>
          <Link
            onClick={() => setHamopen(false)}
            style={{ color: "green" }}
            href={"/"}
          >
            Home
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

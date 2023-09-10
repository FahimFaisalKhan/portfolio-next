"use client";
import React, { useState } from "react";
import HamButton from "./kids/HamButton";

const Navbar = () => {
  const [hamOpen, setHamopen] = useState(false);
  return (
    <div className={`ham ${hamOpen ? "h-full-vh" : "h-null"}`}>
      <HamButton hamOpen={hamOpen} setHamopen={setHamopen} />
      <div
        className={`ham-body ${
          !hamOpen ? "hidden " : "block scale-up-overflow ham-body-opened "
        }`}
      ></div>
      <nav
        className={`ham-content ${
          !hamOpen ? "highly-invisible " : " highly-visible transition-slow"
        }`}
        style={{ color: "#0000FF" }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquid
        veniam optio consequuntur atque, inventore quasi explicabo libero
        aperiam ratione numquam natus tempora ab, repudiandae assumenda ipsa
        laborum dicta. Deleniti veniam, quidem perspiciatis architecto tenetur
        libero inventore accusamus rem hic provident, officiis sint veritatis
        esse, praesentium aut culpa magnam. Sunt.
      </nav>
    </div>
  );
};

export default Navbar;

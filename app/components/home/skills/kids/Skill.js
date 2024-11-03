"use client"
import Image from "next/image"
import React, { use, useEffect, useRef, useState } from "react"
import CloseIcon from "@mui/icons-material/Close"
import { IconButton } from "@mui/material"
import { useObserver } from "@/hooks/useObserver"
const Skill = ({
    index,
    img,
    bg,
    color,
    name,
    insModalShown,
    length,
    hovering,
    ep,
    scrolDistance,
    lastSkillIntersecting,
    setModalOpen,
    modalOpen,
    modalData,
    setModalData,
    setEndPosition,
    details,
    link,
}) => {
    // console.log("detail link", details, link)
    // const [modalOpen, setModalOpen] = useState(false);
    // console.log("end position cal", ep);
    // useEffect(() => {
    //   console.log(modalOpen);
    // }, [modalOpen]);
    const skillCardRef = useRef(null)
    // useEffect(() => {}, [insModalShown]);
    // useEffect(() => {
    // console.log(
    //   "index",
    //   index,
    //   skillCardRef?.current?.offsetWidth * length,
    //   skillCardRef?.current?.offsetWidth,
    //   skillCardRef?.current?.clientWidth
    // );
    // console.log("transpx", skillCardRef?.current?.offsetWidth * length);
    //   setEndPosition(`-${((length - 7) * 100) / length}%`);
    // }, [length]);

    // useEffect(() => {
    //   // console.log(index === length - 1, hovering, isIntersecting, index + 1);
    //   if (lastSkillIntersecting) {
    //     skillCardRef?.current?.classList?.add("slide-to-begin-transform");
    //   }

    //   console.log("last item intersecting", lastSkillIntersecting);
    // }, [lastSkillIntersecting]);
    // const [startPosition, setStartPosition] = useState("6px");
    // const [endPosition, setEndPosition] = useState("-0px");
    // useEffect(() => {
    //   console.log(hovering);
    // }, [hovering]);
    // useEffect(() => {
    //   const skillCards = document?.querySelectorAll(".skill-card-container");

    //   if (hovering && lastSkillIntersecting) {
    //     // Check if skillCards is not null or undefined before proceeding
    //     if (skillCards) {
    //       [...skillCards].forEach((cardElem) => {
    //         // Optional chaining to prevent errors if classList or style is null/undefined
    //         cardElem.style.animation = "none";

    //         cardElem.style.transform = `translateX(4090px)`;
    //       });
    //     }
    //   } else if (hovering && !lastSkillIntersecting) {
    //     console.log(hovering);
    //     if (skillCards) {
    //       [...skillCards].forEach((cardElem) => {
    //         // Optional chaining to prevent errors if classList or style is null/undefined
    //         cardElem.style.animationPlayState = "paused";
    //       });
    //     }
    //   } else {
    //     console.log(hovering);
    //     [...skillCards].forEach((cardElem) => {
    //       cardElem.style.animation = "scroll-horizontal 10s linear infinite";
    //       cardElem.style.transform = `translateX(6px)`;
    //     });
    //   }
    // }, [lastSkillIntersecting, endPosition, hovering]);
    return (
        <>
            <div
                id={`skill-id-${index + 1}`}
                onScroll={(e) => {
                    console.log("scrolling"),
                        insModalShown && e.preventDefault()
                }}
                onScrollCapture={(e) => {
                    console.log("scrolling"),
                        insModalShown && e.preventDefault()
                }}
                ref={skillCardRef}
                onClick={() => {
                    setModalOpen(true)
                    console.log("dclicking")
                    console.log("link", link)
                    setModalData({ name, bg, color, img, details, link })
                }}
                key={index}
                className={`skill-card-container skill-card-container-anm ${
                    index % 2 !== 0 ? "mt-4" : ""
                } `}
                tank-content="100px"
            >
                <div
                    style={{
                        border:
                            modalData?.name === name && modalOpen
                                ? `2px solid ${color}`
                                : "none",
                        backgroundImage: bg
                            ? bg
                            : "linear-gradient(to right bottom, var(--base), transparent)",
                    }}
                    className={`skill-card `}
                >
                    <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="flt_tag">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="8"
                                    result="blur"
                                />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                    result="flt_tag"
                                />
                                <feComposite
                                    in="SourceGraphic"
                                    in2="flt_tag"
                                    operator="atop"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <div className={` skill-card-content `}>
                        <Image
                            className="img-responsive skill-card-img"
                            src={img}
                            alt="Skill Image"
                            placeholder="blur"
                            height={75}
                        />
                    </div>
                </div>
            </div>
            {/* <div
        className={`skill-modal ${
          modalOpen ? "skill-modal-shown" : "skill-modal-hidden"
        } `}
      >
        <div style={{ background: bg }} className="skill-modal-body p-3">
          <div className="skill-modal-body-header">
            <Image
              className="img-responsive skill-modal-body-header-img"
              width={85}
              height={85}
              src={img}
              alt="Tech Image"
            />
            <h4 className="skill-modal-body-header-title">{name}</h4>
          </div>
          <p className="skill-modal-body-description para-base mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quis
            commodi id rerum veniam sint, dignissimos nam dolorum quisquam!
            Unde, explicabo corporis. Cum, sed eligendi.
          </p>
          <button>Know more</button>
          <span className="p-1" onClick={() => setModalOpen(false)}>
            <CloseIcon
              fontSize="large"
              className="close-icon-round p-1"
              style={{
                // borderRadius: "100%",
                // padding: "2rem",
                // position: "absolute",
                // top: "16px",
                // right: "16px",
                background: color,
              }}
            />
          </span>
        </div>
      </div> */}
            {/* <div
        className={`skill-modal ${
          modalOpen ? "skill-modal-shown" : "skill-modal-hidden"
        } `}
      ></div> */}
        </>
    )
}

export default Skill

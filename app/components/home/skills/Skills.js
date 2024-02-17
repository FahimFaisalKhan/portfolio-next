"use client";
import React, { useEffect, useRef, useState } from "react";
import HeadingPrimary from "../../shared/Headings/HeadingPrimary";
import CloseIcon from "@mui/icons-material/Close";
import {
  bootstrap,
  css,
  express,
  fahim,
  firebase,
  git,
  html,
  js,
  mongodb,
  mysql,
  netlify,
  nextAuth,
  nextjs,
  nodejs,
  npm,
  pandas,
  prisma,
  psql,
  python,
  react,
  tailwind,
  tanstack,
  vercel,
} from "@/public/images";
import Skill from "./Skill";
import { useObserver } from "@/hooks/useObserver";
import InstModal from "./InstModal";
import Image from "next/image";

const Skills = ({ hasRead, setCookie }) => {
  const skills = [
    {
      color: "#E06C3D",
      bg: "linear-gradient(to right bottom,   var(--base)  ,  #996f5e )",
      icon: html,
      name: "HTML",
    },
    {
      color: "#55A6DC",
      bg: "linear-gradient(to right bottom, var(--base),  #647f94)",
      icon: css,
      name: "CSS",
    },
    {
      color: "#F1DF4F",
      bg: "linear-gradient(to right bottom, var(--base), #a29c6a )",
      icon: js,
      name: "JavaScript",
    },
    {
      color: "#56B692",
      bg: "linear-gradient(to right bottom, var(--base), #628c7b)",
      icon: nodejs,
      name: "Node.js",
    },
    {
      color: "#00C3E5",
      bg: "linear-gradient(to right bottom, var(--base), #678b92  )",
      icon: react,
      name: "React",
    },
    {
      color: "grey",
      bg: "linear-gradient(to right bottom, var(--base), #b1abab)",
      icon: nextjs,
      name: "Next.js",
    },
    {
      color: "#0DB7D5",
      bg: "linear-gradient(to right bottom, var(--base), #53838a)",
      icon: tailwind,
      name: "Tailwind",
    },
    {
      color: "#3D0D89",
      bg: "linear-gradient(to right bottom, var(--base), #42038a)",
      icon: bootstrap,
      name: "Bootstrap",
    },
    {
      color: "grey",
      bg: "linear-gradient(to right bottom, var(--base), #b1abab)",
      icon: express,
      name: "Express",
    },
    {
      color: "#6DAC49",
      bg: "linear-gradient(to right bottom, var(--base), #5d8e42)",
      icon: mongodb,
      name: "MongoDB",
    },
    {
      color: "#3570A1",
      bg: "linear-gradient(to right bottom, var(--base), #4e6a81 , #7f6e2e)",
      icon: python,
      name: "Python",
    },
    {
      color: "#F1770D",
      bg: "linear-gradient(to right bottom, var(--base),  #29433f, #9e6532)",
      icon: mysql,
      name: "MySQL",
    },
    {
      color: "#F15132",
      bg: "linear-gradient(to right bottom, var(--base), #b36c5f)",
      icon: git,
      name: "Git",
    },
    {
      color: "#FC454D",
      bg: "linear-gradient(to right bottom, var(--base),  #554d2e, #6d212a)",
      icon: tanstack,
      name: "TanStack",
    },

    {
      color: "#F4810D",
      bg: "linear-gradient(to right bottom, var(--base), #9b8a56)",
      icon: firebase,
      name: "Firebase",
    },

    {
      color: "#356690",
      bg: "linear-gradient(to right bottom, var(--base), #58778e)",
      icon: psql,
      name: "PostgreSQL",
    },

    {
      color: "#CC3838",
      bg: "linear-gradient(to right bottom, var(--base), #890303)",
      icon: npm,
      name: "NPM",
    },
    {
      color: "#262656",
      bg: "linear-gradient(to right bottom, var(--base), #9e9eeb)",
      icon: pandas,
      name: "Pandas",
    },
    {
      color: "grey",
      bg: "linear-gradient(to right bottom, var(--base),#b1abab)",
      icon: vercel,
      name: "Vercel",
    },
    {
      color: "#26C7B7",
      bg: "linear-gradient(to right bottom, var(--base), #348178)",
      icon: netlify,
      name: "Netlify",
    },
    {
      color: "#0D3D4F",
      bg: "linear-gradient(to right bottom, var(--base), #90e3ff)",
      icon: prisma,
      name: "Prisma",
    },
    {
      color: "#A022DB",
      bg: "linear-gradient(to right bottom, var(--base),  #3f898c , #44185b)",
      icon: nextAuth,
      name: "NextAuth",
    },

    {
      color: "#E06C3D",
      bg: "linear-gradient(to right bottom,   var(--base)  ,  #996f5e )",
      icon: html,
      name: "HTML",
    },
    {
      color: "#55A6DC",
      bg: "linear-gradient(to right bottom, var(--base),  #647f94)",
      icon: css,
      name: "CSS",
    },
    {
      color: "#F1DF4F",
      bg: "linear-gradient(to right bottom, var(--base), #a29c6a )",
      icon: js,
      name: "JavaScript",
    },
    {
      color: "#56B692",
      bg: "linear-gradient(to right bottom, var(--base), #628c7b)",
      icon: nodejs,
      name: "Node.js",
    },
    {
      color: "#00C3E5",
      bg: "linear-gradient(to right bottom, var(--base), #678b92  )",
      icon: react,
      name: "React",
    },
    {
      color: "grey",
      bg: "linear-gradient(to right bottom, var(--base), #b1abab)",
      icon: nextjs,
      name: "Next.js",
    },
    {
      color: "#0DB7D5",
      bg: "linear-gradient(to right bottom, var(--base), #53838a)",
      icon: tailwind,
      name: "Tailwind",
    },
  ];
  // const [mouseDown, setMouseDown] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [insModalShown, setInsModalShown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [hovering, setHovering] = useState(false);
  // const [endPosition, setEndPosition] = useState("");
  // const [ep, setEp] = useState(0);
  // const [scrolDistance, setScrollDistance] = useState(0);

  const sliderRef = useRef(null);
  // console.log(skills?.length);
  // const startDragging = (e) => {
  //   setMouseDown(true);
  //   // console.log("dragging values", e.pageX, sliderRef.current.offsetLeft);
  //   setStartX(e.pageX - sliderRef.current.offsetLeft);
  //   setScrollLeft(sliderRef?.current?.scrollLeft);
  //   // startX = e.pageX - slider.offsetLeft;
  //   // scrollLeft = slider.scrollLeft;
  // };
  // useEffect(() => {
  //   console.log(sliderRef?.current?.scrollLeft);
  // }, [scrollLeft]);
  // useEffect(() => {
  //   // console.log("chk distance", sliderRef?.current?.scrollLeft);
  //   setScrollDistance(sliderRef?.current?.scrollLeft);
  // }, [sliderRef?.current?.scrollLeft]);
  const { isIntersecting: lastSkillIntersecting } = useObserver(
    `skill-id-${skills?.length}`
  );
  const [lastInter, setLastInter] = useState(false);
  // useEffect(() => {
  //   setLastInter(lastSkillIntersecting ? true : false);
  // }, [lastSkillIntersecting]);
  // const move = (e) => {
  //   e.preventDefault();
  //   if (!mouseDown) {
  //     return;
  //   }
  //   // sliderRef.current.style.cursor = "pointer";
  //   // console.log("values here");
  //   const x = e.pageX;
  //   // console.log(e.pageX, sliderRef.current.offsetLeft);
  //   const scroll = e.pageX - startX;
  //   // console.log("scrol left valuue ", scrollLeft - scroll);

  //   setEp(scrollLeft - scroll);
  //   // console.log(scrollLeft - scroll);

  //   sliderRef.current.scrollLeft = scrollLeft - scroll;

  //   sliderRef.current.style.cursor = "pointer";
  // };

  const { isIntersecting } = useObserver("skills");
  useEffect(() => {
    // console.log(isIntersecting);
    if (isIntersecting && !hasRead) {
      (async () => {
        setInsModalShown(true);
      })();
    } else {
      setInsModalShown(false);
    }
  }, [isIntersecting, hasRead, setCookie]);

  useEffect(() => {
    const skillsPage = document.getElementById("landing-page");
    // console.log(isIntersecting);
    if (insModalShown) {
      skillsPage.classList.remove("overflow-scroll");
      skillsPage.classList.add("overflow-hidden");
    } else {
      skillsPage.classList.remove("overflow-hidden");
      skillsPage.classList.add("overflow-scroll");
    }
  }, [insModalShown, isIntersecting]);

  // useEffect(() => {
  //   setInterval(() => {
  //     sliderRef.current.scrollLeft += 175;
  //   }, 1000);
  // }, [sliderRef]);
  // useEffect(() => {
  //   console.log("test values", startX, scrollLeft);
  // }, [startX, scrollLeft]);

  useEffect(() => {
    if (hovering || modalOpen) {
      sliderRef.current.style.animationPlayState = "paused";
    }
  }, [modalOpen, hovering]);
  useEffect(() => {
    console.log("hovering modalOPmen", hovering, modalOpen);
    if (!hovering && !modalOpen) {
      sliderRef.current.style.animationPlayState = "running";
    }
  }, [modalOpen, hovering]);
  return (
    <section
      id="skills"
      className="section width-control-lg"
      // style={{ minHeight: "100vh" }}
    >
      {/* IMPORTANT: TWeek the number  below to smmoth the transition when the slider reaches end and about to start over */}
      <style>
        {`
          :root {
            
            --end-position: ${`-${
              ((skills?.length - 7) * 100) / skills?.length -
              0.20206896551722764
            }%`};
        --slider-anm-time : ${skills?.length + skills.length * 0.1}s;
          }

          @keyframes scroll-skills {
           
            to {
              transform: translateX(var(--end-position));
            }
           
          }

       
        `}
      </style>
      <div className=" w-full">
        <div className=" skill-content">
          <div className="text-center">
            <div>
              <HeadingPrimary text={"TECHNOLOGIES"} spread={false} />
            </div>
            <p className="para-lg ml-1 mt-1 mb-4">
              {" "}
              I am experienced and skilled in.
            </p>
          </div>
          <div className="carousel-x-container">
            <div
              // onClick={(e) => (e.target.style.cursor = "grabbing")}
              onScroll={(e) => {}}
              // onScrollCapture={(e) => {
              //   // console.log("scrollccapping");
              //   setDragging(true);
              // }}
              onMouseOver={(e) => {
                setHovering(true);
              }}
              onMouseOut={(e) => {
                setHovering(false);

                // setLastInter(false);
              }}
              // onMouseMove={move}
              // onMouseDown={startDragging}
              // onMouseUp={(e) => {
              //   setMouseDown(false);
              //   setDragging(false);
              // }}
              // onMouseLeave={(e) => {
              //   setMouseDown(false);
              // }}
              ref={sliderRef}
              className={`carousel-x animate-slider `}
            >
              {skills.map(({ name, icon, bg, color }, index) => (
                <Skill
                  length={skills?.length}
                  key={`skill-key-${index + 1}`}
                  index={index}
                  img={icon}
                  bg={bg}
                  color={color}
                  name={name}
                  insModalShown={insModalShown}
                  hovering={hovering}
                  // ep={ep}
                  // scrolDistance={scrolDistance}
                  lastSkillIntersecting={lastInter}
                  setModalOpen={setModalOpen}
                  modalOpen={modalOpen}
                  modalData={modalData}
                  setModalData={setModalData}
                  // setEndPosition={setEndPosition}
                />
              ))}
            </div>
          </div>

          {insModalShown && <InstModal setCookie={setCookie} />}
          <div
            className={`skill-modal ${
              modalOpen ? "skill-modal-shown" : "skill-modal-hidden"
            } `}
          >
            <div
              style={{ background: modalData?.bg }}
              className="skill-modal-body p-3"
            >
              <div className="skill-modal-body-header">
                {modalData?.img && (
                  <Image
                    className="img-responsive skill-modal-body-header-img"
                    width={85}
                    height={85}
                    src={modalData.img}
                    alt="Tech Image"
                  />
                )}
                <h4 className="skill-modal-body-header-title">
                  {modalData?.name}
                </h4>
              </div>
              <p className="skill-modal-body-description para-base mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                quis commodi id rerum veniam sint, dignissimos nam dolorum
                quisquam! Unde, explicabo corporis. Cum, sed eligendi.
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
                    background: modalData?.color,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

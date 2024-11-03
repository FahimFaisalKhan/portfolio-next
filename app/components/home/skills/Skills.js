"use client"
import React, { useEffect, useRef, useState } from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"
import CloseIcon from "@mui/icons-material/Close"
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
} from "@/public/images"
import Skill from "./kids/Skill"
import { useObserver } from "@/hooks/useObserver"
import InstModal from "./kids/InstModal"
import Image from "next/image"
import Link from "next/link"

const Skills = ({ hasRead, setCookie }) => {
    const skills = [
        {
            color: "#E06C3D",
            bg: "linear-gradient(to right bottom,   var(--base)  ,  #996f5e )",
            icon: html,
            name: "HTML",
            details:
                "Expertise in HTML includes crafting well-structured, semantic markup that enhances both accessibility and SEO. Each element is purposefully selected and organized to create a solid foundation for responsive and interactive web applications, focusing on clarity and maintainability for seamless collaboration and scalability.",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            color: "#55A6DC",
            bg: "linear-gradient(to right bottom, var(--base),  #647f94)",
            icon: css,
            name: "CSS",
            details:
                "Proficiency in CSS enables the creation of visually appealing, responsive, and user-friendly interfaces. Techniques like Flexbox, Grid, and animations are used to build layouts that adapt seamlessly across devices, ensuring both aesthetics and functionality. Emphasis is placed on clean, modular styles for efficient maintenance and scalability.",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            color: "#F1DF4F",
            bg: "linear-gradient(to right bottom, var(--base), #a29c6a )",
            icon: js,
            name: "JavaScript",
            details:
                "Expertise in JavaScript drives the development of dynamic, interactive web applications with efficient and maintainable code. Knowledge of core concepts like closures, asynchronous programming, and DOM manipulation enables seamless user experiences and responsive interfaces. Focus is placed on writing clean, modular scripts that support scalability and enhance app performance.",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            color: "#56B692",
            bg: "linear-gradient(to right bottom, var(--base), #628c7b)",
            icon: nodejs,
            name: "Node.js",
            details:
                "Experience with Node.js involves building scalable, high-performance backend applications that handle asynchronous tasks and real-time data processing. Proficiency includes using Node's non-blocking I/O model to create RESTful APIs, manage databases, and integrate with frontend frameworks, ensuring smooth, fast, and reliable server-side functionality.",
            link: "https://nodejs.org/",
        },
        {
            color: "#00C3E5",
            bg: "linear-gradient(to right bottom, var(--base), #678b92  )",
            icon: react,
            name: "React",
            details:
                "Expertise in React includes developing interactive, component-based user interfaces that provide a seamless, responsive user experience. Familiarity with hooks, state management, and JSX allows for efficient, modular code that enhances scalability and reusability across projects. Emphasis is placed on optimizing performance and ensuring a smooth user journey.",
            link: "https://react.dev/",
        },
        {
            color: "grey",
            bg: "linear-gradient(to right bottom, var(--base), #b1abab)",
            icon: nextjs,
            name: "Next.js",
            details:
                "Proficiency in Next.js enables the creation of high-performance, SEO-friendly web applications with server-side rendering and static site generation. Experience includes optimizing page loading, implementing dynamic routing, and leveraging built-in API routes, providing an efficient, scalable solution for modern web development needs.",
            link: "https://nextjs.org/",
        },
        {
            color: "#0DB7D5",
            bg: "linear-gradient(to right bottom, var(--base), #53838a)",
            icon: tailwind,
            name: "Tailwind",
            details:
                "Expertise in Tailwind CSS empowers the development of clean, responsive interfaces with utility-first styling, significantly reducing the need for custom CSS. Knowledge of Tailwind's configuration and customization options enables rapid prototyping and precise control over design, ensuring consistency and scalability across projects.",
            link: "https://tailwindcss.com/",
        },
        {
            color: "#3D0D89",
            bg: "linear-gradient(to right bottom, var(--base), #42038a)",
            icon: bootstrap,
            name: "Bootstrap",
            details:
                "Experience with Bootstrap includes creating responsive, mobile-first designs using its extensive library of prebuilt components and grid system. This knowledge allows for rapid, consistent styling across applications, leveraging Bootstrap’s customizable themes and utilities to deliver visually cohesive and user-friendly interfaces.",
            link: "https://getbootstrap.com/",
        },
        {
            color: "grey",
            bg: "linear-gradient(to right bottom, var(--base), #b1abab)",
            icon: express,
            name: "Express",
            details:
                "Proficiency in Express.js includes building robust, scalable RESTful APIs and server-side applications with a focus on performance and modularity. Familiarity with middleware and routing enables efficient handling of requests, authentication, and data processing, providing a solid foundation for backend services in full-stack applications.",
            link: "https://expressjs.com/",
        },
        {
            color: "#6DAC49",
            bg: "linear-gradient(to right bottom, var(--base), #5d8e42)",
            icon: mongodb,
            name: "MongoDB",
            details:
                "Expertise in MongoDB includes designing and managing NoSQL databases for scalable, flexible data storage. Knowledge of schema design, indexing, and aggregation pipelines ensures efficient data retrieval and manipulation, supporting high-performance applications with seamless data flows and real-time capabilities.",
            link: "https://www.mongodb.com/",
        },
        {
            color: "#3570A1",
            bg: "linear-gradient(to right bottom, var(--base), #4e6a81 , #7f6e2e)",
            icon: python,
            name: "Python",
            details:
                "Proficiency in Python encompasses writing clean, efficient code for a variety of applications, from data analysis and automation to web development. Familiarity with Python’s extensive libraries and frameworks, such as Pandas, Flask, and Django, allows for rapid development and robust solutions tailored to project needs.",
            link: "https://www.python.org/",
        },
        {
            color: "#F1770D",
            bg: "linear-gradient(to right bottom, var(--base),  #29433f, #9e6532)",
            icon: mysql,
            name: "MySQL",
            details:
                "Expertise in MySQL includes designing and managing relational databases with optimized query performance and data integrity. Knowledge of SQL syntax, indexing, and normalization supports efficient data storage, retrieval, and management, ensuring reliability and scalability for data-driven applications.",
            link: "https://www.mysql.com/",
        },
        {
            color: "#F15132",
            bg: "linear-gradient(to right bottom, var(--base), #b36c5f)",
            icon: git,
            name: "Git",
            details:
                "Proficiency in Git involves effective version control and collaboration, with a strong command of branching, merging, and resolving conflicts. This expertise ensures smooth team workflows, reliable code management, and the ability to track and revert changes, supporting both individual and collaborative development.",
            link: "https://git-scm.com/",
        },
        {
            color: "#FC454D",
            bg: "linear-gradient(to right bottom, var(--base),  #554d2e, #6d212a)",
            icon: tanstack,
            name: "TanStack",
            details:
                "Expertise in TanStack Query includes efficient data fetching, caching, and synchronization, optimizing application performance and user experience. Familiarity with its hooks and caching mechanisms enables seamless state management for server-side data, reducing redundant requests and ensuring consistent data flow in React applications.",
            link: "https://tanstack.com/query/latest",
        },

        {
            color: "#F4810D",
            bg: "linear-gradient(to right bottom, var(--base), #9b8a56)",
            icon: firebase,
            name: "Firebase",
            details:
                "Expertise in Firebase includes leveraging its real-time database, authentication, and hosting services to build scalable, cloud-based applications. Familiarity with Firebase’s API and integration with frontend frameworks enables efficient user authentication, data synchronization, and deployment, providing a seamless backend solution for modern web and mobile apps.",
            link: "https://firebase.google.com/",
        },

        {
            color: "#356690",
            bg: "linear-gradient(to right bottom, var(--base), #58778e)",
            icon: psql,
            name: "PostgreSQL",
            details:
                "Proficiency in PostgreSQL (PSQL) includes designing and managing complex relational databases with advanced querying, indexing, and data integrity features. Expertise in handling large datasets, using features like JSON support and stored procedures, enables efficient, scalable solutions that meet diverse application requirements.",
            link: "https://www.postgresql.org/",
        },

        {
            color: "#CC3838",
            bg: "linear-gradient(to right bottom, var(--base), #890303)",
            icon: npm,
            name: "NPM",
            details:
                "Expertise with npm involves managing project dependencies, scripts, and package versions to streamline development workflows. Familiarity with npm commands and package.json configuration ensures efficient project setup, maintenance, and deployment, enhancing collaboration and consistency across teams.",
            link: "https://www.npmjs.com/",
        },
        {
            color: "#262656",
            bg: "linear-gradient(to right bottom, var(--base), #9e9eeb)",
            icon: pandas,
            name: "Pandas",
            details:
                "Proficiency in Pandas involves manipulating and analyzing structured data with DataFrames, making complex data operations simple and efficient. Expertise includes data cleaning, transformation, and aggregation, supporting robust data analysis pipelines and enabling insightful, data-driven decisions.",
            link: "https://pandas.pydata.org/",
        },
        {
            color: "grey",
            bg: "linear-gradient(to right bottom, var(--base),#b1abab)",
            icon: vercel,
            name: "Vercel",
            details:
                "Expertise in Vercel encompasses deploying and managing high-performance web applications with a focus on scalability and global distribution. Proficiency includes leveraging Vercel's serverless functions, edge network, and seamless integration with frameworks like Next.js to deliver fast, reliable, and secure user experiences.",
            link: "https://vercel.com/",
        },
        {
            color: "#26C7B7",
            bg: "linear-gradient(to right bottom, var(--base), #348178)",
            icon: netlify,
            name: "Netlify",
            details:
                "Expertise in Netlify involves deploying and managing web applications using its comprehensive platform, which integrates build, deployment, and serverless backend services. Proficiency includes leveraging Netlify's global edge network for fast content delivery, utilizing serverless functions for dynamic capabilities, and integrating with modern frameworks to streamline development workflows.",
            link: "https://www.netlify.com/",
        },
        {
            color: "#0D3D4F",
            bg: "linear-gradient(to right bottom, var(--base), #90e3ff)",
            icon: prisma,
            name: "Prisma",
            details:
                "Proficiency in Prisma involves using this modern ORM to interact seamlessly with databases, enabling type-safe, efficient, and scalable data access. Familiarity with Prisma’s query engine, migrations, and schema management allows for robust backend development, making database interactions more intuitive and maintainable.",
            link: "https://www.prisma.io/",
        },
        {
            color: "#A022DB",
            bg: "linear-gradient(to right bottom, var(--base),  #3f898c , #44185b)",
            icon: nextAuth,
            name: "NextAuth",
            details:
                "Expertise in NextAuth.js includes implementing secure, flexible authentication solutions for Next.js applications. Familiarity with providers, session management, and JWT-based authentication enables seamless integration with third-party services and ensures robust, user-friendly login experiences.",
            link: "https://next-auth.js.org/",
        },

        {
            color: "#E06C3D",
            bg: "linear-gradient(to right bottom,   var(--base)  ,  #996f5e )",
            icon: html,
            name: "HTML",
            details:
                "Expertise in HTML includes crafting well-structured, semantic markup that enhances both accessibility and SEO. Each element is purposefully selected and organized to create a solid foundation for responsive and interactive web applications, focusing on clarity and maintainability for seamless collaboration and scalability.",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            color: "#55A6DC",
            bg: "linear-gradient(to right bottom, var(--base),  #647f94)",
            icon: css,
            name: "CSS",
            details:
                "Proficiency in CSS enables the creation of visually appealing, responsive, and user-friendly interfaces. Techniques like Flexbox, Grid, and animations are used to build layouts that adapt seamlessly across devices, ensuring both aesthetics and functionality. Emphasis is placed on clean, modular styles for efficient maintenance and scalability.",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            color: "#F1DF4F",
            bg: "linear-gradient(to right bottom, var(--base), #a29c6a )",
            icon: js,
            name: "JavaScript",
            details:
                "Expertise in JavaScript drives the development of dynamic, interactive web applications with efficient and maintainable code. Knowledge of core concepts like closures, asynchronous programming, and DOM manipulation enables seamless user experiences and responsive interfaces. Focus is placed on writing clean, modular scripts that support scalability and enhance app performance.",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            color: "#56B692",
            bg: "linear-gradient(to right bottom, var(--base), #628c7b)",
            icon: nodejs,
            name: "Node.js",
            details:
                "Experience with Node.js involves building scalable, high-performance backend applications that handle asynchronous tasks and real-time data processing. Proficiency includes using Node's non-blocking I/O model to create RESTful APIs, manage databases, and integrate with frontend frameworks, ensuring smooth, fast, and reliable server-side functionality.",
            link: "https://nodejs.org/",
        },
        {
            color: "#00C3E5",
            bg: "linear-gradient(to right bottom, var(--base), #678b92  )",
            icon: react,
            name: "React",
            details:
                "Expertise in React includes developing interactive, component-based user interfaces that provide a seamless, responsive user experience. Familiarity with hooks, state management, and JSX allows for efficient, modular code that enhances scalability and reusability across projects. Emphasis is placed on optimizing performance and ensuring a smooth user journey.",
            link: "https://react.dev/",
        },
        {
            color: "grey",
            bg: "linear-gradient(to right bottom, var(--base), #b1abab)",
            icon: nextjs,
            name: "Next.js",
            details:
                "Proficiency in Next.js enables the creation of high-performance, SEO-friendly web applications with server-side rendering and static site generation. Experience includes optimizing page loading, implementing dynamic routing, and leveraging built-in API routes, providing an efficient, scalable solution for modern web development needs.",
            link: "https://nextjs.org/",
        },
        {
            color: "#0DB7D5",
            bg: "linear-gradient(to right bottom, var(--base), #53838a)",
            icon: tailwind,
            name: "Tailwind",
            details:
                "Expertise in Tailwind CSS empowers the development of clean, responsive interfaces with utility-first styling, significantly reducing the need for custom CSS. Knowledge of Tailwind's configuration and customization options enables rapid prototyping and precise control over design, ensuring consistency and scalability across projects.",
            link: "https://tailwindcss.com/",
        },
    ]
    // const [mouseDown, setMouseDown] = useState(false);
    // const [startX, setStartX] = useState(0);
    // const [scrollLeft, setScrollLeft] = useState(0);
    const [dragging, setDragging] = useState(false)

    const [insModalShown, setInsModalShown] = useState(false)

    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [hovering, setHovering] = useState(false)
    // const [endPosition, setEndPosition] = useState("");
    // const [ep, setEp] = useState(0);
    // const [scrolDistance, setScrollDistance] = useState(0);

    const sliderRef = useRef(null)
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
    )
    const [lastInter, setLastInter] = useState(false)
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

    const { isIntersecting } = useObserver("skills")
    useEffect(() => {
        // console.log(isIntersecting);
        if (isIntersecting && !hasRead) {
            ;(async () => {
                setInsModalShown(true)
            })()
        } else {
            setInsModalShown(false)
        }
    }, [isIntersecting, hasRead, setCookie])

    // useEffect(() => {
    //     const skillsPage = document.getElementById("landing-page")
    //     // console.log(isIntersecting);
    //     if (insModalShown) {
    //         skillsPage.classList.remove("overflow-scroll")
    //         skillsPage.classList.add("overflow-hidden")
    //     } else {
    //         skillsPage.classList.remove("overflow-hidden")
    //         skillsPage.classList.add("overflow-scroll")
    //     }
    // }, [insModalShown, isIntersecting])

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
            sliderRef.current.style.animationPlayState = "paused"
        }
    }, [modalOpen, hovering])
    useEffect(() => {
        console.log("hovering modalOPmen", hovering, modalOpen)
        if (!hovering && !modalOpen) {
            sliderRef.current.style.animationPlayState = "running"
        }
    }, [modalOpen, hovering])
    useEffect(() => {
        console.log(modalData)
    }, [modalData])
    return (
        <section
            aria-hidden="true"
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
                            <HeadingPrimary
                                text={"TECHNOLOGIES"}
                                spread={false}
                            />
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
                                setHovering(true)
                            }}
                            onMouseOut={(e) => {
                                setHovering(false)

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
                            {skills.map(
                                (
                                    { name, icon, bg, color, details, link },
                                    index
                                ) => (
                                    <Skill
                                        length={skills?.length}
                                        key={`skill-key-${index + 1}`}
                                        index={index}
                                        img={icon}
                                        bg={bg}
                                        color={color}
                                        details={details ? details : "lala"}
                                        link={
                                            link ? link : "https://google.com"
                                        }
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
                                )
                            )}
                        </div>
                    </div>

                    {insModalShown && (
                        <InstModal
                            setInsModalShown={setInsModalShown}
                            setCookie={setCookie}
                            insModalShown={insModalShown}
                        />
                    )}

                    <div
                        className={`skill-modal ${
                            modalOpen
                                ? "skill-modal-shown"
                                : "skill-modal-hidden"
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
                                {modalData?.details}
                            </p>
                            <Link target="_blank" href={modalData?.link || ""}>
                                Know more
                            </Link>
                            <span
                                className="p-1"
                                onClick={() => setModalOpen(false)}
                            >
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
    )
}

export default Skills

"use client"
import React, { useEffect, useState } from "react"
import HamButton from "./kids/HamButton"
import Link from "next/link"
import Image from "next/image"
import { logo } from "@/public/images"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import HomeIcon from "@mui/icons-material/Home"
import DownloadIcon from "@mui/icons-material/Download"
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded"
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded"
import InfoRoundedIcon from "@mui/icons-material/InfoRounded"

const Navbar = () => {
    const [hamOpen, setHamopen] = useState(false)
    // useEffect(() => {
    //   const htmlElem = document.getElementsByTagName("html")[0];
    //   if (hamOpen) {
    //     htmlElem.style.overflowY = "hidden";
    //   } else {
    //     htmlElem.style.overflowY = "auto";
    //   }
    // }, [hamOpen]);
    // useEffect(() => {
    //   console.log(document.querySelectorAll(".nav-content-menu-item-long"));
    // }, []);
    return (
        <>
            <div className="ham">
                <HamButton hamOpen={hamOpen} setHamopen={setHamopen} />
                <div className="logo-box z-max">
                    <div className="logo-container logo-container-front">
                        <Image
                            className="logo"
                            width={70}
                            height={70}
                            src={logo}
                            alt="Fahim Logo"
                        />
                    </div>
                    <Link
                        href={"/"}
                        className="logo-container logo-container-back"
                    >
                        <Image
                            className="logo"
                            width={70}
                            height={70}
                            src={logo}
                            alt="Fahim Logo"
                        />
                    </Link>
                </div>

                <div
                    className={`ham-background ${
                        hamOpen
                            ? "scale-normal ham-background-open"
                            : "ham-background-close scale-down "
                    }`}
                >
                    &nbsp;
                    <nav
                        className={`nav-content z-max ${hamOpen ? "  " : " "}`}
                    >
                        <div
                            className={`nav-content-menu-container  ${
                                hamOpen
                                    ? " nav-content-menu-container-bg-visible "
                                    : " nav-content-menu-container-bg-hidden"
                            }`}
                        >
                            <ul className="nav-content-menu">
                                <Link
                                    href={"/"}
                                    onClick={() => setHamopen(false)}
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay"
                                        )
                                    }
                                    className={`nav-content-menu-item nav-content-menu-item-border nav-content-menu-item-short ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown nav-content-menu-item-delay"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <span>Home</span>{" "}
                                    <HomeIcon fontSize="1rem" />
                                </Link>
                                <Link
                                    target="_blank"
                                    href={"/files/Fahim Faisal Khan.pdf"}
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay"
                                        )
                                    }
                                    className={`nav-content-menu-item nav-content-menu-item-border nav-content-menu-item-short ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown nav-content-menu-item-delay"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <span>Resume</span>{" "}
                                    <DownloadIcon fontSize="1rem" />
                                </Link>
                                <Link
                                    target="_blank"
                                    onClick={() => setHamopen(false)}
                                    href={
                                        "https://github.com/FahimFaisalKhan?tab=repositories"
                                    }
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay"
                                        )
                                    }
                                    className={`nav-content-menu-item nav-content-menu-item-border nav-content-menu-item-short ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown nav-content-menu-item-delay"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <span> All Projects</span>{" "}
                                    <AccountTreeRoundedIcon fontSize="1rem" />
                                </Link>
                                <Link
                                    onClick={() => setHamopen(false)}
                                    href={"/about-me"}
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay"
                                        )
                                    }
                                    className={`nav-content-menu-item nav-content-menu-item-border nav-content-menu-item-short ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown nav-content-menu-item-delay"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <span> About Me</span>{" "}
                                    <InfoRoundedIcon fontSize="1rem" />
                                </Link>
                                <Link
                                    onClick={() => setHamopen(false)}
                                    href={"/blogs"}
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay"
                                        )
                                    }
                                    className={`nav-content-menu-item nav-content-menu-item-border nav-content-menu-item-short ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown nav-content-menu-item-delay"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <span>I Write Sometimes</span>
                                    <AutoStoriesRoundedIcon fontSize="1rem" />
                                </Link>

                                <li
                                    className={` nav-content-menu-caption ${
                                        hamOpen
                                            ? " nav-content-menu-caption-shown"
                                            : " nav-content-menu-caption-hidden"
                                    }`}
                                >
                                    Get Connected
                                </li>
                                <Link
                                    target="_blank"
                                    href={"mailto:khanfahimfaisal@gmail.com"}
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay-long"
                                        )
                                    }
                                    className={`nav-content-menu-item-long  nav-content-menu-item-long-mail   ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown  nav-content-menu-item-delay-long "
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <EmailIcon
                                        style={{
                                            color: "white",
                                        }}
                                        fontSize="1rem"
                                    />{" "}
                                    <span> khanfahimfaisal@gmail.com</span>
                                </Link>
                                <Link
                                    target="_blank"
                                    href={
                                        "https://linkedin.com/in/fahim-faisal-khan/"
                                    }
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay-long"
                                        )
                                    }
                                    className={` nav-content-menu-item-long  nav-content-menu-item-long-linkedin  ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown  nav-content-menu-item-delay-long"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <LinkedInIcon
                                        style={{ color: "#0077B5" }}
                                        fontSize="1rem"
                                    />{" "}
                                    <span>
                                        {" "}
                                        linkedin.com/in/fahim-faisal-khan
                                    </span>
                                </Link>
                                <Link
                                    target="_blank"
                                    href={
                                        "https://wa.me/61493950165?text=Hi%20There!"
                                    }
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay-long"
                                        )
                                    }
                                    className={` nav-content-menu-item-long nav-content-menu-item-long-wa  ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown   nav-content-menu-item-delay-long"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    <WhatsAppIcon
                                        style={{ color: "#075E54" }}
                                        fontSize="1rem"
                                    />

                                    <span> wa.link/ffj1h0</span>
                                </Link>
                                <li
                                    onMouseEnter={(e) =>
                                        e?.target?.classList?.remove(
                                            "nav-content-menu-item-delay-long"
                                        )
                                    }
                                    className={`   nav-content-menu-item-short nav-content-menu-item-more ${
                                        hamOpen
                                            ? "nav-content-menu-item-shown  nav-content-menu-item-delay-long"
                                            : "nav-content-menu-item-hidden"
                                    }`}
                                >
                                    {/* <WhatsAppIcon style={{ color: "#075E54" }} fontSize="1rem" /> */}

                                    <span>
                                        {" "}
                                        <Link
                                            href={
                                                "https://github.com/FahimFaisalKhan"
                                            }
                                            target="_blank"
                                        >
                                            GH
                                        </Link>{" "}
                                    </span>
                                    <span>
                                        {" "}
                                        <Link
                                            href={
                                                "https://www.instagram.com/rage.cave/"
                                            }
                                            target="_blank"
                                        >
                                            IG
                                        </Link>
                                    </span>
                                    <span>
                                        {" "}
                                        <Link
                                            href={
                                                "https://www.facebook.com/KhanFahimFaisal/"
                                            }
                                            target="_blank"
                                        >
                                            {" "}
                                            FB
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar

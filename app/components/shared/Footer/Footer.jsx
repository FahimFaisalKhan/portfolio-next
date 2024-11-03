import React from "react"
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone"
import CopyrightIcon from "@mui/icons-material/Copyright"
import GitHubIcon from "@mui/icons-material/GitHub"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Link from "next/link"
const Footer = () => {
    return (
        <div
            style={{
                background: "var(--base)",
            }}
        >
            {" "}
            <section
                aria-hidden="true"
                id="footer"
                className="section width-control "
                style={{ position: "relative" }}
            >
                <div className="footer">
                    {" "}
                    <div
                        className="
                footer-head"
                    >
                        <div className="footer-head-copyright">
                            <CopyrightIcon
                                className="footer-head-copyright-icon"
                                fontSize="inherit"
                            />

                            <p className=" footer-head-copyright-year">2024</p>
                        </div>
                        <div className="footer-head-scrolltop">
                            <p className="footer-head-scrolltop-text">
                                BACK TO TOP{" "}
                            </p>
                            <button className="footer-head-scrolltop-btn">
                                <ArrowCircleUpTwoToneIcon fontSize="inherit" />
                            </button>
                        </div>
                    </div>
                    <div className="footer-body">
                        <p className="footer-body-cap">
                            HAVE A PROJECT IN MIND?
                        </p>
                        <h2 className="footer-body-title">LET&#8217;S TALK</h2>
                    </div>
                    <div className="footer-tail">
                        {" "}
                        <div className="footer-tail-social">
                            <button className="footer-tail-social-gh footer-tail-social-btn ">
                                <span className="sm-hidden"> GITHUB</span>
                                <span className="lg-hidden">
                                    <GitHubIcon
                                        fontSize="small"
                                        style={{ marginTop: "2px" }}
                                    />
                                </span>
                            </button>
                            <button className="footer-tail-social-li footer-tail-social-btn ">
                                {" "}
                                <span className="sm-hidden"> LINKEDIN</span>
                                <span className="lg-hidden">
                                    <LinkedInIcon
                                        fontSize="small"
                                        style={{ marginTop: "2px" }}
                                    />
                                </span>
                            </button>
                            <button className="footer-tail-social-mg footer-tail-social-btn ">
                                <span className="sm-hidden"> WHATSAPP</span>
                                <span className="lg-hidden">
                                    <WhatsAppIcon
                                        fontSize="small"
                                        style={{ marginTop: "2px" }}
                                    />
                                </span>
                            </button>
                        </div>
                        <p className="footer-tail-credits">
                            <span className="footer-tail-credits-cap">
                                Designed and developed by
                            </span>{" "}
                            <span className="footer-tail-credits-name">
                                Fahim Faisal Khan
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

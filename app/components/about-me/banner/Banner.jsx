import { meCheck } from "@/public/images"
import Image from "next/image"
import React from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"

const Banner = ({ section, pOne, pTwo, img, alt, id }) => {
    return (
        <div style={{ background: "var(--base)" }}>
            {" "}
            <section
                aria-hidden="true"
                className="section width-control"
                id={id}
            >
                <div>
                    {" "}
                    {section === "passion" && (
                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <HeadingPrimary text={"Passion"} />
                        </div>
                    )}
                    <div
                        className={`banner abt-banner ${
                            section === "passion"
                                ? "abt-banner-flipped pt-3"
                                : "abt-banner-regular"
                        } `}
                    >
                        <div className="banner-left abt-banner-left">
                            <p
                                className={`para-base ${
                                    section === "passion"
                                        ? "abt-banner-left-p-one-flipped "
                                        : "abt-banner-left-p-one"
                                }`}
                            >
                                {pOne}{" "}
                            </p>

                            <p
                                className={`para-base mt-3 ${
                                    section === "passion"
                                        ? "abt-banner-left-p-two-flipped"
                                        : "abt-banner-left-p-two"
                                }`}
                            >
                                {pTwo}
                            </p>
                        </div>
                        <div
                            className={`banner-right ${
                                section === "passion"
                                    ? "abt-banner-right-flipped"
                                    : "abt-banner-right"
                            }`}
                        >
                            <Image
                                className={`img-responsive fade-out-bottom ${
                                    section === "passion"
                                        ? "abt-banner-right-img-flipped"
                                        : "abt-banner-right-img"
                                }`}
                                src={img}
                                alt={alt}
                                // width={400}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner

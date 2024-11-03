"use client"
import { singcap } from "@/public/images"
import Image from "next/image"
import React from "react"
import HeadingPrimary from "../../shared/Headings/HeadingPrimary"
import { useRouter } from "next/navigation"
import Link from "next/link"

const MoreProjects = () => {
    const projects = [
        {
            name: "SingCapital",
            imgUrlPath: "/images/projects/singcap.jpg",
            techs: [
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Axios",
                "Apps Script",
                "Nodemailer",
                "SEO",
                "Next.js Route Hnadlers",
                "Email OTP verification",
                "Dynamic blog page",
            ],
            site: "https://singcapital.com.sg/",
        },
        {
            name: "SRS",
            imgUrlPath: "./images/projects/srs.jpg",
            techs: [
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Axios",
                "Apps Script",
                "Nodemailer",
                "SEO",
                "Next.js Route Hnadlers",
                "Email OTP verification",
                "Dynamic blog page",
            ],
            site: "https://srs.sg",
        },
        {
            name: "Careshields",
            imgUrlPath: "./images/projects/careshields.jpg",
            techs: [
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Axios",
                "Apps Script",
                "Nodemailer",
                "SEO",
                "Next.js Route Hnadlers",
                "Email OTP verification",
                "Dynamic blog page",
            ],
            site: "https://careshields.sg/",
        },
    ]

    const router = useRouter()
    return (
        <div style={{ background: "var(--base2)" }}>
            <section
                aria-hidden="true"
                className="section width-control"
                id="more-projects"
            >
                <div style={{ width: "100%" }}>
                    <div
                        className="text-center"
                        style={{ marginBottom: "3rem", marginTop: "3rem" }}
                    >
                        <div>
                            <HeadingPrimary text={"PROJECTS"} spread={false} />
                        </div>
                        <p className="para-lg ml-1 mt-1 mb-4"> Professional</p>
                    </div>
                    <div className="more-project-cards">
                        {projects?.map((project, index) => (
                            <Link
                                href={project?.site}
                                target="_blank"
                                // onClick={() => router?.push(project?.site)}
                                key={`project-key-${index + 1}`}
                                className="more-project-cards-indiv "
                                // background-image: url("/images/projects/singcap.jpg");

                                // style={{ backgroundImage: "./images/projects/singcap.jpg" }}
                            >
                                <div
                                    className="more-project-cards-indiv-img"
                                    style={{
                                        background: ` url(${project?.imgUrlPath})`,
                                    }}
                                ></div>
                                <h2 className="more-project-cards-indiv-project more-project-cards-indiv-project-name">
                                    {project?.name}
                                </h2>
                                <ul className="more-project-cards-indiv-project more-project-cards-indiv-project-info">
                                    {project?.techs?.map((tech, index) => (
                                        <li key={`text-key-${index + 1}`}>
                                            {" "}
                                            <span>♦</span> {tech}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MoreProjects

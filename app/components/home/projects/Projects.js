"use client"

import React, { useState } from "react"

import HeadingSecondary from "../../shared/Headings/HeadingPrimary"
import Link from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"
import LanguageIcon from "@mui/icons-material/Language"
import StorageIcon from "@mui/icons-material/Storage"

const Projects = () => {
    const data = [
        {
            id: 1,
            title: "Fahim's Cap",
            description:
                "A responsive photography website with a captivating layout using Tailwind CSS, Daisy-UI, and CSS Grid. Key features include a quick service search powered by MongoDB, user reviews with React, and pagination for speed. Live site and code links are available.",
            site: "https://review-site-auth.web.app/",
            clientCode:
                "https://github.com/FahimFaisalKhan/Photographer_Site_MERN",
            serverCode:
                "https://github.com/FahimFaisalKhan/Photographer_Site_MERN-_server",
        },
        {
            id: 2,
            title: "Binary B",
            description:
                "An online learning platform with a sleek dark mode, custom carousel, and social signup options. Users can toggle dark mode (built with Daisy-UI and React hooks) for comfort, browse highlighted courses via a carousel, and log in easily with Google or GitHub. Live site and code links available.",
            site: "https://learning-platform-auth.web.app/",
            clientCode:
                "https://github.com/FahimFaisalKhan/Online-Learning-Platform-MERN",
            serverCode:
                "https://github.com/FahimFaisalKhan/Online-Learning-Platform-Server",
        },
        {
            id: 3,
            title: "Becha-K",
            description:
                "A multi-vendor platform for second-hand musical instruments, featuring an admin panel, card payment, product listing, and email signup with image upload. Admins control content via a dedicated panel (using JWT, Firebase, and MongoDB), while users can securely buy, sell, and manage orders. Stripe enables card payments, and ImageBB hosts product images. Live site and code links available.",
            site: "https://bechakena-auth.web.app/",
            clientCode:
                "https://github.com/FahimFaisalKhan/Second-hand-product-MERN-Stripe",
            serverCode:
                "https://github.com/FahimFaisalKhan/Second-hand-product-MERN-Strip-server",
        },
    ]

    const [projectActive, setProjectActive] = useState(data[0])
    const handleActiveProjectChange = (e, project) => {
        e.preventDefault()
        const { id } = project
        console.log(id)
        const newProject = data.find((project) => project.id === id)
        setProjectActive(newProject)
    }
    return (
        <div style={{ background: "var(--base2)" }}>
            <section
                // aria-hidden="true"
                id="home-projects"
                className="section width-control"
            >
                <div className="projects">
                    <div className="project project-border">
                        <div className="project-body">
                            <div className="project-card">
                                <div className="project-card-side project-card-side__left  ">
                                    {data.map(
                                        ({
                                            id,
                                            title,
                                            description,
                                            site,
                                            clientCode,
                                            serverCode,
                                        }) => (
                                            <div
                                                key={id}
                                                aria-hidden={
                                                    id !== projectActive.id
                                                }
                                                className={
                                                    id === projectActive.id
                                                        ? `project-card-side-cmn project-card-side__left--shown`
                                                        : `project-card-side-cmn project-card-side__left--hidden`
                                                }
                                            >
                                                <HeadingSecondary
                                                    spread={false}
                                                    text={title}
                                                />
                                                <p className="project-card__description para-base mt-2 pb-2">
                                                    {description}
                                                </p>
                                                <div className="project-card__links para-base mt-2 pb-2">
                                                    <Link
                                                        href={site}
                                                        target="_blank"
                                                        className="project-card__links-link para-base"
                                                    >
                                                        <span className="project-card__links-link-icon">
                                                            <LanguageIcon fontSize="small" />
                                                        </span>
                                                        <span className="project-card__links-link-text">
                                                            Live Site
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        href={clientCode}
                                                        target="_blank"
                                                        className="project-card__links-link para-base"
                                                    >
                                                        <span className="project-card__links-link-icon">
                                                            <GitHubIcon fontSize="small" />
                                                        </span>
                                                        <span className="project-card__links-link-text">
                                                            GitHub
                                                        </span>
                                                    </Link>

                                                    <Link
                                                        href={serverCode}
                                                        target="_blank"
                                                        className="project-card__links-link para-base"
                                                    >
                                                        <span className="project-card__links-link-icon">
                                                            <StorageIcon fontSize="small" />
                                                        </span>
                                                        <span className="project-card__links-link-text">
                                                            Backend
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>

                                <div className="project-card-side project-card-side__right ">
                                    <h3 className="heading-tertiary leading-2 mb-2">
                                        Projects
                                    </h3>

                                    <h4
                                        style={{ fontSize: "var(--font-lg)" }}
                                        className="mb-3"
                                    >
                                        Personal
                                    </h4>
                                    <div className="project-list">
                                        <div className="project-list__body">
                                            {data.map((project, index) => {
                                                return (
                                                    <Link
                                                        key={project.id}
                                                        onClick={(e) =>
                                                            handleActiveProjectChange(
                                                                e,
                                                                project
                                                            )
                                                        }
                                                        className="project-list__item"
                                                        href={"/"}
                                                    >
                                                        {project.title}
                                                    </Link>
                                                )
                                            })}
                                            {/* <Link
                                                className="project-list__item"
                                                href={"/"}
                                            >
                                                Some Link
                                            </Link>
                                            <Link
                                                className="project-list__item"
                                                href={"/"}
                                            >
                                                Some Link
                                            </Link>
                                            <Link
                                                className="project-list__item"
                                                href={"/"}
                                            >
                                                Some Link
                                            </Link>
                                            <Link
                                                className="project-list__item"
                                                href={"/"}
                                            >
                                                Some Link
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects

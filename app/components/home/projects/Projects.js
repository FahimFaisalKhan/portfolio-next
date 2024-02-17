import React from "react";

import HeadingSecondary from "../../shared/Headings/HeadingPrimary";
import Link from "next/link";

const Projects = async () => {
  return (
    <div style={{ background: "var(--base2)" }}>
      <section id="home-projects" className="section width-control">
        <div className="projects">
          <div className="project project-border">
            <div className="project-body">
              <div className="project-card">
                <div className="project-card-side project-card-side__left  ">
                  <div className="  project-card-side__left--shown">
                    <HeadingSecondary spread={false} text={"PROJECT NAME"} />
                    <p className="project-card__description para-base mt-2 pb-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ipsam dolore nobis incidunt obcaecati rerum. Odio possimus
                      praesentium nemo, inventore quasi illo velit veniam vel
                      quidem molestiae repellendus eligendi ducimus earum omnis
                      provident sed nisi veritatis.
                    </p>
                  </div>
                </div>

                <div className="project-card-side project-card-side__right ">
                  <h3 className="heading-tertiary leading-2 mb-2">Projects</h3>

                  <h4 style={{ fontSize: "var(--font-lg)" }} className="mb-3">
                    Personal
                  </h4>
                  <div className="project-list">
                    <div className="project-list__body">
                      <Link className="project-list__item" href={"/"}>
                        Some Link
                      </Link>
                      <Link className="project-list__item" href={"/"}>
                        Some Link
                      </Link>
                      <Link className="project-list__item" href={"/"}>
                        Some Link
                      </Link>
                      <Link className="project-list__item" href={"/"}>
                        Some Link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

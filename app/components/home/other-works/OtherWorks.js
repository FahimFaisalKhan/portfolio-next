import React from "react";
import HeadingPrimary from "../../shared/Headings/HeadingPrimary";

const OtherWorks = () => {
  return (
    <div style={{ background: "var(--base)" }}>
      <section id="other-works" className="section width-control">
        <div style={{ width: "100%" }}>
          <div className="text-center ">
            <HeadingPrimary text={"OTHER WORKS"} />
          </div>
          <div className="other-works-cards">
            <div className="other-works-cards-indiv other-works-cards-indiv-scrapping">
              ok bhai
            </div>
            <div className="other-works-cards-indiv other-works-cards-indiv-games">
              jiaga
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherWorks;

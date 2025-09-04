import React, { useState } from "react";
import headingImg from "../../../assets/img/sec-8-heading.png";
import before1 from "../../../assets/img/before-after/04-b.jpg";
import after1 from "../../../assets/img/before-after/04-a.jpg";
import intBefore from "../../../assets/img/before-after/int-before.png";
import intAfter from "../../../assets/img/before-after/int-after.png";
import bathBefore from "../../../assets/img/before-after/bath-before.jpg";
import bathAfter from "../../../assets/img/before-after/bath-after.jpg";

export default function BeforeAfter() {
  const [beforeAfter1, setBeforeAfter1] = useState(50);
  const [beforeAfter2, setBeforeAfter2] = useState(50);
  const [beforeAfter3, setBeforeAfter3] = useState(50);
  return (
    <main>
      {/* Section 1 Start */}
      <section id="priceSection-1">
        <div className="about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <a href="/index.html" className="abt-sec-1-a-1">
                  Home
                </a>
                /
                <a href="" className="abt-sec-1-a">
                  Before After
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Before After</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <section>
        <div className="before-after-wrapper-sec-1">
          <div className="container-fluid">
            <div
              className="before-after-img-wrapper"
              style={{ "--position": `${beforeAfter1}%` }} // <-- move style here
            >
              <div className="before-after-inner-wrap">
                <img className="before-img before-after-slider-img" src={before1} width="100%" alt="" />
                <img className="after-img before-after-slider-img" src={after1} width="100%" alt="" />
              </div>
              <input type="range" min="5" max="95" value={beforeAfter1} onChange={(e) => setBeforeAfter1(e.target.value)} className="before-after-range" />
              <div className="slider-ba-line"></div>
              <div className="slider-ba-btn" aria-hidden="true">
                <i className="fa-solid fa-arrows-left-right"></i>
              </div>
              <h5 className="before-text ba-text">Before</h5>
              <h5 className="after-text ba-text">After</h5>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <section>
        <div className="before-after-wrapper-sec-2">
          <div className="container">
            <div className="row row-gap-5">
              {/* Interior */}
              <div className="col-lg-6">
                <div className="before-after-img-wrapper before-after-img-wrapper-2" style={{ "--position": `${beforeAfter2}%` }}>
                  <div className="before-after-inner-wrap">
                    <img className="before-img before-after-slider-img" src={intBefore} width="100%" alt="" />
                    <img className="after-img before-after-slider-img" src={intAfter} width="100%" alt="" />
                  </div>
                  <input type="range" min="5" max="95" value={beforeAfter2} onChange={(e) => setBeforeAfter2(e.target.value)} className="before-after-range before-after-range-2" />
                  <div className="slider-ba-line"></div>
                  <div className="slider-ba-btn" aria-hidden="true">
                    <i className="fa-solid fa-arrows-left-right"></i>
                  </div>
                  <h5 className="before-text ba-text">Before</h5>
                  <h5 className="after-text ba-text">After</h5>
                </div>
              </div>

              {/* Bath */}
              <div className="col-lg-6">
                <div className="before-after-img-wrapper before-after-img-wrapper-3" style={{ "--position": `${beforeAfter3}%` }}>
                  <div className="before-after-inner-wrap">
                    <img className="before-img before-after-slider-img" src={bathBefore} width="100%" alt="" />
                    <img className="after-img before-after-slider-img" src={bathAfter} width="100%" alt="" />
                  </div>
                  <input type="range" min="5" max="95" value={beforeAfter3} onChange={(e) => setBeforeAfter3(e.target.value)} className="before-after-range before-after-range-3" />
                  <div className="slider-ba-line"></div>
                  <div className="slider-ba-btn" aria-hidden="true">
                    <i className="fa-solid fa-arrows-left-right"></i>
                  </div>
                  <h5 className="before-text ba-text">Before</h5>
                  <h5 className="after-text ba-text">After</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 End */}

      {/* Section 4 Start */}
      <section>
        <div className="price-section-4 price-section-4-bg">
          <div className="container">
            <div>
              <div className="sec-8-heading">
                <img src={headingImg} alt="" />
                <span>Work With Us</span>
              </div>
            </div>
            <div>
              <div>
                <h1 className="price-sec-4-h1">
                  Have a Project in mind?
                  <br />
                  Do not hesitate to say hello.
                </h1>
              </div>
            </div>
            <div className="text-center">
              <a href="/contact-us.html" className="price-sec-4-btn">
                Lets Build <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 End */}
    </main>
  );
}

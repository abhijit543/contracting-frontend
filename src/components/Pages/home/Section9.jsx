// src/components/Pages/home/Section9.jsx
import React from "react";

import sec8Heading from "../../../assets/img/sec-8-heading.png"; // same heading image you used in section 8

export default function Section9() {
  return (
    <section id="Section-9">
      <div className="section-9 sec-9-wrapper">
        <div className="container">
          {/* Title */}
          <div className="sec-8-heading">
            <img src={sec8Heading} loading="lazy" alt="section heading" />
            <span>Work With Us</span>
          </div>

          {/* Big heading */}
          <div>
            <h1 className="sec-8-h1 sec-9-heading">
              <span className="sec-9-span">We are</span> excited to learn
              <br />
              more about <span className="sec-9-span">your project</span>
            </h1>
          </div>

          {/* CTA button */}
          <div className="text-center">
            <a href="/contact-us.html" className="sec-9-btn">
              Recent Project <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

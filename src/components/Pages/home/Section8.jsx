// src/components/Pages/home/Section8.jsx
import React from "react";


// imports for every image
import sec8Heading from "../../../assets/img/sec-8-heading.png";
import blog1 from "../../../assets/img/sec-8/sec-8-1.jpg";
import blog2 from "../../../assets/img/sec-8/sec-8-2.jpg";
import blog3 from "../../../assets/img/sec-8/sec-8-3.jpg";

export default function Section8() {
  return (
    <section id="Section-8">
      <div className="section-8">
        <div className="container">
          {/* Heading */}
          <div>
            <div className="sec-8-heading">
              <img src={sec8Heading} loading="lazy" alt="section 8 heading" />
              <span>Our Blog</span>
            </div>
          </div>

          <div>
            <h1 className="sec-8-h1">
              Latest News and Updates
              <br />
              in Interior Design
            </h1>
          </div>

          {/* Blog Cards */}
          <div>
            <div className="row row-gap-5 mt-md-3">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="sec-8-img-sec-wrapper">
                  <div className="sec-8-img-sec-img-wrapper">
                    <a href="/blog-details.html" className="sec-8-img-sec-a">
                      <img
                        src={blog1}
                        loading="lazy"
                        alt="Architecture blog"
                        width="100%"
                        className="sec-8-img-sec-img"
                      />
                      <span className="sec-8-img-sec-span">Architecture</span>
                    </a>
                  </div>
                  <div className="sec-8-img-sec-content-wrapper">
                    <a
                      href="/blog-details.html"
                      className="sec-8-img-sec-content-wrapper-a"
                    >
                      <h4>
                        The Retro Outdoor Furniture Set That’s Like Grandma’s—
                        But Better
                      </h4>
                    </a>
                    <a
                      href="/blog-details.html"
                      className="sec-8-img-sec-content-wrapper-btn"
                    >
                      Read More <i className="fa-solid fa-plus sec-8-icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="sec-8-img-sec-wrapper">
                  <div className="sec-8-img-sec-img-wrapper">
                    <a href="/blog-details.html" className="sec-8-img-sec-a">
                      <img
                        src={blog2}
                        loading="lazy"
                        alt="Office Desk blog"
                        width="100%"
                        className="sec-8-img-sec-img"
                      />
                      <span className="sec-8-img-sec-span">Office Desk</span>
                    </a>
                  </div>
                  <div className="sec-8-img-sec-content-wrapper">
                    <a
                      href="/blog-details.html"
                      className="sec-8-img-sec-content-wrapper-a"
                    >
                      <h4>The Art of Mindful Parenting: Finding Balance and Joy</h4>
                    </a>
                    <a
                      href="/blog-details.html"
                      className="sec-8-img-sec-content-wrapper-btn"
                    >
                      Read More <i className="fa-solid fa-plus sec-8-icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="sec-8-img-sec-wrapper">
                  <div className="sec-8-img-sec-img-wrapper">
                    <a href="/blog-details.html" className="sec-8-img-sec-a">
                      <img
                        src={blog3}
                        loading="lazy"
                        alt="Interior blog"
                        width="100%"
                        className="sec-8-img-sec-img"
                      />
                      <span className="sec-8-img-sec-span">Interior</span>
                    </a>
                  </div>
                  <div className="sec-8-img-sec-content-wrapper">
                    <a
                      href="/blog-details.html"
                      className="sec-8-img-sec-content-wrapper-a"
                    >
                      <h4>
                        Unlocking Creativity: 10 Exercises to Inspire Your
                        Imagination
                      </h4>
                    </a>
                    <a
                      href="/blog-details.html"
                      className="sec-8-img-sec-content-wrapper-btn"
                    >
                      Read More <i className="fa-solid fa-plus sec-8-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

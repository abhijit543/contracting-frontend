import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./section6.css";

import project1 from "../../../assets/img/project-1.jpg";
import project2 from "../../../assets/img/project-2.jpg";
import project3 from "../../../assets/img/project-3.jpg";
import subtitleBg from "../../../assets/img/main-banners/sub-title-bg.png";
import designprocedure from "../../../assets/img/design-procedure.jpg";

export default function Section6() {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
  const [active, setActive] = useState(1);

  const slides = [
    { img: project1, title: "Living room", subtitle: "interior" },
    { img: project2, title: "Kitchen room", subtitle: "interior" },
    { img: project3, title: "Bathroom", subtitle: "interior" },
  ];

  return (
    <section
      id="Section-6"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #219c97 0%, #1d7d79 100%)",
        padding: "80px 0",
        color: "#fff",
        position: "relative",
        marginTop:"3px"
      }}
    >
      {/* Floating animated shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>

      {/* Subtitle */}
      <section className="section-subtitle  mb-5">
        <div className="container">
          <div className="sub-title-wrapper">
            <h6 className="sub-title ">Project Life Cycle</h6>
            <img
              src={subtitleBg}
              loading="lazy"
              alt="subtitle background"
              className="sub-title-img mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Design Image */}
      <section className="section-design-image text-center mb-5 animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <img
                src={designprocedure}
                alt="Design coordination visual"
                className="design-section-img img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Swiper Section */}
      <div className="section-6 modern-slider position-relative">
        <div className="modern-slider-area-start">
          <div className="container">
            <div className="text-center mb-4">
              <div className="pagination-left-banner-one d-inline-flex align-items-center gap-3">
                <div className="activeslide fs-4 fw-bold">
                  {String(active).padStart(2, "0")}
                </div>
                <div
                  className="swiper-paginations"
                  style={{ width: "120px", height: "4px", background: "#fff3" }}
                ></div>
                <div className="totalslide fs-4 fw-bold text-white-50">
                  {String(slides.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            <Swiper
              modules={[Pagination, Controller, Autoplay]}
              onSwiper={setMainSwiper}
              controller={{ control: textSwiper }}
              onSlideChange={(s) => setActive(s.realIndex + 1)}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                el: ".swiper-paginations",
                type: "progressbar",
                clickable: true,
              }}
              className="mySwiper-product-two-showcase"
            >
              {slides.map((s, idx) => (
                <SwiperSlide key={`img-${idx}`}>
                  <div className="single-product-wrapper-two animate__animated animate__zoomIn">
                    <img
                      src={s.img}
                      alt={`${s.title} ${s.subtitle}`}
                      className="img-fluid rounded-4 shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Text Swiper */}
            <div className="portfolio-outer-text-swiper-wrapper text-center mt-4">
              <Swiper
                modules={[Controller]}
                onSwiper={setTextSwiper}
                controller={{ control: mainSwiper }}
                slidesPerView={1}
                allowTouchMove={false}
                className="mySwiper-product-OuterText-2"
              >
                {slides.map((s, idx) => (
                  <SwiperSlide key={`txt-${idx}`}>
                    <div className="outer-product-text">
                      <h2 className="fw-bold fs-3">
                        {s.title} <span className="text-light">{s.subtitle}</span>
                      </h2>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Know More Button */}
            <div className="text-center mt-5">
              <a
                href="/projects"
                className="sec-9-btn"
                style={{
                  background: "#fff",
                  color: "#219c97",
                  padding: "10px 30px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "0.3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#e6fffb")}
                onMouseLeave={(e) => (e.target.style.background = "#fff")}
              >
                Know More <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

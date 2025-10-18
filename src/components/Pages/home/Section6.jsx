import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper/modules";

import "./section6.css";
import "swiper/css";
import "swiper/css/pagination";

import project1 from "../../../assets/img/project-1.jpg";
import project2 from "../../../assets/img/project-2.jpg";
import project3 from "../../../assets/img/project-3.jpg";
import subtitleBg from "../../../assets/img/main-banners/sub-title-bg.png";
import designprocedure from "../../../assets/img/design-procedure.jpg"
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
<section id="Section-6">

<section className="section-subtitle">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-12">
        <div className="sub-title-wrapper">
          <h6 className="sub-title">Project Life  Cycle</h6>
          <img
            src={subtitleBg}
            loading="lazy"
            alt="subtitle background"
            className="sub-title-img"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Section 2: Design Image */}
<section className="section-design-image text-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-12">
        <img
          src={designprocedure}
          alt="Design coordination visual"
   
          className="design-section-img img-fluid"
        />
      </div>
    </div>
  </div>
</section>


  {/* slider */}
  <div className="section-6 modern-slider">
    <div className="modern-slider-area-start">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-style-two-title-main-wrapper">
              <div className="pagination-left-banner-one">
                <div className="activeslide">
                  {String(active).padStart(2, "0")}
                </div>
                <div className="swiper-paginations"></div>
                <div className="totalslide">
                  {String(slides.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt--70">
          <div className="col-lg-12">
            <div className="main-product-wrapper-two">
              {/* main image swiper */}
              <Swiper
                modules={[Pagination, Controller]}
                onSwiper={setMainSwiper}
                controller={{ control: textSwiper }}
                onSlideChange={(s) => setActive(s.realIndex + 1)}
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
                    <div className="single-product-wrapper-two">
                      <img
                        src={s.img}
                        alt={`${s.title} ${s.subtitle}`}
                        width="100%"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* text swiper */}
              <div className="portfolio-outer-text-swiper-wrapper">
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
                        <h2 className="title-change-one">
                          {s.title} <span>{s.subtitle}</span>
                        </h2>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* end text swiper */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
}

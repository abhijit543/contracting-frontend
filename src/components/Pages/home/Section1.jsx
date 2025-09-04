import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import WOW from "wow.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "animate.css";
import "./Home.css";

export default function Section1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <section className="section1">
      <div className="sec-1-wrapper">
        {/* Main Swiper */}
        <Swiper modules={[Navigation, Thumbs, Autoplay]} thumbs={{ swiper: thumbsSwiper }} navigation={true} autoplay={{ delay: 4000 }} loop={true} className="gallery-top sec-1-height">
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="banner-1-img sec-1-banner-pr">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-1-banner-pa">
                      <p className="banner-s">Best Interior Design</p>
                      <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                        <h1 className="banner-h1">
                          Building <span>Awesome</span>
                          <br /> Interiors Vision
                        </h1>
                        <p className="banner-p">We believe that a well-designed space has the power to transform lives, evoke emotions, and enhance experiences. Our team of talented designers.</p>
                        <a href="/" className="btn-primary">
                          Recent Project <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="banner-2-img sec-1-banner-pr">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-1-banner-pa">
                      <p className="banner-s">Best Interior Design</p>
                      <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                        <h1 className="banner-h1">
                          Creating <span>Inspiring</span>
                          <br /> Interiors Vision
                        </h1>
                        <p className="banner-p">We believe that a well-designed space has the power to transform lives, evoke emotions, and enhance experiences. Our team of talented designers.</p>
                        <a href="/" className="btn-primary">
                          Recent Project <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="banner-3-img sec-1-banner-pr">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-1-banner-pa">
                      <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                        <p className="banner-s">Best Interior Design</p>
                        <h1 className="banner-h1">
                          Decorate <span>Beautiful</span>
                          <br /> Living Room
                        </h1>
                        <p className="banner-p">We believe that a well-designed space has the power to transform lives, evoke emotions, and enhance experiences. Our team of talented designers.</p>
                        <a href="/" className="btn-primary">
                          Recent Project <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="sec-1-banner-position-a">
        <div className="container-fluid">
          <div className="row justify-content-end">
            {/* Static Thumbnails */}
            <div className="col-lg-9 col-md-10 index-thumb-padding">
              <div className="gallery-thumbs d-lg-block d-md-block d-none">
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={3} freeMode={true} watchSlidesProgress={true} modules={[Thumbs]} className="mySwiper">
                  <SwiperSlide>
                    <div className="p-0 index-slide-thumb-width">
                      <div className="sec-1-thumb-wrap sec-1-thumb-img-1">
                        <h1 className="sec-1-thumb-wrap-num">01</h1>
                        <div>
                          <p className="sec-1-thumb-wrap-p">Interior Design</p>
                          <h5 className="sec-1-thumb-wrap-h5">Modern Office</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-0 index-slide-thumb-width">
                      <div className="sec-1-thumb-wrap sec-1-thumb-img-2">
                        <h1 className="sec-1-thumb-wrap-num">02</h1>
                        <div>
                          <p className="sec-1-thumb-wrap-p">Interior Design</p>
                          <h5 className="sec-1-thumb-wrap-h5">Luxury Kitchen</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-0 index-slide-thumb-width">
                      <div className="sec-1-thumb-wrap sec-1-thumb-img-3">
                        <h1 className="sec-1-thumb-wrap-num">03</h1>
                        <div>
                          <p className="sec-1-thumb-wrap-p">Interior Design</p>
                          <h5 className="sec-1-thumb-wrap-h5">Living Room</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

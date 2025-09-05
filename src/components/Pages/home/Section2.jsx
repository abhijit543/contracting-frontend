// Section2.jsx
import "animate.css";
import subtitleBg from "../../../assets/img/main-banners/sub-title-bg.png";
import service1 from "../../../assets/img/service/service-01.jpg";
import service1svg from "../../../assets/img/service/service-i-1.svg";
import service2 from "../../../assets/img/service/service-02.jpg";
import service2svg from "../../../assets/img/service/service-i-2.svg";
import service3 from "../../../assets/img/service/service-03.jpg";
import service3svg from "../../../assets/img/service/service-i-2.svg";
import { Link } from "react-router-dom";
export default function Section2() {
  return (
    <section id="Section2">
      <div className="section-2">
        <div className="container">
          {/* Sub Title */}
          <div className="sub-title-wrapper">
            <h6 className="sub-title">Services</h6>
            <img src={subtitleBg} loading="lazy" alt="subtitle background" className="sub-title-img" />
          </div>

          {/* Title Row */}
          <div className="row sec-2-h-wrapper">
            <div className="col-lg-5 col-md-12">
              <h1 className="title">Comprehensive Interior Design Services</h1>
            </div>
            <div className="col-lg-5 col-md-12">
              <p className="title-p">Welcome to our interior design services, where we specialize in transforming spaces into stunning, functional of services.</p>
            </div>
            <div className="col-lg-2 col-md-12">
              <a href="/services.html" className="title-btn-secondary">
                View All Service <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* Service img Sec */}
          <div className="sec-2-service-img-wrapper wow animate__animated animate__fadeInUp" data-wow-duration="2s">
            <div className="row row-gap-5">
              {/* Service 1 */}
              <div className="col-lg-4 col-md-6 service-img-wrap">
                <div className="effect5 index-sec-2-img">
                  <a href="/space-palnning.html">
                    <img src={service1} loading="lazy" alt="Space Planning" width="100%" />
                  </a>
                </div>
                <div className="service-img-cont-wrapper">
                  <div>
                    <div className="service-wrapper-h1">
                      <span>
                        <img src={service1svg} loading="lazy" alt="icon" />
                      </span>
                      <span className="sec-1-thumb-wrap-num"> 01</span>
                    </div>
                    <div>
                      <h5>
                        <Link to="/space-planning" className="service-h">
                          Space Planning
                        </Link>
                      </h5>
                      <p className="service-img-p">Space planning is a fundamental aspect off interior design that focuses on arranging.</p>
                      <Link to="/space-planning" className="service-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="col-lg-4 col-md-6 service-img-wrap">
                <div className="effect5 index-sec-2-img">
                  <a href="/interior.html">
                    <img src={service2} loading="lazy" alt="Interior Design" width="100%" />
                  </a>
                </div>
                <div className="service-img-cont-wrapper">
                  <div>
                    <div className="service-wrapper-h1">
                      <span>
                        <img src={service2svg} loading="lazy" alt="icon" />
                      </span>
                      <span className="sec-1-thumb-wrap-num"> 02</span>
                    </div>
                    <div>
                      <h5>
                        <a href="/interior.html" className="service-h">
                          Interior Design
                        </a>
                      </h5>
                      <p className="service-img-p">Space planning is a fundamental aspect off interior design that focuses on arranging.</p>
                      <a href="/interior.html" className="service-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="col-lg-4 col-md-6 service-img-wrap">
                <div className="effect5 index-sec-2-img">
                  <a href="/remodiling.html">
                    <img src={service3} loading="lazy" alt="Remodiling Services" width="100%" />
                  </a>
                </div>
                <div className="service-img-cont-wrapper">
                  <div>
                    <div className="service-wrapper-h1">
                      <span>
                        <img src={service3svg} loading="lazy" alt="icon" />
                      </span>
                      <span className="sec-1-thumb-wrap-num"> 03</span>
                    </div>
                    <div>
                      <h5>
                        <a href="/remodiling.html" className="service-h">
                          Remodiling Services
                        </a>
                      </h5>
                      <p className="service-img-p">Space planning is a fundamental aspect off interior design that focuses on arranging.</p>
                      <a href="/remodiling.html" className="service-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Service 3 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

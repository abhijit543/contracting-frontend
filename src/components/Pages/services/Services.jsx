import { Link } from "react-router-dom";
import ourServicesLine from "../../../assets/img/sec-8-heading.png";
import serviceicon1 from "../../../assets/img/service/service-i-1.svg";
import serviceicon2 from "../../../assets/img/service/service-i-2.svg";
import serviceicon3 from "../../../assets/img/service/service-i-3.svg";

export default function Services() {
  return (
    <main>
      <section>
        <div className="about-section-1 about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>
                /
                <a href="#" className="abt-sec-1-a">
                  Service
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Service</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-section-3">
          <div className="container">
            <div className="sec-8-heading">
              <img src={ourServicesLine} alt="Our Service" />
              <span>Our Service</span>
            </div>

            <div>
              <h1 className="sec-8-h1">Our Services</h1>
              <p className="abtsec-3-p">
                We are proud to have a dedicated and skilled team of professionals
                <br />
                who are passionate about interior renovation and design.
              </p>
            </div>

            <div className="abt-sec-4-service-wrapper">
              <div className="row row-gap-5">
                <div className="col-lg-4 col-md-6">
                  <div className="service-sec-2-bg-wrapper">
                    <div className="service-wrapper-h1">
                      <img src={serviceicon1} alt="Space Planning" className="service-sec-2-svg" />
                    </div>
                    <div>
                      <h5>Space Planning</h5>
                      <p className="service-sec-2-img-p">Space planning is a fundamental aspect of interior design that focuses on arranging.</p>
                      <a href="/space-palnning.html" className="service-img-btn service-sec-2-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-sec-2-bg-wrapper">
                    <div className="service-wrapper-h1">
                      <img src={serviceicon2} alt="Home Staging" className="service-sec-2-svg" />
                    </div>
                    <div>
                      <h5>Home Staging</h5>
                      <p className="service-sec-2-img-p">Space planning is a fundamental aspect of interior design that focuses on arranging.</p>
                      <a href="/interior.html" className="service-img-btn service-sec-2-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-sec-2-bg-wrapper">
                    <div className="service-wrapper-h1">
                      <img src={serviceicon3} alt="Other Service" className="service-sec-2-svg" />
                    </div>
                    <div>
                      <h5>Other Service</h5>
                      <p className="service-sec-2-img-p">Description about this service goes here.</p>
                      <a href="/other-service.html" className="service-img-btn service-sec-2-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="price-section-4 price-section-4-bg">
          <div className="container">
            <div>
              <div className="sec-8-heading">
                <img src={ourServicesLine} alt="Work With Us" />
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
    </main>
  );
}

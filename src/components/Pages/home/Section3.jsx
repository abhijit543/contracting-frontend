// Section3.jsx
import "animate.css";
import subtitlebg from "../../../assets/img/main-banners/sub-title-bg.png";
import aboutbg1 from "../../../assets/img/about-us/about-bg-1.png";
import aboutimg from "../../../assets/img/about-us/about-img.jpg";
import about from "../../../assets/img/about-us/about.png";

export default function Section3() {
  return (
    <section id="Section-3">
      <div className="section-3">
        <div className="container">
          {/* Sub Title */}
          <div className="sub-title-wrapper">
            <h6 className="sub-title">About Us</h6>
            <img src={subtitlebg} loading="lazy" alt="subtitle background" className="sub-title-img" />
          </div>

          {/* About Wrapper */}
          <div className="about-wrapper">
            <div className="row row-gap-5">
              <div className="col-lg-6 col-md-12">
                <div>
                  <img src={aboutbg1} loading="lazy" alt="about background" width="100%" height="auto" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div>
                  <div className="about-margin">
                    <h1 className="title">
                      About Our Passion for <br /> Interior Design
                    </h1>
                    <p>We believe that a well-designed space can have a profound impact on your well-being and quality of life. Whether it's your home, office, or any other interior environment.</p>
                  </div>

                  <div>
                    <img className="about-sec-img" src={aboutimg} alt="about interior" loading="lazy" width="100%" height="auto" />
                  </div>

                  <div className="about-title-wrapper mt-5">
                    <h6 className="sub-title about-img-cap">“Creating Design Timeless Interiors”</h6>
                    <img src={about} alt="about text decoration" loading="lazy" className="about-title-img w-100" />
                  </div>

                  <div className="row mt-5 row-gap-5">
                    <div className="col-md-4 col-12">
                      <a href="/about-us.html" className="btn-third">
                        Recent Project
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>

                    <div className="col-md-4 col-12">
                      <div className="row">
                        <div className="col-md-3 col-2">
                          <i className="fa-solid fa-phone about-phone"></i>
                        </div>
                        <div className="col-md-9 col-10">
                          <p className="about-mm">Call Us 24/7</p>
                          <a href="tel:+910009999900" className="service-img-btn">
                            +91 00099 99900
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import "animate.css";
import section4img from "../../../assets/img/sec-4.png";
import organisationchart from "../../../assets/img/organisation.jpg";
import "./AboutSection2.css";

export default function AboutSection4() {
  return (
    <section className="org-section">
      {/* Decorative blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="container">
        <div className="row row-gap-5 align-items-center">
          {/* Left Content */}
          <div className="col-lg-7 col-md-12">
            <div>
              {/* Subtitle */}
              <div className="sub-title-wrapper mb-4 text-center text-lg-start">
                <h6 className="sub-title animate__animated animate__fadeInDown">
                  Organisation Chart
                </h6>
                <img
                  src={section4img}
                  loading="lazy"
                  alt="subtitle background"
                  className="sub-title-img animate__animated animate__fadeInUp animate__delay-1s"
                />
              </div>

              {/* Organisation Chart */}
              <div className="banner-wrapper text-center text-lg-start mt-4 org-banner">
                <img
                  src={organisationchart}
                  alt="organisation banner"
                  className="img-fluid rounded shadow org-img animate__animated animate__zoomIn animate__delay-2s"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12"></div>
        </div>
      </div>
    </section>
  );
}

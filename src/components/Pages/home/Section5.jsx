import "animate.css";
import section4img from "../../../assets/img/sec-4.png";
import organisationchart from "../../../assets/img/organisation.jpg"
export default function Section5() {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }}>
      <div className="section-5">
        <div className="container">
          <div className="row row-gap-5">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 padding-cho">
              <div>
                {/* Subtitle */}
                <div className="sub-title-wrapper  mb-4">
                  <h6 className="sub-title animate__animated animate__fadeInDown">
                    Organisation Chart
                  </h6>
                  <img
                    src={section4img}
                    loading="lazy"
                    alt="why choose subtitle background"
                    className="sub-title-img animate__animated animate__fadeInUp animate__delay-1s"
                  />
                </div>

                {/* 🚀 Banner with animation */}
                <div className="banner-wrapper text-center mt-4 org-banner">
                  <img
                    src={organisationchart}// replace with your banner image
                    alt="organisation banner"
                    className="img-fluid rounded shadow animate__animated animate__zoomIn animate__delay-2s"
                  />
                </div>
              </div>
            </div>
            {/* Right Content (optional) */}
            <div className="col-lg-5 col-md-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

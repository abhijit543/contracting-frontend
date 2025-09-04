// AboutSection4.jsx
import { Link } from "react-router-dom";
import sec8Heading from "../../../assets/img/sec-8-heading.png";
import service1 from "../../../assets/img/service/service-i-1.svg";
import service2 from "../../../assets/img/service/service-i-2.svg";
import service3 from "../../../assets/img/service/service-i-3.svg";
import service4 from "../../../assets/img/service/service-i-4.svg";

export default function AboutSection4() {
  // service cards to keep markup DRY
  const services = [
    {
      icon: service3,
      title: "Architectural Design",
      link: "/interior",
      desc: "Space planning is a fundamental aspect of interior design that focuses on arranging.",
    },
    {
      icon: service4,
      title: "Residential Space",
      link: "/remodiling",
      desc: "Space planning is a fundamental aspect of interior design that focuses on arranging.",
    },
    {
      icon: service2,
      title: "Home Renovation",
      link: "/remodiling",
      desc: "Space planning is a fundamental aspect of interior design that focuses on arranging.",
    },
    {
      icon: service1,
      title: "Space Planning",
      link: "/space-palnning",
      desc: "Space planning is a fundamental aspect of interior design that focuses on arranging.",
    },
  ];

  return (
    <section id="aboutSection-4">
      <div className="about-section-4">
        <div className="container">
          {/* Heading Row */}
          <div className="row sec-2-h-wrapper">
            <div className="col-md-5 col-12">
              <div className="about-sec-2-heading">
                <img src={sec8Heading} alt="Section 8 heading" />
                <span>Our Service</span>
              </div>
              <h1 className="title abt-sec-4-mar">Provide Services</h1>
            </div>

            <div className="col-md-4 col-12">
              <p className="title-p">At Luxury Living Designs, we specialize in creating extraordinary living spaces that exude elegance.</p>
            </div>

            <div className="col-md-3 col-12">
              <Link to="/services" className="abt-sec-4-icon">
                <i className="fa-solid fa-arrow-right abt-sec-4-icon-i"></i>
                <span>View All Service</span>
              </Link>
            </div>
          </div>

          {/* Service Cards */}
          <div className="abt-sec-4-service-wrapper">
            <div className="row row-gap-5">
              {services.map((svc, idx) => (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div>
                    <div className="service-wrapper-h1">
                      <span>
                        <img src={svc.icon} alt={svc.title} />
                      </span>
                    </div>
                    <div>
                      <h5>
                        <Link to={svc.link} className="service-h">
                          {svc.title}
                        </Link>
                      </h5>
                      <p className="service-img-p">{svc.desc}</p>
                      <Link to={svc.link} className="service-img-btn">
                        Read More <i className="fa-solid fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import port1 from "../../../assets/img/port-1.jpg";
import port2 from "../../../assets/img/port-2.jpg";
import port3 from "../../../assets/img/port-3.jpg";
import port4 from "../../../assets/img/port-4.jpg";
import port5 from "../../../assets/img/port-5.jpg";
import port6 from "../../../assets/img/port-6.jpg";

export default function PortFolio() {
  const portfolioItems = [
    { id: 1, img: port1, title: "Living room interior", category: "Interior Design" },
    { id: 2, img: port2, title: "Living room interior", category: "Interior Design" },
    { id: 3, img: port3, title: "Living room interior", category: "Interior Design" },
    { id: 4, img: port4, title: "Living room interior", category: "Interior Design" },
    { id: 5, img: port5, title: "Living room interior", category: "Interior Design" },
    { id: 6, img: port6, title: "Living room interior", category: "Interior Design" },
  ];

  return (
    <main>
      {/* Section 1 Start */}
      <section>
        <div className="about-section-1 about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <a href="/index.html" className="abt-sec-1-a-1">
                  Home
                </a>{" "}
                /
                <a href="" className="abt-sec-1-a">
                  Portfolio
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Portfolio</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <section>
        <div className="port-section-2">
          <div className="container">
            <div className="row row-gap-4">
              {portfolioItems.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="portfolio-style-custom-4 rts-portfolio__item"
                    style={{
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    <a href="/project-details.html" className="thumbnail">
                      <img src={item.img} alt={item.title} />
                    </a>
                    <div className="inner-content">
                      <a href="/project-details.html" className="inner-content-h4">
                        <h4>{item.title}</h4>
                      </a>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 End */}
    </main>
  );
}

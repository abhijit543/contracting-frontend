import { Link } from "react-router-dom";
import ourServicesLine from "../../../assets/img/sec-8-heading.png";
import serviceicon1 from "../../../assets/img/service/service-i-1.svg";
import serviceicon2 from "../../../assets/img/service/service-i-2.svg";
import serviceicon3 from "../../../assets/img/service/service-i-3.svg";
import ProcessSection from "./ProcessSection";
export default function Services() {
  return (
    <main>
      {/* Top banner section (kept same) */}
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

      {/* Services Section */}
      <section>
        <div className="about-section-3 mb-3" style={{background:"rgb(180, 202, 202)"}}>
          <div className="container">
            <div className="sec-8-heading">
              <img src={ourServicesLine} alt="Our Service" />
              <span>Our Service</span>
            </div>

            <div>
              <h1 className="sec-8-h1">Our Services</h1>
              <p className="abtsec-3-p">
                At <strong>Ethreal Turnkey Projects</strong>, we provide comprehensive contracting solutions covering 
                every aspect of project execution — from design and build to handover. 
                With a strong focus on quality, innovation, and safety, we deliver projects that stand the test of time.
              </p>
            </div>

            <div className="abt-sec-4-service-wrapper">
              <div className="row row-gap-5">
                
                {/* Service 1 - General Contracting */}
                <div className="col-lg-4 col-md-6">
                  <div className="service-sec-2-bg-wrapper">
                    <div className="service-wrapper-h1">
                      <img src={serviceicon1} alt="General Contracting" className="service-sec-2-svg" />
                    </div>
                    <div>
                      <h5>General Contracting</h5>
                      <p className="service-sec-2-img-p">
                        We undertake full-scale <strong>General Contracting (GC)</strong> services for commercial, 
                        residential, and industrial projects. From initial planning and procurement to execution 
                        and delivery, our experienced project managers ensure every stage runs smoothly. 
                        <br /><br />
                        Our capabilities include civil and structural works, architectural finishing, and turnkey 
                        construction management. With a focus on timelines, cost efficiency, and safety compliance, 
                        Ethreal Turnkey Projects ensures successful outcomes for every client.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 - Electrical Works */}
                <div className="col-lg-4 col-md-6">
                  <div className="service-sec-2-bg-wrapper">
                    <div className="service-wrapper-h1">
                      <img src={serviceicon2} alt="Electrical Works" className="service-sec-2-svg" />
                    </div>
                    <div>
                      <h5>Electrical Works</h5>
                      <p className="service-sec-2-img-p">
                        Our <strong>Electrical Division</strong> specializes in delivering safe, efficient, and reliable 
                        electrical installations for diverse projects. We handle both low and high-voltage systems, 
                        including lighting, power distribution, cabling, panel installation, and energy optimization solutions.
                        <br /><br />
                        Our certified electricians and engineers ensure compliance with international electrical standards 
                        and sustainable energy practices. From initial design to commissioning, we provide complete 
                        end-to-end solutions for industrial, commercial, and residential infrastructures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 - MEP Services */}
                <div className="col-lg-4 col-md-6">
                  <div className="service-sec-2-bg-wrapper">
                    <div className="service-wrapper-h1">
                      <img src={serviceicon3} alt="MEP Services" className="service-sec-2-svg" />
                    </div>
                    <div>
                      <h5>MEP Services</h5>
                      <p className="service-sec-2-img-p">
                        <strong>Mechanical, Electrical, and Plumbing (MEP)</strong> systems form the backbone of any 
                        modern building. We design and execute integrated MEP solutions that ensure comfort, safety, 
                        and functionality throughout the facility.
                        <br /><br />
                        Our MEP services include HVAC systems, firefighting installations, water supply and drainage, 
                        and building automation systems. With technical expertise and attention to detail, we deliver 
                        high-performance systems that enhance operational efficiency and sustainability.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
<section>
  <ProcessSection/>
</section>
      {/* Work With Us Section */}
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
                  Let’s build something exceptional together.
                </h1>
              </div>
            </div>

            <div className="text-center">
              <a href="/contact-us" className="price-sec-4-btn">
                Let’s Build <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

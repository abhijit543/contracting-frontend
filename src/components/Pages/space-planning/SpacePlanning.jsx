import { Link } from "react-router-dom";
import servicePlaningImg from "../../../assets/img/service-planing.jpg";
import detail1 from "../../../assets/img/ser-detail-1.jpg";
import detail2 from "../../../assets/img/ser-detail-2.jpg";
import detail3 from "../../../assets/img/ser-detail-3.jpg";
import detail4 from "../../../assets/img/ser-detail-4.jpg";
export default function SpacePlanning() {
  return (
    <main>
      <section>
        <div className="about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>
                /
                <a href="#" className="abt-sec-1-a">
                  Space Planning
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Space Planning</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <div className="service-detail-section-2">
          <div className="container">
            <div className="row row-gap-5 space-planning-direction">
              {/* Sidebar */}
              <div className="col-lg-4 col-md-12">
                <div className="service-detail-all-s-wrapper">
                  <h4 className="service-detail-all-s-h">All Services</h4>

                  <Link href="/space-planning" className="service-detail-all-s-a">
                    <span>01.</span>
                    <p className="m-0">Space Planning</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <a href="/interior.html" className="service-detail-all-s-a">
                    <span>02.</span>
                    <p className="m-0">Interior Design</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                  <a href="/remodiling.html" className="service-detail-all-s-a">
                    <span>03.</span>
                    <p className="m-0">Remodiling Services</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                  <Link to="/space-planning" className="service-detail-all-s-a">
                    <span>04.</span>
                    <p className="m-0">Urban Planning</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                  <a href="/remodiling.html" className="service-detail-all-s-a">
                    <span>05.</span>
                    <p className="m-0">Kitchen Cabinet</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                  <a href="/interior.html" className="service-detail-all-s-a">
                    <span>06.</span>
                    <p className="m-0">3D Visualization</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>

                <div className="service-detail-all-s-wrapper service-detail-all-s-wrapper-2">
                  <h5>Contact</h5>
                  <h4 className="service-detail-all-s-h">Let's start new project.</h4>

                  <input type="text" placeholder="Your Name" className="service-detail-all-sec-input" />
                  <input type="tel" placeholder="Your Number" className="service-detail-all-sec-input" />
                  <textarea placeholder="Your Message" rows="3" className="service-detail-all-sec-input"></textarea>
                  <button className="service-detail-all-sec-btn">Start Project</button>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-lg-8 col-md-12">
                <div>
                  <img src={servicePlaningImg} width="100%" alt="Space Planning" />

                  <div className="ser-detail-sec-ma">
                    <h2>
                      Space Planning Is A Crucial Aspect <br /> Of Interior Design
                    </h2>
                  </div>

                  <p>
                    Our space planning service aims to create harmonious and well-organized interior environments that maximize the functionality and visual appeal of the space. We believe that
                    thoughtful space planning is the foundation for creating a comfortable and efficient space that aligns with the client's lifestyle and objectives.
                  </p>
                  <p>
                    Our process begins by thoroughly evaluating the space, taking into account its dimensions, architectural features, and any existing structural limitations. We then engage in
                    comprehensive discussions with the client to understand their specific requirements, preferences, and any special considerations. Using this information, our team of experienced
                    designers develops a customized space plan that optimizes the layout and flow of the space. We carefully consider factors such as traffic patterns, spatial relationships, furniture
                    placement, and functional requirements to create a design that best suits the intended purpose of the space.
                  </p>

                  <div className="row row-gap-5">
                    <div className="col-md-6">
                      <img src={detail1} width="100%" alt="detail1" />
                    </div>
                    <div className="col-md-6">
                      <img src={detail2} width="100%" alt="detail2" />
                    </div>
                  </div>

                  <div className="ser-detail-sec-ma">
                    <h2>Careful consideration must be given to various</h2>
                  </div>

                  <p>
                    Architecture spacing planning is a crucial step in the design process that involves determining the arrangement and allocation of spaces within a building or structure. This
                    planning stage is essential for creating functional, safe, and aesthetically pleasing environments that meet the needs of the intended users.
                  </p>

                  <div className="row ser-detail-sec-ma align-items-center">
                    <div className="col-lg-4">
                      <ul className="ser-sec-2-detail-ul">
                        <li>Collaboration and Feedback</li>
                        <li>Evaluate Space Constraints</li>
                        <li>Establish Functional Zones</li>
                        <li>Safety and Building Codes</li>
                      </ul>
                    </div>
                    <div className="col-lg-8">
                      <img src={detail3} width="100%" alt="detail3" />
                    </div>
                  </div>

                  <p>
                    The primary objective of spacing planning is to ensure that each space within the building serves its intended purpose effectively. This involves identifying the different
                    functions or activities that will take place and allocating appropriate areas for each. For instance, in an office space, considerations may include workstations, meeting rooms,
                    reception areas, and collaborative spaces. In residential buildings, it may involve allocating spaces for bedrooms, living rooms, kitchens, and bathrooms.
                  </p>

                  <div className="row ser-detail-sec-ma">
                    <div className="col-md-4">
                      <img src={detail4} width="100%" alt="detail4" />
                    </div>
                    <div className="col-md-8">
                      <p>
                        A well-designed spacing plan takes into account the flow and circulation patterns within the building. Efficient movement and logical connections between spaces are essential
                        for a smooth user experience.
                      </p>
                      <p>
                        Architecture spacing planning is a critical stage in the design process, involving the thoughtful allocation and arrangement of spaces within a building. By considering
                        functionality, flow, safety, flexibility, lighting, ergonomics, aesthetics, technology, and other important factors, architects and designers can create well-designed spaces
                        that meet the needs of occupants while enhancing their overall experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Main Content */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

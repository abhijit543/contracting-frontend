import { Link } from "react-router-dom";
import aboutTeam1 from "../../../assets/img/about-us-p/about-team-1.jpg";
import aboutTeam2 from "../../../assets/img/about-us-p/about-team-2.jpg";
import aboutTeam3 from "../../../assets/img/about-us-p/about-team-3.jpg";
import aboutTeam4 from "../../../assets/img/about-us-p/about-team-4.jpg";
import team5 from "../../../assets/img/about-us-p/team-5.jpg";
import team6 from "../../../assets/img/about-us-p/team-6.jpg";
import team87 from "../../../assets/img/about-us-p/team-87.jpg";
import team8 from "../../../assets/img/about-us-p/team-8.jpg";
import brand1 from "../../../assets/img/sec-7/brand-1.png";
import brand2 from "../../../assets/img/sec-7/brand-2.png";
import brand3 from "../../../assets/img/sec-7/brand-3.png";
import brand4 from "../../../assets/img/sec-7/brand-4.png";
import sec8Heading from "../../../assets/img/sec-8-heading.png";
export default function Team() {
  return (
    <main>
      {/* -------- Section 1 -------- */}
      <section id="teamSection1">
        <div className="about-section-1 about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>
                /
                <Link to="#" className="abt-sec-1-a">
                  Our Team
                </Link>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Our Team</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Section 2 -------- */}
      <section id="teamSection-2">
        <div className="about-section-3">
          <div className="container">
            <div>
              <h1 className="sec-8-h1">Meet Our Talented Team</h1>
              <p className="abtsec-3-p">
                we are proud to have a dedicated and skilled team of professionals
                <br />
                who are passionate about interior renovation and design.
              </p>
            </div>

            {/* team grid */}
            <div className="row mt-5 row-gap-5 flex-wrap">
              {[
                { img: aboutTeam1, role: "Architecture", name: "David Leo" },
                { img: aboutTeam2, role: "Architecture", name: "Joshep Liam" },
                { img: aboutTeam3, role: "Designer", name: "Emiley" },
                { img: aboutTeam4, role: "Architecture", name: "Alexander" },
                { img: team5, role: "Architecture", name: "Thomas Leo" },
                { img: team6, role: "Designer", name: "Chorlatte Luna" },
                { img: team87, role: "Designer", name: "Michael Henry" },
                { img: team8, role: "Architecture", name: "Daniel Jack" },
              ].map(({ img, role, name }, idx) => (
                <div className="col-lg-3 col-md-4" key={idx}>
                  <div className="abtsec-3-img-wrapper abt-sec3-img-pos">
                    <Link to="#">
                      <img src={img} width="100%" alt={name} />
                    </Link>
                    <div className="abt-team-icon-wrapper">
                      <ul>
                        <li className="abt-team-icon-li">
                          <Link to="#" className="abt-team-icon-a">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li className="abt-team-icon-li">
                          <Link to="#" className="abt-team-icon-a">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li className="abt-team-icon-li">
                          <Link to="#" className="abt-team-icon-a">
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </li>
                        <li className="abt-team-icon-li">
                          <Link to="#" className="abt-team-icon-a">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <span className="abtsec-3-h5">{role}</span>
                    <Link to="#" className="abtsec-3-a">
                      <h6>{name}</h6>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* brand row */}
        <div className="team-sec-2-row-2">
          <div className="section-7-row-2">
            <div className="container">
              <div className="mt-5">
                <div className="row row-gap-5">
                  {[brand1, brand2, brand3, brand4].map((brand, idx) => (
                    <div className="col-md-3 col-6" key={idx}>
                      <img src={brand} className="sec-7-row-2-img" alt="brand" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Section 3 -------- */}
      <section id="teamSection-3">
        <div className="section-9 sec-9-wrapper">
          <div className="container">
            <div className="sec-8-heading">
              <img src={sec8Heading} alt="Heading" />
              <span>Work With Us</span>
            </div>
            <h1 className="sec-8-h1 sec-9-heading">
              <span className="sec-9-span">We are</span> excited to learn
              <br />
              more about <span className="sec-9-span"> your project</span>
            </h1>
            <div className="text-center">
              <Link to="/portfolio" className="sec-9-btn">
                Recent Project <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

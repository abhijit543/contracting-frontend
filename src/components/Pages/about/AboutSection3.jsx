// AboutSection3.jsx
import { Link } from "react-router-dom";
import sec8Heading from "../../../assets/img/sec-8-heading.png";
import team1 from "../../../assets/img/about-us-p/about-team-1.jpg";
import team2 from "../../../assets/img/about-us-p/about-team-2.jpg";
import team3 from "../../../assets/img/about-us-p/about-team-3.jpg";
import team4 from "../../../assets/img/about-us-p/about-team-4.jpg";

export default function AboutSection3() {
  return (
    <section id="aboutSection-3">
      <div className="about-section-3">
        <div className="container">
          {/* Heading */}
          <div>
            <div className="sec-8-heading">
              <img src={sec8Heading} alt="Section 8 Heading" />
              <span>Our Team</span>
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h1 className="sec-8-h1">Meet Our Talented Team</h1>
            <p className="abtsec-3-p">
              we are proud to have a dedicated and skilled team of professionals <br />
              who are passionate about interior renovation and design.
            </p>
          </div>

          {/* Team Grid */}
          <div className="row mt-5 row-gap-5">
            {[
              { img: team1, role: "Architecture", name: "David Leo" },
              { img: team2, role: "Architecture", name: "Joshep Liam" },
              { img: team3, role: "Designer", name: "Emiley" },
              { img: team4, role: "Architecture", name: "Alexander" },
            ].map((member, i) => (
              <div className="col-lg-3 col-md-4" key={i}>
                <div className="abtsec-3-img-wrapper abt-sec3-img-pos">
                  <Link to="/team-detail">
                    <img src={member.img} width="100%" alt={member.name} />
                  </Link>

                  {/* Social Icons */}
                  <div className="abt-team-icon-wrapper">
                    <ul>
                      <li className="abt-team-icon-li">
                        <a href="#" className="abt-team-icon-a">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="abt-team-icon-li">
                        <a href="#" className="abt-team-icon-a">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li className="abt-team-icon-li">
                        <a href="#" className="abt-team-icon-a">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                      <li className="abt-team-icon-li">
                        <a href="#" className="abt-team-icon-a">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Role & Name */}
                <div>
                  <span className="abtsec-3-h5">{member.role}</span>
                  <Link className="abtsec-3-a" to="/team-detail">
                    <h6>{member.name}</h6>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

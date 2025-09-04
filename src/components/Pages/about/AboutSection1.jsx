import { Link } from "react-router-dom";
export default function AboutSection1() {
  return (
    <section id="aboutSection1">
      <div className="about-section-1 about-sec-1-wrapper">
        <div className="container">
          <div className="about-sec-1-content-wrap">
            <div>
              <Link to="/" className="abt-sec-1-a-1">
                Home
              </Link>
              /
              <a href="#" className="abt-sec-1-a">
                About
              </a>
            </div>
            <div>
              <h1 className="abt-sec-1-h1">About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AboutSection6.jsx
import sec8Heading from "../../../assets/img/sec-8-heading.png";
import icon08 from "../../../assets/img/about-us-p/08.png";
import aboutTeam2 from "../../../assets/img/about-us-p/about-team-2.jpg";
import about01 from "../../../assets/img/about-us-p/01.jpg";

export default function AboutSection6() {
  return (
    <section id="aboutSection-6">
      <div className="about-section-6">
        <div className="container">
          {/* Heading */}
          <div className="sec-8-heading">
            <img src={sec8Heading} alt="Section heading" />
            <span>Our Review</span>
          </div>

          <div>
            <h1 className="sec-8-h1">
              Amazing feedback from <br />
              Our valued clients
            </h1>
          </div>

          {/* Testimonial Row */}
          <div className="row mt-5 align-items-center about-sec-6-tes-wrapper">
            <div className="col-lg-2 col-md-2 aboutsec-6-display">
              <div>
                <img src={icon08} width="80%" alt="Icon" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div>
                <p className="about-sec-6-testi-p">
                  Working with your team was an absolute pleasure. From the initial concept to the final installation, every step was executed with professionalism and attention to detail. The end
                  result exceeded our expectations, and we couldn't be happier with our beautifully transformed space.
                </p>
                <h4>John William</h4>
                <p>New Client</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-end">
              <div>
                <img className="about-sec-6-img-wrap" src={aboutTeam2} alt="Client" />
              </div>
            </div>
          </div>

          {/* Image + Form */}
          <div className="row row-gap-5 mt-5">
            <div className="col-lg-6">
              <div>
                <img src={about01} width="100%" alt="About" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-form-wrapper">
                <div>
                  <h6>FEATURE SERVICES</h6>
                  <h1 className="title">Have Any Questions</h1>
                </div>

                <div className="about-form-inner">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input type="text" placeholder="Your Name" className="about-sec-form-input" name="name" />
                    </div>
                    <div>
                      <input type="tel" placeholder="Phone Number" className="about-sec-form-input" name="phone" />
                    </div>
                    <div>
                      <textarea placeholder="Send Message" className="about-sec-form-input" rows="3" name="message"></textarea>
                    </div>
                    <div>
                      <button type="submit" className="about-sec-form-btn">
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Image + Form */}
        </div>
      </div>
    </section>
  );
}

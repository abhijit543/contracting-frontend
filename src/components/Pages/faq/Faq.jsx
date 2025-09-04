import { Link } from "react-router-dom";
import sec8Heading from "../../../assets/img/sec-8-heading.png";

const IMAGES = {
  sec8Heading,
};

export default function FaqPage() {
  return (
    <main>
      {/* ---------- Section 1 ---------- */}
      <section>
        <div className="about-sec-1-wrapper contact-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>
                /
                <a href="#" className="abt-sec-1-a">
                  Faq&apos;s
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Asked Questions</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section>
        <div className="faq-sec-2-wrapper">
          <div className="container">
            <div className="row row-gap-5">
              {/* ---- Left Column ---- */}
              <div className="col-lg-4">
                <div className="faq-contact-wrapper">
                  <p className="faq-contact-p">Quick Contact</p>
                  <h4 className="faq-contact-h">Let&apos;s start new project.</h4>
                  <form>
                    <input type="text" placeholder="Your Name" className="faq-input" />
                    <input type="tel" placeholder="Your Number" className="faq-input" />
                    <textarea rows="4" placeholder="Your Message" className="faq-input"></textarea>
                  </form>
                  <button className="faq-contact-btn">Start Project</button>
                </div>
              </div>

              {/* ---- Right Column ---- */}
              <div className="col-lg-8">
                {/* Dropdown 1 */}
                <div className="faq-bropdown-1-wrapper">
                  <div>
                    <p className="faq-contact-p">Feature Services</p>
                    <h4 className="faq-title-h">Why People Choice Us?</h4>
                  </div>
                  <div className="accordion" id="accordionOne">
                    <div className="accordion-item">
                      <h2 className="accordion-header faq-drop-t" id="heading1a">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1a" aria-expanded="true" aria-controls="collapse1a">
                          How much does a home remodeling cost?
                        </button>
                      </h2>
                      <div id="collapse1a" className="accordion-collapse collapse show" aria-labelledby="heading1a" data-bs-parent="#accordionOne">
                        <div className="accordion-body">
                          <p>Projects vary widely depending on your needs and budget. Our visit with you to better understand your home remodeling needs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header faq-drop-t" id="heading1b">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1b" aria-expanded="false" aria-controls="collapse1b">
                          How much does a home Building cost?
                        </button>
                      </h2>
                      <div id="collapse1b" className="accordion-collapse collapse" aria-labelledby="heading1b" data-bs-parent="#accordionOne">
                        <div className="accordion-body">
                          <p>Projects vary widely depending on your needs and budget. Our visit with you to better understand your home remodeling needs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header faq-drop-t" id="heading1c">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1c" aria-expanded="false" aria-controls="collapse1c">
                          Why do roofing estimates vary so widely?
                        </button>
                      </h2>
                      <div id="collapse1c" className="accordion-collapse collapse" aria-labelledby="heading1c" data-bs-parent="#accordionOne">
                        <div className="accordion-body">
                          <p>Projects vary widely depending on your needs and budget. Our visit with you to better understand your home remodeling needs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dropdown 2 */}
                <div className="faq-bropdown-1-wrapper">
                  <div>
                    <p className="faq-contact-p">Feature Services</p>
                    <h4 className="faq-title-h">Business Consultation</h4>
                  </div>
                  <div className="accordion" id="accordionTwo">
                    <div className="accordion-item">
                      <h2 className="accordion-header faq-drop-t" id="heading2a">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2a" aria-expanded="true" aria-controls="collapse2a">
                          How much does a home remodeling cost?
                        </button>
                      </h2>
                      <div id="collapse2a" className="accordion-collapse collapse show" aria-labelledby="heading2a" data-bs-parent="#accordionTwo">
                        <div className="accordion-body">
                          <p>Projects vary widely depending on your needs and budget. Our visit with you to better understand your home remodeling needs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header faq-drop-t" id="heading2b">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2b" aria-expanded="false" aria-controls="collapse2b">
                          How much does a home Building cost?
                        </button>
                      </h2>
                      <div id="collapse2b" className="accordion-collapse collapse" aria-labelledby="heading2b" data-bs-parent="#accordionTwo">
                        <div className="accordion-body">
                          <p>Projects vary widely depending on your needs and budget. Our visit with you to better understand your home remodeling needs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header faq-drop-t" id="heading2c">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2c" aria-expanded="false" aria-controls="collapse2c">
                          Why do roofing estimates vary so widely?
                        </button>
                      </h2>
                      <div id="collapse2c" className="accordion-collapse collapse" aria-labelledby="heading2c" data-bs-parent="#accordionTwo">
                        <div className="accordion-body">
                          <p>Projects vary widely depending on your needs and budget. Our visit with you to better understand your home remodeling needs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Right Column */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 3 ---------- */}
      <section>
        <div className="price-section-4 price-section-4-bg">
          <div className="container">
            <div>
              <div className="sec-8-heading">
                <img src={IMAGES.sec8Heading} alt="Work With Us" />
                <span>Work With Us</span>
              </div>
            </div>
            <div>
              <h1 className="price-sec-4-h1">
                Have a Project in mind? <br />
                Do not hesitate to say hello.
              </h1>
            </div>
            <div className="text-center">
              <a href="/contact-us.html" className="price-sec-4-btn">
                Lets Build <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import sec8Heading from "../../../assets/img/sec-8-heading.png";
import "./FAQSection.css"
const IMAGES = { sec8Heading };

export default function FaqPage() {
  return (
    <main>
      {/* ---------- Section 1: Hero ---------- */}
      <section>
        <div className="about-sec-1-wrapper contact-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">Home</Link> /
                <a href="#" className="abt-sec-1-a">FAQ&apos;s</a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 2: FAQ + Contact ---------- */}
      <section>
        <div className="faq-sec-2-wrapper">
          <div className="container">
            <div className="row row-gap-5">
              
              {/* ---- Left Column (Quick Contact) ---- */}
              <div className="col-lg-4">
                <div className="faq-contact-wrapper">
                  <p className="faq-contact-p">Quick Contact</p>
                  <h4 className="faq-contact-h">Let&apos;s Start Your Project</h4>
                  <form>
                    <input type="text" placeholder="Your Name" className="faq-input" />
                    <input type="tel" placeholder="Your Number" className="faq-input" />
                    <textarea rows="4" placeholder="Your Message" className="faq-input"></textarea>
                  </form>
                  <button className="faq-contact-btn">Start Project</button>
                </div>
              </div>

              {/* ---- Right Column (FAQs) ---- */}
              <div className="col-lg-8">
                <div className="faq-bropdown-1-wrapper">
                  <div>
                    <p className="faq-contact-p">Client Queries</p>
                    <h4 className="faq-title-h">We’ve Got the Answers</h4>
                  </div>

                  <div className="accordion" id="accordionMain">
                    
                    {/* FAQ 1 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What services does Ethereal Turnkey Projects provide?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionMain"
                      >
                        <div className="accordion-body">
                          We offer comprehensive General Contracting (GC), Electrical, and MEP (Mechanical, Electrical & Plumbing) services.
                          From design and engineering to execution and commissioning, we deliver complete turnkey solutions for commercial, industrial, and institutional projects.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Do you handle both design and execution?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionMain"
                      >
                        <div className="accordion-body">
                          Yes, our turnkey model covers both design and execution. We collaborate with architects, consultants, and engineers to ensure
                          every project is planned, executed, and delivered efficiently — minimizing coordination gaps and ensuring accountability.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What kind of electrical works do you undertake?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionMain"
                      >
                        <div className="accordion-body">
                          Our electrical services include HT/LT installations, power distribution, lighting systems, earthing, fire alarm systems, and
                          energy-efficient electrical solutions for both new constructions and retrofitting projects.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How do you ensure quality and safety in projects?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionMain"
                      >
                        <div className="accordion-body">
                          Quality and safety are integral to our operations. We follow industry-standard QA/QC procedures, use certified materials,
                          and implement strict safety protocols to protect our team, partners, and clients on every project site.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can you handle large-scale industrial and commercial projects?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionMain"
                      >
                        <div className="accordion-body">
                          Absolutely. We have successfully executed projects across diverse sectors — including manufacturing facilities, corporate
                          offices, hospitals, and commercial complexes — delivering on time and within budget while maintaining top-notch quality.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          How can I get a quotation for my project?
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionMain"
                      >
                        <div className="accordion-body">
                          You can reach us through the contact form or by calling our office directly. Once we receive your project details,
                          our team will schedule a discussion to understand your requirements and provide a detailed, transparent quotation.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* End Right Column */}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 3: CTA ---------- */}
      <section>
        <div className="price-section-4 price-section-4-bg">
          <div className="container">
            <div className="sec-8-heading">
              <img src={IMAGES.sec8Heading} alt="Work With Us" />
              <span>Work With Us</span>
            </div>
            <h1 className="price-sec-4-h1">
              Have a project in mind? <br /> Let’s build it together.
            </h1>
            <div className="text-center">
              <a href="/contact-us" className="price-sec-4-btn">
                Get in Touch <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

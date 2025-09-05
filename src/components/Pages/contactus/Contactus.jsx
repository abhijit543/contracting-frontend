import { Link } from "react-router-dom";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <main>
      {/* ------------------Section 1 Start---------------------- */}
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
                  Contact Us
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------Section 1 End---------------------- */}

      {/* ------------------Section 2 Start---------------------- */}
      <section>
        <div className="contact-sec-2-wrapper">
          <div className="container">
            <div>
              <h1 className="abt-sec-2-h1 contact-sec-2-mb">Contact Us</h1>
            </div>

            <div className="row row-gap-5">
              {/* Left column */}
              <div className="col-lg-4 col-md-6">
                <div>
                  <p>Innovat Interior & Architecture Firm</p>
                  <p>
                    An architecture firm is a professional organization that specializes in providing architectural services and typically has a team of architects, designers, engineers, and other
                    professionals.
                  </p>
                  <a href="tel:+910001111100" className="contact-sec-2-a">
                    Hot Line: +91 00011 11100
                  </a>
                </div>
              </div>

              {/* Contact details */}
              <div className="col-lg-3 col-md-6">
                <div>
                  <h6>Contact Details</h6>

                  <div className="contact-sec-2-display-wrap">
                    <h6>Address:</h6>
                    <p className="contact-sec-2-link m-0">Silk Board, Bengaluru</p>
                  </div>

                  <div className="contact-sec-2-display-wrap">
                    <h6>Phone:</h6>
                    <a href="tel:+910001111100" className="contact-sec-2-link">
                      +91 00011 11100
                    </a>
                  </div>

                  <div className="contact-sec-2-display-wrap">
                    <h6>Mail:</h6>
                    <a href="mailto:ethreal@gmail.com" className="contact-sec-2-link">
                      ethereal@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="col-lg-5">
                <div>
                  <h6>Contact Form</h6>
                  <div className="about-form-inner">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <input type="text" placeholder="Your Name" className="about-sec-form-input" />
                      </div>
                      <div>
                        <input type="tel" placeholder="Phone Number" className="about-sec-form-input" />
                      </div>
                      <div>
                        <textarea placeholder="Send Message" className="about-sec-form-input" rows={3}></textarea>
                      </div>
                      <div>
                        <button type="submit" className="contact-sec-2-form-btn">
                          Send Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------Section 2 End---------------------- */}

      {/* ------------------Section 3 Start-------------------- */}
      <section>
        <div className="Contact-sec-3-wrap">
          <div className="container">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.691938463395!2d77.6818193!3d12.9915449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112dfd4ade47%3A0x8d058d6bdabc26b7!2sEleora%20Electricals%20%26%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757070373229!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------Section 3 End-------------------- */}
    </main>
  );
}

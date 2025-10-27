import { useState, useEffect } from "react";
import footerLogo from "../../assets/img/logo.png";
import "./Common.css";
import logo1 from "../../assets/img/company-logos/logo1.png";
import logo2 from "../../assets/img/company-logos/logo2.png";
import logo3 from "../../assets/img/company-logos/logo3.png";
import logo4 from "../../assets/img/company-logos/logo4.png";
import logo5 from "../../assets/img/company-logos/logo5.png";
import logo6 from "../../assets/img/company-logos/logo6.png";
import logo7 from "../../assets/img/company-logos/logo7.png";
import logo8 from "../../assets/img/company-logos/logo8.png";
import logo9 from "../../assets/img/company-logos/logo9.png";
import logo10 from "../../assets/img/company-logos/logo10.png";
import logo11 from "../../assets/img/company-logos/logo11.png";
import logo12 from "../../assets/img/company-logos/logo12.png";
import logo13 from "../../assets/img/company-logos/logo13.png";
import logo14 from "../../assets/img/company-logos/logo14.png";
import logo15 from "../../assets/img/company-logos/logo15.png";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15
  ];

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      {/* Company Logos Section */}
      <section className="company-logo-section" style={{ background: "#219c97" }}>
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={index}>
              <a href="/clients" aria-label={`View our clients - Logo ${index}`}>
                <img
                  src={logo}
                  alt={`Company Logo ${index}`}
                  style={{ cursor: "pointer", transition: "transform 0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Main Content */}
      <div className="footer" style={{ background: "rgb(180, 202, 202)" }}>
        <div className="container">
          <div className="footer-wrapper">
            <div className="row row-gap-4">
              
              {/* Logo & Social */}
              <div className="col-md-4 col-12">
                <div>
                  <a href="/">
                    <img src={footerLogo} alt="Company logo" />
                  </a>
                  <div className="footer-icon-wrapper mt-3">
                    <ul className="footer-icon-wrapper-ul p-0">
                      <li><a href="#"><i className="fa-brands fa-facebook-f footer-icon"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-youtube footer-icon"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-twitter footer-icon"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin footer-icon"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Address & Contact */}
              <div className="col-md-4 col-12">
                <div>
                  <div className="ftr-loc-sec">
                    <p>
                      1st Floor, Eleora Tower,<br />
                      #22, 2nd Main Road, SRR Layout,<br />
                      B-Narayan Pura, Bengaluru - 560016.
                    </p>
                  </div>
                  <div className="mt-3">
                    <a href="tel:08048141656" className="ftr-sec-a-sec-2">
                      080 48141656
                    </a>
                    <p>Call us for support</p>
                  </div>
                  <div>
                    <a href="mailto:sajith@etherealturnkeyprojects.com" className="ftr-sec-a-sec-2">
                      sajith@etherealturnkeyprojects.com
                    </a>
                    <p>Email us for queries</p>
                  </div>
                </div>
              </div>

              {/* Google Map (Enlarged) */}
              <div className="col-md-4 col-12">
                <div>
                  <h5>Our Location</h5>
                  <iframe
                    title="Ethereal Turnkey Projects Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6919386618056!2d77.67924437543152!3d12.991544887325691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112dfd4ade47%3A0x8d058d6bdabc26b7!2sEleora%20Electricals%20%26%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1761471908906!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{
                      border: 0,
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-row-2" style={{ background: "#219c97" }}>
        <div className="container">
          <div className="ftr-row-2-wrapper">
            <p className="m-0 text-white">Developed By &copy; Ethreal</p>
            <ul className="footer-r-2-wrapper">
              <li><a href="/terms.html" className="footer-r-2-a text-white">Terms & Conditions</a></li>
              <li><a href="/policy.html" className="footer-r-2-a text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#219c97",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}

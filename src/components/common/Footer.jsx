import { useState, useEffect } from "react";
import footerLogo from "../../assets/img/footer-logo.svg";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="row row-gap-4">
              {/* Logo & Social */}
              <div className="col-md-3 col-12">
                <div>
                  <a href="/">
                    <img src={footerLogo} alt="Company logo" />
                  </a>
                  <div className="footer-icon-wrapper">
                    <ul className="footer-icon-wrapper-ul p-0">
                      <li>
                        <a href="#" className="footer-icon-wrapper-a">
                          <i className="fa-brands fa-facebook-f footer-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-icon-wrapper-a">
                          <i className="fa-brands fa-youtube footer-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-icon-wrapper-a">
                          <i className="fa-brands fa-twitter footer-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-icon-wrapper-a">
                          <i className="fa-brands fa-linkedin footer-icon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Address & Contact */}
              <div className="col-md-3 col-12">
                <div>
                  <div className="ftr-loc-sec">
                    <p>
                      1058 HBR, Stky
                      <br />
                      Bengaluru, Karnataka
                    </p>
                  </div>
                  <div>
                    <a href="tel:+910001111100" className="ftr-sec-a-sec-2">
                      +91-00011-11100
                    </a>
                    <p>Call us for support</p>
                  </div>
                  <div>
                    <a href="mailto:ethreal@example.com" className="ftr-sec-a-sec-2">
                      ethreal@example.com
                    </a>
                    <p>Email us for query</p>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-md-3 col-12">
                <div className="footer-sec-3-wrapper">
                  <h5 className="footer-sec-3-h">Useful Links</h5>
                  <ul className="footer-sec-3-ul p-0">
                    <li className="footer-sec-3-li">
                      <a href="/about-us.html">Why Choose</a>
                    </li>
                    <li className="footer-sec-3-li">
                      <a href="/blog.html">Read Blog</a>
                    </li>
                    <li className="footer-sec-3-li">
                      <a href="/about-us.html">Work Process</a>
                    </li>
                    <li className="footer-sec-3-li">
                      <a href="/faq.html">FAQ’s</a>
                    </li>
                    <li className="footer-sec-3-li">
                      <a href="/services.html">Support</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-md-3 col-12">
                <div>
                  <h5>News Letter</h5>
                  <p>Subscribe to our newsletter & get all the latest news.</p>
                  <div className="ftr-inpt-wrapper">
                    <input type="text" placeholder="Enter your email address" className="footer-input" />
                    <button className="footer-btn">
                      <i className="fa-solid fa-arrow-right footer-input-icon"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-row-2">
        <div className="container">
          <div className="ftr-row-2-wrapper">
            <p className="m-0">Developed By &copy; Ethreal</p>
            <ul className="footer-r-2-wrapper">
              <li>
                <a href="/terms.html" className="footer-r-2-a">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="/policy.html" className="footer-r-2-a">
                  Privacy policy
                </a>
              </li>
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
            background: "#f0a80cff",
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

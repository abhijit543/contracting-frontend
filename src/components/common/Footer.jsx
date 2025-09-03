// src/components/common/Footer.jsx
import React from "react";


// adjust the path as per your project
import footerLogo from "../../assets/img/footer-logo.svg";

export default function Footer() {
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
                    <a href="mailto:krishna@example.com" className="ftr-sec-a-sec-2">
                      krishna@example.com
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
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="footer-input"
                    />
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
            <p className="m-0">Developed By &copy; Krishna Moorthy M</p>
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
    </footer>
  );
}

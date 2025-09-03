// Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // if you are using react-router
import logo from "../../assets/img/logo.svg"; // adjust the path

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg py-4 navbar-dark bg-dark nav-main-b header-nav-mob">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarTogglerDemo01" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/">
                  Home
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle index-nav-a" to="/about-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </Link>
                <ul className="dropdown-menu index-nav-ul">
                  <li>
                    <Link className="dropdown-item index-nav-drop-a" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item index-nav-drop-a" to="/team">
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item index-nav-drop-a" to="/faq">
                      Faq's
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/services">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/pricing">
                  Price Planning
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/before-after">
                  Before After
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link index-nav-a" to="/contact-us">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import "./Clients.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import all logos
import abInBev from "../../../assets/img/company-logos/logo1.png";
import intel from "../../../assets/img/company-logos/logo2.png";
import juniper from "../../../assets/img/company-logos/logo3.png";
import clarivate from "../../../assets/img/company-logos/logo4.png";
import oyo from "../../../assets/img/company-logos/logo7.png";
import pulse from "../../../assets/img/company-logos/logo5.png";
import royaloak from "../../../assets/img/company-logos/logo8.png";
import eurofins from "../../../assets/img/company-logos/logo10.png";
import iqvia from "../../../assets/img/company-logos/logo9.png";
import giis from "../../../assets/img/company-logos/logo6.png";

export default function Clients() {
  const clients = [
    { img: abInBev },
    { img: intel},
    { img: juniper},
    { img: clarivate},
    { img: oyo},
    { img: pulse},
    { img: giis},
    { img: iqvia},
    { img: royaloak},
    { img: eurofins},
  ];

  return (
    <>
      {/* --- Header Section --- */}
      <section id="clientsTopSection">
        <div className="about-section-1 client-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div className="breadcrumb-wrap">
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>
                /{" "}
                <Link to="#" className="abt-sec-1-a">
                  Our Clients
                </Link>
              </div>
              <h1 className="abt-sec-1-h1">Our Clients</h1>
            </div>
          </div>
        </div>
      </section>

      {/* --- Clients Section --- */}
      <section className="clients-section">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="clients-heading">Our Esteemed Clients</h2>
            <p className="clients-subtext">
              We are proud to have collaborated with globally recognized organizations
              across technology, education, and infrastructure industries.  
              Each partnership reflects our dedication to precision, reliability,  
              and delivering excellence in every turnkey and contracting project.
            </p>
          </motion.div>

          <div className="clients-grid">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="client-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <img src={client.img} alt={client.name} className="client-logo" />
                <p className="client-name">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

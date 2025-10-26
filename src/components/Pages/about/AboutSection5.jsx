import healthImg from "../../../assets/img/about-us-p/health-and-safety.jpg";
import "./AboutSection2.css";
import { motion } from "framer-motion";

export default function AboutSection5() {
  return (
    <section className="health-section">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Left: Text */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              className="health-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="health-heading">Health, Safety & Environment</h2>
              
              <ul className="health-points">
                <li>All works to be carried out with all PPEs: safety shoes, helmets, reflective jackets, and work-specific PPEs like safety goggles during cutting and face masks during painting.</li>
                <li>Daily safety induction to be briefed to workers before starting works.</li>
                <li>Only aluminum movable scaffolding is permitted.</li>
                <li>Mobilize fire extinguishers in sufficient numbers.</li>
                <li>Barricade the areas of hot and wet works.</li>
                <li>Use of safety harness for height works is encouraged.</li>
                <li>Toilets must be used and cleaned/maintained daily.</li>
                <li>A dedicated safety-in-charge must be deployed.</li>
                <li>Utilization of MS and wooden ladders, staging, and LPG cylinders is strictly prohibited.</li>
                <li>All electrical portable tools to be routed through 30mA ELCB; only industrial fiber plug tops allowed.</li>
                <li>Safe work methods must be provided for all relevant works.</li>
              </ul>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              className="health-img-wrapper text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={healthImg}
                alt="Health and Safety"
                className="health-img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

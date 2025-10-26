import debrisImg from "../../../assets/img/about-us-p/debris.jpg"; 
import "./AboutSection2.css";
import { motion } from "framer-motion";

export default function AboutSection6() {
  return (
    <section className="debris-section">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* Left: Image */}
          <div className="col-lg-6 col-md-12 order-lg-1">
            <motion.div
              className="debris-img-wrapper text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={debrisImg}
                alt="Debris Management"
                className="debris-img"
              />
            </motion.div>
          </div>

          {/* Right: Text */}
          <div className="col-lg-6 col-md-12 order-lg-2">
            <motion.div
              className="debris-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="debris-heading">Debris Management</h2>
              
              <ul className="debris-points">
                <li>During the works, the Contractor shall keep the site free from obstructions and store/dispose of constructional waste, surplus materials, wreckage, rubbish, or temporary works no longer required.</li>
                <li>It is the responsibility of every personnel to maintain the site clean and hygienic.</li>
                <li>A separate scrap yard must be identified for dumping of scrap/debris.</li>
                <li>Any personnel dumping debris outside the scrap yard will be liable to penalty.</li>
                <li>Debris must be dumped daily in the earmarked area and cleared daily, otherwise heavy penalties apply.</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

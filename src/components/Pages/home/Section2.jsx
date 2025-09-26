// Section2.jsx
import "animate.css";
import subtitleBg from "../../../assets/img/main-banners/sub-title-bg.png";
import "./Home.css";
import evolution1 from "../../../assets/img/home-evolution/2019.jpg";
import evolution2 from "../../../assets/img/home-evolution/2020.jpg";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2019", text: "Start", img: evolution1 },
  { year: "2020", text: "Turn Over - 64.8 Lacs", img: evolution2 },
  { year: "2021", text: "Turn Over - 2.76 Cr.", img: evolution1 },
  { year: "2022", text: "Turn Over - 2.29 Cr.", img: evolution2 },
  { year: "2023", text: "Turn Over - 3 Cr.", img: evolution1 },
];

export default function Section2() {
  return (
    <section id="Section2">
      <div className="section-2">
        <div className="container">
          {/* Sub Title */}
          <div className="sub-title-wrapper mb-5 ">
            <h6 className="sub-title">Evolution</h6>
            <img
              src={subtitleBg}
              loading="lazy"
              alt="subtitle background"
              className="sub-title-img"
            />
          </div>

          {/* Timeline */}
          <div className="timeline-wrapper position-relative">
            {/* Snake Line SVG with animation */}
            <motion.svg
              className="timeline-line d-none d-md-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 100 Q 150 0, 300 100 T 600 100 T 900 100"
                stroke="#6c757d"
                strokeWidth="4"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.svg>

            <div className="d-flex justify-content-between flex-wrap">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item text-center position-relative mb-5 mb-md-0 ${
                    index % 2 === 0 ? "align-top" : "align-bottom"
                  }`}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Year Circle */}
                  <motion.div
                    className="year-circle rounded-circle text-white fw-bold 
                    d-flex align-items-center justify-content-center mx-auto"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                  >
                    {item.year}
                  </motion.div>

                  {/* Image */}
          <motion.div
  className="timeline-img rounded-circle overflow-hidden border border-2 border-dark mx-auto"
  style={index === 2 ? { marginTop: "30px" } : {}}
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: index * 0.3 }}
>

                    <img
                      src={item.img}
                      alt={item.year}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.p
                    className="mt-2 small"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.4 }}
                  >
                    {item.text}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

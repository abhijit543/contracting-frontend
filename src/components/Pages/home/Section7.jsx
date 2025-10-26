import { motion } from "framer-motion";
import sec4 from "../../../assets/img/sec-4.png";
import processImage from "../../../assets/img/process-image.png";
import { Link } from "react-router-dom";
export default function Section7() {
  return (
    <section
      id="Section-7"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "rgb(180, 202, 202)",
        overflow: "hidden",
        padding: "100px 0",
        marginTop:"3px"
      }}
    >
      {/* Decorative Floating Background Circles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.35), transparent)",
          }}
        ></motion.div>

        <motion.div
          animate={{ y: [30, 0, 30] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.25), transparent)",
          }}
        ></motion.div>
      </div>

      {/* Main Content */}
      <div className="section-7" style={{ position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12">
        <section className="section-subtitle mb-5">
  <div className="container">
    <div className="sub-title-wrapper">
      <h6 className="sub-title">Quality Management Process Flow Chart</h6>
      <img
        src={sec4}
        loading="lazy"
        alt="subtitle background"
        className="sub-title-img mx-auto"
      />
    </div>
  </div>
</section>


              <motion.img
                src={processImage}
                alt="Process Flow Visual"
                className="img-fluid shadow-lg rounded-4"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  border: "6px solid #f8f9fa",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />

              <motion.div
               className="d-flex justify-content-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Link
                  className="btn mt-5 px-5 py-3 text-center "
                  style={{
                    background:
                      "linear-gradient(90deg, #0d1b2a 0%, #3a506b 100%)",
                    border: "none",
                    borderRadius: "50px",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(0, 0, 0, 0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0, 0, 0, 0.2)")
                  }
                   to="/about-us"
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

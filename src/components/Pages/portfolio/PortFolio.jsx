import React, { useState } from "react";
import "./Portfolio.css";
import { motion, AnimatePresence } from "framer-motion";

// Import your 18 images
import port1 from "../../../assets/img/portfolio/port-1.png";
import port2 from "../../../assets/img/portfolio/port-2.png";
import port3 from "../../../assets/img/portfolio/port-3.png";
import port4 from "../../../assets/img/portfolio/port-4.png";
import port5 from "../../../assets/img/portfolio/port-5.png";
import port6 from "../../../assets/img/portfolio/port-6.png";
import port7 from "../../../assets/img/portfolio/port-7.png";
import port8 from "../../../assets/img/portfolio/port-8.png";
import port9 from "../../../assets/img/portfolio/port-9.png";
import port10 from "../../../assets/img/portfolio/port-10.png";
import port11 from "../../../assets/img/portfolio/port-11.png";
import port12 from "../../../assets/img/portfolio/port-12.png";
import port13 from "../../../assets/img/portfolio/port-13.png";
import port14 from "../../../assets/img/portfolio/port-14.png";
import port15 from "../../../assets/img/portfolio/port-15.png";
import port16 from "../../../assets/img/portfolio/port-16.png";
import port17 from "../../../assets/img/portfolio/port-17.png";
import port18 from "../../../assets/img/portfolio/port-18.png";

export default function PortFolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, img: port1, title: "Corporate Office Interiors" },
    { id: 2, img: port2, title: "Luxury Residential Design" },
    { id: 3, img: port3, title: "Commercial Building Project" },
    { id: 4, img: port4, title: "Retail Showroom Design" },
    { id: 5, img: port5, title: "Modern Industrial Space" },
    { id: 6, img: port6, title: "Restaurant & Café Interiors" },
    { id: 7, img: port7, title: "Hotel Renovation Project" },
    { id: 8, img: port8, title: "Educational Institution Design" },
    { id: 9, img: port9, title: "Healthcare Facility Setup" },
    { id: 10, img: port10, title: "Luxury Villa Interiors" },
    { id: 11, img: port11, title: "Corporate Tower" },
    { id: 12, img: port12, title: "Public Utility Infrastructure" },
    { id: 13, img: port13, title: "Warehouse Construction" },
    { id: 14, img: port14, title: "Industrial Plant Development" },
    { id: 15, img: port15, title: "Bank Office Fit-Out" },
    { id: 16, img: port16, title: "Data Center Setup" },
    { id: 17, img: port17, title: "Retail Outlet Chain" },
    { id: 18, img: port18, title: "Airport Lounge Interiors" },
  ];

  return (
    <main>
      {/* Section 1: Banner (same) */}
      <section>
        <div className="about-section-1 about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <a href="/index.html" className="abt-sec-1-a-1">
                  Home
                </a>{" "}
                /
                <a href="#" className="abt-sec-1-a">
                  Portfolio
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Portfolio</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Portfolio Grid */}
      <section className="portfolio-gallery">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="image-wrapper">
                  <img src={item.img} alt={item.title} />
                  <div className="overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.img} alt={selectedImage.title} />
              <h3>{selectedImage.title}</h3>
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

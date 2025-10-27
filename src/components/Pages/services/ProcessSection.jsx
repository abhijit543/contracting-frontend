import React from "react";
import { motion } from "framer-motion";
import "./ProcessSection.css";

import bgImage from "../../../assets/img/service/office-bg.jpg";
import investigateIcon from "../../../assets/img/service/investigate.png";
import procureIcon from "../../../assets/img/service/procure.png";
import implementIcon from "../../../assets/img/service/implement.png";
import closeoutIcon from "../../../assets/img/service/closeout.png";

export default function ProcessSection() {
  const steps = [
    {
      title: "Investigate",
      description:
        "Due Diligence, Site survey and analysis, Statutory Matters & Compliances and other influences.",
      color: "#00A6A6",
      icon: investigateIcon,
    },
    {
      title: "Procure",
      description:
        "Procurement options, Value Engineering, Vendor Evaluation, Interview & Selection of the appropriate vendors.",
      color: "#F4A300",
      icon: procureIcon,
    },
    {
      title: "Implement",
      description:
        "Construction management including schedule management, Quality management, Periodic reporting and Change management. Risk analysis and mitigation plans.",
      color: "#7D3C98",
      icon: implementIcon,
    },
    {
      title: "Close out",
      description:
        "Project Closeout including Testing & Commissioning, As Built Drawings, Technical Manuals, Training and Guarantee Certificates.",
      color: "#C0392B",
      icon: closeoutIcon,
    },
  ];

  return (
    <section className="process-section">
      <div
        className="process-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Heading Section */}
      <motion.div
        className="process-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Project Delivery</h2>
        <div className="heading-underline"></div>
      </motion.div>

      {/* Steps Section */}
      <div className="process-content">
        {steps.map((step, index) => (
          <motion.div
            className="process-step"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="icon-circle"
              style={{ backgroundColor: step.color }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={step.icon} alt={step.title} />
            </motion.div>

            <motion.div
              className="step-text"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

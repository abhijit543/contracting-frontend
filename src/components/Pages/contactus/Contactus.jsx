import { Link } from "react-router-dom";
import "./ContactUs.css";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <main>
      {/* ---------- Hero Section ---------- */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div>
              <Link to="/" className="breadcrumb-link">Home</Link> /
              <span className="breadcrumb-active"> Contact Us</span>
            </div>
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtext">
              We’re here to help you with your contracting and project requirements.  
              Reach out to our team — we’d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Contact Section ---------- */}
      <section className="contact-main-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <h3 className="contact-company-title">Ethereal Turnkey Projects Pvt. Ltd.</h3>
                <p className="contact-description">
                  Ethereal Turnkey Projects Pvt. Ltd. is a leading contracting company
                  specializing in delivering comprehensive General Contracting (GC),
                  Electrical, and MEP solutions across commercial, industrial, and
                  institutional sectors. We provide quality engineering, timely delivery,
                  and value-driven results.
                </p>
                <a href="tel:+918048141656" className="contact-hotline">
                  📞 Hotline: +91 80481 41656
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-details-card">
                <h4>Contact Details</h4>
                <div className="contact-detail-item">
                  <h6>📍 Address</h6>
                  <p>1st Floor, Eleora Tower, SRR Layout,<br />B-Narayan Pura, Bengaluru - 560016</p>
                </div>
                <div className="contact-detail-item">
                  <h6>📞 Phone</h6>
                  <a href="tel:+918048141656" className="contact-link">+91 80481 41656</a>
                </div>
                <div className="contact-detail-item">
                  <h6>✉️ Email</h6>
                  <a href="mailto:sajith@etherealturnkeyprojects.com" className="contact-link">
                    sajith@etherealturnkeyprojects.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-5">
              <div className="contact-form-card">
                <h4>Send Us a Message</h4>
                <form onSubmit={handleSubmit} className="contact-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <textarea placeholder="Write your message..." rows={4} required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- Map Section ---------- */}
      <section className="contact-map-section">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.691938463395!2d77.6818193!3d12.9915449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112dfd4ade47%3A0x8d058d6bdabc26b7!2sEleora%20Electricals%20%26%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757070373229!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

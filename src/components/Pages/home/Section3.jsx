// Section3.jsx
import "animate.css";
import subtitlebg from "../../../assets/img/main-banners/sub-title-bg.png";
import service1 from "../../../assets/img/homepage-service/service1.jpg"
import service2 from "../../../assets/img/homepage-service/service2.jpg"
import service3 from "../../../assets/img/homepage-service/service3.jpg"
import { Link } from "react-router-dom";
  const services = [
    {
      title: "GC Contracting",
      desc: "Effectively managing your GC Projects  for corporate office fit outs, providing tailor made solutions and value addition to maximize efficiencies.",
      img: service3,
      color: "bg-primary"
    },
    {
      title: "MEP Services",
      desc: "Effectively managing your MEP Services, for Corporate office Fit out Works and Core Electro Mechanical Projects.",
      img: service2,
      color: "bg-success"
    },
    {
      title: "Electrical Contracting",
      desc: "Effectively managing Electrical Services for all types of construction projects.",
      img: service1,
      color: "bg-dark"
    }
  ];
export default function Section3() {
  return (
 <section id="Section-3">
      <div className="section-3 py-12">
        <div className="container mx-auto">
      
          <div className="sub-title-wrapper  mb-8">
            <h6 className="sub-title text-lg font-semibold">
              Our Service and Solutions
            </h6>
            <img
              src={subtitlebg}
              loading="lazy"
              alt="subtitle background"
              className="sub-title-img mx-auto"
            />
          </div>

    
    <div className="row">
  {services.map((service, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={service.img}
          alt={service.title}
          className="card-img-top"
        />
        <div className={`card-body text-white ${service.color}`}>
          <h5 className="card-title">{service.title}</h5>
        </div>
        <div className="card-body bg-white">
          <p className="card-text text-muted">{service.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}

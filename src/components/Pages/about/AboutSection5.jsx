// AboutSection5.jsx
export default function AboutSection5() {
  const steps = [
    {
      number: "01",
      title: "Planning and Concept Development",
      desc: "This initial phase is crucial for setting the foundation of the design project.",
    },
    {
      number: "02",
      title: "Planning and Concept Development",
      desc: "This initial phase is crucial for setting the foundation of the design project.",
    },
    {
      number: "03",
      title: "Planning and Concept Development",
      desc: "This initial phase is crucial for setting the foundation of the design project.",
    },
    {
      number: "04",
      title: "Planning and Concept Development",
      desc: "This initial phase is crucial for setting the foundation of the design project.",
    },
  ];

  return (
    <section id="aboutSection-5">
      <div className="about-section-5">
        <div className="container">
          <div>
            <h1 className="abt-sec-2-num about-sec-5-h1">OUR WORK PROCESS</h1>
          </div>

          <div className="about-section-5-wrapper">
            <div className="row row-gap-5">
              {steps.map((step, idx) => (
                <div className="col-lg-3 col-md-4" key={idx}>
                  <div className="about-section-5-wrap-sec">
                    <div className="about-section-5-wrap-sec-inner">
                      <div className="abt-sec-5-work-margin">
                        <h1 className="abt-sec-2-num">{step.number}</h1>
                      </div>
                      <div>
                        <h5>{step.title}</h5>
                        <p className="service-img-p abt-sec-5-work-p">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

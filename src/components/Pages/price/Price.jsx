import headingImg from "../../../assets/img/sec-8-heading.png";

export default function PricingPlan() {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$219.00",
      description: "The initial consultation is a meeting between the designer and the client to discuss the project.",
      features: [
        { title: "Concept Development", available: true },
        { title: "Design Development", available: false },
        { title: "Construction Administration", available: true },
        { title: "Additional Services", available: false },
      ],
    },
    {
      id: 2,
      name: "Popular Plan",
      price: "$319.00",
      description: "The initial consultation is a meeting between the designer and the client to discuss the project.",
      features: [
        { title: "Concept Development", available: true },
        { title: "Design Development", available: false },
        { title: "Construction Administration", available: true },
        { title: "Additional Services", available: false },
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$419.00",
      description: "The initial consultation is a meeting between the designer and the client to discuss the project.",
      features: [
        { title: "Concept Development", available: true },
        { title: "Design Development", available: true },
        { title: "Construction Administration", available: true },
        { title: "Additional Services", available: true },
      ],
    },
  ];

  return (
    <main>
      {/* Section 1 Start */}
      <section id="priceSection-1">
        <div className="about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <a href="/index.html" className="abt-sec-1-a-1">
                  Home
                </a>
                /
                <a href="" className="abt-sec-1-a">
                  Pricing Plan
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Pricing Plan</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <section id="priceSection-2">
        <div className="price-sec-2">
          <div className="container">
            <div>
              <div className="sec-8-heading">
                <img src={headingImg} alt="" />
                <span>Our Pricing</span>
              </div>
            </div>
            <div>
              <div>
                <h1 className="sec-8-h1">Pricing Plan</h1>
                <p className="abtsec-3-p">
                  Choose your Best pricing plan for interior and architecture design services
                  <br />
                  the project involves construction or renovation..
                </p>
              </div>
            </div>
            <div className="row pric-sec-2-margin row-gap-5">
              {plans.map((plan) => (
                <div key={plan.id} className="col-lg-4 col-md-6">
                  <div className="price-sec-2-wrapper">
                    <div className="price-sec-2-head">
                      <h6 className="price-sec-2-head-h6">{plan.name}</h6>
                      <h2 className="price-sec-2-head-price">{plan.price}</h2>
                    </div>
                    <div className="price-sec-2-body">
                      <p>{plan.description}</p>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className={`price-sec-2-inner ${feature.available ? "" : "price-not-sec-2"}`}>
                          <i className={`fa-solid ${feature.available ? "fa-check" : "fa-xmark"}`}></i>
                          <h5>{feature.title}</h5>
                        </div>
                      ))}
                    </div>
                    <div className="price-sec-2-btn-wrapper">
                      <a href="" className="price-sec-2-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 End */}

      {/* Section 4 Start */}
      <section>
        <div className="price-section-4 price-section-4-bg">
          <div className="container">
            <div>
              <div className="sec-8-heading">
                <img src={headingImg} alt="" />
                <span>Work With Us</span>
              </div>
            </div>
            <div>
              <div>
                <h1 className="price-sec-4-h1">
                  Have a Project in mind?
                  <br />
                  Do not hesitate to say hello.
                </h1>
              </div>
            </div>
            <div className="text-center">
              <a href="/contact-us.html" className="price-sec-4-btn">
                Lets Build <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 End */}
    </main>
  );
}

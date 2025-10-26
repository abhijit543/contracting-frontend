import section4img from '../../../assets/img/sec-4.png'
import whychoose1 from '../../../assets/img/why-choose-1.png'
import whychoose2 from '../../../assets/img/why-choose-2.png'
import whychoose3 from '../../../assets/img/why-choose-3.png'
import whychoose4 from '../../../assets/img/why-choose-4.png'
import section4img1 from '../../../assets/img/section-4-img.png'

export default function Section4() {
  return (
    <section
      id="Section-4"
      style={{
        backgroundColor: "rgb(180 202 202)", // ✅ Light teal tint (alternate background)
        padding: "80px 0",
        marginTop:"3px"
      }}
    >
      <div className="section-4">
        <div className="container">
          <div className="row row-gap-5 align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 padding-cho">
              <div>
                {/* Subtitle */}
                <div className="sub-title-wrapper">
                  <h6 className="sub-title text-[#219c97] font-semibold">
                    Why Choose Us
                  </h6>
                  <img
                    src={section4img}
                    loading="lazy"
                    alt="why choose subtitle background"
                    className="sub-title-img"
                  />
                </div>

                {/* Title */}
                <h1 className="title mb-4 fw-bold text-dark">
                  Exceptional standard of <br /> customer satisfaction
                </h1>
                <p className="text-muted">
                  Choosing interior design services offers numerous benefits.
                  Here are a few reasons why you should consider working with
                  professional interior designers:
                </p>

                {/* Features */}
                <div className="row chose-gap mt-5">
                  {[
                    {
                      img: whychoose1,
                      title: "Expertise and Experience",
                      desc: "Interior designers possess the skills to create well-designed spaces.",
                    },
                    {
                      img: whychoose2,
                      title: "Innovative Solutions",
                      desc: "Interior designers are trained to think creatively and deliver unique designs.",
                    },
                    {
                      img: whychoose3,
                      title: "Time and Cost Efficiency",
                      desc: "Hiring an interior designer can save you both time and money.",
                    },
                    {
                      img: whychoose4,
                      title: "Value Enhancement",
                      desc: "Well-designed interiors can significantly enhance property value.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="col-md-6 col-12 mb-4">
                      <div className="choose-wrapper d-flex align-items-start gap-3">
                        <img
                          src={item.img}
                          loading="lazy"
                          alt={item.title}
                          style={{ width: "50px" }}
                        />
                        <div>
                          <h6 className="text-dark fw-semibold mb-1">{item.title}</h6>
                          <p className="text-muted small mb-0">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 text-center">
              <img
                src={section4img1}
                loading="lazy"
                alt="Interior design showcase"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

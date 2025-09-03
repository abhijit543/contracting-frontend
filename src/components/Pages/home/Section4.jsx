import section4img from '../../../assets/img/sec-4.png'
import whychoose1 from '../../../assets/img/why-choose-1.png'
import whychoose2 from '../../../assets/img/why-choose-2.png'
import whychoose3 from '../../../assets/img/why-choose-3.png'
import whychoose4 from '../../../assets/img/why-choose-4.png'
import section4img1 from '../../../assets/img/section-4-img.png'

export default function Section4() {
  return (
    <section id="Section-4">
      <div className="section-4">
        <div className="container">
          <div className="row row-gap-5">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 padding-cho">
              <div>
                {/* Subtitle */}
                <div className="sub-title-wrapper">
                  <h6 className="sub-title">Why Choose Us</h6>
                  <img
                    src={section4img}
                    loading="lazy"
                    alt="why choose subtitle background"
                    className="sub-title-img"
                  />
                </div>

                {/* Title */}
                <h1 className="title">
                  Exceptional standard of <br /> customer satisfaction
                </h1>
                <p>
                  Choosing interior design services offers numerous benefits.
                  Here are a few reasons why you should consider working with
                  professional interior designers:
                </p>

                {/* Features */}
                <div>
                  <div className="row chose-gap mt-5">
                    {/* Feature 1 */}
                    <div className="col-md-6 col-12">
                      <div className="choose-wrapper">
                        <div className="row">
                          <div className="col-3 p-0 text-center">
                            <img
                              src={whychoose1}
                              loading="lazy"
                              alt="Expertise"
                            />
                          </div>
                          <div className="col-9 p-0 text-center">
                            <h6>Expertise and Experience</h6>
                            <p>
                              Interior designers possess the skills to create
                              well-designed spaces.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-md-6 col-12">
                      <div className="choose-wrapper">
                        <div className="row">
                          <div className="col-3 p-0 text-center">
                            <img
                              src={whychoose2}
                              loading="lazy"
                              alt="Innovation"
                            />
                          </div>
                          <div className="col-9 p-0">
                            <h6>Innovative Solutions</h6>
                            <p>
                              Interior designers are trained to think creatively
                              and deliver unique designs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-md-6 col-12">
                      <div className="choose-wrapper">
                        <div className="row">
                          <div className="col-3 p-0 text-center">
                            <img
                              src={whychoose3}
                              loading="lazy"
                              alt="Efficiency"
                            />
                          </div>
                          <div className="col-9 p-0">
                            <h6>Time and Cost Efficiency</h6>
                            <p>
                              Hiring an interior designer can save you both time
                              and money.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="col-md-6 col-12">
                      <div className="choose-wrapper">
                        <div className="row">
                          <div className="col-3 p-0 text-center">
                            <img
                              src={whychoose4}
                              loading="lazy"
                              alt="Value Enhancement"
                            />
                          </div>
                          <div className="col-9 p-0">
                            <h6>Value Enhancement</h6>
                            <p>
                              Well-designed interiors can significantly enhance
                              property value.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12">
              <div>
                <img
                  src={section4img1}
                  loading="lazy"
                  alt="Interior design showcase"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

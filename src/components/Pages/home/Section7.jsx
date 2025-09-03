// src/components/Pages/home/Section7.jsx



// Import every image from /src/assets
import sec4 from "../../../assets/img/sec-4.png";
import testimonialIcon from "../../../assets/img/testimonal-icon.png";
import testimonialPhoto from "../../../assets/img/testimonial-1.jpg";
import clientAvatar from "../../../assets/img/tes-img-p.png";
import brand1 from "../../../assets/img/sec-7/brand-1.png";
import brand2 from "../../../assets/img/sec-7/brand-2.png";
import brand3 from "../../../assets/img/sec-7/brand-3.png";
import brand4 from "../../../assets/img/sec-7/brand-4.png";

export default function Section7() {
  return (
    <section id="Section-7">
      {/* --- Top testimonials row --- */}
      <div className="section-7">
        <div className="container">
          <div className="row row-gap-5">
            {/* --- Left column --- */}
            <div className="col-lg-6">
              <div className="sub-title-wrapper">
                <h6 className="sub-title">Testimonials</h6>
                <img
                  src={sec4}
                  loading="lazy"
                  alt="subtitle decoration"
                  className="sub-title-img"
                />
              </div>
              <h1 className="title">
                Amazing feedback from <br />
                Our valued clients
              </h1>

              <div className="mt-5">
                <div>
                  <img src={testimonialIcon} alt="quote icon" />
                  <p className="mt-4">
                    Working with your team was an absolute pleasure. From the
                    initial concept to the final installation, every step was
                    executed with professionalism and attention to detail. The
                    end result exceeded our expectations, and we couldn't be
                    happier with our beautifully transformed space.
                  </p>

                  {/* --- Rating & profile --- */}
                  <div>
                    <div className="row row-gap-3 sec-7-rev-wrapper">
                      <div className="col-md-7 col-12">
                        <div>
                          <span>
                            <i className="fa-solid fa-star sec-7-star"></i>
                            <i className="fa-solid fa-star sec-7-star"></i>
                            <i className="fa-solid fa-star sec-7-star"></i>
                            <i className="fa-solid fa-star sec-7-star"></i>
                            <i className="fa-solid fa-star sec-7-star"></i>
                          </span>
                          <span className="tes-aftr-span sec-7-count">
                            4.8 out of 5.0
                          </span>
                        </div>
                      </div>
                      <div className="col-md-5 col-12">
                        <div className="row align-items-center">
                          <div className="col-4">
                            <img
                              src={clientAvatar}
                              loading="lazy"
                              alt="client avatar"
                              className="sec-7-img"
                            />
                          </div>
                          <div className="col-8">
                            <h6 className="m-0">John William</h6>
                            <p className="m-0">New Client</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --- End rating & profile --- */}
                </div>
              </div>
            </div>

            {/* --- Right column image --- */}
            <div className="col-lg-6">
              <div>
                <img
                  src={testimonialPhoto}
                  loading="lazy"
                  width="100%"
                  alt="testimonial visual"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Logos row --- */}
      <div className="section-7-row-2">
        <div className="container">
          <div>
            <h5 className="text-center">200+ Our Awesome Global Client</h5>
          </div>
          <div className="mt-5">
            <div className="row row-gap-5">
              <div className="col-md-3 col-6">
                <img
                  src={brand1}
                  loading="lazy"
                  className="sec-7-row-2-img"
                  alt="brand 1"
                />
              </div>
              <div className="col-md-3 col-6">
                <img
                  src={brand2}
                  loading="lazy"
                  className="sec-7-row-2-img"
                  alt="brand 2"
                />
              </div>
              <div className="col-md-3 col-6">
                <img
                  src={brand3}
                  loading="lazy"
                  className="sec-7-row-2-img"
                  alt="brand 3"
                />
              </div>
              <div className="col-md-3 col-6">
                <img
                  src={brand4}
                  loading="lazy"
                  className="sec-7-row-2-img"
                  alt="brand 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

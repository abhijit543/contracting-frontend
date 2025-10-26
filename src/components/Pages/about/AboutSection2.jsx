import secHeading from "../../../assets/img/sec-8-heading.png";
import dotted from "../../../assets/img/about-us-p/doted.png";
import aboutImg2 from "../../../assets/img/about-us-p/about-img-2.jpg";
import aboutImg1 from "../../../assets/img/about-us-p/about-img-1.png";
import "./AboutSection2.css"; // New CSS file for styling

export default function AboutSection2() {
  return (
    <section id="aboutSection-2" className="about-sec-2">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column */}
          <div className="col-md-4">
            <div className="about-left">
              <div className="about-sec-2-heading">
                <img src={secHeading} alt="Section Heading" />
                <span>Our Story</span>
              </div>
              <h1 className="abt-sec-2-h1">Our Story</h1>
              <div className="abt-sec-2-img">
                <img src={dotted} alt="Decorative Dots" />
              </div>
              <div className="abt-sec-2-img-wrap">
                <img src={aboutImg2} alt="About Us" className="rounded-img" />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-md-8">
            <div className="about-right">
              <div className="about-sec-2-pad">
                <p>
                  Our story is rooted in passion, creativity, and a commitment to excellence. We started as a small team of individuals with a shared love for interior design and a vision to
                  transform spaces into inspiring environments.
                </p>
                <p>
                  Our journey began when David Richard, our visionary founder, recognized the need for personalized, innovative, and high-quality interior renovation services. With a background in
                  design and a passion for creating beautiful and functional spaces, David Richard set out to build a company that would deliver exceptional results and exceed client expectations.
                </p>
                <p>
                  From humble beginnings, we steadily grew, building a reputation for our expertise, attention to detail, and client-focused approach. We have had the privilege of working with a
                  diverse range of clients, each with unique needs and visions for their spaces. We take pride in our ability to bring those visions to life, blending creativity, functionality, and
                  craftsmanship into every project we undertake.
                </p>
              </div>
              <div className="abt-sec-2-img2-wrap">
                <img src={aboutImg1} alt="About Illustration" className="rounded-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

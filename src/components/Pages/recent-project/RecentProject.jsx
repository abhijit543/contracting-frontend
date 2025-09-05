// RecentProject.jsx
import PortDeatil from "../../../assets/img/port-details.jpg";
import ProductDeatils from "../../../assets/img/product-detail.jpg";
import productDetail2 from "../../../assets/img/product-detail-2.jpg";
import { Link } from "react-router-dom";
export default function RecentProject() {
  return (
    <main>
      <section>
        <div className="about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>
                /
                <a href="#" className="abt-sec-1-a">
                  Commercial Architecture
                </a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Commercial Architecture</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="port-details-sec-2">
          <div className="container">
            <div>
              <img src={PortDeatil} width="100%" alt="" />
              <p className="text-center mt-3">Los Angeles Commercial Building Made by EthReal.</p>
            </div>

            <div className="row">
              <div className="col-lg-8 project-detail-padding-wrap-right">
                <h6>Commercial Architecture</h6>
                <h1 className="project-details-margin">Commercial Building</h1>

                <p>
                  Welcome to Innovat commercial architecture project! This dynamic and innovative endeavor is the designed to meet the unique needs of our esteemed client Robert Richard. Situated in
                  Los Angeles this commercial project represents a collaborative effort to create a functional and visually captivating space that aligns with our client's objectives.
                </p>

                <h4 className="project-details-margin">Project Overview</h4>
                <p>
                  Our commercial architecture project is focused on designing a state-of-the-art commercial building that serves as a vibrant and functional hub for our client's business operations.
                  With a commitment to innovation, sustainability, and aesthetic excellence, we are dedicated to creating a space that exceeds expectations and enhances the client's brand identity.
                </p>

                <h4 className="project-details-margin">Functionality</h4>
                <p>
                  Our design approach prioritizes functionality, ensuring that the commercial space is optimized for efficiency and productivity. We will carefully consider the workflow, circulation
                  patterns, and zoning requirements to create a space that seamlessly supports the client's operations.
                </p>

                <div className="row row-gap-5 project-details-margin">
                  <div className="col-md-6">
                    <div>
                      <img src={ProductDeatils} width="100%" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 project-detail-pad">
                    <div>
                      <h5>Key Features:</h5>
                      <ul className="project-detail-ul">
                        <li>Modern and captivating architectural design</li>
                        <li>Open and collaborative workspaces</li>
                        <li>Well-designed meeting rooms and conference facilities</li>
                        <li>Ample natural light and optimized artificial lighting systems</li>
                        <li>Sustainable building materials and energy-efficient systems</li>
                      </ul>
                      <p className="project-detail-ul">
                        We are thrilled to embark on this commercial architecture project and look forward to creating a remarkable space that inspires and drives success for our valued client. Stay
                        tuned for updates as we bring this vision.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="project-details-margin">Project Goals and Objectives:</h3>
                  <p>
                    Outline the primary goals and objectives of the commercial architecture project. This could include creating a functional workspace, enhancing branding and identity, maximizing
                    energy efficiency, accommodating future growth, or meeting specific regulatory requirements.
                  </p>
                  <div className="project-details-margin">
                    <img src={productDetail2} width="100%" alt="" />
                  </div>

                  <h4 className="project-details-margin">Functionality</h4>
                  <p>
                    The primary goal of this commercial architecture project is to create a space that is highly functional and optimized for the client's specific business operations. We will
                    carefully analyze their workflow, space requirements, and functional needs to design a layout that enhances efficiency, productivity, and collaboration.
                  </p>

                  <ul className="project-details-margin project-details-ul-2-b">
                    <li>Brand Representation</li>
                    <li>Flexibility and Adaptability</li>
                    <li>User Experience and Well-being</li>
                  </ul>

                  <p>
                    By focusing on these goals and objectives, we aim to deliver a commercial architecture project that not only meets the client's immediate needs but also provides a solid foundation
                    for their long-term success, growth, and brand recognition commitment is to create a space that seamlessly integrates form and function, elevating the client's operations and
                    creating an exceptional environment for their employees and stakeholders.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 project-detail-padding-wrap-left">
                <div>
                  <div className="project-d-sec-2-top">
                    <div className="row project-detail-sec-2-right-wrapper">
                      <div className="col-6">
                        <p>Project Name:</p>
                        <h6>Commercial Building</h6>
                      </div>
                      <div className="col-6">
                        <p>Client Name:</p>
                        <h6>Robert Richard</h6>
                      </div>
                    </div>

                    <div className="row project-detail-sec-2-right-wrapper">
                      <div className="col-6">
                        <p>Start Date:</p>
                        <h6>12.07.2023</h6>
                      </div>
                      <div className="col-6">
                        <p>Client Name:</p>
                        <h6>6 Month</h6>
                      </div>
                    </div>

                    <div className="row project-detail-sec-2-right-wrapper">
                      <div className="col-6">
                        <p>Location:</p>
                        <h6>Bangalore</h6>
                      </div>
                      <div className="col-6">
                        <p>Share Project:</p>
                        <ul className="pro-dtle-ul-icon-wrapper">
                          <li>
                            <a href="#" className="pro-dtle-icon-wrapper-li">
                              <i className="fa-brands fa-facebook-f pro-dtel-icon"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="pro-dtle-icon-wrapper-li">
                              <i className="fa-brands fa-twitter pro-dtel-icon"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="pro-dtle-icon-wrapper-li">
                              <i className="fa-brands fa-youtube pro-dtel-icon"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="pro-dtle-icon-wrapper-li">
                              <i className="fa-brands fa-linkedin pro-dtel-icon"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="project-d-sec-2-bottom">
                    <div>
                      <h6>Contact</h6>
                      <h4>Let's start new project.</h4>
                    </div>

                    <div>
                      <form>
                        <div>
                          <input type="text" placeholder="Your Name" className="about-sec-form-input t-d-sec-form-input" />
                        </div>
                        <div>
                          <input type="tel" placeholder="Phone Number" className="about-sec-form-input t-d-sec-form-input" />
                        </div>
                        <div>
                          <input type="email" placeholder="Email" className="about-sec-form-input t-d-sec-form-input" />
                        </div>
                        <div>
                          <textarea placeholder="Send Message" className="about-sec-form-input t-d-sec-form-input" rows="3"></textarea>
                        </div>
                        <div>
                          <button type="submit" className="about-sec-form-btn">
                            Send Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

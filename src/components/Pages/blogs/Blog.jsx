import React, { useState } from "react";
import { Link } from "react-router-dom"; // if using React Router
import blog1 from "../../../assets/img/blog/blog-1.jpg";
import blog2 from "../../../assets/img/blog/blog-2.jpg";
import blog3 from "../../../assets/img/blog/blog-3.jpg";
import blog4 from "../../../assets/img/blog/blog-4.jpg";

export default function Blog() {
  // mock data
  const blogItems = [
    { id: 1, img: blog1, title: "The Retro Furniture Set That’s Like But Better", date: "08 Jun, 2023" },
    { id: 2, img: blog4, title: "The Retro Furniture Set That’s Like But Better", date: "08 Jun, 2023" },
    { id: 3, img: blog3, title: "The Retro Furniture Set That’s Like But Better", date: "08 Jun, 2023" },
    { id: 4, img: blog2, title: "The Retro Furniture Set That’s Like But Better", date: "08 Jun, 2023" },
    { id: 5, img: blog1, title: "Extra Blog Item", date: "10 Jun, 2023" },
    { id: 6, img: blog3, title: "Another Blog", date: "12 Jun, 2023" },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // figure out visible slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(blogItems.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <main>
      {/* ---------- Section 1 ---------- */}
      <section>
        <div className="about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>{" "}
                /<span className="abt-sec-1-a"> Blog</span>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section>
        <div className="blog-section-2">
          <div className="container">
            <div className="row row-gap-5">
              {currentItems.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="row blog-sec-2-inner">
                    <div className="col-md-5 p-md-0">
                      <Link to="/blog-details">
                        <img src={item.img} width="100%" alt={item.title} />
                      </Link>
                    </div>
                    <div className="col-md-7 p-md-0 blog-sec2-wrap-pad-right">
                      <div className="blog-sec-2-wrapper">
                        <div className="blog-sec-2-top">
                          <h6 className="blog-sec-2-top-h6">Architecture</h6>
                          <p className="blog-sec-2-top-p">{item.date}</p>
                        </div>
                        <div>
                          <Link to={`/blog-details/${item.id}`} className="blog-sec-2-top-a">
                            <h4>{item.title}</h4>
                          </Link>
                          <p>We are passionate about creating your exceptional interior the way you live.</p>
                          <Link to={`/blog-details/${item.id}`} className="blog-img-wrab">
                            Read More <i className="fa-solid fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center gap-2 mt-4">
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="btn btn-outline-primary">
                  Previous
                </button>
                <span className="align-self-center">
                  Page {currentPage} of {totalPages}
                </span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="btn btn-outline-primary">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

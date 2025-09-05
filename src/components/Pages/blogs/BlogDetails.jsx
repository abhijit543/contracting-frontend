import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogDetailsData from "../../../data/blogDetails.json";
import "./Blog.css";
export default function BlogDetailsModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(undefined);
  useEffect(() => {
    const found = blogDetailsData.find((b) => b.id === parseInt(id, 10));
    setBlog(found || null);
  }, [id]);
  useEffect(() => {
    if (blog === null) {
      const timer = setTimeout(() => navigate("/blog"), 1500);
      return () => clearTimeout(timer);
    }
  }, [blog, navigate]);

  const closeModal = () => navigate("/blog");
  if (!blog) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "black",
          color: "white",
          zIndex: 9999,
        }}
      >
        <div className="text-center p-4 border rounded" style={{ backgroundColor: "#222" }}>
          <h5>No Data Found</h5>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)", overflowY: "auto" }}>
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">{blog.title}</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <section>
                <div className="blog-details-section-2">
                  <div className="container-fluid">
                    <div className="row row-gap-5">
                      <div className="col-lg-12 col-md-12">
                        <div className="blog-details-section-2-left-wrapper d-flex justify-content-center">
                          <div>
                            <img src={blog.img} alt={blog.title} />
                          </div>

                          {/* You can map blog.authors, tags, etc. dynamically from JSON if desired */}
                          <div className="blog-details-section-2-left-inner">
                            <ul className="blog-details-section-2-left-ul">
                              <li className="blog-details-section-2-left-ul-li">
                                <i className="fa-regular fa-circle-user blog-detail-sec2-icon"></i>
                                <span>{blog.author}</span>
                              </li>
                              <li className="blog-details-section-2-left-ul-li">
                                <i className="fa-regular fa-clock blog-detail-sec2-icon"></i>
                                <span>{blog.date}</span>
                              </li>
                              <li className="blog-details-section-2-left-ul-li">
                                <i className="fa-solid fa-tags blog-detail-sec2-icon"></i>
                                <span>{blog.category}</span>
                              </li>
                            </ul>

                            {/* Example text pulled from JSON */}
                            <div>
                              <h3 className="blog-details-margin blog-details-h2">{blog.heading1}</h3>
                              <p>{blog.para1}</p>
                              <p>{blog.para2}</p>

                              {/* Second image (optional) */}
                              {blog.img2 && (
                                <div className="blog-details-margin">
                                  <img src={blog.img2} width="100%" alt="" />
                                </div>
                              )}
                            </div>

                            {/* Tags / Share row */}
                            <div className="row blog-detail-border-botm">
                              <div className="col-md-6">
                                <ul className="blog-details-ul-1-wrap">
                                  <h5>Tags:</h5>
                                  {blog.tags?.map((t) => (
                                    <li key={t}>
                                      <a href="#" className="blog-details-ul-1-lia">
                                        {t}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <ul className="blog-details-ul-1-wrap">
                                  <h5>Share:</h5>
                                  <li>
                                    <a href="#" className="blog-details-ul-2-lia">
                                      <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="blog-details-ul-2-lia">
                                      <i className="fa-brands fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="blog-details-ul-2-lia">
                                      <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

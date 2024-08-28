import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/ai900t.png";
const Ai900Too = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <div>
      <>
        <section className="semi_dark_bg py-3">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7">
                <h5 className="mb-0">
                  MICROSOFT CERTIFICATION - MICROSOFT AZURE AI FUNDAMENTALS
                  AI-900T00-A
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - MICROSOFT CERTIFICATION - MICROSOFT AZURE AI FUNDAMENTALS
                  AI-900T00-A
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="featured-2-section section-ptb"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="featured-area-2">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="section-title">
                    <h2>About the Course</h2>
                  </div>
                  <p>
                    This course introduces fundamentals concepts related to
                    artificial intelligence (AI), and the services in Microsoft
                    Azure that can be used to create AI solutions
                  </p>
                  <div className="section-title">
                    <h2>Key Skills You Will Learn</h2>
                  </div>
                  <p>
                    Demonstrate fundamental AI concepts related to the
                    development of software and services of Microsoft Azure to
                    create AI solutions.
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>
                    Basic understanding of mathematics, ability to interpret
                    charts, knowledge of fundamental programming principles will
                    be helpful
                  </p>

                  <h3>Target Audience</h3>
                  <p>
                    Anyone aspiring for/advancing career into Artificial
                    Intelligence/AI/ML Jobs
                  </p>
                  <h3>Job prospects with this role</h3>
                  <p>Entry Level - AI Engineer</p>
                  <h3>Course Duration</h3>
                  <p>24 Hrs (7 Hrs a week total ~ 3 Weeks)</p>
                  <h3>Course Cetification</h3>
                  <p>
                    READYBELL Course Attendence Certificate (MS Certification is
                    subject to passing the Certification Exam)
                  </p>
                  <img
                    src={logo}
                    alt=""
                    className="float-right ml-3 mb-2 img-fluid"
                  />

                  <h3>Mode of Training</h3>
                  <p>
                    Instructor-led 100% Online or Online + Classroom (Salt Lake,
                    Kolkata - India) hybrid mode (as suitable for the learner)
                  </p>
                  <h3>Course Fee Structure and Refuncd Policy</h3>
                  <p>
                    INR 9,900/- + Taxes (Certification Exam Fees not included in
                    it) . Get a 3-day free trial during which you can cancel at
                    no penalty. After that, we don’t give refunds
                  </p>

                  {/* ---- */}

                  <div className="card" style={{ padding: "20px" }}>
                    <h3>Course Syllabus</h3>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className={`accordion-button`}>
                            MICROSOFT CERTIFICATION - MICROSOFT AZURE AI
                            FUNDAMENTALS AI-900T00-A
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className={`accordion-collapse`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                Microsoft Azure AI Fundamentals: AI Overview
                                Microsoft
                              </li>
                              <li>
                                Azure AI Fundamentals: Computer Vision Microsoft
                                Azure
                              </li>
                              <li>
                                AI Fundamentals: Natural Language Processing
                              </li>
                              <li>
                                Microsoft Azure AI Fundamentals: Document
                                Intelligence and Knowledge Mining Microsoft
                                Azure AI Fundamentals: Generative AI
                              </li>
                              <b>Total Duration : 14 Hrs.</b>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className={`accordion-button`}>
                            Exam Preparation
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className={`accordion-collapse`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>Certification Exam Preparation</li>
                              <b>Total Duration : 10 Hrs.</b>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a class="dropdown-item colr-1" href="/register">
                        {" "}
                        Register For this Course{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <Sidecard />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Ai900Too;

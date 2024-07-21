import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/data-analytics.jpg";

const AiBeginner = () => {
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
                  AI, ML, Data Science Beginner Course with or without Microsoft
                  AI Cloud Certification
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - AI, ML, Data Science Beginner Course with or without
                  Microsoft AI Cloud Certification
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
                    Learn the in-demand skills used by professional data
                    scientists including databases, data visualization,
                    statistical analysis, predictive modeling, machine learning
                    algorithms, and data mining. Also work with the latest
                    languages, tools,and libraries including Python, SQL,
                    Jupyter notebooks, Github, Rstudio, Pandas, Numpy,
                    ScikitLearn, Matplotlib, and more
                  </p>

                  <p>
                    Model Selection, Data Analysis, Python Programming, Data
                    Visualization, Predictive Modelling, Data Science, Numpy,
                    Pandas, Seaborn, Dashboards and Charts, dash, Matplotlib,
                    Cloud Databases, Relational Database Management System
                    (RDBMS), SQL, Jupyter notebooks, Machine Learning,
                    regression, Hierarchical Clustering, classification, SciPy
                    and scikit-learn, CRISP-DM, Methodology, Data Mining,
                    Github, Jupyter Notebook, K-Means Clustering, Data Science
                    Methodology, Big Data, Deep Learning, Quering Databases,
                    Data Generation
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>NA</p>

                  <h3>Target Audience</h3>
                  <p>
                    Anyone aspiring for/advancing career into Data Science/AI/ML
                    Jobs
                  </p>
                  <h3>Course Cetification</h3>
                  <p>READYBELL Data Scientist Certificate</p>
                  <img
                    src={logo}
                    style={{ width: "50%" }}
                    alt=""
                    className="float-right ml-3 mb-2 img-fluid"
                  />
                  <p>
                    Our trainers, who are true architects in their fields,
                    ensure students gain a holistic understanding of their
                    subjects. This comprehensive approach prepares students to
                    excel in their roles with a thorough grasp of their topics.
                    The unique feature of Readybell lies in our trainers'
                    profiles and our global reach for placements. Our
                    industry-expert trainers bring extensive experience and
                    subject matter expertise, combined with knowledge of global
                    best practices and a strict, quality-driven delivery
                    methodology. Transparency and ethical interactions with
                    students and customers further distinguish Readybell as a
                    reliable IT service provider.
                  </p>
                  <h3>Mode of Training</h3>
                  <p>
                    Instructor-led 100% Online or Online + Classroom (Salt Lake,
                    Kolkata - India) hybrid mode (as suitable for the learner)
                  </p>
                  <h3>Course Fee Structure and Refuncd Policy</h3>
                  <p>
                    INR 49,900/- + Taxes. Get a 3-day free trial during which
                    you can cancel at no penalty. After that, we don’t give
                    refunds
                  </p>
                  <h3>Job Assistance</h3>
                  <p>
                    Mock Interviews (pertaining to the course) from Industry
                    Leaders, Job leads with extensive interactions with Industry
                    Leaders working in the course relevant field, Job Guidance,
                    Techniques of resume preparation, Networking.
                  </p>

                  {/* ---- */}
                  <h3>Course Syllabus</h3>
                  {/* ---- */}
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 1 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(1)}
                        >
                          Linear Algebra, Basic Statistics and Maths for Machine
                          Learning
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 1 ? "show" : ""
                        }`}
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
                              Intelligence and Knowledge Mining Microsoft Azure
                              AI Fundamentals: Generative AI
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 2 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(2)}
                        >
                          Introduction to Data Science
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 2 ? "show" : ""
                        }`}
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">Accordian Item #2</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 3 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(3)}
                        >
                          Data Science Tools
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 3 ? "show" : ""
                        }`}
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 4 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(4)}
                        >
                          Data Science Methodology
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 4 ? "show" : ""
                        }`}
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 5 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(5)}
                        >
                          Python for Data Science, AI & Development
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 5 ? "show" : ""
                        }`}
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 6 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(6)}
                        >
                          Databases and SQL For Data Science with Python
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 6 ? "show" : ""
                        }`}
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 7 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(7)}
                        >
                          Data Analysis With Python
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 7 ? "show" : ""
                        }`}
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingEight">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 8 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(8)}
                        >
                          Data Visualization With Python
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 8 ? "show" : ""
                        }`}
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingNine">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 9 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(9)}
                        >
                          Machine Learning With Python
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 9 ? "show" : ""
                        }`}
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTen">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 10 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(10)}
                        >
                          Applied Data Science Capstone
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 10 ? "show" : ""
                        }`}
                        aria-labelledby="headingTen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingEleven">
                        <button
                          className={`accordion-button ${
                            activeAccordion === 11 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(11)}
                        >
                          Capstone Project
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 11 ? "show" : ""
                        }`}
                        aria-labelledby="headingEleven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          This is the third item's accordion body.
                        </div>
                      </div>
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

export default AiBeginner;

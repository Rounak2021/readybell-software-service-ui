import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/data-analytics.jpg";
const AiAdvanced = () => {
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
                <h5 className="mb-0">ARTIFICIAL INTELLIGENCE (AI) ENGINEER</h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - ARTIFICIAL INTELLIGENCE (AI) ENGINEER
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
                    Master fundamental concepts of machine learning and deep
                    learning, including supervised and unsupervised learning,
                    using Python programming language. Apply popular machine
                    learning and deep learning libraries such as SciPy,
                    ScikitLearn, Keras, PyTorch, and Tensorflow to industry
                    problems involving object recognition, computer vision,
                    image and video processing, text analytics, natural language
                    processing (NLP), recommender systems, and other types of
                    classifiers
                  </p>

                  <p>
                    Artificial Intelligence (AI), Image Processing, Opencv,
                    Computer Vision, Deep Learning, Machine Learning,
                    regression, Hierarchical Clustering, classification, SciPy
                    and scikit-learn, Artificial Neural Network, keras.
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>
                    Working knowledge in Linear Algebra, Basic Statistics and
                    Maths and Python for Data Science, AI & Development
                  </p>

                  <h3>Target Audience</h3>
                  <p>
                    Anyone aspiring for/advancing career into Artificial
                    Intelligence/AI/ML Jobs{" "}
                  </p>
                  <h3>Course Cetification</h3>
                  <p>READYBELL AI Engineer Certificate</p>
                  <img
                    src={logo}
                    style={{ width: "50%" }}
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
                    INR 37,900/- + Taxes. Get a 3-day free trial during which
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
                          Machine Learning With Python
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
                            <li>Introduction to Machine Learning</li>
                            <li>Regression</li>
                            <li>Classification</li>
                            <li>Linear Classification</li>
                            <li>Clustering</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 12 Hrs.</b>
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
                          Deep Learning & Neural Networks with Keras
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
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Introduction to Neural Networks and Deep Learning
                            </li>
                            <li>Artificial Neural Networks (ANN)</li>
                            <li>Keras and Deep Learning Libraries</li>
                            <li>Deep Learning Models</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
                        </div>
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
                          Computer Vision and Image Processing
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 3 ? "show" : ""
                        }`}
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Introduction to Computer Vision</li>
                            <li>Image Processing With OpenCV and Pillow</li>
                            <li>Machine Learning Image Classification</li>
                            <li>
                              Neural Networks and Deep Learning For Image
                              Classification
                            </li>
                            <li>Object Detection</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 18 Hrs.</b>
                          </ul>
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
                          Deep Neural Networks with PyTorch
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 4 ? "show" : ""
                        }`}
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Tensor and Datasets</li>
                            <li>Linear Regression</li>
                            <li>Linear Regression PyTorch Way</li>
                            <li>Multiple I/O Linear Regression</li>
                            <li>Logistic Regression For Classification</li>
                            <li>Softmax Regression</li>
                            <li>Shallow Neural Networks</li>
                            <li>Deep Networks</li>
                            <li>Convolutional Neural Network</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 26 Hrs.</b>
                          </ul>
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
                          Building Deep Learning Models with TensorFlow
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 5 ? "show" : ""
                        }`}
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Introduction</li>
                            <li>Supevised Learning Models</li>
                            <li>Unsupevised Learning Models</li>
                            <li>Unsupevised Learning Models & Scaling</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 6 Hrs.</b>
                          </ul>
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
                          Capstone Project
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordion === 6 ? "show" : ""
                        }`}
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>AI Capstone Project with Deep Learning</li>
                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4">
            <aside className="sticky-menu">
              <div className="card">
                <div className="card-body">
                  <h3>Training Courses</h3>
                  <hr />
                  <div className="side-menu">
                    <ul>
                      <li>
                        <a href="mean.html">
                          <i className="far fa-check-square" /> MEAN Full
                          Stack Developmen
                        </a>
                      </li>
                      <li>
                        <a href="mern.html">
                          <i className="far fa-check-square" /> MERN Full
                          Stack Development
                        </a>
                      </li>
                      <li>
                        <a href="cloudcomputing.html">
                          <i className="far fa-check-square" />{" "}
                          cloudcomputing
                        </a>
                      </li>
                      <li>
                        <a href="node.html">
                          <i className="far fa-check-square" /> NODE.JS
                          Developer(MongoDB)
                        </a>
                      </li>
                      <li>
                        <a href="nodeSql.html">
                          <i className="far fa-check-square" /> NODE.JS
                          Developer(MySql)
                        </a>
                      </li>
                      <li>
                        <a href="java.html">
                          <i className="far fa-check-square" /> Java
                          Developer with DS JDBC MySql
                        </a>
                      </li>
                      <li>
                        <a href="python.html">
                          <i className="far fa-check-square" /> Python
                          Developer
                        </a>
                      </li>
                      <li>
                        <a href="ui.html">
                          <i className="far fa-check-square" /> Website
                          Design and Development with UI/UX
                        </a>
                      </li>
                      <li>
                        <a href="ccna.html">
                          <i className="far fa-check-square" /> CISCO CCNA
                        </a>
                      </li>
                      <li>
                        <a href="ccnp-encor.html">
                          <i className="far fa-check-square" /> CISCO CCNP
                          Enterprise 350-401 ENCOR
                        </a>
                      </li>
                      <li>
                        <a href="ccnp-scor.html">
                          <i className="far fa-check-square" /> CISCO CCNP
                          Security Core (350-701) SCOR
                        </a>
                      </li>
                      <li>
                        <a href="ccnp-vpn.html">
                          <i className="far fa-check-square" /> CCNP Secure
                          Solutions VPN 300-730 SVPN
                        </a>
                      </li>
                      <li>
                        <a href="vpn.html">
                          <i className="far fa-check-square" /> CCIE
                          Security VPN
                        </a>
                      </li>
                      <li>
                        <a href="ftd-fmc.html">
                          <i className="far fa-check-square" /> CCIE
                          Security FTD FMC
                        </a>
                      </li>
                      <li>
                        <a href="asa.html">
                          <i className="far fa-check-square" /> CCIE
                          Security ASA
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div> */}
                <Sidecard />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default AiAdvanced;

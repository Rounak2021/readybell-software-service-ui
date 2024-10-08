import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/data-analytics.jpg";
const AiIntermediate = () => {
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
                  AI, ML, Data Science Intermediate Course with or without
                  Microsoft AI Certification
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - AI, ML, Data Science Intermediate Course with or without
                  Microsoft AI Certification
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
                    Learn Machine Learning supervised vs unsupervised learning,
                    linear & non-linear regression, simple regression and more.
                    Learn classification techniques using different
                    classification algorithms, namely K- Nearest Neighbors
                    (KNN), decision trees, and Logistic Regression. Also learn
                    about the importance and different types of clustering such
                    as k-means, hierarchical clustering, and DBSCAN. Work with
                    Python libraries like SciPy and scikit-learn and apply your
                    knowledge through labs. Work with Data Visualization tools
                    and techniques. Learn to create various types of basic and
                    advanced graphs and charts like: Waffle Charts, Area Plots,
                    Histograms, Bar Charts, Pie Charts, Scatter Plots, Word
                    Clouds, Choropleth Maps, and many more! Also create
                    interactive dashboards
                  </p>

                  <p>
                    Machine Learning, regression, Hierarchical Clustering,
                    classification, SciPy and scikit-learn, Python Programming,
                    Dashboards and Charts, dash, Data Visualization, Matplotlib.
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>
                    Working knowledge of Python and Data Analysis and
                    Visualization techniques
                  </p>

                  <h3>Target Audience</h3>
                  <p>Anyone aspiring for/advancing career into AI/ML Jobs</p>
                  <h3>Course Cetification</h3>
                  <p>
                    READYBELL Python For Machine Learning & Data Visualization
                    Certificate
                  </p>
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
                    INR 17,900/- + Taxes. Get a 3-day free trial during which
                    you can cancel at no penalty. After that, we don’t give
                    refunds
                  </p>
                  <h3>Job Assistance</h3>
                  <p>
                    Mock Interviews (pertaining to the course) from Industry
                    Leaders, Job leads with extensive interactions with Industry
                    Leaders working in the course relevant field, Job Guidance,
                    Techniques of resume preparation, Networking
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
                          Python For Machine Learning
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
                            <li>Machine Learning in different industries</li>
                            <li>
                              Supervised vs unsupervised learning, and the usage
                              of each algorithm
                            </li>
                            <li>
                              Using Python libraries for implementing Machine
                              Learning models
                            </li>
                            <li>Matrices</li>
                            <li>Matrix Factorization</li>
                          </ul>
                          <p>
                            <b>Statistics</b>
                          </p>
                          <ul>
                            <li>Measure of central tendency</li>
                            <li>Measure of spread</li>
                            <li>Five points summary</li>
                            <li>Probability Distributions</li>
                            <li>Bayes’ theorem</li>
                            <li>Central limit theorem</li>
                            <li>Basics of sample and event space</li>
                            <li>Axioms of probability</li>
                            <li>Total Probability theorem and Bayes Theorem</li>
                            <li>Random variables</li>
                            <li>PMF (Probability Mass Function)</li>
                            <li>CDF (Cumulative Distribution Function)</li>
                            <p className="mb-0">
                              <b>Discrete Distributions</b>
                            </p>
                            <li>Bernoulli</li>
                            <li>Binomial</li>
                            <li>Geometric</li>
                            <li>Expectation and its properties</li>
                            <li>Variance and its properties</li>
                            <p className="mb-0">
                              <b>Continuous Distributions</b>{" "}
                            </p>
                            <li>Uniform</li>
                            <li>Exponential</li>
                            <li>Normal</li>
                            <li>Sampling from continuous distributions</li>
                            <li>Correlation</li>
                            <li>Covariance</li>
                            <li>Confidence intervals</li>
                            <p className="mb-0">
                              <b>Hypothesis testing</b>{" "}
                            </p>
                            <li>F-test</li>
                            <li>Z-test</li>
                            <li>t-test</li>
                            <li>ANOVA</li>
                            <li>Chi-square test</li>
                            <p className="mb-0">
                              <b>Descriptive Statistics</b>
                            </p>
                            <li>Mean</li>
                            <li>Median</li>
                            <li>Mode</li>
                            <li>Variance</li>
                            <li>Standard Deviation</li>
                            <b>Total Duration : 8 Hrs.</b>
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
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Explain Data Science & What Data Scientists do
                            </li>
                            <li>Data Science Topics</li>
                            <li>Applications and Careers in Data Science</li>
                            <li>Data Literacy for Data Science</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
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

export default AiIntermediate;

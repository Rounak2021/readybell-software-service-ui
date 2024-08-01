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
                          <p className="text-left">
                            <b>Linear Algebra for Machine Learning</b>
                          </p>
                          <ul>
                            <li>Linear Polynomial</li>
                            <li>Notation</li>
                            <li>Operations</li>
                            <li>Vectors</li>
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
                          <ul>
                            <li>Overview of Data Science Tools</li>
                            <li>Languages of Data Science</li>
                            <li>Packages, APIs, Data Sets and Models</li>
                            <li>Jupyter Notebooks & JupyterLab</li>
                            <li>GitHub</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 12 Hrs.</b>
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
                          <ul>
                            <li>
                              From Problem to Approach and From Requirements to
                              Collection
                            </li>
                            <li>
                              From Understanding to Preparation and From
                              Modelling to Evaluation
                            </li>
                            <li>Deployment and Final Evaluation</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 4 Hrs.</b>
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
                          <ul>
                            <li>
                              Setting Up Python Environment - Installing
                              Anaconda/Jupyter Notebooks/Google Colab
                            </li>
                            <li>
                              Syntax, Variables, Data Types, Expressions and
                              Statements
                            </li>
                            <li>
                              Functions, Modules, Conditionals, Loops,
                              Branching, Recursion, Iteration
                            </li>
                            <li>Strings, Lists, Tuples, Dictionaries</li>
                            <li>Files and Error Handling</li>
                            <li>Working with Data in Python</li>
                            <li>Computation with Python – NumPy/SciPy</li>
                            <li>
                              Data Manipulation and Visualisation in Python-
                              Pandas/Matplotlib
                            </li>
                            <li>Introduction to Scikit-learn</li>
                            <li>
                              Advanced Visualization with Seaborn: Statistical
                              Plots, Multivariate Analysis
                            </li>
                            <li>
                              Collect data by the use of APIs and Web Scraping
                              in Python – BeautifulSoup
                            </li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 16 Hrs.</b>
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
                          <ul>
                            <li>SQL</li>
                            <li>Relational Database and Tables</li>
                            <li>Accessing Databases with Python</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
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
                          <ul>
                            <li>Data Importing</li>
                            <li>Data Wrangling</li>
                            <li>Exploratory Data Analysis</li>
                            <li>Model Development</li>
                            <li>Model Evaluation and Refinement</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
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
                          <ul>
                            <li>Introduction to Data Visualization Tools</li>
                            <li>Basis and Specialized Visualization Tools</li>
                            <li>Advanced Visualizations and Geospatial Data</li>
                            <li>Creating Dashboards with Plotly and Dash</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
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
                          <ul>
                            <li>Introduction</li>
                            <li>Exploratory Data Analysis</li>
                            <li>Interactive Visual Analytics and Dashboard</li>
                            <li>Predictive Analysis (Classification)</li>
                            <li>Present your Data-Driven Insights</li>
                            <li>Present your Data-Driven Insights</li>
                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
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
                          <ul>
                            <li>Data Science Capstone Project</li>
                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
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

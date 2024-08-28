import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/data-analytics.png";
const DataAnalyst = () => {
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
                <h5 className="mb-0">DATA ANALYST</h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - DATA ANALYST
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
                    Learn the latest skills and tools used by professional data
                    analysts including Excel spreadsheets, Python, Pandas,
                    Numpy, Jupyter Notebooks, and more. Also work with a variety
                    of data sources and project scenarios to gain practical
                    experience with data manipulation and applying analytical
                    skills.
                  </p>
                  <div className="section-title">
                    <h2>Key Skills You Will Learn</h2>
                  </div>
                  <p>
                    Data Analysis, Querying Databases, Data Generation, Data
                    Augmenting, Data Science, Python Programming, Pandas,
                    Jupyter notebooks, Numpy, Dashboards and Charts, dash, Data
                    Visualization, Matplotlib, Dashboard, SQL and RDBMS, Model
                    Selection, Predictive Modelling, Microsoft Excel, Pivot
                    Table, Cloud Databases, Relational Database Management
                    System (RDBMS), SQL, Microsoft Power BI, Predictive,
                    Prescriptive Analytics for Decision Making
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>NA</p>

                  <h3>Target Audience</h3>
                  <p>
                    Anyone aspiring for/advancing into Data Analyst/Data
                    Science/AI/ML Jobs
                  </p>
                  <h3>Course Duration</h3>
                  <p>100 Hrs (7 Hrs a week total ~ 15 Weeks)</p>
                  <h3>Course Cetification</h3>
                  <p>READYBELL Data Analyst Certificate</p>
                  <h3>Job prospects with this role</h3>
                  <p>Entry Level - Data Analyst/ Data Scientist</p>
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
                    INR 46,900/- + Taxes. Get a 3-day free trial during which
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
                          className="accordion-button"
                          type="button"
                          onClick={() => toggleAccordion(1)}
                        >
                          Linear Algebra, Basic Statistics and Maths for Machine
                          Learning
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Linear Algebra for Machine Learning: Linear
                              Polynomial, Notation, Operations, Vectors,
                              Matrices, Matrix Factorization
                            </li>
                            <li>
                              Measure of central tendency, the measure of
                              spread, five points summary
                            </li>
                            <li>
                              Probability Distributions, Bayes’ theorem, central
                              limit theorem.
                            </li>
                            <li>Basics of sample and event space</li>
                            <li>Axioms of probability</li>
                            <li>Total Probability theorem and Bayes Theorem</li>
                            <li>Random variables, PMF and CDF</li>
                            <li>
                              Discrete Distributions - Bernoulli, Binomial and
                              Geometric Expectation and its properties
                            </li>
                            <li>Variance and its properties</li>
                            <li>
                              Continuous Distributions - uniform, exponential
                              and normal Sampling from continuous distributions
                            </li>
                            <li>
                              Correlation, covariance, confidence intervals,
                              hypothesis testing, F-test, Z-test, t- test,
                              ANOVA, chi-square test, etc.
                            </li>
                            <li>
                              Descriptive Statistics: Mean, Median, Mode,
                              Variance, and Standard Deviation
                            </li>

                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button"
                          type="button"
                          onClick={() => toggleAccordion(2)}
                        >
                          Introduction to Data Analytics
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Introduction to Data Science</li>
                            <li>Data Analysis</li>
                            <li>Microsoft Excel Spreadsheets</li>
                            <li>Data Visualization</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(3)}
                        >
                          Excel Basics for Data Analysis
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Data Analysis using Microsoft Excel</li>
                            <li>
                              Getting Started With Using Microsoft Excel
                              Spreadsheets
                            </li>
                            <li>
                              Cleaning & Wrangling Data using Microsoft Excel
                              Spreadsheets
                            </li>

                            <li>Quiz/Project</li>
                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(4)}
                        >
                          Data Visualization and Dashboards with Excel
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Visualizing Data With Microsoft Excel</li>
                            <li>
                              Creating Visualizations and Dashboards With
                              Microsoft Excel
                            </li>
                            <li>Quiz/Project</li>

                            <b>Total Duration : 8 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(5)}
                        >
                          Python for Data Science, AI & Development
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
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
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(6)}
                        >
                          Data Analysis With Python
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingSix"
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
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(7)}
                        >
                          Data Visualization With Python
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Introduction to Data Visualization Tools</li>
                            <li>Basis and Specialized Visualization Tools</li>
                            <li>Advanced Visualizations and Geospatial Data</li>
                            <li>Creating Dashboards with Plotly and Dash</li>
                            <li>
                              <li>Quiz/Project</li>
                            </li>

                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingNine">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(9)}
                        >
                          Power BI
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Data Visualization with Microsoft Power BI</li>

                            <b>Total Duration : 4 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headinTen">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(10)}
                        >
                          Types of Data Analytics
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headinTen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Descriptive Analytics</li>
                            <li>Diagnostic Analytics</li>
                            <li>Predictive Analytics</li>
                            <li>Prescriptive Analytics</li>

                            <b>Total Duration : 2 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingEleven">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(11)}
                        >
                          Predictive and Prescriptive Analytics
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingEleven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              Predictive, Prescriptive Analytics for Decision
                              Making
                            </li>

                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwelve">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(12)}
                        >
                          Capstone Project
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        aria-labelledby="headingTwelve"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>Capstone Project on Python</li>

                            <b>Total Duration : 12 Hrs.</b>
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

                <Sidecard />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default DataAnalyst;

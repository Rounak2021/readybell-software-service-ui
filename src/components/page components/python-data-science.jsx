import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/python-for-dsc.png";
const PythonDataScience = () => {
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
                  PYTHON FOR DATA SCIENCE, AI & DEVELOPMENT
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - PYTHON FOR DATA SCIENCE, AI & DEVELOPMENT
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
                    This introduction to Python course will take you from zero
                    to programming in Python in a matter of hours—no prior
                    programming experience necessary! You will learn about
                    Python basics and the different data types. You will
                    familiarize yourself with Python Data structures like List
                    and Tuples, as well as logic concepts like conditions and
                    branching. You will use Python libraries such as Pandas,
                    Numpy & Beautiful Soup. You’ll also use Python to perform
                    tasks such as data collection and web scraping with APIs.
                    You will practice and apply what you learn through hands-on
                    labs using Jupyter Notebooks. By the end of this course,
                    you’ll feel comfortable creating basic programs, working
                    with data, and automating real-world tasks using Python.
                  </p>
                  <div className="section-title">
                    <h2>Key Skills You Will Learn</h2>
                  </div>
                  <p>
                    Learn Python - the most popular programming language and for
                    Data Science and Software Development, learn Numpy, Pandas,
                    Data Science, Data Analysis
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>No pre-requisite</p>

                  <h3>Target Audience</h3>
                  <p>
                    Anyone who wants to learn Python programming language and
                    its application into Data Science, Data Analytics, Software
                    Development, Data Engineering, AI, and DevOps as well as a
                    number of other job roles
                  </p>
                  <h3>Job prospects with this role</h3>
                  <p>Python Developer</p>
                  <h3>Course Duration</h3>
                  <p>36 Hrs (7 Hrs a week total ~ 5 Weeks)</p>
                  <h3>Course Cetification</h3>
                  <p>
                    READYBELL Python for Data Science, AI & Development
                    Certificate
                  </p>
                  <img
                    src={logo}
                    style={{ width: "34%" }}
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
                    INR 14,900/- + Taxes. Get a 3-day free trial during which
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
                          Python for Data Science, AI & Development
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
                            <li>Python Basics</li>
                            <li>Python Data Structures</li>
                            <li>Python Programming Fundamentals</li>
                            <li>Working with Data in Python</li>
                            <li>API's and Data Collection</li>
                            <li>Quiz/Assessment</li>
                            <b>Total Duration : 24 Hrs.</b>
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
                          Capstone Project
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
                            <li>Capstone Project on Python</li>
                            <b>Total Duration : 12 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link to="/register" className="dropdown-item colr-1">
                        Register For this Course
                      </Link>
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

export default PythonDataScience;

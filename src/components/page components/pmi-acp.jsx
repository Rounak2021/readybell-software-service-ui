import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/pmi-acp.png";

const PMIacp = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">
                PMI-ACP (AGILE CERTIFIED PRACTITIONER) CERTIFICATION TRAINING
              </h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - PMI-ACP (AGILE CERTIFIED PRACTITIONER) CERTIFICATION TRAINING
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
                  The PMI-ACP certification formally acknowledges your agile
                  expertise. Validate your ability to drive excellence across
                  approaches, including Scrum, Lean, Kanban, and more—with a
                  truly Agile mindset and a team-centric approach sure to earn
                  recognition from peers, employers, and stakeholders alike
                </p>

                <p>
                  Master yourself in agile principles, practices, and values
                  across various frameworks through this PMI- ACP Certification
                  Training. Learn about Scrum, Kanban, Lean, XP and Agile
                  frameworks, gaining a deep understanding of agile principles,
                  practices, and values. Develop skills in agile estimation,
                  planning, and risk management.
                </p>
                <h3>Pre-Requisites</h3>
                <ul>
                  <li>Secondary degree</li>
                  <li>21 contact hours of agile practices training</li>
                  <li>
                    12 months of general project experience within the last 5
                    years (a current PMP® or PgMP® satisfies this requirement
                    but is not mandatory){" "}
                  </li>
                  <li>
                    8 months of agile project experience within the last 3 years
                  </li>
                </ul>

                <h3>Target Audience</h3>
                <p>
                  Project managers, team leads, Scrum Masters, developers, and
                  anyone involved in agile project management
                </p>
                <h3>Course Cetification</h3>
                <p>
                  READYBELL PMI-ACP 21 contact hours of agile practices training
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
                  INR 15,900/- + Taxes. Get a 3-day free trial during which you
                  can cancel at no penalty. After that, we don’t give refunds
                </p>
                <h3>Job Assistance</h3>
                <p>
                  Mock Interviews (pertaining to the course) from Industry
                  Leaders, Job leads with extensive interactions with Industry
                  Leaders working in the course relevant field, Job Guidance,
                  Techniques of resume preparation, Networking.
                </p>

                {/* ---- */}
                <h3>Course Curriculam</h3>
                {/* ---- */}
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={`accordion-button`}
                        type="button"
                        onClick={() => toggleAccordion(1)}
                      >
                        Day 1
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
                          <li>Introduction to PMI-ACP</li>
                          <li>Agile Overview</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={`accordion-button`}
                        type="button"
                        onClick={() => toggleAccordion(2)}
                      >
                        Day 2
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
                          <li>Agile Methodologies - Scrum</li>
                          <li>Agile Methodologies - XP</li>
                          <li>Agile Methodologies - Lean, Kanban, Crystal</li>
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
                        Day 3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Analysis and Design</li>
                          <li>Estimation</li>
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
                        Day 4
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Planning, Monitoring and Adapting</li>
                          <li>Product Quality</li>
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
                        Day 5
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Value Based Prioritization</li>
                          <li>Communication</li>
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
                        Day 6
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Interpersonal Skills</li>
                          <li>Process Improvement</li>
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
                        Day 7
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>Metrics</li>
                          <li>Risk Management</li>
                        </ul>
                      </div>
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

              <Sidecard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PMIacp;

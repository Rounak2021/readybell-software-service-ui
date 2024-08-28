import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/gen-ai.png";

const GenAi = () => {
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
                  BUILD NEXT-GENERATION AI SOLUTIONS WITH GENERATIVE AI
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - BUILD NEXT-GENERATION AI SOLUTIONS WITH GENERATIVE AI
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
                    This advanced Programme in Generative AI and Prompt
                    Engineering is an intensive AI course that equips you with
                    the knowledge and tools to build and deploy cutting-edge
                    Generative AI solutions for real-world language and vision
                    AI tasks. Master in selecting and deploying appropriate
                    Generative AI tools and industry-standard LLMOps (Large
                    Language Model Operations) methodologies
                  </p>
                  <div className="section-title">
                    <h2>Key Skills You Will Learn</h2>
                  </div>
                  <p>
                    A comprehensive curriculum that deep dives from foundational
                    AI/ML to advanced prompt engineering, building a solid grasp
                    of Generative AI concepts and applications.
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>
                    Coding Experience: Programming Knowledge Required preferably
                    in Python and Linear Algebra, Basic Statistics and Maths
                  </p>
                  <h3>Target Audience</h3>
                  <ul>
                    <li>
                      Exclusively Designed for Corporates for AI/Gen AI Adoption
                    </li>
                    <li>
                      AI/Data Science practitioners seeking to build expertise
                      in Generative AI Tech
                    </li>
                    <li>
                      Tech Leaders looking forward to adopting Generative AI in
                      their workflow
                    </li>
                    <li>
                      Tech professionals aspiring to upgrade to Generative AI
                      and Prompt Engineering roles
                    </li>
                  </ul>
                  <h3>Job prospects with this role</h3>
                  <p>
                    Software Engineer - Gen AI, AI Prompt Engineer, ML Engineer
                    - LLMs & Gen AI, Engineer - Gen AI, AI Architect, ML/NLP
                    Engineer
                  </p>
                  <h3>Course Duration</h3>
                  <p>
                    ~ 96 Hrs (8 Hrs a week total ~ 12 Weeks) including
                    assignments & Gen AI Capstone Project
                  </p>
                  <h3>Course Cetification</h3>
                  <p>
                    READYBELL Generative AI and Prompt Engineering Certificate
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
                    INR 69,900/- + Taxes. Get a 3-day free trial during which
                    you can cancel at no penalty. After that, we don’t give
                    refunds
                  </p>
                  <h3>Job Assistance</h3>
                  <p>
                    Mock Interviews (pertaining to the course) from Industry
                    Leaders, Job leads with extensive interactions with Industry
                    Leaders working in the course relevant field, Job Guidance,
                    Techniques of resume preparation, Networking,
                  </p>
                  {/* ---- */}
                  <h3>Course Syllabus</h3>
                  {/* ---- */}
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button`}
                          type="button"
                          onClick={() => toggleAccordion(1)}
                        >
                          Overview of Classic Machine Learning and Artificial
                          Intelligence
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
                              The AI/ML Process and Workflow - How to solve a
                              problem using data and algorithms
                            </li>
                            <li>Data Types and State-of-the-Art Models</li>
                            <li>Tabular Data - Gradient Boosted Models</li>
                            <li>Image Data - Convolutional Neural Networks</li>
                            <li>
                              Sequential and Time Series Data - Recurrent Neural
                              Networks
                            </li>
                            <li>Text and Speech Data - Transformers</li>
                            <li>
                              Generative AI- GPT class of Models for Text,
                              Diffusion for Images/Video
                            </li>
                            <li>
                              Difference between Gen AI and other types of AI,
                              advantages, and disadvantages of Gen AI
                              technologies
                            </li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 16 Hrs.</b>
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
                          Building Generative AI Applications: From Concept to
                          Implementation
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
                            <li>
                              Exercises to identify GenAI Use Cases in Diverse
                              Domains
                            </li>
                            <li>LLM Guardrails</li>
                            <li>Responsible AI in Generative Applications</li>
                            <li>Low Code No Code ML/AI Platforms</li>
                            <li>Basic Prompting to Build AI Applications</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 12 Hrs.</b>
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
                          Generative Text and Speech Models
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
                            <li>
                              Tokenization Fundamentals and Byte Pair Encoding
                            </li>
                            <li>
                              How does the GPT class of models Generate Text?
                            </li>
                            <li>Training GPT Models</li>
                            <li>Speech Models</li>
                            <li>Interacting with Trained Models</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 12 Hrs.</b>
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
                          Generative Image Models
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
                            <li>Stable Diffusion Fundamentals</li>
                            <li>Image and Video Generation</li>
                            <li>Tools for Generating Images</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 12 Hrs.</b>
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
                          Advanced Prompt Engineering
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
                            <li>Vector Data Base</li>
                            <li>LangChain with RAG and LLM Agents</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 10 Hrs.</b>
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
                          LLMOps with LangChain and Llamaindex
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
                            <li>
                              LLMOps – Tools, Platforms (incl, but not limited
                              to LangChain, OpenAI API)
                            </li>
                            <li>AWS Sage Maker, Kendra</li>
                            <li>
                              Cloud Computing Tools - AWS ML Tools, Google
                              Cloud, IBM Watson
                            </li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 10 Hrs.</b>
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
                          Capstone Project
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
                            <li>Gen AI Capstone Project</li>
                            <b>Total Duration : 24 Hrs.</b>
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

export default GenAi;

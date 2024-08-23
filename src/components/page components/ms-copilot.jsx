import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/microsoft-copilotjpg.jpg";

const MsCopilot = () => {
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
                  MICROSOFT COPILOT: AI IN EXCEL, WORD, POWERPOINT & MORE
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - MICROSOFT COPILOT: AI IN EXCEL, WORD, POWERPOINT & MORE
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
                    Learn Microsoft Copilot, the Microsoft Artificial
                    Intelligence (AI) tool that combines natural language with
                    linguistic models, data, and Microsoft Graph to improve
                    employee productivity using everyday applications such as
                    Word, Excel, Outlook, Teams, or PowerPoint. Learn ChatGPT in
                    Microsoft 365: Generative AI, Prompt Engineering, Chatbots,
                    Plugins, DALL-E, Outlook, Teams a. GitHub Copilot. This
                    course is exclusively designed for Corporates for AI/Gen AI
                    Adoption.
                  </p>
                  <p>
                    Everything about Microsoft Copilot and the Integration of
                    ChatGPT into Microsoft 365, Microsoft Copilot in Excel,
                    Word, PowerPoint, Teams, Edge, Outlook, OneNote, GitHub
                    Copilot for Programmers, GPTs for Microsoft Copilot, Plugins
                    for Microsoft Copilot, The Technology of Large Language
                    Models (LLMs) that Powers Copilot and ChatGPT, Image
                    Recognition (ChatGPT Vision) in Microsoft Copilot, Prompt
                    Engineering for LLMs and Diffusion Models, Image generation
                    with DALL-E, and how to handle prompt engineering for LLMs
                    and diffusion models
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>No prior knowledge or technical expertise required</p>
                  <h3>Target Audience</h3>
                  <p>
                    Exclusively Designed for Corporates for AI/Gen AI Adoption
                  </p>
                  <h3>Course Cetification</h3>
                  <p>READYBELL Microsoft Copilot Certificate</p>
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
                    INR 8,900/- + Taxes. Get a 3-day free trial during which you
                    can cancel at no penalty. After that, we don’t give refunds
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
                          className={`accordion-button ${
                            activeAccordion === 1 ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(1)}
                        >
                          Microsoft Copilot: AI in Excel, Word, PowerPoint &
                          More
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
                              Everything about Microsoft Copilot and the
                              Integration of ChatGPT into Microsoft 365
                            </li>
                            <li>
                              The Technology of Large Language Models (LLMs)
                              that Powers Copilot and ChatGPT
                            </li>
                            <li>Data Protection in Microsoft Copilot</li>
                            <li>All About Copyrights with Copilot and AI</li>
                            <li>
                              Microsoft Copilot in the Web Interface and Free
                              Model
                            </li>
                            <li>Microsoft Copilot in Paid Subscriptions</li>
                            <li>Microsoft Copilot in Excel</li>
                            <li>Microsoft Copilot in Teams</li>
                            <li>Microsoft Copilot in Outlook</li>
                            <li>Microsoft Copilot in Word</li>
                            <li>Microsoft Copilot in PowerPoint</li>
                            <li>Microsoft Copilot in OneNote</li>
                            <li>Github copilot for programmers</li>
                            <li>
                              The Right Subscription for Microsoft 365, Private
                              or for Your Business
                            </li>
                            <li>
                              The Right Subscription for Microsoft Copilot,
                              Private or for Your Business
                            </li>
                            <li>Plugins for Microsoft Copilot</li>
                            <li>GPTs for Microsoft Copilot</li>
                            <li>
                              Image Recognition (ChatGPT Vision) in Microsoft
                              Copilot
                            </li>
                            <li>
                              Image Generation with DALL-E in Microsoft Copilot
                            </li>
                            <li>
                              Prompt Engineering for LLMs and Diffusion Models
                            </li>
                            <li>
                              Microsoft Copilot Studios for Your Own Chatbots
                            </li>
                            <li>
                              Alternative Paths for Chatbots like GPTs and
                              Hugging Face Assistants
                            </li>
                            <li>
                              The Challenges and Negative Aspects of Microsoft
                              Copilot
                            </li>
                            <li>Comparison to ChatGPT and Google Gemini</li>
                            <li>Ethics of Artificial Intelligence</li>
                            <li>Outlook on the Future of AI</li>
                            <li>Quiz/Project</li>
                            <b>Total Duration : 4 Hrs.</b>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div><a class="dropdown-item colr-1" href="/register"> Register For this Course </a></div>
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

export default MsCopilot;

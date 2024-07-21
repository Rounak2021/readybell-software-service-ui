import React from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import logo from "../assets/images/ai900t.png";
const Ai102Too = () => {
  return (
    <div>
      <>
        <section className="semi_dark_bg py-3">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7">
                <h5 className="mb-0">
                  AI-102T00-A: Designing and Implementing a Microsoft Azure AI
                  Solution
                </h5>
              </div>
              <div className="col-md-5">
                <span>
                  <Link className="text-dark" to="/" data-aos="fade-up">
                    Home
                  </Link>{" "}
                  - AI-102T00-A: Designing and Implementing a Microsoft Azure AI
                  Solution
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
                    AI-102 Designing and Implementing an Azure AI Solution is
                    intended for software developers wanting to build AI infused
                    applications that leverage Azure AI Services, Azure AI
                    Search, and Azure OpenAI
                  </p>

                  <p>
                    Building AI infused applications leveraging Azure Cognitive
                    Services, Azure Cognitive Search, and Microsoft Bot
                    Framework
                  </p>
                  <h3>Pre-Requisites</h3>
                  <p>
                    Basic knowledge of Microsoft Azure services, particularly in
                    the areas of compute, storage, and networking, Knowledge of
                    either C# or Python, Familiarity with JSON and REST
                    programming semantics, Fundamental understanding of the
                    concepts of artificial intelligence and machine learning,
                    General knowledge of common data storage options (databases,
                    blobs, etc.) and data formats (XML, JSON, etc.)
                  </p>

                  <h3>Target Audience</h3>
                  <p>
                    Anyone aspiring for/advancing career into Artificial
                    Intelligence/AI/ML Jobs
                  </p>
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
                    INR 19,900/- + Taxes (Certification Exam Fees not included
                    in it). Get a 3-day free trial during which you can cancel
                    at no penalty. After that, we don’t give refunds
                  </p>
                  {/* ---- */}
                  <h3>Course Syllabus</h3>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button`} type="button">
                          Microsoft Certification: AI- 102T00-A: Designing and
                          Implementing a Microsoft Azure AI Solution
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
                            <li>Get started with Azure AI Services</li>
                            <li>
                              Create computer vision solutions with Azure AI
                              Vision
                            </li>
                            <li>
                              Develop natural language processing solutions with
                              Azure AI Services
                            </li>
                            <li>
                              Implement knowledge mining with Azure AI Search
                            </li>
                            <li>
                              Develop solutions with Azure AI Document
                              Intelligence
                            </li>
                            <li>
                              Develop Generative AI solutions with Azure OpenAI
                              Service
                            </li>
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

export default Ai102Too;

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

export default Ai102Too;

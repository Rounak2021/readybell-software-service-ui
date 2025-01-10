import React from "react";
import "./index.css";
import { Sidecard } from "./side-card";
import { Link } from "react-router-dom";

const WhyRreadybell = () => {
  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">Why ReadBell</h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - Why ReadBell
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
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Why Readybell</h2>
                </div>
                <p>
                  Readybell stands out for its exceptional training services
                  delivered by industry veterans with decades of experience. We
                  exclusively engage trainers from premier educational
                  institutes who are passionate about teaching and deeply
                  knowledgeable in their subjects. This dedication ensures a
                  100% success ratio for our students. Our interactive learning
                  approach includes mock tests, roleplays, quizzes, and other
                  activities, supported by 24/7 learning assistance. Students
                  also benefit from extensive networking opportunities and
                  mentoring from highly experienced industry experts, opening
                  doors to numerous job prospects.
                </p>

                <p>
                  Founded with the vision of delivering top-tier services in
                  niche Information Technology, Readybell brings together highly
                  qualified IT professionals with rich experience and
                  comprehensive technical knowledge. Our founders, alumni of
                  reputed Indian educational institutes, and a mentor with over
                  30 years of global IT experience, have successfully delivered
                  large-scale IT programs worldwide. Readybell is committed to
                  providing quality education services, following global
                  training best practices, deploying top-notch training faculty,
                  and maintaining state-of-the-art training infrastructure.
                  Transparency with customers and partners is a core value.
                </p>
                <img
                  src="assets/images/whyus.jpg"
                  alt=""
                  className="float-right ml-3 mb-2 img-fluid"
                />
                <p>
                  Our trainers, who are true architects in their fields, ensure
                  students gain a holistic understanding of their subjects. This
                  comprehensive approach prepares students to excel in their
                  roles with a thorough grasp of their topics. The unique
                  feature of Readybell lies in our trainers' profiles and our
                  global reach for placements. Our industry-expert trainers
                  bring extensive experience and subject matter expertise,
                  combined with knowledge of global best practices and a strict,
                  quality-driven delivery methodology. Transparency and ethical
                  interactions with students and customers further distinguish
                  Readybell as a reliable IT service provider.
                </p>
                <p>
                  Readybell’s training courses are designed to be 100%
                  job-oriented, equipping entry-level associates with extensive
                  theoretical knowledge and practical skills that align with
                  actual job requirements. We support job-seeking students with
                  suitable opportunities both within and outside India. For
                  experienced professionals, our trainers tailor the training to
                  their technical background, current job, and learning
                  objectives, ensuring the training adds value to their careers
                  and helps them achieve their goals.
                </p>
                <p>
                  In the realm of Computer Based Tests, Readybell’s
                  state-of-the-art exam facility adheres to Pearson VUE and PSI
                  Corporation guidelines, ensuring an error-free and comfortable
                  testing experience. This positions Readybell as a preferred
                  exam center in the field.
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
              {/* <Sidecard /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyRreadybell;

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
              <div className="col-md-8">
                <div className="section-title">
                  <h2>Why Readybell</h2>
                </div>
                <p>
                  Readybell was conceptualized and founded to offer this world a
                  quality services and products in the field of IT. In view of
                  that Readybell engaged a pool of very highly qualified and
                  experienced IT professionals having rish experience in their
                  respective fields as well as having a complete knowledge of
                  the technical architecture around their matter of expertise.
                  Readybell’s founders are highly qualified professionals from
                  reputed educational institutes of India and the mentor has
                  over 26 years of global IT experience having delivered
                  numerous large IT Programs across the world. Readybell was
                  founded with the vision of its mentor and committed to assure:
                </p>
                <div className="theme-list-3 mb-4">
                  <ul>
                    <li>Quality education services to their students</li>
                    <li>Follow global training best practices</li>
                    <li>Deploy best-of-the-class training faculty</li>
                    <li>Deploy state-of-the-art training infrastructure </li>
                    <li>Maintain transparency with partners</li>
                  </ul>
                </div>
                <p>
                  Readybell trainers are Certified in multiple disciplines and
                  are globally reputed professionals in their respective fields.
                  We ensure we engage those trainers who are true Technical
                  Architects so that they provide students an end-to-end view of
                  a topic. This ensures students learn the entre gamete of the
                  subject and walks out of the institute with an end-to-end view
                  of the subjects they enrolled for and therefore they are able
                  to deliver their tasks get a feel of the subject and they{" "}
                </p>
                <img
                  src="assets/images/whyus.jpg"
                  alt=""
                  className="float-right ml-3 mb-2 img-fluid"
                />
                <p>
                  In order to strengthen their vision towards providing
                  best-of-the-class IT services, Readybell was selected by
                  CompTIA, the global leader in the filed of IT certification
                  for delivering their training courses. Readybell ensures all
                  the CompTIA trainings are imparted strictly following their
                  recommended training infrastructure, their official training
                  materials and official Lab.{" "}
                </p>
                <p>
                  Readybell is an authorized Computer-Based-Testing center of
                  Pearson VUE and PSI Corporation. Here also we ensure we
                  strictly follow the recommended guidelines of Pearson VUE and
                  PSI for conducting their exams.
                </p>
                <p>
                  For the areas where Readybell does not have official
                  partnership, we ensure the best practices followed for those
                  areas as well and deploy the same.
                </p>
                <p>
                  The main unique feature of Readybell is the their trainer’s
                  profiles. All our trainers are Certified and multiple
                  disciplines. Our trainers’ vast experience, their in-depth
                  subject matter expertise, global best practices knowledge
                  amalgamated with strict quality and process oriented delivery
                  methodology, transparency and ethical transactions with their
                  students and customers make Readybell a unique IT Service
                  provider which students and customers can fully rely on.
                </p>
                <p>
                  Readybell training courses are 100% job oriented training
                  courses where the entry level associates are prepared with
                  extensive theory and hands on trainings with practical work
                  scenarios which enables the students to corelate the training
                  with actual job content. Readybell assists their job hunting
                  students with appropriate job opportunities within and outside
                  India.
                </p>
                <p>
                  For experience professionals our trainers first understand
                  their technical background, their current job and what they
                  target to learn. Our training delivery to the experienced
                  professionals are designed accordingly and in such a way that
                  the trainings are adding value to their current job and they
                  achieve their target knowledge helping them progressing in
                  their career.{" "}
                </p>
                <p>
                  In the area of Computer Based Test, Readybell’s
                  state-of-the-art Exam facility makes positions them uniquely
                  in that filed and a exam center of choice. We comply to 100%
                  guidance of Pearson VUE and PSI Corporation to ensure 100%
                  error free and comfortable test/exam experience.{" "}
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
  );
};

export default WhyRreadybell;

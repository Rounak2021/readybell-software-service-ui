import React from "react";
import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";


const Services = () => {
  return(
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">Our Services</h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - Our Services
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-2-section section-ptb" data-aos="fade-up" data-aos-delay={300}>
        <div className="featured-area-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-title">
                  <h2>Our Services</h2>
                </div>
                <p>
                  Readybell is a Kolkata, India based emerging IT Education
                  provider pioneering in imparting high quality certification
                  trainings in niche Information Technology areas focusing on
                  Cyber Security, Cloud Security, Networking, Freshers IT
                  Grooming Courses by highly experienced professionals.
                  Readybell trainers are globally reputed subject matter experts
                  imparts in-depth subject training both in certification level
                  as well as advanced level training for experienced
                  professionals. Readybell Software is authorised training
                  partner of CompTIA.
                </p>
                <p>
                  We follow global standard of 100% job oriented training
                  delivery including extensive theory and hands on Lab. After
                  the course we provide assistance to job hunting students with
                  appropriate job opportunities.
                </p>
                <p>
                  We strictly follow our partners training guidelines and{" "}
                  <Link to="/team">Click here</Link> to go to the details of our
                  expert trainer profiles.
                </p>
                <p>
                  Readybell has both 100% Online as well as Online-Classroom
                  based training option. Our training facility is equipped with
                  latest training infrastructure and processes to ensure a
                  smooth and interruption free training delivery.
                </p>
                <p>
                  We welcome both Indian and overseas students (with timing as
                  per the convenience of the student).
                </p>
                <h5>
                  We have Certification and customized training courses for:
                </h5>
                <div className="theme-list-3">
                  <ul>
                    <li>
                      <Link to="#"> Nodejs with MongoDB</Link>
                    </li>
                    <li>
                      <Link to="#"> Nodejs with SQL</Link>
                    </li>
                    <li>
                      <Link to="#"> Java</Link>
                    </li>
                    <li>
                      <Link to="#"> Mean Stack</Link>
                    </li>
                    <li>
                      <Link to="#"> MERN Stack</Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        CISCO CCNA Implementing and Administering CISCO
                        Solutions (200-301) Training
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        CISCO CCNP Enterprise 350-401 ENCOR Training
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        CISCO CCNP Security Core (350-701 SCOR)
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        CCNP SECURE SOLUTIONS WITH VPN 300-730 SVPN
                      </Link>
                    </li>
                    <li>
                      <Link to="#"> CCIE SECURITY ASA</Link>
                    </li>
                    <li>
                      <Link to="#"> CCIE SECURITY FTD FMC</Link>
                    </li>
                    <li>
                      <Link to="#"> CCIE SECURITY VPN</Link>
                    </li>
                    <li>
                      <Link to="#"> Python</Link>
                    </li>
                    <li>
                      <Link to="#"> Cloudcomputing</Link>
                    </li>
                    <li>
                      <Link to="#"> Web designing with UI/UX</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Readybell is an authorized Computer Based Testing (CBT)
                  partner of Pearson VUE &amp; PSI Corporation. Both Pearson VUE
                  and PSI are the global leaders in computer-based testing for
                  high-stakes certification and licensure exams. Readybell has
                  state-of-the art computer-based testing center in Salt Lake in
                  Kolkata (India) where Online computer-based tests (exams) are
                  conducted following the best practices guidelines from Pearson
                  and PSI.
                </p>
              </div>
              <Sidecard />
            </div>
          </div>
        </div>
      </section>
    </>

)
 }


export default Services;
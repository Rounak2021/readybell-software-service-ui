import React from "react";
import { Sidecard } from "./side-card";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">Our Team</h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - Our Team
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
                  <h2>Our Team</h2>
                </div>
                <p>
                  Readybell team comprises of highly skilled and experienced
                  professionals with high moral and ethics.{" "}
                </p>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-content">
                    <h3>Readybell Mentor:</h3>
                    <p>
                      Bachelor of Engineering Degree from National Institute of
                      Technology (NIT, formerly M.N.R.E.C Allahabad) having over
                      30 years experience with world renowned organizations. Our
                      mentor conceptualized Readybell to ensure his rich IT
                      background in managing large global IT engagements and
                      leadership skills are utilized in forming an IT services
                      organization which will deliver state-of-the-art IT
                      education globally. Our mentor has been part of leadership
                      pool of large IT organizations and knows the requirement
                      of real quality IT training. Our mentor has handpicked our
                      trainers after numerous rounds of evaluation and
                      background check. Our mentor has rich experience in
                      implementing best of the class technologies and process in
                      numerous world renowned organizations including fortune
                      500 companies. Our mentor has extensive work experience
                      and lived in USA, Latin America, UK and Europe. He is an
                      honest, soft spoken immensely knowledgeable true leader
                      believe in Quality, Depth of Knowledge, Transparency and
                      Honesty. Every transaction Readybell does with their
                      students and customer reflects our mentor’s core values
                      and ensures they are fully satisfied in each step of
                      dealing. Our mentor believes in growth comes with
                      transparency, honesty, depth of knowledge and hard work
                      which is maintained strictly in Readybell.
                    </p>
                  </div>
                </div>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-content">
                    <h3>Readybell Director:</h3>
                    <p>
                      Amrita Mukhopadhyay is Readybell’s full time Director.
                      Amrita holds Masters Degree holder from world reputed
                      Presidency College Kolkata. Our Director is a tech savvy
                      professional who constantly looks out for technological
                      and process excellence to ensure Readybell is upto dated
                      with global best practices and students and customer get
                      best value of their investment. Our Director is a soft
                      spoken, highly quality oriented individual aligned and
                      committed to maintain the core values Readybell was
                      conceptualized with.
                    </p>
                  </div>
                </div>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-content">
                    <div className="row">
                      <div className="col-md-12 mb-3 trainer">
                        <h3>Our Trainer Profiles: </h3>
                      </div>
                    </div>
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>Trainer-1 </h5>
                      <ul>
                        <li>Ex Google Software Developer and Instructor</li>
                        <li>
                          A Passionate Software&nbsp;Developer&nbsp;/
                          Software&nbsp;Architect&nbsp;/ Software&nbsp;Engineer
                        </li>
                        <li>
                          Full-stack Development with&nbsp;MEAN,
                          MERN&nbsp;and&nbsp;Java Spring Framework
                        </li>
                        <li>
                          Website Front-end Development&nbsp;Angular, ReactJS,
                          VueJS
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>Trainer-2 </h5>
                      <ul>
                        <li>
                          10+ years of experience in Front End and Back End
                          Design and Development
                        </li>
                        <li>Expert level Node.js developer</li>
                        <li>Expert level React and Angular developer</li>
                        <li>Expert level Express js developer</li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>Trainer-3 </h5>
                      <ul>
                        <li>9 Years experience in development in C/C++</li>
                        <li>Expert level React Native developer</li>
                        <li>Intermediate expertise in Advanced PHP, Angular</li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>Trainer-4 </h5>
                      <ul>
                        <li>
                          Seasoned Java, Data Structure and JEE (Servlets and
                          JSP) Instructor with excellent technical skills
                        </li>
                        <li>Expert level programming skills using OOPS</li>
                        <li>Expert level Algorithms skills</li>
                        <li>
                          6+ years of experience in providing Java/JSP/Servlets
                          to experienced corporate software professionals
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>Trainer-5 </h5>
                      <ul>
                        <li>
                          10+ years of teaching experience in RDBMS in colleges
                          &amp; universities
                        </li>
                        <li>Expert level knowledge in Python</li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>Trainer-6 </h5>
                      <ul>
                        <li>
                          Microsoft and AWS Cloud Certified professional having
                          over 15+ years of teaching exp
                        </li>
                        <li>Expert level Azure and AWS Cloud skills</li>
                        <li>Certified CCNA Professional</li>
                      </ul>
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
  );
};

export default Team;

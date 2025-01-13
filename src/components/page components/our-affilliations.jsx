import React from "react";
import { Sidecard } from "./side-card";
import { Link } from "react-router-dom";


const Affilliations = () => {
  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">Our Affilliations</h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - Our Affilliations
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-2-section section-ptb" data-aos="fade-up" data-aos-delay={300}>
        <div className="featured-area-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Our Affilliations</h2>
                </div>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-info p-4 mb-5">
                    <div className="col-md-12">
                      <p>
                        READYBELL is a PMI (Project Management Institute) Authorised Training Partner. PMI ATP status is awarded to only established, high-quality, financially-sound project
                        management education providers who are aligned to PMI core values, have mature business practices READYBELL uses exclusive, PMI-authorized training content, aligned to evolving PMP®
                        examination subject areas, for PMP® examination preparation, READYBELL uses PMI authorized examination preparation materials.
                      </p>
                      <br />
                      <img
                        src="https://prothoughts.co.in/wp-content/uploads/2024/04/ProThoughts-Verify-Badge-1.webp"
                        alt=""
                        className="float-right ml-3 mb-2 img-fluid"
                        style={{
                          width: "17%",
                          border: "1px solid transparent",
                          borderRadius: "6px",
                        }}
                      />

                      <p>
                        Trainings are given ONLY BY PMI CERTIFIED TRAINERS and PMI AUTHORISED TRAINERS Authorized Training Partner Train the Trainer course - Authorized Training Partner Instructor
                        approved by PMI. This ensures our candidates are being taught by qualified instructors who understand the content and can meet their needs as modern-day learners.
                        READYBELL ONLY USES PMI-developed/PMI-licensed course content - This ensures a consistent, high-quality learning experience and provides the PMI-approved content
                        customers asked for—and the comprehensive knowledge needed to prepare for these exams. This ensures consistent and high-quality training for our students.
                        Being PMI’s Authorised Trainer Provider, READYBELL purchases student materials directly from PMI for each individual student enrolled. READYBELL also maintains Student
                        Checklists: Online lists for students to ensure adequate coverage of key concepts Being the PMI Authorised Training Provider, READYBELL has the ability to offer PMI- approved PDUs and submit PDU claims for students
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="single-event-info p-4 mb-5">
                    <div className="single-event-date p-2">
                      <img src="assets/images/af_2.jpg" alt="icon" />
                    </div>
                    <div className="single-event-content">
                      <h3>Pearson VUE Authorised Test Center:</h3>
                      <p>
                        Readybell Software is an authorized test center of Pearson
                        VUE — the global leader in computer-based testing
                        organization.{" "}
                      </p>
                      <p>
                        Readybell has a state-of-the-art computer-based testing
                        facility at its Salt Lake Kolkata office.
                      </p>
                      <p>
                        Readybell ensures smooth and reliable testing experience
                        from the moment a candidate enters our test center. It has
                        an automated check-in and exam readiness, through test
                        delivery and quick results processing, Readybell strictly
                        follows Pearson VUE’s recommended test conduction methods
                        and technology, every step, every time.
                      </p>
                      <p>
                        Readybell maintains a Highly secure test environment.
                        Following Pearson VUE’s advanced security measures ensure
                        that the correct candidate takes the test, and all
                        candidates test in a controlled and secure environment.
                      </p>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="single-event-info p-4 mb-5">
                    <div className="single-event-date p-2">
                      <img src="assets/images/af_3.jpg" alt="icon" />
                    </div>
                    <div className="single-event-content">
                      <h3>PSI Authorised Test Center:</h3>
                      <p>
                        Readybell Software is an authorized test center of PSI
                        Corporation, a global leader in workforce solutions with
                        over 70 years experience in delivering successful testing
                        programs to help people achieve success in their academic,
                        personal, and work lives. Readybell Software delivers
                        PSI’s computer-based exams.
                      </p>
                      <p>
                        Readybell has a state-of-the-art computer-based testing
                        facility at its Salt Lake Kolkata office.
                      </p>
                      <p>
                        Readybell ensures smooth and reliable testing experience
                        from the moment a candidate enters our test center. At
                        Readybell candidates experience our first-class service to
                        complete their exams and be assessed or certified.
                        Readybell delivers PSI’s clients’ mission critical testing
                        programs in IT certification.
                      </p>
                      <p>
                        It has an automated check-in and exam readiness, through
                        test delivery and quick results processing, Readybell
                        strictly follows Pearson VUE’s and PSI’s recommended test
                        conduction methods and technology, every step, every time.
                      </p>
                      <p>
                        Readybell maintains a Highly secure test environment. We
                        follow advanced camera monitoring based security measures
                        which ensures that the correct candidate take the tests
                        and exams are conducted in 100% fair manner and all
                        candidates test are conducted in a controlled and secure
                        environment.
                      </p>
                      <p>
                        Readybell has a state-of-the-art computer-based testing
                        facility at its Salt Lake Kolkata (India) office.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              {/* <Sidecard /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Affilliations;
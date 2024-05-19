import React from "react";
import { Sidecard } from "./side-card";
import { Link } from "react-router-dom";


const Affilliations = () => {
  return(
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
            <div className="col-md-8">
              <div className="section-title">
                <h2>Our Affilliations</h2>
              </div>
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
            <Sidecard />
          </div>
        </div>
      </div>
    </section>
  </>
  )
}


export default Affilliations;
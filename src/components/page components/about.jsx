import { Link } from "react-router-dom";
import { Sidecard } from "./side-card";



const About = () => {
  return(
    <>
    <section className="semi_dark_bg py-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-7">
            <h5 className="mb-0">About Readybell</h5>
          </div>
          <div className="col-md-5" data-aos="fade-up">
            <span>
              <Link className="text-dark" to="/">
                Home
              </Link>{" "}
              - About ReadyBell
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
                <h2>About ReadyBell</h2>
              </div>
              <p>
                Readybell Software Services Pvt Limited is an IT service
                provider pioneering in the filed of IT Education and Computer
                Based Testing headquartered in Kolkata, India. Company imparts
                niche quality IT education in the field of Cyber Security, Cloud
                Security, IT Security, Networking, Network Security, IT
                Fundamental and Hardware courses to IT professionals as well as
                to fresh IT career aspirants
              </p>
              <p>
                Readybell has both 100% Online as well as Online-Classroom based
                training option. Our training facility is equipped with latest
                training infrastructure and processes to ensure a smooth and
                interruption free training delivery.
              </p>
              <p>
                We welcome both Indian and overseas students (with timing as per
                the convenience of the student)
              </p>
              <p>
                Readybell provides Certification as well as custom fresher to
                advanced level IT Training.
              </p>
              <p>
                Readybell is a pioneer <b>Cyber Security</b> Certification and
                Custom training provider. Our CISSP Cyber Security course is a
                world class Cyber Security course where in we provide the
                training by our world reputed Cyber Security subject matter
                experts. We have a very well designed Theory as well as Lab
                course in CISSP which positions us as on expert Cyber Security
                Training provider.
              </p>
              <p>
                Readybell is an <b>authorized training partner of CompTIA,</b>{" "}
                the world leading vendor-neutral professional certification
                issuer in the field of Information Technology. Readybell imparts{" "}
                <b>
                  CompTIA ITF+, A+, N+ &amp; Security+ Certification training
                </b>{" "}
                using original CompTIA issued training guidelines, training
                materials and Labs by industry experts. CompTIA Certifications
                are considered one of the IT industry's top trade associations.
                These courses are available for both freshers as well as
                experienced professionals.
              </p>
              <img
                src="assets/images/about.jpg"
                alt=""
                className="float-right ml-3 mb-2 img-fluid"
              />
              <p>
                Readybell’s <b>Cloud Security</b> wing offers Certification
                level as well as custom advanced level Cloud Security training
                courses in{" "}
                <b>
                  Microsoft Azure, Google Cloud Platform as well AWS Cloud
                  Security.
                </b>{" "}
                Readybell engages industry reputed trainers vastly experienced
                in implementing and maintaining Cloud Security in Azure, GCP as
                well as AWS.{" "}
              </p>
              <p>
                Readybell is a pioneer training provider in the field of{" "}
                <b>CISCO Networking and Network Security</b> field. We follow
                best practices of various CISCO courses including but not
                limited to CCNA, CCNP and CCIE Certification Trainings.
                Readybell follows the latest curriculum of these courses so that
                students are upto dated with the latest technologies and
                processes. These courses are available for both freshers as well
                as experienced professionals.
              </p>
              <p>
                <b>Packaged IT training for fresh IT aspirants:</b> Readybell
                has a customized training courses for IT aspirant freshers as
                well as junior IT associates where we provide them Certification
                level <b>packaged training</b> comprising of CompTIA’s ITF+, A+
                certification courses. By completing this course students walk
                off the institute having strong knowledge base in IT
                Fundamentals, IT Hardware and IT Networking and can deliver IT
                Infrastructure and Networking entry to med level jobs from day
                1. However Readybell also keeps the option of choosing the
                courses as per students wish.{" "}
              </p>
              <p>
                Readybell is an{" "}
                <b>
                  authorized Computer Based Testing (CBT) partner of Pearson VUE
                  &amp; PSI Corporation.
                </b>{" "}
                Both Pearson VUE and PSI are the global leaders in
                computer-based testing for high-stakes certification and
                licensure exams. Readybell has state-of-the art computer-based
                testing center in Salt Lake in Kolkata (India) where Online
                computer-based tests (exams) are conducted following the best
                practices guidelines from Pearson and PSI.
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
                            <i className="far fa-check-square" /> cloudcomputing
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
                            <i className="far fa-check-square" /> Java Developer
                            with DS JDBC MySql
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
                            <i className="far fa-check-square" /> Website Design
                            and Development with UI/UX
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
                            <i className="far fa-check-square" /> CCIE Security
                            VPN
                          </a>
                        </li>
                        <li>
                          <a href="ftd-fmc.html">
                            <i className="far fa-check-square" /> CCIE Security
                            FTD FMC
                          </a>
                        </li>
                        <li>
                          <a href="asa.html">
                            <i className="far fa-check-square" /> CCIE Security
                            ASA
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
  )
}


export default About;
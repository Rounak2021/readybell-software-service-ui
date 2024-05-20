import { DateFunctionality } from "../functionality constants/DateFunctionality";
import "./index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area black_2_bg">
          <div className="footer-top section-ptb">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6 mb-xs-5">
                  <div className="single_widget">
                    <div className="address-widget">
                      <div className="footer-logo" style={{ width: "60%" }}>
                        <Link to="/">
                          <img
                            src="assets/images/mainlogo2.PNG"
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="single_widget">
                        <h5>Address:</h5>
                        <p>AH-12, Saltlake Sector II, Kolkata, India 700091</p>
                        <h5>E-Mail &amp; Phone:</h5>
                        <p>
                          +91-33-79642872, +91-9674552097
                          <br />
                          info@readybellsoftware.com
                        </p>
                      </div>
                      <div className="social-accounts">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single_widget">
                    <h3>Information</h3>
                    <div className="widget-list">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/why-readybell">Why ReadyBell</Link>
                        </li>
                        <li>
                          <Link to="/affiliations">Our Affiliations</Link>
                        </li>
                        <li>
                          <Link to="/team">Our Team</Link>
                        </li>
                        <li>
                          <Link to="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 mb-3d-5">
                  <div className="row single_widget">
                    {/* <div class="col-12"><h3>Training List</h3></div> */}
                    <div className="col-6">
                      <div className="widget-list">
                        <h3>Software Training</h3>
                        <ul>
                          <li>
                            <Link to="/mean">MEAN Full Stack Development</Link>
                          </li>
                          <li>
                            <Link to="/mern">MERN Full Stack Development</Link>
                          </li>
                          <li>
                            <Link to="/cloudcomputing">cloudcomputing</Link>
                          </li>
                          <li>
                            <Link to="/node">NODE.JS Developer(MongoDB)</Link>
                          </li>
                          <li>
                            <Link to="/node-sql">NODE.JS Developer(MySql)</Link>
                          </li>
                          <li>
                            <Link to="/java">
                              Java Developer with DS JDBC MySql
                            </Link>
                          </li>
                          <li>
                            <Link to="/python">Python Developer</Link>
                          </li>
                          <li>
                            <Link to="/ui">
                              Website Design and Development with UI/UX
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="widget-list">
                        <h3>CISCO Training</h3>
                        <ul>
                          <li>
                            <Link to="/ccna">CISCO CCNA</Link>
                          </li>
                          <li>
                            <Link to="/ccnp-encor">
                              CISCO CCNP Enterprise 350-401 ENCOR
                            </Link>
                          </li>
                          <li>
                            <Link to="/ccnp-scor">
                              CISCO CCNP Security Core (350-701) SCOR
                            </Link>
                          </li>
                          <li>
                            <Link to="/ccnp-vpn">
                              CCNP Secure Solutions VPN 300-730 SVPN
                            </Link>
                          </li>
                          <li>
                            <Link to="/vpn">CCIE Security VPN</Link>
                          </li>
                          <li>
                            <Link to="/ftd-fmc">CCIE Security FTD FMC</Link>
                          </li>
                          <li>
                            <Link to="/asa">CCIE Security ASA</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-wrapper border-top py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-bottom">
                    <div className="copyright-text">
                      <p>
                        ReadyBell Software Services Pvt. Ltd.{" "}
                        {DateFunctionality.year}. All Rights Reserved.
                      </p>
                    </div>
                    {/* <div>
                       <img src="assets/images/india.jpg">
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-top">
          <div className="scroll-icon">
            <i className="fa fa-angle-up" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

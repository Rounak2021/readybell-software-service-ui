import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import swal from "sweetalert";
import logo from "../assets/images/mainlogo2.PNG";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    swal({
      title: "Confirmation",
      text: "Are you sure you want to logout?",
      icon: "warning",
      buttons: ["No", "Yes"],
      closeOnClickOutside: false,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleSubDropdown = () => {
    setSubDropdownOpen(!subDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-top dark_2_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-top-content">
                  <div
                    className="contact-info d-flex"
                    style={{
                      color: "white",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p style={{ paddingTop: "1em" }}>
                      <i className="fas fa-mobile-alt" /> +91-33-79642872,
                      +91-9674552097
                    </p>
                    <p style={{ paddingTop: "1em" }}>
                      <i className="fas fa-envelope" />{" "}
                      {/* info@readybellsoftware.com */}
                      info@readybellsoftware.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_top_area my-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header_top d-flex justify-content-between align-items-center">
                  <div
                    className="site_logo"
                    style={{ width: "35%", textAlign: "left" }}
                  >
                    <Link to="/">
                      <img
                        src={logo}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "50%" }}
                      />
                    </Link>
                  </div>
                  <div className="site_info d-flex justify-content-between">
                    <div className="single_info">
                      <img
                        src="assets/images/location.png"
                        alt="Location"
                        className="img-fluid"
                      />
                      <div className="info_data">
                        <h6>Location</h6>
                        <p>AH-12 ,Saltlake SectorII ,Kolkata ,India 700091</p>
                      </div>
                    </div>
                    <div className="single_info">
                      <img
                        src="assets/images/phone.png"
                        alt="Location"
                        className="img-fluid"
                      />
                      <div className="info_data">
                        <h6>Phone</h6>
                        <p>+91-33-79642872, +91-9674552097</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-area bg_dark_mobile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-menu dark_2_bg">
                  <nav className="navbar navbar-expand-lg">
                    <div
                      className="mobile_site_logo d-none"
                      style={{ width: "60%" }}
                    >
                      <Link to="/">
                        <img
                          src="assets/images/mainlogo2.PNG"
                          alt="logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarTogglerDemo01"
                      aria-controls="navbarTogglerDemo01"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={toggleNavbar}
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <div
                      className={`collapse navbar-collapse ${
                        collapsed ? "" : "show"
                      }`}
                      id="navbarTogglerDemo01"
                      data-aos="ease-in"
                    >
                      <ul
                        className="navbar-nav mt-2 mt-lg-0"
                        data-aos="fade-up"
                      >
                        <li data-aos="fade-up">
                          <Link className="nav-link" to="/about">
                            About Us
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link className="nav-link" to="/why-readybell">
                            Why Readybell
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link className="nav-link" to="/services">
                            Our Services
                          </Link>
                        </li>
                        {/* <li
                          className={`nav-item dropdown ${
                            dropdownOpen ? "show" : ""
                          }`}
                        >
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            onClick={toggleDropdown}
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen ? "true" : "false"}
                          >
                            Software Courses
                          </Link>
                          <div
                            className={`dropdown-menu ${
                              dropdownOpen ? "show" : ""
                            }`}
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <div className="dropdown-submenu">
                              <Link
                                className="dropdown-item dropdown-toggle"
                                to="#"
                                id="navbarDropdownMenuLinkAI"
                                role="button"
                                onClick={toggleSubDropdown}
                                aria-haspopup="true"
                                aria-expanded={
                                  subDropdownOpen ? "true" : "false"
                                }
                              >
                                Artificial Intelligence, Machine Learning <br />{" "}
                                and Data Science
                              </Link>
                              <div
                                className={`dropdown-menu sub-dropdown-menu ${
                                  subDropdownOpen ? "show" : ""
                                }`}
                                aria-labelledby="navbarDropdownMenuLinkAI"
                              >
                                <Link className="dropdown-item" to="/ai-900t00">
                                  AI-900T00-A: Microsoft Azure AI Fundamentals
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-102t00"
                                >
                                  AI-102T00-A: Designing and Implementing a{" "}
                                  <br />
                                  Microsoft Azure AI Solution
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-beginner"
                                >
                                  AI, ML, Data Science Beginner Course with or{" "}
                                  <br />
                                  without Microsoft AI &amp; Cloud Certification
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-intermediate"
                                >
                                  AI, ML, Data Science Intermediate Course with{" "}
                                  <br />
                                  or without Microsoft AI Certification
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-advanced"
                                >
                                  AI, ML, Data Science Advanced Course
                                </Link>
                              </div>
                            </div>

                            <Link to="/gen-ai" className="dropdown-item">
                              Generative AI
                            </Link>
                            <Link to="/togaf" className="dropdown-item">
                              TOGAF
                            </Link>
                            <Link to="/pmi-acp" className="dropdown-item">
                              PMI ACP (Agile Certification)
                            </Link>
                            <Link to="/pmi-pmp" className="dropdown-item">
                              PMI PMP
                            </Link>
                          </div>
                        </li> */}

                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Software Courses
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <div className="dropdown-submenu">
                              <Link
                                className="dropdown-item dropdown-toggle"
                                to="#"
                                id="navbarDropdownMenuLinkAI"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Artificial Intelligence, Machine Learning <br />{" "}
                                and Data Science
                              </Link>
                              <div
                                className="dropdown-menu sub-dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLinkAI"
                              >
                                <Link className="dropdown-item" to="/ai-900t00">
                                  AI-900T00-A: Microsoft Azure AI Fundamentals
                                </Link>
                                <Link className="dropdown-item" to="/ai-102t00">
                                  AI-102T00-A: Designing and Implementing a{" "}
                                  <br />
                                  Microsoft Azure AI Solution
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-beginner"
                                >
                                  AI, ML, Data Science Beginner Course with or{" "}
                                  <br />
                                  without Microsoft AI & Cloud Certification
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-intermediate"
                                >
                                  AI, ML, Data Science Intermediate Course with{" "}
                                  <br />
                                  or without Microsoft AI Certification
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/ai-advanced"
                                >
                                  ARTIFICIAL INTELLIGENCE (AI) ENGINEER
                                </Link>
                              </div>
                            </div>
                            <Link to="/gen-ai" className="dropdown-item">
                              Python for Data Science
                            </Link>
                            <Link to="/gen-ai" className="dropdown-item">
                              Generative AI
                            </Link>
                            {/* <Link to="/togaf" className="dropdown-item">
                              TOGAF
                            </Link> */}
                            <Link to="/pmi-acp" className="dropdown-item">
                              PMI ACP (Agile Certification)
                            </Link>
                            {/* <Link to="/pmi-pmp" className="dropdown-item">
                              PMI PMP
                            </Link> */}
                          </div>
                        </li>

                        <li>
                          <Link to="/team" className="nav-link">
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/affiliations">
                            Our Affiliations
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliations" className="nav-link">
                            Computer Based Testing Centre
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" className="nav-link">
                            Contact Us
                          </Link>
                        </li>
                        {!localStorage.getItem("email") && (
                          <li>
                            <Link to="/register" className="nav-link">
                              Register
                            </Link>
                          </li>
                        )}
                        <li>
                          {localStorage.getItem("email") ? (
                            <Link onClick={handleLogout} className="nav-link">
                              Welcome {localStorage.getItem("email")}
                            </Link>
                          ) : (
                            <Link to="/login" className="nav-link">
                              Login
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="slider-section swiper-container-2">
        <div className="swiper-wrapper">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="slider-area-2 height-300 swiper-slide"
                style={{ backgroundImage: "url(assets/images/slider_bg.jpg)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Artificial Intelligence, Generative AI, Machine
                          Learning, Data Science
                        </h2>
                        <p>
                          We provide premium quality education in the filed of
                          Artificial Intelligence, Generative AI, Machine
                          Learning, Data Science for all levels of personnel
                          starting from experienced working professionals to
                          school level students willing to learn/upgrade/upskill
                          into the field of Artificial Intelligence.
                        </p>
                        {/* <a to="about.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-area-2 height-300 swiper-slide"
                style={{ backgroundImage: "url(assets/images/slider_bg.jpg)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Microsoft Azure AI Certification Courses
                        </h2>
                        <p>
                          We provide Certification Training on Microsoft
                          Certified: Azure AI Fundamentals AI-900T00-A:
                          Microsoft Azure AI Fundamentals (for beginners) &
                          Microsoft Certified: Azure AI Engineer Associate
                          AI-102T00-A: Designing and Implementing a Microsoft
                          Azure AI Solution
                        </p>
                        {/* <a to="cissp.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-area-2 height-300 swiper-slide"
                style={{ backgroundImage: "url(assets/images/slider_bg.jpg)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Artificial Intelligence Projects and Assignments
                        </h2>
                        <p>
                          We have pool of highly qualified, experienced
                          professionals to design/solution/execute projects and
                          assignments of any level of complexity in the field of
                          Data Science and Artificial Intelligence from any
                          corner of the globe. Please reach out to us to
                          experience our quality output
                        </p>
                        {/* <a to="microsoft-azure.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-area-2 height-300 swiper-slide"
                style={{ backgroundImage: "url(assets/images/slider_bg.jpg)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">TOGAF Certification</h2>
                        <p>
                          We provide TOGAF® Foundation and Practitioner training
                          by highly experienced TOGAF® Certified professionals
                          having 10+ years of experience in the field. This will
                          help aspiring Enterprise Architects understand how
                          TOGAF® can address an enterprise's requirements.
                        </p>
                        {/* <a to="aws.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-area-2 height-300 swiper-slide"
                style={{ backgroundImage: "url(assets/images/slider_bg.jpg)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          PMI ACP Certification Course
                        </h2>
                        <p>
                          We provide certification training in PMI Agile
                          Certified Practitioner (PMI-ACP)® & Project Management
                          Professional (PMP)® by highly experienced PMI ACP and
                          PMP Certified professionals having 15+ years of
                          experience in the field
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-area-2 height-300 swiper-slide"
                style={{ backgroundImage: "url(assets/images/slider_bg.jpg)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Computer Based Test Centre
                        </h2>
                        <p>
                          Readybell is an authorized Computer Based Testing
                          (CBT) Partner of Pearson Vue and PSI Corporation. We
                          have State-of-the-art Computer Based Testing Exam
                          Centre in Salt Lake, Kolkata (India) where we conduct
                          exams of Pearson Vue and PSI clients.
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Header;

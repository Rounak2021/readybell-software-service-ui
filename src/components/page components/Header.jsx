import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
  return (
    <>
      <header>
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
                        src="assets/images/mainlogo2.PNG"
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
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarTogglerDemo01"
                    >
                      <ul className="navbar-nav mt-2 mt-lg-0">
                        <li>
                          <Link className="nav-link" to="/about">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/why-readybell">
                            Why Readybell
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/affiliations">
                            Our Affiliations
                          </Link>
                        </li>
                        <li>
                          <Link to="/team" className="nav-link">
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" className="nav-link">
                            Our Services
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          {/* <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Software Courses
                        </Link> */}
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link className="dropdown-item" to="/node">
                              Node with MongoDB
                            </Link>
                            <Link className="dropdown-item" to="/node-sql">
                              Node with SQL
                            </Link>
                            <Link className="dropdown-item" to="/java">
                              Java
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/cloudcomputing"
                            >
                              CLOUD COMPUTING
                            </Link>
                            <Link className="dropdown-item" to="/mean">
                              MEAN STACK
                            </Link>
                            <Link className="dropdown-item" to="/mern">
                              MERN STACK
                            </Link>
                            <Link className="dropdown-item" to="/python">
                              Python
                            </Link>
                            <Link className="dropdown-item" to="/ui">
                              UI / UX
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          {/* <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Cisco
                        </Link> */}
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link className="dropdown-item" to="/ccna">
                              CISCO CCNA
                            </Link>
                            <Link className="dropdown-item" to="/ccnp-encor">
                              CISCO CCNP Enterprise 350-401 ENCOR
                            </Link>
                            <Link className="dropdown-item" to="/ccnp-scor">
                              CISCO CCNP Security Core (350-701) SCOR
                            </Link>
                            <Link className="dropdown-item" to="/ccnp-vpn">
                              CCNP Secure Solutions VPN 300-730 SVPN
                            </Link>
                            <Link className="dropdown-item" to="/vpn">
                              CCIE Security VPN
                            </Link>
                            <Link className="dropdown-item" to="/ftd-fmc">
                              CCIE Security FTD FMC
                            </Link>
                            <Link className="dropdown-item" to="/asa">
                              CCIE Security ASA
                            </Link>
                          </div>
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
        // spaceBetween={30}
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
                      Readybell Software Services Pvt Limited
                    </h2>
                    <p>
                      An emerging &amp; pioneer IT Services provider in the
                      field of Cyber Security, Cloud Security, IT Security
                      Management, CISCO and CompTIA Certification and advanced
                      training and Computer Based Testing services
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
                      Software Full Stack Developer (MEAN) Bootcamp
                    </h2>
                    <p>
                      We are a pioneer Mean stack training provider providing
                      Software Full Stack Developer (MEAN) Bootcamp training.Top
                      demanding software skill: This program covers full gamete
                      of Software Development (front as well as back end)
                      technologies, frameworks and tools.
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
                      JAVA DEVELOPER Certification training
                    </h2>
                    <p>
                      We are a pioneer JAVA DEVELOPER training provider
                      providing certification and advanced level
                      training.Specially designed for absolute beginners who
                      want to build their programming foundation using Java
                      language.
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
                    <h2 className="display-3">
                      CLOUD COMPUTING Certification &amp; advanced level
                      training
                    </h2>
                    <p>
                      We are a pioneer CLOUD COMPUTING training provider
                      providing certification and advanced level CLOUD COMPUTING
                      training. Learn Cloud concepts, terminologies, services,
                      infra management and administration of MS Azure &amp; AWS
                      Clouds.
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
                      Node.js DEVELOPER (with MongoDB) Certification &amp;
                      advanced level training
                    </h2>
                    <p>
                      We are a pioneer Node.js DEVELOPER (with MongoDB) training
                      provider providing certification and advanced level
                      Node.js DEVELOPER (with MongoDB) training.Learn back end
                      programming with Node.js with Express.js framework and
                      MongoDB NoSQL Database.
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
                      Node.js DEVELOPER (with MongoDB) Certification &amp;
                      advanced level training
                    </h2>
                    <p>
                      We are a pioneer Node.js DEVELOPER (with MongoDB) training
                      provider providing certification and advanced level
                      Node.js DEVELOPER (with MongoDB) training.Learn back end
                      programming with Node.js with Express.js framework and
                      MongoDB NoSQL Database.
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
                      Node.js DEVELOPER (with MYSQL) Certification &amp;
                      advanced level training
                    </h2>
                    <p>
                      We are a pioneer Node.js DEVELOPER (with MYSQL) training
                      provider providing certification and advanced level
                      Node.js DEVELOPER (with MYSQL) training.Learn back end
                      programming with Node.js with Express.js framework and
                      MySQL RDBMS
                    </p>
                    {/* <a to="comptia-security.html" class="button_two mt-2">More Details</a> */}
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
                    <h2 className="display-3">CISCO networking training</h2>
                    <p>
                      Readybell has a pool of highly experienced CISCO trainers
                      having years of experience in training CCNA, CCNP and CCIA
                      courses. Our courses are based on the latest changes in
                      the CISCO curriculum. We use CISCO recommended training
                      materials and Lab.
                    </p>
                    {/* <a to="ccna.html" class="button_two mt-2">More Details</a> */}
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
                      Website Design and Development with UI/UX Certification
                      training
                    </h2>
                    <p>
                      We are a pioneer Website Design and Development with UI/UX
                      training provider providing certification and advanced
                      level Website Design and Development with UI/UX training.
                      Learn how to develop a full Website with UI/UX
                    </p>
                    {/* <a to="comptia-network.html" class="button_two mt-2">More Details</a> */}
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
                      Software Full Stack Developer (MERN) Bootcamp
                    </h2>
                    <p>
                      We are a pioneer mern stack training provider providing
                      Software Full Stack Developer (mern) Bootcamp training.Top
                      demanding software skill: This program covers full gamete
                      of Software Development (front as well as back end)
                      technologies, frameworks and tools.{" "}
                    </p>
                    {/* <a to="it-grooming.html" class="button_two mt-2">More Details</a> */}
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
                    <h2 className="display-3">Computer Based Test Centre</h2>
                    <p>
                      Readybell is an authorized Computer Based Testing (CBT)
                      partner of Pearson VUE &amp; PSI Corporation. We have
                      state-of-the-art Computer Based Testing exam center in
                      Salt lake, Kolkata (India) where we conduct exams of
                      Pearson VUE and PSI clients.
                    </p>
                    <p></p>
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

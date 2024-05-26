import { Link } from "react-router-dom";
import "./index.css";
import Background from "./ParticleBackground";
import homeSideIcon from "../assets/images/home_side_icon.jpg";

const Home = () => {
  return (
    <>
      <section className="welcome-section section-pt">
        <div className="welcome-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div
                  className="half_column_content_2"
                  data-aos="fade-up"
                  // data-aos-duration={100}
                >
                  <h2 className="font-weight-bold">About ReadyBell</h2>
                  <p>
                    Readybell Software Services Pvt Limited is an IT service
                    provider pioneering in the filed of IT Education and
                    Computer Based Testing headquartered in Kolkata, India.
                    Company imparts niche quality IT education in the field of
                    Cyber Security, Cloud Security, IT Security, Networking,
                    Network Security, IT Fundamental and Hardware courses to IT
                    professionals as well as to fresh IT career aspirants.
                  </p>
                  <p>
                    Readybell has both 100% Online as well as Online-Classroom
                    based training option. Our training facility is equipped
                    with latest training infrastructure and processes to ensure
                    a smooth and interruption free training delivery.
                  </p>
                  <Link to="/about" className="button_two">
                    Read More
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-5 mt-3d-5"
                //
                //   data-aos-duration={600}
              >
                <div className="half_column_image" style={{boxShadow:"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"}} >
                  <img
                    src={homeSideIcon}
                    alt="welcome"
                    className="img-fluid"
                    style={{ height: "345px", width: "1458px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section section-ptb">
        <div className="services-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service-wrapper bg-white">
                  <div className="row">
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>
                            Artificial Intelligence, Generative AI, Machine
                            Learning, Data Science
                          </h4>
                          <p>
                            We provide premium quality education in the filed of
                            Artificial Intelligence, Generative AI, Machine
                            Learning, Data Science for all levels of personnel
                            starting from experienced working professionals to
                            school level students willing to
                            learn/upgrade/upskill into the field of Artificial
                            Intelligence.
                          </p>
                          {/* <Link to="/ai" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>Microsoft Azure AI Certification Courses</h4>
                          <p>
                            We provide Certification Training on Microsoft
                            Certified: Azure AI Fundamentals AI-900T00-A:
                            Microsoft Azure AI Fundamentals (for beginners) &
                            Microsoft Certified: Azure AI Engineer Associate
                            AI-102T00-A: Designing and Implementing a Microsoft
                            Azure AI Solution
                          </p>
                          {/* <Link to="/ml" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>
                            Artificial Intelligence Projects and Assignments
                          </h4>
                          <p>
                            We have pool of highly qualified, experienced
                            professionals to design/solution/execute projects
                            and assignments of any level of complexity in the
                            field of Data Science and Artificial Intelligence
                            from any corner of the globe. Please reach out to us
                            to experience our quality output
                          </p>
                          {/* <Link to="/mern" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>TOGAF Certification</h4>
                          <p>
                            We provide TOGAF® Foundation and Practitioner
                            training by highly experienced TOGAF® Certified
                            professionals having 10+ years of experience in the
                            field. This will help aspiring Enterprise Architects
                            understand how TOGAF® can address an enterprise's
                            requirements.
                          </p>
                          {/* <Link to="/node-sql" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>PMI ACP and PMI PMP Certification Course</h4>
                          <p>
                            We provide certification training in PMI Agile
                            Certified Practitioner (PMI-ACP)® & Project
                            Management Professional (PMP)® by highly experienced
                            PMI ACP and PMP Certified professionals having 15+
                            years of experience in the field
                          </p>
                          {/* <Link to="/java" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>Python Developer</h4>
                          <p>
                            Specially designed for absolute beginners who want
                            to build their programming foundation using Python
                            language an easy to learn programming language
                            gaining higher and higher popularity day by day.
                            Considering its rapid proliferation there is a great
                            need for training that equips students with Python
                            skills, especially in India. Python...
                          </p>
                          <Link to="/python" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>Website Design and Development with UI/UX</h4>
                          <p>
                            In this Web design and development program you will
                            learn how can use HTML5, CSS3, Jquery, Bootstrap 4
                            to create a professional Website. To enhance User
                            Interface and User Experience Photoshop, Figma tools
                            will be used. In this program we will undergo...
                          </p>
                          <Link to="/ui" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CLOUD COMPUTING</h4>
                          <p>
                            Drive your career forward with this industry-ready
                            Cloud professional program to become a sought after
                            Cloud Administrator to maintain the infrastructure
                            and functionality of a company's cloud structures or
                            a Cloud Solution Architect to implement and
                            oversee...{" "}
                          </p>
                          <Link to="/cloudcomputing" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CISCO CCNA</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed to
                            provide in-depth knowledge of Cisco technology. We
                            have a dedicated highly experienced certified pool
                            of CISCO trainers.
                          </p>
                          <Link to="/ccna" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CISCO CCNP Enterprise 350-401 ENCOR</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed...
                          </p>
                          <Link to="/ccnp-encor" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CISCO CCNP Security Core (350-701) SCOR</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed to
                            provide in-depth knowledge of Cisco technology.
                          </p>
                          <Link to="/ccnp-scor" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CCNP Secure Solutions with VPN 300-730 SVPN</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed to
                            provide in-depth knowledge of Cisco technology.
                          </p>
                          <Link to="/ccnp-vpn" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CCIE Security VPN</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed to
                            provide in-depth knowledge of Cisco technology. We
                            have a dedicated...
                          </p>
                          <Link to="/vpn" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CCIE Security FTD FMC</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed to
                            provide in-depth knowledge of Cisco technology.{" "}
                          </p>
                          <Link to="/ftd-fmc" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 mb-4" data-aos="fade-up">
                      <div className="single-service-4 text-center p-4 border-5">
                        <div className="service-text">
                          <h4>CCIE Security ASA</h4>
                          <p>
                            Readybell offers the most comprehensive CISCO
                            Certification Training Courses in Kolkata for all
                            networking professionals and aspiring students. Our
                            CISCO training has been specially designed to
                            provide in-depth knowledge of Cisco technology.
                          </p>
                          <Link to="/asa" className="rounded-btn">
                            <i className="fas fa-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="two-columns-section section-ptb"
        style={{ backgroundImage: "url(assets/images/big_bg_3.jpg)" }}
      >
        <Background />
        <div className="two-columns-area">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-5 mt-3d-5"
                data-aos="fade-up"
                data-aos-duration={300}
              >
                <div className="half_column_image">
                  <img
                    src="assets/images/half_column_3.png"
                    alt="welcome"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div
                  className="half_column_content_2 text-white"
                  style={{ textAlign: "left" }}
                >
                  <h2 className="text-white font-weight-bold">Why Readybell</h2>
                  <p>
                    Readybell was conceptualized and founded to offer this world
                    a quality services and products in the field of IT. In view
                    of that Readybell engaged a pool of very highly qualified
                    and experienced IT professionals having rish experience in
                    their respective fields as well as having a complete
                    knowledge of the technical architecture around their matter
                    of expertise. Readybell’s founders are highly qualified
                    professionals from reputed educational institutes of India
                    and the mentor has over 26 years of global IT experience
                    having delivered numerous large IT Programs across the
                    world. Readybell was founded with the vision of its mentor
                    and committed to assure:
                  </p>
                  <Link to="/register" className="button_two mt-2">
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="why-ready">
                <div className="item">
                  Quality education services to their students
                </div>
                <div className="item">
                  Follow global training best practices
                </div>
                <div className="item">
                  Deploy best-of-the-class training faculty
                </div>
                <div className="item">
                  Deploy state-of-the-art training infrastructure{" "}
                </div>
                <div className="item">Maintain transparency with partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-wrapper section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center" data-aos="fade-in">
                <h2>Our Affiliations</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <div class="col-lg-4 col-md-6 py-3"   data-aos-delay="200"> */}
            {/* <div class="single-item"> */}
            {/* <div class="item-icon"> */}
            {/* <img class="img-fluid" src="assets/images/af_1.jpg" alt="icon"> */}
            {/* </div> */}
            {/* <div class="item-text"> */}
            {/* <h4>CompTIA Authorised Training Partner</h4> */}
            {/* <p>Readybell Software is authorized training partner of CompTIA (The Computing Technology Industry Association) the Global Leader involved in professional certifications in the field of Information Technology. CompTIA issues vendor-neutral professional certifications in over 120 countries.  </p> */}
            {/* <a to="our-affilliations.html" class="link_btn">Read More <i class="fa fa-angle-right"></i> </a> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            <div className="col-lg-4 col-md-6 py-3" data-aos-delay={200}>
              <div className="single-item">
                <div className="item-icon">
                  <img
                    className="img-fluid"
                    src="assets/images/af_2.jpg"
                    alt="icon"
                  />
                </div>
                <div className="item-text">
                  <h4>Pearson VUE Authorised Test Center</h4>
                  <p>
                    Readybell Software is an authorized test center of Pearson
                    VUE — the global leader in computer-based testing
                    organization.
                  </p>
                  <p>
                    Readybell has a state-of-the-art computer-based testing
                    facility at its Salt Lake Kolkata office.
                  </p>
                  <Link to="/affiliations" className="link_btn mt-2">
                    Read More <i className="fa fa-angle-right" />{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-3" data-aos-delay={200}>
              <div className="single-item">
                <div className="item-icon">
                  <img
                    className="img-fluid"
                    src="assets/images/af_3.jpg"
                    alt="icon"
                  />
                </div>
                <div className="item-text">
                  <h4>PSI Authorised Test Center</h4>
                  <p>
                    Readybell Software is an authorized test center of PSI
                    Corporation, a global leader in workforce solutions with
                    over 70 years experience in delivering successful testing
                    programs to help people achieve success in their academic,
                    personal, and work lives.{" "}
                  </p>
                  <Link to="/affiliations" className="link_btn mt-2">
                    Read More <i className="fa fa-angle-right" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

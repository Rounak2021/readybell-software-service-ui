import { useNavigate, Link } from "react-router-dom";
import { Sidecard } from "./side-card";
import aboutImage from "../assets/images/ai_image.jpg";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">About READYBELL</h5>
            </div>
            <div className="col-md-5" data-aos="fade-up">
              <span>
                <Link className="text-dark" to="/">
                  Home
                </Link>{" "}
                - About READYBELL
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
              <div className="col-md-12">
                <div className="section-title">
                  <h2>About READYBELL</h2>
                </div>
                <p>
                  READYBELL, established in 2017 and headquartered in Kolkata, India, is swiftly
                  emerging as a frontrunner in the emerging technologies education and consulting
                  domain. With a core focus on advancing knowledge and skills in cutting-edge digital
                  technologies, READYBELL caters to a global audience of students and professionals.
                </p>
                <p>
                  Key feature of READYBELL’s training courses is the Academy to Industry Connect. All
                  our trainers are from industry and have strong and long background of working
                  experience in the relevant industries. Due to that our trainers and able to explain how a
                  particular curriculum is connected to the practical application. This ensures students
                  acquire strong theoretical and practical experience.
                </p>
                <p>
                  Our commitment lies in delivering top-tier classroom and online training, alongside
                  comprehensive project assistance, in the fields of:
                </p>

                <aside class="sticky-menu sticky-menu2">
                  <div class="card"><div class="card-body">
                    {/* <h3>Training Courses</h3> */}
                    <div class="side-menu">
                      <ul>
                        {/* <li>	Microsoft Certification - Microsoft Azure AI Fundamentals AI-900T00-A <a href="/ai-900t00"><i class="far fa-check-square"></i> Microsoft AI- 900T00-A</a></li>
                        <li> Microsoft Certification - AI-102T00-A - Designing and Implementing a Microsoft Azure AI Solution <a href="/ai-102t00"><i class="far fa-check-square"></i> Microsoft AI-102T00</a></li>

                        <li> Python for Data Science, AI & Development <a href="/python-data-science"><i class="far fa-check-square"></i> Python for Data Science</a></li>
                        <li> Data Analytics <a href="/data-analyst"><i class="far fa-check-square"></i> Data Analyst</a></li>
                        <li> Build Next-Generation AI Solutions with Generative AI and LLM <a href="/gen-ai"><i class="far fa-check-square"></i> Generative AI</a></li>
                        <li> Microsoft Copilot - AI in Excel, Word, PowerPoint & More <a href="/ms-copilot"><i class="far fa-check-square"></i>Microsoft Copilot</a></li>
                        <li> PMI-ACP (Agile Certified Practitioner) Certification Training <a href="/pmi-acp"><i class="far fa-check-square"></i> PMI ACP (Agile Certification)</a>
                        </li> */}
                        <li><a ><i class="far fa-check-square"></i> PMI Project Management PMI - PMP and PMI-ACP Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Artificial Intelligence of Things (AIoT) Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> Augmented reality (AR) and virtual reality (VR) Traning</a></li>
                        <li><a ><i class="far fa-check-square"></i> Service Now Certification Training with Japanese language and cultural Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> Programming in Python and Java Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> MS Azure Cloud Certification Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> AWS Cloud Certification Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> Google Cloud Certification Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> CISCO Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Juniper Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> CompTia Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Palo Alto Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Fortinet Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Cisco Firepower (FTD) Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Check Point Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Windows Server Hybrid Administrator Associate Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Exchange Server 2016 Certification Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> Linux Administration Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Office 365 Certification Trainings</a></li>
                        <li><a ><i class="far fa-check-square"></i> Blockchain Training</a></li>
                        <li><a ><i class="far fa-check-square"></i> Drone Building</a></li>
                        <li><a ><i class="far fa-check-square"></i> Cyber Security</a></li>

                      </ul>
                    </div>
                  </div>
                  </div>
                </aside> <br></br>
                <img
                  src={aboutImage}
                  alt=""
                  className="float-right ml-3 mb-2 img-fluid"
                  style={{
                    width: "54%",
                    border: "1px solid transparent",
                    borderRadius: "6px",
                  }}
                />

                <p>
                  At READYBELL, we boast a dedicated team of industry professionals, driven by a passion
                  for staying abreast of technological advancements and addressing the evolving needs of the
                  sector. Offering both 100% online and online-classroom training options, we ensure a
                  seamless learning experience through state-of-the-art infrastructure and processes.
                </p>
                <p>We extend a warm welcome to students from both India and overseas, with flexible timing
                  options to accommodate diverse schedules.</p>
                <p>
                  READYBELL is a PMI (Project Management Institute) Authorised Training Partner. PMI ATP
                  status is awarded to only established, high-quality, financially-sound project management
                  education providers who are aligned to PMI core values, have mature business practices.
                  READYBELL uses exclusive, PMI-authorized training content, aligned to evolving PMP® &amp;
                  ACP® examination subject areas, for PMP® &amp; ACP® examination preparations.
                </p>
                <p>
                  READYBELL serves as an authorized Computer Based Testing (CBT) partner of industry
                  leaders Pearson VUE and PSI Corporation. Our cutting-edge testing center in Salt Lake,
                  Kolkata, adheres to the highest standards in conducting online computer-based exams,
                  ensuring a secure and reliable testing environment for certification and licensure exams. Join
                  READYBELL today and embark on a journey of continuous learning and professional
                  growth, poised to excel in the dynamic landscape of digital technologies.
                </p>
                <p>
                  READYBELL does business dealings with their customer and partners with ethics, full
                  transparency and honesty with humanity.
                </p>
              </div>

              {/* <Sidecard /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

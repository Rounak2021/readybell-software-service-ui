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
                  <h2>About ReadyBell</h2>
                </div>
                <p>
                  Readybell, established in 2017 and headquartered in Kolkata,
                  India, is swiftly emerging as a frontrunner in the training
                  and consulting domain. With a core focus on advancing
                  knowledge and skills in cutting-edge digital technologies,
                  Readybell caters to a global audience of students and
                  professionals. Our commitment lies in delivering top-tier
                  classroom and online training, alongside comprehensive project
                  assistance, in fields such as Artificial Intelligence (AI),
                  Machine Learning (ML), Data Science, Generative AI, and Agile
                  Project Management.
                </p>
                <p>
                  At Readybell, we boast a dedicated team of industry
                  professionals, driven by a passion for staying abreast of
                  technological advancements and addressing the evolving needs
                  of the sector. Offering both 100% online and online-classroom
                  training options, we ensure a seamless learning experience
                  through state-of-the-art infrastructure and processes.
                </p>
                <p>
                  We extend a warm welcome to students from both India and
                  overseas, with flexible timing options to accommodate diverse
                  schedules.
                </p>

                <p>
                  In the realm of AI, Readybell stands out as a pioneer in
                  certification training, offering courses ranging from
                  fundamentals to advanced levels. Likewise, in Agile Project
                  Management, we excel as a premier certification training
                  provider, specializing in PMI-ACP® (Agile Certified
                  Practitioner) Certification.
                </p>
                <p>
                  Below are the training sessions we provide for: AI-900T00-A:
                  Microsoft Azure AI Fundamentals{" "}
                  <Link onClick={() => navigate("/")}>
                    (Click here for the details)
                  </Link>
                  <br />
                  AI-102T00-A: Designing and Implementing a Microsoft Azure AI
                  Solution{" "}
                  <Link onClick={() => navigate("/")}>
                    (Click here for the details)
                  </Link>
                  <br /> AI, ML, Data Science Beginner Course with or without
                  Microsoft AI &amp; Cloud Certification
                  <Link onClick={() => navigate("/")}>
                    (Click here for the details)
                  </Link>
                  <br /> AI, ML, Data Science Intermediate Course with or
                  without Microsoft AI Certification{" "}
                  <Link onClick={() => navigate("/")}>
                    (Click here for the details)
                  </Link>
                  <br /> AI, ML, Data Science Advanced Course{" "}
                  <Link onClick={() => navigate("/")}>
                    (Click here for the details)
                  </Link>
                  <br />
                </p>
                <img
                  src={aboutImage}
                  alt=""
                  className="float-right ml-3 mb-2 img-fluid"
                  style={{
                    width: "54%",
                    border: "1px solid transparent",
                    borderRadius: "6px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                />

                <p>
                  Moreover, Readybell serves as an authorized Computer Based
                  Testing (CBT) partner of industry leaders Pearson VUE and PSI
                  Corporation. Our cutting-edge testing center in Salt Lake,
                  Kolkata, adheres to the highest standards in conducting online
                  computer-based exams, ensuring a secure and reliable testing
                  environment for certification and licensure exams. Join
                  Readybell today and embark on a journey of continuous learning
                  and professional growth, poised to excel in the dynamic
                  landscape of digital technologies.
                </p>
              </div>

              <Sidecard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

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
                <p> We provide intensive personalized classroom + Online training on the following curriculums: </p>

                <aside class="sticky-menu sticky-menu2">
                  <div class="card"><div class="card-body">
                    <h3>Training Courses</h3>
                    <div class="side-menu">
                      <ul>
                  <li>	Microsoft Certification - Microsoft Azure AI Fundamentals AI-900T00-A <a href="/ai-900t00"><i class="far fa-check-square"></i> Microsoft AI- 900T00-A</a></li>
                  <li> Microsoft Certification - AI-102T00-A - Designing and Implementing a Microsoft Azure AI Solution <a href="/ai-102t00"><i class="far fa-check-square"></i> Microsoft AI-102T00</a></li>
                  
                  <li> Python for Data Science, AI & Development <a href="/python-data-science"><i class="far fa-check-square"></i> Python for Data Science</a></li>
                  <li> Data Analytics <a href="/data-analyst"><i class="far fa-check-square"></i> Data Analyst</a></li>
                  <li> Build Next-Generation AI Solutions with Generative AI and LLM <a href="/gen-ai"><i class="far fa-check-square"></i> Generative AI</a></li>
                  <li> Microsoft Copilot - AI in Excel, Word, PowerPoint & More <a href="/ms-copilot"><i class="far fa-check-square"></i>Microsoft Copilot</a></li>
                  <li> PMI-ACP (Agile Certified Practitioner) Certification Training <a href="/pmi-acp"><i class="far fa-check-square"></i> PMI ACP (Agile Certification)</a>
                  </li>
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

import React from "react";
import { Sidecard } from "./side-card";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">Our Team</h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - Our Team
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
                  <h2>Our Team</h2>
                </div>
                <p>
                  Readybell team comprises of highly skilled and experienced
                  professionals with high moral and ethics.{" "}
                </p>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-content">
                    <h3>Readybell Mentor:</h3>
                    <p>
                      Bachelor of Engineering Degree from National Institute of
                      Technology (NIT, formerly M.N.R.E.C Allahabad) having over
                      30 years experience with world renowned organizations. Our
                      mentor conceptualized Readybell to ensure his rich IT
                      background in managing large global IT engagements and
                      leadership skills are utilized in forming an IT services
                      organization which will deliver state-of-the-art IT
                      education globally. Our mentor has been part of leadership
                      pool of large IT organizations and knows the requirement
                      of real quality IT training. Our mentor has handpicked our
                      trainers after numerous rounds of evaluation and
                      background check. Our mentor has rich experience in
                      implementing best of the class technologies and process in
                      numerous world renowned organizations including fortune
                      500 companies. Our mentor has extensive work experience
                      and lived in USA, Latin America, UK and Europe. He is an
                      honest, soft spoken immensely knowledgeable true leader
                      believe in Quality, Depth of Knowledge, Transparency and
                      Honesty. Every transaction Readybell does with their
                      students and customer reflects our mentor’s core values
                      and ensures they are fully satisfied in each step of
                      dealing. Our mentor believes in growth comes with
                      transparency, honesty, depth of knowledge and hard work
                      which is maintained strictly in Readybell.
                    </p>
                  </div>
                </div>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-content">
                    <h3>Readybell Director:</h3>
                    <p>
                      Amrita Mukhopadhyay is Readybell’s full time Director.
                      Amrita holds Masters Degree holder from world reputed
                      Presidency College Kolkata. Our Director is a tech savvy
                      professional who constantly looks out for technological
                      and process excellence to ensure Readybell is upto dated
                      with global best practices and students and customer get
                      best value of their investment. Our Director is a soft
                      spoken, highly quality oriented individual aligned and
                      committed to maintain the core values Readybell was
                      conceptualized with.
                    </p>
                  </div>
                </div>
                <div className="single-event-info p-4 mb-5">
                  <div className="single-event-content">
                    <div className="row">
                      <div className="col-md-12 mb-3 trainer">
                        <h3>Our Trainer Profiles: </h3>
                      </div>
                    </div>
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for Microsoft AI-900T00-A{" "}
                      </h5>
                      <ul>
                        <li>
                          Previous Experience: Ex Microsoft Software Engineer,
                          AI Specialist
                        </li>
                        <li>
                          Years of Experience: 7+ years in AI and machine
                          learning
                        </li>
                        <li>Expertise in Azure AI services</li>
                        <li>
                          Skilled in natural language processing and computer
                          vision
                        </li>
                        <li>Experience in developing AI-driven applications</li>
                        <li>Proficient in Python and R programming</li>
                        <li>
                          Strong knowledge of data analysis and visualization
                          tools
                        </li>
                        <li>
                          Previous Roles: AI Consultant, Machine Learning
                          Engineer
                        </li>
                        <li>
                          Current Role: Senior AI Engineer at a Fortune 500
                          company
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for Microsoft AI-102T00
                      </h5>
                      <ul>
                        <li>
                          Previous Experience: Ex Amazon Software Engineer
                        </li>
                        <li>
                          Years of Experience: 8+ years in AI and cloud
                          computing
                        </li>
                        <li>
                          Expert in designing and implementing AI solutions
                          using Azure Cognitive Services
                        </li>
                        <li>
                          Skilled in integrating AI models into existing
                          enterprise applications
                        </li>
                        <li>
                          Experience with REST APIs, chatbot development, and
                          virtual assistants
                        </li>
                        <li>
                          Strong understanding of ethical AI practices and data
                          security
                        </li>
                        <li>Proficient in C#, Python, and JavaScript</li>
                        <li>
                          Previous Roles: AI Solution Architect, Cloud Developer
                        </li>
                        <li>
                          Current Role: Principal AI Consultant at a leading
                          tech consulting firm
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for Python for Data Science
                      </h5>
                      <ul>
                        <li>Previous Experience: Ex PwC Data Scientist</li>
                        <li>
                          Years of Experience: 5+ years in data science and
                          analytics
                        </li>
                        <li>
                          Proficient in Python, including libraries such as
                          Pandas, NumPy, and Matplotlib
                        </li>
                        <li>
                          Expertise in machine learning frameworks like
                          TensorFlow and scikit-learn
                        </li>
                        <li>
                          Experience with data preprocessing, cleaning, and
                          exploratory data analysis
                        </li>
                        <li>
                          Skilled in building predictive models and statistical
                          analysis
                        </li>
                        <li>Knowledge of SQL and database management</li>
                        <li>
                          Previous Roles: Data Analyst, Research Scientist
                        </li>
                        <li>
                          Current Role: Lead Data Scientist at a global
                          analytics firm
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for Data Analyst
                      </h5>
                      <ul>
                        <li>Previous Experience: Ex Accenture Data Analyst</li>
                        <li>
                          Years of Experience: 6+ years in data analysis and
                          business intelligence
                        </li>
                        <li>
                          Skilled in Excel, SQL, and Tableau for data
                          visualization and reporting
                        </li>
                        <li>
                          Proficient in Python for data manipulation and
                          analysis
                        </li>
                        <li>
                          Experience in analyzing large datasets and deriving
                          actionable insights
                        </li>
                        <li>
                          Strong understanding of statistical methods and data
                          mining techniques
                        </li>
                        <li>
                          Expertise in using Power BI and other BI tools for
                          dashboard creation
                        </li>
                        <li>
                          Previous Roles: Business Analyst, Data Visualization
                          Specialist
                        </li>
                        <li>
                          Current Role: Senior Data Analyst at a multinational
                          corporation
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for Generative AI
                      </h5>
                      <ul>
                        <li>Previous Experience: Ex Accenture AI Researcher</li>
                        <li>
                          Years of Experience: 20+ years in AI and deep learning
                        </li>
                        <li>
                          Expert in generative models, including GANs and VAEs
                        </li>
                        <li>
                          Skilled in PyTorch and TensorFlow for model
                          development
                        </li>
                        <li>
                          Experience with natural language generation (NLG) and
                          image synthesis
                        </li>
                        <li>
                          Knowledge of ethical implications and responsible AI
                          practices
                        </li>
                        <li>
                          Proficient in Python and deep learning libraries
                        </li>
                        <li>
                          Previous Roles: AI Research Scientist, Machine
                          Learning Engineer
                        </li>
                        <li>
                          Current Role: Director of AI Research at a tech
                          startup
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for Microsoft Copilot
                      </h5>
                      <ul>
                        <li>
                          Previous Experience: Ex Salesforce Technical Lead
                        </li>
                        <li>
                          Years of Experience: 10+ years in software development
                          and cloud technologies
                        </li>
                        <li>
                          Skilled in integrating Microsoft Copilot features with
                          business applications
                        </li>
                        <li>
                          Proficient in Azure, Microsoft 365, and Power Platform
                        </li>
                        <li>
                          Experience in automating workflows and enhancing
                          productivity with AI
                        </li>
                        <li>
                          Strong understanding of cloud security and data
                          privacy
                        </li>
                        <li>Expertise in C#, JavaScript, and PowerShell</li>
                        <li>
                          Previous Roles: Cloud Solutions Architect, Enterprise
                          Software Developer
                        </li>
                        <li>
                          Current Role: Principal Solutions Engineer at a cloud
                          services firm
                        </li>
                      </ul>
                    </div>
                    <hr style={{ backgroundColor: "#0000a6" }} />
                    <div className="theme-list-3 mb-4">
                      <h5 style={{ marginTop: "2em" }}>
                        Trainer for PMI ACP (Agile Certification)
                      </h5>
                      <ul>
                        <li>Previous Experience: Ex Cisco Project Manager</li>
                        <li>
                          Years of Experience: 12+ years in project management
                          and agile methodologies
                        </li>
                        <li>
                          Certified PMI-ACP, Scrum Master, and Lean Six Sigma
                          professional
                        </li>
                        <li>
                          Expertise in Agile frameworks such as Scrum, Kanban,
                          and XP
                        </li>
                        <li>
                          Experience in coaching and leading agile
                          transformations in large organizations
                        </li>
                        <li>
                          Skilled in JIRA, Trello, and other agile project
                          management tools
                        </li>
                        <li>
                          Proficient in stakeholder management and team
                          collaboration
                        </li>
                        <li>
                          Previous Roles: Agile Coach, Senior Project Manager
                        </li>
                        <li>
                          Current Role: Agile Transformation Consultant at a
                          global management consulting firm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Sidecard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

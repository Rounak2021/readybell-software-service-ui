import { Link } from "react-router-dom";
export const Sidecard = () => {
  return (
    <>
      <div className="col-md-4">
        <aside className="sticky-menu">
          <div className="card">
            <div className="card-body">
              <h3>Training Courses</h3>
              <hr />
              <div className="side-menu">
                <ul>
                  <li>
                    <Link to="/python-data-science">
                      <i className="far fa-check-square" /> PYTHON FOR DATA
                      SCIENCE, AI & DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-analyst">
                      <i className="far fa-check-square" /> DATA ANALYST
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-900t00">
                      <i className="far fa-check-square" /> Microsoft
                      Certification - Microsoft Azure AI Fundamentals
                      AI-900T00-A
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-102t00">
                      <i className="far fa-check-square" /> Microsoft
                      Certification - AI-102T00-A - Designing and Implementing a
                      Microsoft Azure AI Solution
                    </Link>
                  </li>
                  <li>
                    <Link to="/ms-copilot">
                      <i className="far fa-check-square" />
                      MICROSOFT COPILOT: AI IN EXCEL, WORD, POWERPOINT & MORE
                    </Link>
                  </li>

                  <li>
                    <Link to="/gen-ai">
                      <i className="far fa-check-square" /> Artificial
                      Intelligence, Generative AI, Machine Learning, Data
                      Science
                    </Link>
                  </li>

                  <li>
                    <Link to="/pmi-acp">
                      <i className="far fa-check-square" /> PMI ACP and PMI PMP
                      Certification Course
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

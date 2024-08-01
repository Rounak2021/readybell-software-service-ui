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
                    <Link to="/ai-900t00">
                      <i className="far fa-check-square" /> Microsoft AI-
                      900T00-A
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-102t00">
                      <i className="far fa-check-square" /> Microsoft AI-102T00
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-advanced">
                      <i className="far fa-check-square" /> Artificial
                      Intelligence Engineer
                    </Link>
                  </li>
                  <li>
                    <Link to="/python-data-science">
                      <i className="far fa-check-square" /> Python for Data
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-analyst">
                      <i className="far fa-check-square" /> Data Analyst
                    </Link>
                  </li>
                  <li>
                    <Link to="/gen-ai">
                      <i className="far fa-check-square" /> Generative AI
                    </Link>
                  </li>
                  <li>
                    <Link to="/ms-copilot">
                      <i className="far fa-check-square" />
                      Microsoft Copilot
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/togaf">
                      <i className="far fa-check-square" /> TOGAF
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/pmi-acp">
                      <i className="far fa-check-square" /> PMI ACP (Agile
                      Certification)
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/pmi-pmp">
                      <i className="far fa-check-square" /> PMI PMP
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

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
                    <Link to="/ai">
                      <i className="far fa-check-square" /> Artificial
                      Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link to="/ml">
                      <i className="far fa-check-square" /> Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-science">
                      <i className="far fa-check-square" /> Data Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/gen-ai">
                      <i className="far fa-check-square" /> Generative AI
                    </Link>
                  </li>
                  <li>
                    <Link to="/togaf">
                      <i className="far fa-check-square" /> TOGAF
                    </Link>
                  </li>
                  <li>
                    <Link to="/pmi-acp">
                      <i className="far fa-check-square" /> PMI ACP (Agile
                      Certification)
                    </Link>
                  </li>
                  <li>
                    <Link to="/pmi-pmp">
                      <i className="far fa-check-square" /> PMI PMP
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

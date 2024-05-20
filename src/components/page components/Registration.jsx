import React from "react";
import readybellIcon from "../assets/images/mainlogo.png";
const Registration = () => {
  const highlightTab = (tab) => {
    const tabs = document.querySelectorAll(".nav-link");
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  };
  return (
    <div>
      <>
        <div className="container register mb-4">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>You are 30 seconds away from earning your own money!</p>

              <br />
            </div>
            <div className="col-md-9 register-right">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Apply as a Employee</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <div className="maxl">
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="gender"
                              defaultValue="male"
                              defaultChecked=""
                            />
                            <span> Male </span>
                          </label>
                          <label className="radio inline">
                            <input
                              type="radio"
                              name="gender"
                              defaultValue="female"
                            />
                            <span>Female </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          minLength={10}
                          maxLength={10}
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="Your Phone *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <select className="form-control">
                          <option className="hidden" selected="" disabled="">
                            Please select your Sequrity Question
                          </option>
                          <option>What is your Birthdate?</option>
                          <option>What is Your old Phone Number</option>
                          <option>What is your Pet Name?</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Answer *"
                          defaultValue=""
                        />
                      </div>
                      <input
                        type="submit"
                        className="btnRegister"
                        defaultValue="Register"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3 className="register-heading">Apply as a Hirer</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          maxLength={10}
                          minLength={10}
                          className="form-control"
                          placeholder="Phone *"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          defaultValue=""
                        />
                      </div>
                      <div className="form-group">
                        <select className="form-control">
                          <option className="hidden" selected="" disabled="">
                            Please select your Sequrity Question
                          </option>
                          <option>What is your Birthdate?</option>
                          <option>What is Your old Phone Number</option>
                          <option>What is your Pet Name?</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="`Answer *"
                          defaultValue=""
                        />
                      </div>
                      <input
                        type="submit"
                        className="btnRegister"
                        defaultValue="Register"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Registration;

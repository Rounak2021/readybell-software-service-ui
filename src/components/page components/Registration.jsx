import React, { useState } from "react";
import readybellIcon from "../assets/images/mainlogo.png";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner"; // Import the spinner
import { triggerConfetti } from "./Confetti";

const Registration = () => {
  const navigate = useNavigate();
  const [radioSelecter, setRadioSelecter] = useState("Student");
  const [confirm_password_error, setconfirm_password_error] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const options = [
    { value: "Microsoft AI- 900T00-A" },
    { value: "Microsoft AI-102T00" },
    { value: "Python for Data Science" },
    { value: "Data Analyst" },
    { value: "Generative AI" },
    { value: "Microsoft Copilot" },
    { value: "PMI ACP (Agile Certification)" },
  ];

  const [responseData, setResponseData] = useState({
    email: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    university_name: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    user_category: "",
    company_name: "",
    year_of_experience: "",
    date_of_birth: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (
      name === "email" ||
      name === "mobile_number" ||
      name === "password" ||
      name === "confirm_password" ||
      name === "first_name" ||
      name === "middle_name" ||
      name === "last_name" ||
      name === "gender" ||
      name === "university_name" ||
      name === "country" ||
      name === "city" ||
      name === "state" ||
      name === "pincode" ||
      name === "user_category" ||
      name === "company_name" ||
      name === "date_of_birth" ||
      name === "year_of_experience"
    ) {
      setError("");
    }

    setResponseData({ ...responseData, [name]: value });
  };

  const handleConfirmationForRegister = () => {
    if (
      radioSelecter === "Student"
        ? responseData.email === "" ||
          responseData.mobile_number === "" ||
          responseData.password === "" ||
          responseData.first_name === "" ||
          responseData.last_name === "" ||
          responseData.gender === "" ||
          responseData.university_name === "" ||
          responseData.country === "" ||
          responseData.city === "" ||
          responseData.state === "" ||
          responseData.date_of_birth === "" ||
          responseData.course_name === "" ||
          responseData.pincode === ""
        : radioSelecter === "Proffesional"
        ? responseData.email === "" ||
          responseData.mobile_number === "" ||
          responseData.password === "" ||
          responseData.first_name === "" ||
          responseData.last_name === "" ||
          responseData.gender === "" ||
          responseData.country === "" ||
          responseData.city === "" ||
          responseData.state === "" ||
          responseData.pincode === "" ||
          responseData.company_name === "" ||
          responseData.date_of_birth === "" ||
          responseData.course_name === "" ||
          responseData.year_of_experience === ""
        : null
    ) {
      setError(`This field is mandatory to fill`);
    } else {
      swal({
        title: "Confirmation",
        text: "Are you sure you want to register?",
        icon: "warning",
        buttons: ["No", "Yes"],
        closeOnClickOutside: false,
      }).then((willDelete) => {
        if (willDelete) {
          registerUser();
        }
      });
      return;
    }
  };

  const handleConfirmPassword = (value) => {
    setconfirm_password_error("");
    if (value !== responseData.password) {
      setConfirmPassword(value);
      setconfirm_password_error("Password and Confirm Password should match");
    } else {
      setConfirmPassword(value);
    }
  };

  const handleRadioSelecter = (value) => {
    handleResetForm();
    setRadioSelecter(value);
  };

  const handleResetForm = () => {
    setResponseData({
      email: "",
      mobile_number: "",
      password: "",
      confirm_password: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      university_name: "",
      country: "",
      city: "",
      state: "",
      pincode: "",
      user_category: "",
      company_name: "",
      year_of_experience: "",
      date_of_birth: "",
    });
    setConfirmPassword("");
    setconfirm_password_error("");
    setError("");
  };
  const registerUser = async () => {
    setLoading(true);
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const detailRequest = {
      email: responseData.email,
      mobile_number: responseData.mobile_number,
      password: responseData.password,
      confirm_password: responseData.confirm_password,
      first_name: responseData.first_name,
      middle_name: responseData.middle_name,
      last_name: responseData.last_name,
      gender: responseData.gender,
      university_name: responseData.university_name,
      country: responseData.country,
      city: responseData.city,
      state: responseData.state,
      pincode: responseData.pincode,
      date_of_birth: responseData.date_of_birth,
      user_category: radioSelecter,
      company_name: responseData.company_name,
      year_of_experience: responseData.year_of_experience,
      course_name: responseData.course_name,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/readybell_user_register", // Removed extra slash
        detailRequest,
        config
      );
      if (response?.data?.status === 401) {
        setLoading(false);
        const a = response?.data?.message;
        swal({
          title: "Warning",
          text: { a },
          icon: "warning",
          closeOnClickOutside: false,
        });
      }

      if (response?.data?.status === 200) {
        triggerConfetti();
        swal({
          title: "Success",
          text: "User has been registered successfully",
          icon: "success",
          closeOnClickOutside: false,
        }).then((willDelete) => {
          if (willDelete) {
            navigate("/login");
          }
        });
      }

      // Handle successful registration response
    } catch (error) {
      setLoading(false);
      console.error("Registration failed:", error);
      // Handle registration error
    }
  };

  return (
    <div>
      <>
        <h2
          className=""
          style={{ textAlign: "center", marginTop: "2%", position: "initial" }}
        >
          Register
        </h2>
        <div className="container register mb-4" data-aos="fade-up">
          <div className="row">
            {/* <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3 style={{ fontSize: "2.75rem" }}>Register</h3>

              <br />
            </div> */}
            <div className="col-md-12 register-right">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <span>
                    <div className="register-heading">
                      <input
                        name="abc"
                        type="radio"
                        value="Student"
                        onChange={(e) => handleRadioSelecter(e.target.value)}
                        checked={radioSelecter === "Student"}
                      />
                      <label className="form-label" style={{ padding: "10px" }}>
                        Student
                      </label>
                      <input
                        name="abc"
                        type="radio"
                        value="Proffesional"
                        onChange={(e) => handleRadioSelecter(e.target.value)}
                        checked={radioSelecter === "Proffesional"}
                      />
                      <label className="form-label" style={{ padding: "10px" }}>
                        Working Proffesional
                      </label>
                    </div>
                  </span>
                  {radioSelecter === "Student" && (
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            name="course_name"
                            value={responseData.course_name}
                            onChange={handleChange}
                            className="form-control"
                            
                          >
                            <option value="" disabled>
                              Select Course Name
                            </option>
                            {options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.value}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="first_name"
                            value={responseData.first_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="First Name *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.first_name.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={responseData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Email *"
                          />
                          {error.trim().length > 0 &&
                            responseData.email.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={10}
                            maxLength={10}
                            name="gender"
                            value={responseData.gender}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Gender *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.gender.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            value={responseData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Password *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.password.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={10}
                            maxLength={10}
                            name="university_name"
                            value={responseData.university_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="School/College Name *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.university_name.trim().length ===
                              0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              name="city"
                              value={responseData.city}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="City*"
                              defaultValue=""
                            />
                            {error.trim().length > 0 &&
                              responseData.city.trim().length === 0 && (
                                <p className="text-danger mb-0 p-0">{error}</p>
                              )}
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              // pincode
                              name="pincode"
                              value={responseData.pincode}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Pincode*"
                              defaultValue=""
                            />
                            {error.trim().length > 0 &&
                              responseData.pincode.trim().length === 0 && (
                                <p className="text-danger mb-0 p-0">{error}</p>
                              )}
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="col-md-6">
                        <br />
                        <br />
                        <div className="form-group">
                          <input
                            type="text"
                            // last_name
                            name="last_name"
                            value={responseData.last_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Last Name *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.last_name.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={13}
                            maxLength={13}
                            name="mobile_number"
                            value={responseData.mobile_number}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Phone *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.mobile_number.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="date"
                            minLength={10}
                            maxLength={10}
                            name="date_of_birth"
                            value={responseData.date_of_birth}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Date of Birth *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.date_of_birth.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={(e) =>
                              handleConfirmPassword(e.target.value)
                            }
                            defaultValue=""
                          />
                          {confirmPassword.trim().length > 0 && (
                            <p className="text-danger mb-0 p-0">
                              {confirm_password_error}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="country"
                            value={responseData.country}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Country*"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.country.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="state"
                            value={responseData.state}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="State*"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.state.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>

                        <button
                          type="submit"
                          className="btnRegister"
                          // defaultValue="Register"
                          onClick={() => handleConfirmationForRegister()}
                          disabled={loading}
                        >
                          {loading ? (
                            <Oval
                              height={20}
                              width={20}
                              color="#fff"
                              visible={true}
                              ariaLabel="oval-loading"
                              secondaryColor="#ccc"
                              strokeWidth={2}
                              strokeWidthSecondary={2}
                            />
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {radioSelecter === "Proffesional" && (
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            name="course_name"
                            value={responseData.course_name}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="" disabled>
                              Select Course Name
                            </option>
                            {options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.value}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="first_name"
                            value={responseData.first_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="First Name *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.first_name.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={responseData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Email *"
                          />
                          {error.trim().length > 0 &&
                            responseData.email.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={10}
                            maxLength={10}
                            name="gender"
                            value={responseData.gender}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Gender *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.gender.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            value={responseData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Password *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.password.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={10}
                            maxLength={10}
                            name="company_name"
                            value={responseData.company_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Company Name *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.company_name.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="year_of_experience"
                              value={responseData.year_of_experience}
                              onChange={handleChange}
                              placeholder="Total Training experience(If any)"
                              defaultValue=""
                            />
                            {error.trim().length > 0 &&
                              responseData.year_of_experience.trim().length ===
                                0 && (
                                <p className="text-danger mb-0 p-0">{error}</p>
                              )}
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              name="city"
                              value={responseData.city}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="City*"
                              defaultValue=""
                            />
                            {error.trim().length > 0 &&
                              responseData.city.trim().length === 0 && (
                                <p className="text-danger mb-0 p-0">{error}</p>
                              )}
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              // pincode
                              name="pincode"
                              value={responseData.pincode}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Pincode*"
                              defaultValue=""
                            />
                            {error.trim().length > 0 &&
                              responseData.pincode.trim().length === 0 && (
                                <p className="text-danger mb-0 p-0">{error}</p>
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <br/>
                        <br/>
                        <div className="form-group">
                          <input
                            type="text"
                            // last_name
                            name="last_name"
                            value={responseData.last_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Last Name *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.last_name.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={13}
                            maxLength={13}
                            name="mobile_number"
                            value={responseData.mobile_number}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Phone *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.mobile_number.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="date"
                            minLength={10}
                            maxLength={10}
                            name="date_of_birth"
                            value={responseData.date_of_birth}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Date of Birth *"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.date_of_birth.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={(e) =>
                              handleConfirmPassword(e.target.value)
                            }
                            defaultValue=""
                          />
                          {confirmPassword.trim().length > 0 && (
                            <p className="text-danger mb-0 p-0">
                              {confirm_password_error}
                            </p>
                          )}
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            name="country"
                            value={responseData.country}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Country*"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.country.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="state"
                            value={responseData.state}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="State*"
                            defaultValue=""
                          />
                          {error.trim().length > 0 &&
                            responseData.state.trim().length === 0 && (
                              <p className="text-danger mb-0 p-0">{error}</p>
                            )}
                        </div>

                        <button
                          type="submit"
                          className="btnRegister"
                          // defaultValue="Register"
                          onClick={() => handleConfirmationForRegister()}
                          disabled={loading}
                        >
                          {loading ? (
                            <Oval
                              height={20}
                              width={20}
                              color="#fff"
                              visible={true}
                              ariaLabel="oval-loading"
                              secondaryColor="#ccc"
                              strokeWidth={2}
                              strokeWidthSecondary={2}
                            />
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row justify-content-md-center">
          
        </div> */}
      </>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import readybellIcon from "../assets/images/mainlogo.png";
import axios from "axios";

const Registration = () => {
  const [radioSelecter, setRadioSelecter] = useState("Student");
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // // if ((name === "name") || (name === "gender") || (name === "address1") || (name === "district") || (name === "pinCode") || (name === "department") || (name === "borough") || (name === "ward") || (name === "epicNo") || (name === "religion") || (name === "caste") || (name === "bankName") || (name === "categoryDesc") || (name === "bankAccountNo") || (name === "bankIfsc") || (name === "ifscCode")) {
    // //     setError("");
    // // }

    // if ((name === "firstName") ||
    //     (name === "lastName") ||
    //     (name === "fatherName") ||
    //     (name === "dateOfBirth") ||
    //     (name === "gender") ||
    //     (name === "hrmMaritalStatus") ||
    //     // (name === "hrmSpouseName") ||
    //     (name === "hrmRecThrough") ||
    //     (name === "caste") ||
    //     (name === "religion") ||
    //     (name === "phoneNo") ||
    //     (name === "panNo") ||
    //     (name === "address1") ||
    //     (name === "pinCode") ||
    //     (name === "entryMode") ||
    //     // (name === "bankAccountNo") ||
    //     (name === "selectedPartyCodeSearched") ||
    //     (name === "agencyCode") ||
    //     (name === "partyCode") ||
    //     // (name === "department") ||
    //     (name === "workingUnit") ||
    //     // (name === "wardSectionPart") ||
    //     // (name === "payeeDepartment") ||
    //     (name === "designation") ||
    //     (name === "kmcJoiningDate") ||
    //     // (name === "presentDeptJoiningDate") ||
    //     // (name === "tenureStartDate") ||
    //     (name === "tenureEndDate") ||
    //     (name === "orderNo") ||
    //     (name === "orderDate") ||
    //     (name === "orderByWhom") ||
    //     (name === "epicNo")
    // ) {
    //     setError("");
    //     setErrorSaveAsDraft("");
    //     // setErrorPanValidation("");

    //     // setPinCodeValidation("");
    // }

    // if (name === "entryMode") {
    //     setEmployeeType(event.target[event.target.selectedIndex].id);
    //     getDesignation(event.target[event.target.selectedIndex].id);
    //     getEngagementDetails(value);
    //     getRemunerationTypeDetails(value);
    //     if (value === "WBUES") {
    //         getPartyCodeFromEngagementType(event.target[event.target.selectedIndex].id);
    //         setSelectedPayeeDepartmentSearched("FINANCE AND ACCOUNTS")
    //     }
    //     if (value === "SSK") {
    //         getPartyCodeFromEngagementType(event.target[event.target.selectedIndex].id);
    //         // setSelectedPayeeDepartmentSearched("FINANCE AND ACCOUNTS")
    //     }
    //     if (value === "UPHCS") {
    //         getPartyCodeFromEngagementType(event.target[event.target.selectedIndex].id);
    //         // setSelectedPayeeDepartmentSearched("FINANCE AND ACCOUNTS")
    //     }
    //     if (value === "Claim Free") {
    //         getPartyCodeFromEngagementType(event.target[event.target.selectedIndex].id);
    //         // setSelectedPayeeDepartmentSearched("FINANCE AND ACCOUNTS")
    //     }
    //     if (value === "UPHCS") {
    //         getBorough("640002");
    //         setDeptCode("640002");
    //     }
    //     if (value === "SSK") {
    //         getBorough("520001");
    //         setDeptCode("520001");
    //     }
    // }

    // // if (name === 'phoneNo') {
    // //     const newVal = value.length > 10 ? value.slice(0, 10) : value;
    // //     setLabourMasterData({ ...labourMasterData, "phoneNo": newVal});
    // // }

    // // if (name === 'pinCode') {
    // //     const newVal = value.length > 6 ? value.slice(0, 6) : value;
    // //     labourMasterData.pinCode = newVal;
    // // }

    // setBankAccountNumberValidation("");
    // if (name === "bankAccountNo") {
    //     if (value < 8 || value >= 18) {
    //         setBankAccountNumberValidation("Account number can't be greater or less than the desired strength");
    //     }
    // }

    // if (name === "workingUnit") {
    //     // api here
    //     getWard(value);
    //     setWorkingUnitDesc(event.target[event.target.selectedIndex].id)
    // }

    // if (name === "designation") {
    //     // getRemuneration(value);
    //     getRemuneration(event.target[event.target.selectedIndex].id);
    //     setDesignationCode(event.target[event.target.selectedIndex].id)
    // }

    // if (name === "partyCode") {
    //     setPartyName(event.target[event.target.selectedIndex].id);
    // }
    // if (name === "partyCode") {
    //     setPartyName(event.target[event.target.selectedIndex].id);
    // }

    // var re = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/
    // setPanNumberValidationErr("");
    // if (name === "panNo" && !value.match(re)) {
    //     setPanNumberValidationErr("PAN number format is not correct")
    // }

    // var epicRe = /^[A-Z]{3}[0-9]{7}$/
    // setEpicNumberValidationErr("");
    // if (name === "epicNo" && !value.match(epicRe)) {
    //     setEpicNumberValidationErr("EPIC number format is not correct")
    // }

    // setPinCodeValidationErr("");
    // if (name === "pinCode") {
    //     setPinCodeValidationErr("Pincode must be of 6 digits")
    // }

    // if (name === "kmcJoiningDate") {
    //     setLabourMasterData({ ...labourMasterData, "kmcJoiningDate": value, "presentDeptJoiningDate": value, "tenureStartDate": value });
    //     // setLabourMasterData({ ...labourMasterData, "presentDeptJoiningDate": value });
    // } else {

    setResponseData({ ...responseData, [name]: value });

    // }
  };

  // const registerUser = async (id) => {
  //   // setLoading(true);
  //   let config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const detailRequest = {
  //     email: responseData.email,
  //     mobile_number: responseData.mobile_number,
  //     password: responseData.password,
  //     confirm_password: responseData.confirm_password,
  //     first_name: responseData.first_name,
  //     middle_name: responseData.middle_name,
  //     last_name: responseData.last_name,
  //     gender: responseData.gender,
  //     university_name: responseData.university_name,
  //     country: responseData.country,
  //     city: responseData.city,
  //     state: responseData.state,
  //     pincode: responseData.pincode,
  //     user_category: responseData.user_category,
  //     company_name: responseData.company_name,
  //     year_of_experience: responseData.year_of_experience,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:5000//readybell_user_register`,
  //       detailRequest,
  //       config
  //     );
  //   } catch (error) {
  //     // swal({
  //     //     title: "Error",
  //     //     text: `${error}`,
  //     //     icon: "error",
  //     //     closeOnClickOutside: false
  //     // })
  //     console.log(`Error: ${error}`);
  //   } finally {
  //     // setLoading(false);
  //   }
  // };

  const registerUser = async () => {
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
      user_category: responseData.user_category,
      company_name: responseData.company_name,
      year_of_experience: responseData.year_of_experience,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/readybell_user_register", // Removed extra slash
        detailRequest,
        config
      );
      console.log("Registration successful:", response.data);
      // Handle successful registration response
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration error
    }
  };

//   -- public.readybell_user_registration definition

// -- Drop table

// -- DROP TABLE public.readybell_user_registration;

// CREATE TABLE public.readybell_user_registration (
// 	user_id serial4 NOT NULL,
// 	email varchar(255) NOT NULL,
// 	mobile_number varchar(13) NOT NULL,
// 	"password" varchar(255) NOT NULL,
// 	first_name varchar(255) NOT NULL,
// 	middle_name varchar(255) NULL,
// 	last_name varchar(255) NULL,
// 	gender varchar(1) NULL,
// 	university_name varchar(100) NULL,
// 	country varchar(50) NULL,
// 	city varchar(50) NULL,
// 	state varchar(50) NULL,
// 	pincode varchar(6) NULL,
// 	user_category varchar(20) NULL,
// 	company_name varchar(100) NULL,
// 	year_of_experience varchar(2) NULL,
// 	active_flag bool NULL DEFAULT true,
// 	created_by varchar(255) NULL DEFAULT NULL::character varying,
// 	created_date timestamp NULL,
// 	modified_date timestamp NULL,
// 	modified_by varchar(255) NULL DEFAULT NULL::character varying,
// 	CONSTRAINT readybell_user_registration_email_key UNIQUE (email),
// 	CONSTRAINT readybell_user_registration_mobile_number_check CHECK ((length((mobile_number)::text) = 13)),
// 	CONSTRAINT readybell_user_registration_pkey PRIMARY KEY (user_id)
// );

// CREATE TABLE public.readybell_course_mst (
//   course_id serial4 NOT NULL,
//   course_name varchar(255) NOT NULL,
//   course_fees varchar(100) NULL,
//   active_flag bool NULL DEFAULT true,
//   created_by varchar(255) NULL DEFAULT NULL::character varying,
//   created_date timestamp NULL,
//   modified_date timestamp NULL,
//   modified_by varchar(255) NULL DEFAULT NULL::character varying,
//   CONSTRAINT readybell_course_mst_pkey PRIMARY KEY (course_id) -- Removed extra space before (course_id)
// );


  return (
    <div>
      <>
        <h2
          className="section-heading"
          style={{ textAlign: "center", marginTop: "2%", position: "initial" }}
        >
          Register in one step
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
                        onChange={(e) => setRadioSelecter(e.target.value)}
                      />
                      <label className="form-label" style={{ padding: "10px" }}>
                        Student
                      </label>
                      <input
                        name="abc"
                        type="radio"
                        value="Proffesional"
                        onChange={(e) => setRadioSelecter(e.target.value)}
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
                          <input
                            type="text"
                            name="first_name"
                            value={responseData.first_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="First Name *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={responseData.email}
                            onChange={handleChange}
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
                            name="gender"
                            value={responseData.gender}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Gender *"
                            defaultValue=""
                          />
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
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
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
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            // minLength={10}
                            // maxLength={10}
                            name="mobile_number"
                            value={responseData.mobile_number}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Phone *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="date"
                            minLength={10}
                            maxLength={10}
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Date of Birth *"
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
                          <input
                            type="text"
                            name="country"
                            value={responseData.country}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Country*"
                            defaultValue=""
                          />
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
                        </div>

                        <button
                          type="submit"
                          className="btnRegister"
                          // defaultValue="Register"
                          onClick={() => registerUser()}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  )}

                  {radioSelecter === "Proffesional" && (
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
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Gender *"
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
                            type="text"
                            minLength={10}
                            maxLength={10}
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Company Name *"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Total Training experience(If any)"
                              defaultValue=""
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City*"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Pincode*"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
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
                          <input
                            type="date"
                            minLength={10}
                            maxLength={10}
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Date of Birth *"
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Years of Experience*"
                            defaultValue=""
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Country*"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State*"
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

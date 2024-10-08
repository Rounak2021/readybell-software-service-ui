import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import logo from "../assets/images/mainlogo2.PNG";
import Background from "./ParticleBackground";
import { Oval } from "react-loader-spinner"; // Import the spinner

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  // const loginUser = async () => {
  //   let config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const detailRequest = {
  //     email: email,
  //     password: password,
  //   };

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/login",
  //       detailRequest,
  //       config
  //     );
  //     if (response?.data?.status === 200) {
  //       const name = `${response?.data?.first_name} + ${response?.data?.last_name}`;
  //       localStorage.setItem("email", name);
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 5000);
  //       swal({
  //         title: "Success",
  //         text: "You have been logged in successfully",
  //         icon: "success",
  //         closeOnClickOutside: false,
  //       }).then((willDelete) => {
  //         if (willDelete) {
  //           navigate("/about");
  //         }
  //       });
  //     }
  //     if (response?.data?.status === 401) {
  //       const a = response?.data?.message;
  //       swal({
  //         title: "Warning",
  //         text: { a },
  //         icon: "warning",
  //         closeOnClickOutside: false,
  //       });
  //     }

  //     // Handle successful registration response
  //   } catch (error) {
  //     console.error("Registration failed:", error);
  //     // Handle registration error
  //   }
  // };

  const loginUser = async () => {
    setLoading(true); // Show spinner
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const detailRequest = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        detailRequest,
        config
      );
      if (response?.data?.status === 200) {
        const name = `${response?.data?.first_name} ${response?.data?.last_name}`;
        localStorage.setItem("email", name);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        swal({
          title: "Success",
          text: "You have been logged in successfully",
          icon: "success",
          closeOnClickOutside: false,
        }).then((willDelete) => {
          if (willDelete) {
            navigate("/about");
          }
        });
      }
      if (response?.data?.status === 401) {
        setLoading(false);
        const message = response?.data?.message;
        swal({
          title: "Warning",
          text: message,
          icon: "warning",
          closeOnClickOutside: false,
        });
      }

      // Handle successful registration response
    } catch (error) {
      setLoading(false); // Hide spinner
      console.error("Registration failed:", error);
      // Handle registration error
    }
  };

  return (
    <div>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100" data-aos="fade-in">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center mb-4">
                        <img src={logo} style={{ width: 185 }} alt="logo" />
                      </div>

                      <p>Please login to your account</p>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email id"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          onClick={loginUser}
                          disabled={loading} // Disable button while loading
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
                            "Log in"
                          )}
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">
                          Don't have an account?{" "}
                          <Link to="/register">Sign Up</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    {/* <video
                      autoPlay
                      loop
                      muted
                      className="video-bg"
                      style={{
                        position: "absolute",
                        width: "96%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 2,
                        opacity: 0.25,
                      }}
                    >
                      <source
                        src="https://videos.pexels.com/video-files/2887463/2887463-sd_640_360_25fps.mp4"
                        type="video/mp4"
                      />
                    </video> */}
                    <Background />
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <b>
                        <h4
                          className="mb-4"
                          data-aos="fade-in"
                          style={{ color: "#0a0a3c" }}
                        >
                          We are more than just to upskill you
                        </h4>
                      </b>
                      <b>
                        <h2
                          className="gradient-text small mb-0"
                          data-aos="fade-in"
                          style={{
                            fontSize: "16px",
                            textAlign: "justify",
                            fontWeight: "bolder",
                          }}
                        >
                          Readybell is swiftly emerging as a frontrunner in the
                          training and consulting domain. With a core focus on
                          advancing knowledge and skills in cutting-edge digital
                          technologies, Readybell caters to a global audience of
                          students and professionals. Our commitment lies in
                          delivering top-tier classroom and online training,
                          alongside comprehensive project assistance, in fields
                          such as Artificial Intelligence (AI), Machine Learning
                          (ML), Data Science, Generative AI, and Agile Project
                          Management.
                        </h2>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

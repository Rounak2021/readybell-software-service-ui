import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_i1o9kbb',
      'template_9byr6oj',
      formState,
      'XjJmG8Lg1JZkwBqu_'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message, please try again.');
    });

    // Clear form after submission
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <section className="semi_dark_bg py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7">
              <h5 className="mb-0">Contact Us</h5>
            </div>
            <div className="col-md-5">
              <span>
                <Link className="text-dark" to="/" data-aos="fade-up">
                  Home
                </Link>{" "}
                - Contact us
              </span>
            </div>
          </div>
        </div>
      </section>
      <div
        className="page-wrapper section-pt"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-3d-5">
              <div className="main-content">
                <div className="contact-from-wrapper-2">
                  <h2 className="section-heading">Get In Touch</h2>
                  <form onSubmit={handleSubmit} className="contact-form mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Your Name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Enter Subject"
                            value={formState.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            cols={30}
                            rows={6}
                            placeholder="Write Your Message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mx-auto text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="highlights-section hover_bg text-white p-4">
                <h4>
                  Don’t Hesitate to contact with us for any kind of information
                </h4>
                <ul>
                  <li>
                    <i className="fas fa-paper-plane" /> AH-12, Saltlake Sector
                    II, Kolkata 700091, West Bengal, India
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt" /> +91 9674552097 /
                    9874878446 / 033-79642872
                  </li>
                  <li>
                    <i className="fas fa-envelope" />{" "}
                    <a href="mailto:info@readybellsoftware.com">
                      info@readybellsoftware.com
                    </a>
                  </li>
                </ul>
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-area section-ptb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="embeded-map-area">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14734.85646368788!2d88.41855518735595!3d22.58979332426601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275961599fe63%3A0x53ffbf01352bb942!2sSector%20II%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1624282005138!5m2!1sen!2sin"
                        width="100%"
                        height={500}
                        id="gmap_canvas"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

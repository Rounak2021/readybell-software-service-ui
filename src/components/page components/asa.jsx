import { Sidecard } from "./side-card";

export const Asa = () => (
  <>
    <section className="semi_dark_bg py-3" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-7">
            <h5 className="mb-0">CCIE SECURITY ASA</h5>
          </div>
          <div className="col-md-5">
            <span>
              <a className="text-dark" href="index.html">
                Home
              </a>{" "}
              - CCIE SECURITY ASA
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
                <h2>CCIE SECURITY ASA</h2>
              </div>
              <p>
                Readybell offers the most comprehensive CISCO Certification
                Training Courses in Kolkata for all networking professionals and
                aspiring students. Our CISCO training has been specially
                designed to provide in-depth knowledge of Cisco technology. We
                have a dedicated highly experienced certified pool of CISCO
                trainers.
              </p>
              <img
                src="assets/images/about.jpg"
                alt=""
                className="float-right ml-3 mb-2 img-fluid"
              />
              <h4>Below is the course outline of CCIE SECURITY ASA Course:</h4>
              <ol>
                <li>
                  Basics of ASA
                  <ul>
                    <li>Packet Flow</li>
                  </ul>
                </li>
                <li>
                  Translation
                  <ul>
                    <li>Dynamic NAT </li>
                    <li>Dynamic PAT </li>
                    <li>Interface Level Command</li>
                    <li>Static NAT </li>
                    <li>Static PAT </li>
                    <li>Identity NAT </li>
                    <li>Policy NAT/manual NAT/duel NAT </li>
                    <li>Destination NAT </li>
                  </ul>
                </li>
                <li>
                  Multi-Context
                  <ul>
                    <li>Multi-context on ASA</li>
                  </ul>
                </li>
                <li>
                  HA ON ASA Firewall
                  <ul>
                    <li>Interface Level </li>
                    <li>ISP Level </li>
                    <li>
                      Hardware Level
                      <ul>
                        <li>Active/Standby with DUEL Failover Link</li>
                        <li>Active Active with DUEL Failover Link </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Transparent Firewall
                  <ul>
                    <li>Configuring Management on a Transparent FW </li>
                    <li>Configure inside &amp; outside Interface </li>
                    <li>Configure default &amp; static route</li>
                    <li>Allow DYNAMIC Protocols EIGRP,RIP,OSPF</li>
                  </ul>
                </li>
                <li>
                  Modular Policy Framework
                  <ul>
                    <li>L3, L4 Inspection</li>
                    <li>L7 Inspection</li>
                  </ul>
                </li>
                <li>
                  Clustering
                  <ul>
                    <li>Port Channels</li>
                    <li>Clustering – Interface spanned Mode </li>
                  </ul>
                </li>
                <li>
                  AAA on ACS
                  <ul>
                    <li>Device Administration </li>
                    <li>Authentication</li>
                    <li>Exec Level Authorization </li>
                    <li>Command Level Authorization</li>
                    <li>Accounting</li>
                  </ul>
                </li>
              </ol>
              <p>
                <b>This Course is ideal for:</b> Those who want to obtain CCIE
                Certification{" "}
              </p>
              <p>Pre-Requisite of this course:</p>
              <ul>
                <li>Basic Cisco CCNP knowledge required </li>
                <li>Basic ASA knowledge required </li>
                <li>VPN specific knowledge for working professionals </li>
              </ul>
              <p>
                <b>Total Course Duration:</b> 60 Hours{" "}
              </p>
              <p>
                <b>Course Mode:</b> Both Theory and Lab 100% Online{" "}
              </p>
              {/*<p><b>Course Fees:</b> INR 27,999/- including all taxes and duties, 100% Online Training including Course Materials, Lab Access. Fees excludes Certification Exam voucher cost.  </p>*/}
              <h5>Job prospects after this course: </h5>
              <ul>
                <li>Network Engineer.</li>
                <li>Sr. Network Engineer. </li>
                <li>Network Administrator (IT) </li>
                <li>Systems Engineer (Computer Networking/IT) </li>
                <li>Senior Systems Engineer (Computer Networking/IT)</li>
              </ul>
            </div>
            <Sidecard />
          </div>
        </div>
      </div>
    </section>
  </>
);

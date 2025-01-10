import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import swal from "sweetalert";
import logo from "../assets/images/mainlogo2.PNG";

import file1 from "../assets/images/pdf/New_Courses/PMI - PMP Certification PDU Only Training.pdf";
import file2 from "../assets/images/pdf/New_Courses/PMI - PMP Certification PDU + Exam Prep.pdf";
import file3 from "../assets/images/pdf/New_Courses/PMI - AGILE CERTIFIED PRACTITIONER (ACP).pdf";

import file4 from "../assets/images/pdf/New_Courses/Microsoft Certification - Microsoft Azure AI Fundamentals AI-900T00-A.pdf";
import file5 from "../assets/images/pdf/New_Courses/Microsoft Certification - AI-102T00-A Designing and Implementing a Microsoft Azure AI Solution.pdf";
import file6 from "../assets/images/pdf/New_Courses/Microsoft Copilot - AI in Excel, Word, PowerPoint & More.pdf";
import file7 from "../assets/images/pdf/New_Courses/Build Next-Generation AI Solutions with Generative AI.pdf";
import file8 from "../assets/images/pdf/New_Courses/Data Analyst.pdf";

import file9 from "../assets/images/pdf/New_Courses/Python Programming - Beginner to Expert.pdf";
import file10 from "../assets/images/pdf/New_Courses/Java Programming - Beginner to Expert.pdf";

import file11 from "../assets/images/pdf/New_Courses/AWS Certified Cloud Practitioner (CLF-C02).pdf";
import file12 from "../assets/images/pdf/New_Courses/AWS Certified Solutions Architect – Associate (SAA-C03).pdf";
import file13 from "../assets/images/pdf/New_Courses/AWS Certified Solutions Architect - Professional (SAP-C02).pdf";
import file14 from "../assets/images/pdf/New_Courses/AWS Certified SysOps Administrator – Associate (SOA-C02).pdf";
import file15 from "../assets/images/pdf/New_Courses/AWS Certified Developer - Associate (DVA-C02).pdf";
import file16 from "../assets/images/pdf/New_Courses/DevOps Engineer - Professional (DOP-C02).pdf";
import file17 from "../assets/images/pdf/New_Courses/AWS Certified Security - Specialty (SCS-C02).pdf";
import file18 from "../assets/images/pdf/New_Courses/AWS Certified Advanced Networking - Specialty (ANS-C01).pdf";

import file19 from "../assets/images/pdf/New_Courses/AZ-900 Microsoft Azure Fundamentals.pdf";
import file20 from "../assets/images/pdf/New_Courses/AZ-104 Microsoft Azure Administrator.pdf";
import file21 from "../assets/images/pdf/New_Courses/AZ-305 Designing Microsoft Azure Infrastructure Solutions.pdf";
import file22 from "../assets/images/pdf/New_Courses/AZ-204 Microsoft Azure Developer Associate.pdf";
import file23 from "../assets/images/pdf/New_Courses/AZ-400 Microsoft Azure DevOps Solutions.pdf";
import file24 from "../assets/images/pdf/New_Courses/AZ-500 Microsoft Azure Security Technologies.pdf";
import file25 from "../assets/images/pdf/New_Courses/AZ-700 Microsoft Azure Networking Solutions.pdf";

import file26 from "../assets/images/pdf/New_Courses/Associate Cloud Engineer.pdf";
import file27 from "../assets/images/pdf/New_Courses/Professional Cloud Architect.pdf";
import file28 from "../assets/images/pdf/New_Courses/Professional Cloud Security Engineer.pdf";
import file29 from "../assets/images/pdf/New_Courses/G Suite.pdf";

import file30 from "../assets/images/pdf/New_Courses/VCP-DCV VMware Certified Professional - Data Center Virtualization (2V0-21.23).pdf";

import file31 from "../assets/images/pdf/New_Courses/Cisco Certified Technician Routing and Switching (100-490 RSTECH) Certification Training.pdf";
import file32 from "../assets/images/pdf/New_Courses/Cisco Certified Technician (CCT) Data Center (DCTECH 010-151) Certification Training.pdf";

import file33 from "../assets/images/pdf/New_Courses/Cisco Certified Network Associate - 200-301 CCNA.pdf";
import file34 from "../assets/images/pdf/New_Courses/Cisco Certified CyberOps Associate (200-201 CBROPS).pdf";

import file35 from "../assets/images/pdf/New_Courses/Cisco Certified Network Professional (CCNP) Enterprise.pdf";
import file36 from "../assets/images/pdf/New_Courses/Cisco Certified Network Professional (CCNP) Data Center.pdf";
import file37 from "../assets/images/pdf/New_Courses/Cisco Certified Network Professional (CCNP) Security.pdf";

import file38 from "../assets/images/pdf/New_Courses/CCIE ENTERPRISE INFRASTRUCTURE v1.1.pdf";
import file39 from "../assets/images/pdf/New_Courses/CCIE Data Center v3.1.pdf";
import file40 from "../assets/images/pdf/New_Courses/CCIE Security v6.1.pdf";

import file41 from "../assets/images/pdf/New_Courses/Cisco Advanced Routing.pdf";
import file42 from "../assets/images/pdf/New_Courses/Designing QoS for IP and MPLS Networks.pdf";
import file43 from "../assets/images/pdf/New_Courses/Cisco Nexus 9k Switch with APICACI.pdf";

import file44 from "../assets/images/pdf/New_Courses/Cisco Catalyst SD-WAN Operation and Deployment.pdf";
import file45 from "../assets/images/pdf/New_Courses/Implementing Cisco SD-WAN Solutions v2.0 (ENSDWI 300-415).pdf";

import file46 from "../assets/images/pdf/New_Courses/Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0.pdf";
import file47 from "../assets/images/pdf/New_Courses/Securing Networks with Cisco Firepower Next-Generation IPS (SSFIPS4) 4.0 (SSFIPS4).pdf";

import file48 from "../assets/images/pdf/New_Courses/Junos, Associate (JNCIA-Junos).pdf";
import file49 from "../assets/images/pdf/New_Courses/Security, Associate (JNCIA-SEC).pdf";

import file50 from "../assets/images/pdf/New_Courses/Security, Specialist (JNCIS-SEC).pdf";
import file51 from "../assets/images/pdf/New_Courses/Enterprise Routing and Switching, Specialist (JNCIS-ENT).pdf";
import file52 from "../assets/images/pdf/New_Courses/Service Provider Routing and Switching, Specialist (JNCIS-SP).pdf";

import file53 from "../assets/images/pdf/New_Courses/Security, Professional (JNCIP-SEC).pdf";
import file54 from "../assets/images/pdf/New_Courses/Juniper Certified Professional Enterprise Routing and Switching (JNCIP-ENT).pdf";
import file55 from "../assets/images/pdf/New_Courses/Service Provider Routing and Switching, Professional (JNCIP-SP).pdf";

import file56 from "../assets/images/pdf/New_Courses/CompTIA A+ Certification.pdf";
import file57 from "../assets/images/pdf/New_Courses/CompTIA Network+ Certification Training (N10-008).pdf";

import file58 from "../assets/images/pdf/New_Courses/Palo Alto Networks Certified Network Security Administrator (PCNSA).pdf";
import file59 from "../assets/images/pdf/New_Courses/Palo Alto Networks Certified Network Security Engineer (PCNSE).pdf";

import file60 from "../assets/images/pdf/New_Courses/Fortinet NSE 4 Network Security Professional.pdf";


import file61 from "../assets/images/pdf/New_Courses/Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0.pdf";
import file62 from "../assets/images/pdf/New_Courses/Securing Networks with Cisco Firepower Next-Generation IPS (SSFIPS4) 4.0 (SSFIPS4).pdf";


import file63 from "../assets/images/pdf/New_Courses/Check Point Certified Security Administrator (CCSA) R81.20.pdf";
import file64 from "../assets/images/pdf/New_Courses/Check Point Certified Security Expert (CCSE) R81.20.pdf";
import file65 from "../assets/images/pdf/New_Courses/Check Point Threat Prevention Specialist (CTPS) R81_20.pdf";
import file66 from "../assets/images/pdf/New_Courses/Check Point Next Generation Secure Web Gateway.pdf";


import file67 from "../assets/images/pdf/New_Courses/EC-Council curriculum - Ethical Hacker v13.pdf";

import file68 from "../assets/images/pdf/New_Courses/AZ-800 Administering Windows Server Hybrid Core Infrastructure.pdf";
import file69 from "../assets/images/pdf/New_Courses/AZ-801 Configuring Windows Server Hybrid Advanced Services.pdf";

import file70 from "../assets/images/pdf/New_Courses/Microsoft Exchange Server 2016.pdf";

import file71 from "../assets/images/pdf/New_Courses/Core Linux System Administration.pdf";
import file72 from "../assets/images/pdf/New_Courses/Advanced Linux Administrator.pdf";
import file73 from "../assets/images/pdf/New_Courses/Enterprise Linux Systems Administration (L-250).pdf";
import file74 from "../assets/images/pdf/New_Courses/Enterprise Linux Systems Administration (L-250).pdf";
import file75 from "../assets/images/pdf/New_Courses/MS-102 Microsoft 365 Administrator.pdf";
import file76 from "../assets/images/pdf/New_Courses/Microsoft Windows Endpoint Administrator (MD-102).pdf";
import file77 from "../assets/images/pdf/New_Courses/Coming Soon.pdf";

import pmiLogo from "../assets/images/pmi_logo.jpeg"

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    swal({
      title: "Confirmation",
      text: "Are you sure you want to logout?",
      icon: "warning",
      buttons: ["No", "Yes"],
      closeOnClickOutside: false,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleSubDropdown = () => {
    setSubDropdownOpen(!subDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHover = (event) => {
    const submenu = event.currentTarget.querySelector(".dropdown-menu");
    if (!submenu) return;

    // Reset positioning to default for recalculations
    submenu.style.left = "50%";
    submenu.style.right = "auto";

    // Get bounding rectangle of the submenu
    const rect = submenu.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // If the submenu overflows to the right, align it to the left
    if (rect.right > viewportWidth) {
      submenu.style.left = "auto";
      submenu.style.right = "30%";
    }
  };

  const menuStructure = [

    {
      title: "About Us",
      submenu: [
        { title: "About Us", link: "/about" },
        { title: "Why Readybell", link: "/why-readybell" },
        { title: "Our Team", link: "/team" },
        { title: "Our Affiliations", link: "/affiliations" },
      ],
    },
    {
      title: "Project Management",
      submenu: [
        { title: "PMI - PMP Certification PDU Only Training", link: `${file1}` },
        { title: "PMI - PMP Certification PDU + Exam Prep", link: `${file2}` },
        { title: "PMI-ACP (AGILE CERTIFIED PRACTITIONER) CERTIFICATION PDU + Exam Prep", link: `${file3}` },
      ],
    },
    {
      title: "CISCO, Juniper, CompTIA",
      submenu: [
        {
          title: "CISCO Certifications",
          submenu: [
            {
              title: "Entry",
              submenu: [{ title: "CCT Routing and Switching", link: `${file31}` }, { title: "CCT Data Center", link: `${file32}` }],
            },
            {
              title: "Associate",
              submenu: [
                { title: "Cisco Certified Network Associate (CCNA 200-301)", link: `${file33}` },
                { title: "CyberOps Associate", link: `${file34}` },
              ],
            },
            {
              title: "Professional",
              submenu: [
                { title: "CCNP Enterprise", link: `${file35}` },
                { title: "CCNP Data Center", link: `${file36}` },
                { title: "CCNP Security", link: `${file37}` },
              ],
            },
            {
              title: "Expert",
              submenu: [
                { title: "CCIE Enterprise Infrastructure", link: `${file38}` },
                { title: "CCIE Data Center", link: `${file39}` },
                { title: "CCIE Security", link: `${file40}` },
              ],
            },
            {
              title: "Advanced Technology",
              submenu: [
                { title: "Advanced IP Routing", link: `${file41}` },
                { title: "MPLS-QoS", link: `${file42}` },
                { title: "Configuring Cisco Nexus 9K Switches in ACI Mode", link: `${file43}` },
              ],
            },
            {
              title: "Cisco Catalyst SD-WAN",
              submenu: [
                { title: "Cisco Catalyst SD-WAN Operation and Deployment", link: `${file44}` },
                { title: "Implementing Cisco SD-WAN Solutions v2.0 (ENSDWI 300-415)", link: `${file45}` },
              ],
            },
            {
              title: "Cisco Firepower (FTD)",
              submenu: [
                { title: "Next Generation Firewall (SSNGFW)", link: `${file46}` },
                { title: "Next-Generation IPS (SSFIPS)", link: `${file47}` },
              ],
            },
            // Add other AWS subcategories similarly
          ],
        },
        {
          title: "Juniper Certifications",
          submenu: [
            {
              title: "Associate Level (JNCIA)",
              submenu: [{ title: "JNCIA-Junos", link: `${file48}` }, { title: "JNCIA-SEC", link: `${file49}` }],
            },
            {
              title: "Specialist Level (JNCIS)",
              submenu: [
                { title: "JNCIS-SEC (Security)", link: `${file50}` },
                { title: "JNCIS-ENT (Routing and Switching)", link: `${file51}` },
                { title: "JNCIS-SP (Service Provider)", link: `${file52}` },
              ],
            },
            {
              title: "Professional Level (JNCIP)",
              submenu: [
                { title: "JNCIP-SEC (Security)", link: `${file53}` },
                { title: "JNCIP-ENT (Routing and Switching)", link: `${file54}` },
                { title: "JNCIP-SP (Service Provider)", link: `${file55}` },
              ],
            },

            // Add other AWS subcategories similarly
          ],
        },
        {
          title: "CompTIA Certifications",
          submenu: [
            {
              title: "CompTIA A+ Certification", link: `${file56}`
            },
            {
              title: "CompTIA Network+ Certification", link: `${file57}`
            },

            // Add other AWS subcategories similarly
          ],
        },


        // Add Google Cloud and VMware subcategories similarly
      ],
    },
    {
      title: "Cloud & IT",
      submenu: [
        {
          title: "Amazon AWS Cloud Certifications",
          submenu: [
            {
              title: "Cloud Practitioner",
              submenu: [{ title: "AWS Certified Cloud Practitioner (CLF-C02)", link: `${file11}` }],
            },
            {
              title: "Solutions Architect",
              submenu: [
                { title: "AWS Certified Solutions Architect – Associate (SAA-C03)", link: `${file12}` },
                { title: "AWS Certified Solutions Architect - Professional (SAP-C02)", link: `${file13}` },
              ],
            },
            {
              title: "SysOps Administrator",
              submenu: [
                { title: "AWS Certified SysOps Administrator – Associate (SOA-C02)", link: `${file14}` },
              ],
            },
            {
              title: "Developer",
              submenu: [
                { title: "AWS Certified Developer - Associate (DVA-C02)", link: `${file15}` },
                { title: "DevOps Engineer - Professional (DOP-C01)", link: `${file16}` },
              ],
            },
            {
              title: "Specialty Learning",
              submenu: [
                { title: "AWS Certified Security – Specialty (SCS-C02)", link: `${file17}` },
                { title: "AWS Certified Advanced Networking - Specialty (ANS-C01)", link: `${file18}` },
              ],
            },
            // Add other AWS subcategories similarly
          ],
        },
        {
          title: "Microsoft Azure Cloud Certifications",
          submenu: [
            { title: "AZ-900: Microsoft Azure Fundamentals", link: `${file19}` },
            { title: "AZ-104: Microsoft Azure Administrator", link: `${file20}` },
            { title: "AZ-305: Designing Microsoft Azure Infrastructure Solutions", link: `${file21}` },
            { title: "AZ-204: Microsoft Azure Developer Associate", link: `${file22}` },
            { title: "AZ-400: Microsoft Azure DevOps Solutions", link: `${file23}` },
            { title: "AZ-500: Microsoft Azure Security Technologies", link: `${file24}` },
            { title: "AZ-700: Microsoft Azure Networking Solutions", link: `${file25}` },
          ],
        },
        {
          title: "Google Cloud Certifications",
          submenu: [
            { title: "Associate Cloud Engineer", link: `${file26}` },
            { title: "Professional Cloud Architect", link: `${file27}` },
            { title: "Professional Cloud Security Engineer", link: `${file28}` },
            { title: "G Suite Certification", link: `${file29}` },
          ],
        },
        {
          title: "VMware",
          submenu: [
            { title: "VMware Certified Professional-Data Center Virtualization", link: `${file30}` }
          ],
        },
        // Add Google Cloud and VMware subcategories similarly
      ],
    },
    {
      title: "Firewall",
      submenu: [
        {
          title: "Palo Alto Certifications",
          submenu: [
            {
              title: "Palo Alto Networks Certified Network Security Administrator (PCNSA)", link: `${file58}`
            },
            {
              title: "Palo Alto Networks Certified Network Security Engineer (PCNSE)", link: `${file59}`
            },

          ],
        },
        {
          title: "Fortinet Certification",
          submenu: [
            {
              title: "Fortinet NSE 4 Network Security Professional", link: `${file60}`
            },

          ],
        },
        {
          title: "Cisco Firepower (FTD) Certifications",
          submenu: [
            {
              title: "Securing Networks with Cisco Firepower Next-Generation Firewall (SSNGFW) v1.0", link: `${file61}`
            },
            {
              title: "Securing Networks with Cisco Firepower Next-Generation IPS (SSFIPS) v4.0", link: `${file62}`
            },

          ],
        },
        {
          title: "Check Point Certifications",
          submenu: [
            {
              title: "Check Point Certified Security Administration R81.20 (CCSA)", link: `${file63}`
            },
            {
              title: "Check Point Certified Security Expert R81.20 (CCSE)", link: `${file64}`
            },
            {
              title: "Check Point Threat Prevention", link: `${file65}`
            },
            {
              title: "Check Point Secure Web Gateway", link: `${file66}`
            },

          ],
        },

      ],
    },
    
    {
      title: "AI & IoT",
      submenu: [
        { title: "Microsoft Certification - Microsoft Azure AI Fundamentals AI-900T00-A", link: `${file4}` },
        { title: "Microsoft Certification - AI-102T00-A Designing and Implementing a Microsoft Azure AI Solution", link: `${file5}` },
        { title: "Microsoft Copilot - AI in Excel, Word, PowerPoint & More", link: `${file6}` },
        { title: "Advanced Program in Generative AI and Prompt Engineering", link: `${file7}` },
        { title: "AIOT", link: `${file7}` },
        { title: "Data Analyst", link: `${file8}` },
      ],
    },
    {
      title: "Programming",
      submenu: [
        { title: "Python Programming - Beginner to Expert", link: `${file9}` },
        { title: "Java Programming - Beginner to Expert", link: `${file10}` },
        // { title: "MySQL Database Administration", link: `${file11}`  },
      ],
    },

    
    
    {
      title: "Cyber Security", link: `${file67}`
    },
    {
      title: "Windows Server & Linux Admin",
      submenu: [
        {
          title: "Windows Server Hybrid Administrator Associate",
          submenu: [
            { title: "AZ-800: Administering Windows Server Hybrid Core Infrastructure", link: `${file68}` },
            { title: "AZ-801: Configuring Windows Server Hybrid Advanced Services", link: `${file69}` },
          ],
        },
        {
          title: "Exchange Server 2016",
          submenu: [
            { title: "Exchange Server 2016 Administration", link: `${file70}` },
          ],
        },
        {
          title: "Linux Administration",
          submenu: [
            { title: "Core Linux Administration", link: `${file71}` },
            { title: "Advanced Linux Administration", link: `${file72}` },
            { title: "Enterprise Linux Administration- 1", link: `${file73}` },
            { title: "Enterprise Linux Administration- 2", link: `${file74}` },
          ],
        },
      ],
    },
    { title: "VR/AR", link: `${file77}` },
    { title: "Drone Building", link: `${file77}` },
    { title: "Semiconductor and Blockchain", link: `${file77}` },
    { title: "Service Now and RPA", link: `${file77}` },
    { title: "Test Centre", link: "/affiliations" },
    { title: "Contact Us", link: "/contact" },
  ];

  // const renderMenu = (menu) => (
  //   <li
  //     className={`nav-item dropdown ${menu.submenu ? "has-children" : ""}`}
  //     key={menu.title}
  //     onMouseEnter={handleHover}
  //     style={{ position: "relative" }}
  //   >
  //     <Link
  //       className={`nav-link dropdown-toggle`}
  //       to="#"
  //       role="button"
  //       aria-expanded="false"
  //     >
  //       {menu.title}
  //     </Link>
  //     {menu.submenu && (
  //       <ul className="dropdown-menu">
  //         {menu.submenu.map((subMenu) => renderMenu(subMenu))}
  //       </ul>
  //     )}
  //   </li>
  // );
  const renderMenu = (menu) => (
    <li
      className={`nav-item ${menu.submenu ? "dropdown" : ""}`}
      key={menu.title}
      style={{ position: "relative" }}
    >
      {menu.link ? (
        <Link className="nav-link" to={menu.link} target={"_blank"}>
          {menu.title}
        </Link>
      ) : (
        <a className="nav-link dropdown-toggle" href="#" target={"_blank"} role="button">
          {menu.title}
        </a>
      )}
      {menu.submenu && (
        <ul className="dropdown-menu">
          {menu.submenu.map((subMenu) => renderMenu(subMenu))}
        </ul>
      )}
    </li>
  );



  return (
    <>
      <header className="header">
        <div className="header-top dark_2_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-top-content">
                  <div
                    className="contact-info d-flex"
                    style={{
                      color: "white",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p style={{ paddingTop: "1em" }}>
                      <i className="fas fa-mobile-alt" /> +91-9147708045,
                      +91-9674552097
                    </p>
                    <p style={{ paddingTop: "1em" }}>
                      <i className="fas fa-envelope" />{" "}
                      {/* contact@readybellsoftware.com */}
                      contact@readybellsoftware.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_top_area my-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header_top d-flex justify-content-between align-items-center">
                  <div className="site_info d-flex justify-content-between">

                    <div className="single_info">
                      <div className="info_data">
                        <h6 style={{ marginLeft: "6px" }} >PMI Authorized Training Partner</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header_top d-flex justify-content-between align-items-center">
                  <div
                    className="site_logo"
                    style={{ width: "35%", textAlign: "left" }}
                  >
                    <Link to="/">
                      <img
                        src={logo}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "32%" }}
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src="https://prothoughts.co.in/wp-content/uploads/2024/04/ProThoughts-Verify-Badge-1.webp"
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "15%", marginLeft: "15px" }}
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src="https://www.hadartraining.com/wp-content/uploads/2024/04/pearson-vue-authorized-test-center.png"
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "15%", marginLeft: "15px" }}
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src={pmiLogo}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "20%", marginLeft: "17px" }}
                      />
                    </Link>
                  </div>
                  <div className="site_info d-flex justify-content-between">
                    <div className="single_info">
                      <img
                        src="assets/images/location.png"
                        alt="Location"
                        className="img-fluid"
                      />
                      <div className="info_data">
                        <h6>Location</h6>
                        <p>AH-12 ,Saltlake SectorII ,Kolkata ,India 700091</p>
                      </div>
                    </div>
                    <div className="single_info">
                      <img
                        src="assets/images/phone.png"
                        alt="Location"
                        className="img-fluid"
                      />
                      <div className="info_data">
                        <h6>Phone</h6>
                        <p>+91-9147708045, +91-9674552097</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-area bg_dark_mobile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-menu dark_2_bg">
                  {/* <nav className="navbar navbar-expand-lg">
                    <div
                      className="mobile_site_logo d-none"
                      style={{ width: "60%" }}
                    >
                      <Link to="/">
                        <img
                          src="assets/images/mainlogo2.PNG"
                          alt="logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarTogglerDemo01"
                      aria-controls="navbarTogglerDemo01"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={toggleNavbar}
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <div
                      className={`collapse navbar-collapse ${
                        collapsed ? "" : "show"
                      }`}
                      id="navbarTogglerDemo01"
                      data-aos="ease-in"
                    >
                      <ul
                        className="navbar-nav mt-2 mt-lg-0"
                        data-aos="fade-up"
                      >
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            About Us{" "}
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link to="/about" className="dropdown-item">
                              {" "}
                              About Us{" "}
                            </Link>
                            <Link to="/why-readybell" className="dropdown-item">
                              {" "}
                              Why Readybell{" "}
                            </Link>
                            <Link to="/team" className="dropdown-item">
                              {" "}
                              Our Team{" "}
                            </Link>
                            <Link to="/affiliations" className="dropdown-item">
                              {" "}
                              Our Affiliations{" "}
                            </Link>
                          </div>
                        </li>

                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Python
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link
                              to="/python-data-science"
                              className="dropdown-item"
                            >
                              Python for Data Science, AI & Development
                            </Link>
                          </div>
                        </li>

                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Data Analytics
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link to="/data-analyst" className="dropdown-item">
                              Data Analyst
                            </Link>
                          </div>
                        </li>

                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            AI & Gen AI{" "}
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link to="/ai-900t00" className="dropdown-item">
                              {" "}
                              Microsoft Certification - Microsoft Azure AI
                              Fundamentals AI-900T00-A{" "}
                            </Link>
                            <Link to="/ai-102t00" className="dropdown-item">
                              Microsoft Certification - AI-102T00-A - Designing
                              and Implementing a Microsoft Azure AI Solution{" "}
                            </Link>
                            <Link to="/gen-ai" className="dropdown-item">
                              {" "}
                              Build Next-Generation AI Solutions with Generative
                              AI{" "}
                            </Link>
                            <Link to="/ms-copilot" className="dropdown-item">
                              {" "}
                              Microsoft Copilot - AI in Excel, Word, PowerPoint
                              & More{" "}
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            PMI ACP
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <Link to="/pmi-acp" className="dropdown-item">
                              PMI ACP Certification Course
                            </Link>
                          </div>
                        </li>

                        <li>
                          <Link to="/affiliations" className="nav-link">
                            Test Centre
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" className="nav-link">
                            Contact Us
                          </Link>
                        </li>
                        {!localStorage.getItem("email") && (
                          <li>
                            <Link to="/register" className="nav-link">
                              Register
                            </Link>
                          </li>
                        )}
                        <li>
                          {localStorage.getItem("email") ? (
                            <Link onClick={handleLogout} className="nav-link">
                              Welcome {localStorage.getItem("email")}
                            </Link>
                          ) : (
                            <Link to="/login" className="nav-link">
                              Login
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </nav> */}
                  <nav className="navbar navbar-expand-lg container-fluid">
                    <div
                      className="mobile_site_logo d-none"
                      style={{ width: "60%" }}
                    >
                      <Link to="/">
                        <img
                          src="assets/images/mainlogo2.PNG"
                          alt="logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarTogglerDemo01"
                      aria-controls="navbarTogglerDemo01"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={toggleNavbar}
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <div
                      className={`collapse navbar-collapse ${collapsed ? "" : "show"
                        }`}
                      id="navbarTogglerDemo01"
                      data-aos="ease-in"
                    >
                      <ul className="navbar-nav mt-2 mt-lg-0">
                        {menuStructure.map(renderMenu)}
                      </ul>
                    </div>
                  </nav>
                  {/* <nav className="navbar navbar-expand-lg">
                    <div
                      className="mobile_site_logo d-none"
                      style={{ width: "60%" }}
                    >
                      <Link to="/">
                        <img
                          src="assets/images/mainlogo2.PNG"
                          alt="logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarTogglerDemo01"
                      aria-controls="navbarTogglerDemo01"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={toggleNavbar}
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <div
                      className={`collapse navbar-collapse ${collapsed ? "" : "show"
                        }`}
                      id="navbarTogglerDemo01"
                      data-aos="ease-in"
                    >
                      <ul
                        className="navbar-nav mt-2 mt-lg-0"
                        data-aos="fade-up"
                      >
                      </ul>
                    </div>
                  </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="slider-section swiper-container-2">
        <div className="swiper-wrapper">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Artificial Intelligence, Generative AI, Machine
                          Learning, Data Science, Python, Data Analytics,
                          Microsoft Copilot, Gen AI.
                        </h2>

                        <p>
                          We provide premium quality education in the filed of
                          Artificial Intelligence, Generative AI, Machine
                          Learning, Data Science for all levels of personnel
                          starting from experienced working professionals to
                          school level students willing to learn/upgrade/upskill
                          into the field of Artificial Intelligence.
                        </p>
                        {/* <a to="about.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Microsoft Azure AI Certification Courses
                        </h2>
                        <p>
                          We provide Certification Training on Microsoft
                          Certified: Azure AI Fundamentals AI-900T00-A:
                          Microsoft Azure AI Fundamentals (for beginners) &
                          Microsoft Certified: Azure AI Engineer Associate
                          AI-102T00-A: Designing and Implementing a Microsoft
                          Azure AI Solution
                        </p>
                        {/* <a to="cissp.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Artificial Intelligence Projects and Assignments
                        </h2>
                        <p>
                          We have pool of highly qualified, experienced
                          professionals to design/solution/execute projects and
                          assignments of any level of complexity in the field of
                          Data Science and Artificial Intelligence from any
                          corner of the globe. Please reach out to us to
                          experience our quality output
                        </p>
                        {/* <a to="microsoft-azure.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          PMI PMP and ACP Certification Programs
                        </h2>
                        {/* <p>
                          We provide certification training in PMI Agile
                          Certified Practitioner (PMI-ACP)® & Project Management
                          Professional (PMP)® by highly experienced PMI ACP and
                          PMP Certified professionals having 15+ years of
                          experience in the field
                        </p> */}
                        <p>
                          READYBELL is a PMI (Project Management Institute) Authorised Training Partner (ATP).
                          PMI ATP status is awarded to only established, high-quality, financially-sound project
                          management education providers who are aligned to PMI core values, have mature
                          business practices. READYBELL uses exclusive, PMI-authorized training content,
                          aligned to evolving PMP® &amp; ACP® examination subject areas, for PMP® &amp; ACP®
                          examination preparations.
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Computer Based Test Centre
                        </h2>
                        <p>
                          Readybell is an authorized Computer Based Testing
                          (CBT) Partner of Pearson Vue and PSI Corporation. We
                          have State-of-the-art Computer Based Testing Exam
                          Centre in Salt Lake, Kolkata (India) where we conduct
                          exams of Pearson Vue and PSI clients.
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Advanced Certification Programme in Generative AI and Prompt Engineering
                        </h2>
                        <p>
                          The Advanced Certification Programme in Generative AI and Prompt Engineering is
                          an intensive AI course that equips you with the knowledge and tools to build and
                          deploy cutting-edge Generative AI solutions for real-world language and vision AI
                          tasks. This is a comprehensive curriculum that deep dives from foundational AI/ML to
                          advanced prompt engineering, building a solid grasp of Generative AI concepts and
                          applications.
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Cloud Computing
                        </h2>
                        <p>
                          Become a Cloud Computing expert with our Cloud computing and DevOps
                          Certification Courses. Explore our extensive courses on Microsoft Azure, Amazon
                          AWS and Google Cloud Certification courses. Gain hands-on experience through
                          real-world projects
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Blockchain
                        </h2>
                        <p>
                          READYBELL imparts training for Certified Ethereum Developer Program. An
                          Ethereum developer is one who has expertise in one of the best decentralized
                          blockchain platforms available today, Ethereum. Students acquire the skills required
                          to excel in the world of blockchain networks, having varied knowledge of the basics
                          and advanced concepts of Ethereum. Earning this certification will entitle you to become an Ethereum developer, which is an extremely in-demand skill in the
                          international job market currently.
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Robotic Process Automation
                        </h2>
                        <p>
                          Robotic Process Automation (RPA) is in high demand across many industries, and
                          the market is expected to grow significantly in the coming years. READYBELL offers
                          Beginner, Intermediate and Advanced level courses in RPA with UI Path
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Artificial Internet of Things (AIoT)
                        </h2>
                        <p>
                          Artificial intelligence of things (AIoT) is the combination of artificial intelligence (AI)
                          technologies and the internet of things (IoT) infrastructure. In this course students will
                          learn to innovate solutions by integrating the two powerful emerging technologies –
                          AI and IOT
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Virtual reality (VR) Augmented reality (AR)
                        </h2>
                        <p>
                          Augmented reality (AR) and virtual reality (VR) are both technological experiences
                          that change how digital technology interacts with the physical world. The current job
                          demand for AR VR engineers is 1400% and it&#39;s growing at the rate of 280% every
                          year. In order to exploit these opportunities, students need VR and AR training which
                          READYBELL is providing
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Drone Building
                        </h2>
                        <p>
                          It is the perfect course of college students and drone entrepreneurs, or anyone with a
                          DIY attitude who is interested in building Dones, Operating Drones, Flying Robot
                          things. Students have used this course as a launch pad to create their own drone
                          applications, so it is highly recommend checking it out if you are trying to develop a
                          new drone innovation
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          Semiconductor
                        </h2>
                        <p>
                          UNLOCK YOUR POTENTIAL IN THE SEMICONDUCTOR INDUSTRY. READYBELL
                          is provides a premier learning platform designed for individuals passionate about
                          advancing their careers in the global semiconductor and electronics industry
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          ServiceNow training, Certification and Placement Programs
                        </h2>
                        <p>
                          Explore career opportunities in Japan by attending state-of-the-art Certification
                          Training in ServiceNow. Land in high paying ServiceNow Roles in top companies in
                          Japan/Europe/India. Experience the Japanese language and cultural training and
                          gain hands-on experience with actual Japanese market specific ServiceNow
                          scenarios
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-area-2 height-300 swiper-slide bg-col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slider-content-2 py-lg-5 py-md-4 py-3">
                        <h2 className="display-3">
                          CISCO, Juniper, CompTIA, Firewall, Windows Server, Linux and MS Office 365
                          Certification Courses
                        </h2>
                        <p>
                          READYBELL offers host of CISCO, Juniper, CompTIA, Firewall, Windows Server,
                          Linux and MS Office 365 Certification Training Courses. Our trainers are highly experienced Industry experts having in-depth subject matter expertise and real world
                          hands-on projects.
                        </p>
                        {/* <a to="google-cloud.html" class="button_two mt-2">More Details</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Header;

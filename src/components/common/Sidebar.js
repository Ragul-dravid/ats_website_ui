import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Sidebar({ onLogout }) {
  const handelLogOutClick = () => {
    onLogout();
  };
  const [leadMenuOpen] = useState(false);
  // const [reportMenuOpen, setReportMenuOpen] = useState(false);
  // const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  // const [referMenuOpen, setReferMenuOpen] = useState(false);
  const [activeSubmenu] = useState(null);
  // const [activeReportSubmenu, setActiveReportSubmenu] = useState(null);
  // const [activeReferSubmenu, setActiveReferSubmenu] = useState(null);

  // const toggleLeadMenu = () => {
  //   setLeadMenuOpen(!leadMenuOpen);
  //   setActiveSubmenu(null);
  // };

  // const handleSubmenuClick = (submenu) => {
  //   setActiveSubmenu(submenu);
  //   setActiveReportSubmenu(null);
  //   setLeadMenuOpen(true);
  //   setReportMenuOpen(false);
  // };

  // const toggleReportMenu = () => {
  //   setReportMenuOpen(!reportMenuOpen);
  //   setActiveReportSubmenu(null);
  // };

  // const handleReportSubmenuClick = (reportSubmenu) => {
  //   setActiveReportSubmenu(reportSubmenu);
  //   setActiveSubmenu(null);
  //   setLeadMenuOpen(false);
  //   setReportMenuOpen(true);
  // };

  // const toggleStudentMenu = () => {
  //   setStudentMenuOpen(!studentMenuOpen);
  //   setActiveSubmenu(null);
  // };

  // const toggleReferMenu = () => {
  //   setReferMenuOpen(!referMenuOpen);
  //   setActiveReferSubmenu(null);
  // };

  // const handleReferSubmenuClick = (referSubmenu) => {
  //   setActiveReferSubmenu(referSubmenu);
  //   setActiveSubmenu(null);
  //   setLeadMenuOpen(false);
  //   setReportMenuOpen(false);
  //   setReferMenuOpen(true);
  // };

  // const closeDropdown = () => {
  //   setLeadMenuOpen(false);
  //   setActiveSubmenu(null);
  //   setReportMenuOpen(false);
  //   setActiveReportSubmenu(null);
  //   setReferMenuOpen(false);
  //   setActiveReferSubmenu(null);

  // };

  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg p-0 navbar-light border-bottom border-bottom-lg-0 border-end-lg"
      style={{ backgroundColor: "#A5E5E5" }}
      id="navbarVertical"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler mx-2 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink
          style={{ background: "#A5E5E5" }}
          className={`navbar-brand logo_ats py-lg-2 px-lg-6 m-0 d-flex align-items-center justify-content-center ${
            leadMenuOpen || activeSubmenu ? "active" : ""
          }`}
          to="/"
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "60px", height: "60px" }}
          />
          <span
            className="text-white fs-1 fw-bolder mx-3"
            style={{ textShadow: "1px 1px 2px black" }}
          >
            ATS
          </span>
        </NavLink>
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                <i className="bi bi-bar-chart"></i>Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobOpening">
                <i className="bi bi-search bi bi-people-fill"></i>Job Opening
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/candidates">
                <i className="bi bi-person-badge"></i>Candidates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/applications">
                <i className="bi bi-person-badge-fill"></i>Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/interview">
                <i className="bi bi-funnel"></i>Interviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/assessment">
                <i className="bi bi-question-square-fill"></i>Assessments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">
                <i className="bi bi-person-plus-fill"></i>Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/department">
                <i className="bi bi-building"></i>Department
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/submissions">
                <i className="bi bi-card-checklist"></i>Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/offer">
                <i className="bi bi-journal-text"></i>Offer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                <i className="bi bi-people-fill"></i>Users
              </NavLink>
            </li>
          </ul>

          <hr className="navbar-divider my-5 opacity-20" />

          <div className="mt-auto logutBtn">
            <button className="nav-link ps-6" to={"#"}>
              <i className="bi bi-person-square"></i> Account
            </button>
            <button
              to={"#"}
              className="nav-link ps-6"
              onClick={handelLogOutClick}
            >
              <i className="bi bi-box-arrow-left"></i> Logout
            </button>
          </div>
          {/* <ul className="navbar-nav">
            <li className="nav-item text-start">
              <button className="nav-link" to={"#"}>
                <i className="bi bi-person-square"></i> Account
              </button>
            </li>
            <li className="nav-item">
              <button to={"#"} className="nav-link" onClick={handelLogOutClick}>
                <i className="bi bi-box-arrow-left"></i> Logout
              </button>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

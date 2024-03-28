import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Sidebar() {

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
        <NavLink
        style={{position:'sticky', top:'0',zIndex:'20',backgroundColor: "#A5E5E5"}}
          className={`navbar-brand shadow-lg  py-lg-2 px-lg-6 m-0 d-flex align-items-center justify-content-center ${
            leadMenuOpen || activeSubmenu ? "active" : ""
          }`}
          to="/"
        >
           <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "60px", height: "60px" }}
          />
          <span className="text-dark fs-1 ms-4">ATS</span>
        </NavLink>
        {/* <div className="navbar-user d-lg-none">
          ... user dropdown ...
        </div> */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/dashboard"
                
              >
                <i className="bi bi-house"></i> Dashboard
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/center">
                <i class="bi bi-house-door"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobOpening">
              <i class="bi bi-search bi bi-people-fill"></i>Job Opening
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/candidates">
              <i class="bi bi-person-badge"></i>Candidates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/applications">
              <i class="bi bi-person-badge-fill"></i>Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/interviews">
              <i class="bi bi-funnel"></i>Interviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/assessments">
              <i class="bi bi-question-square-fill"></i>Assessments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">
              <i class="bi bi-person-plus-fill"></i>Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/department">
              <i class="bi bi-building"></i>Department
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/submissions">
              <i class="bi bi-card-checklist"></i>Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/offer">
              <i class="bi bi-journal-text"></i>Offer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
              <i class="bi bi-people-fill"></i>Users
              </NavLink>
            </li>
          </ul>

          <hr className="navbar-divider my-5 opacity-20" />

          <div className="mt-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/account">
                <i className="bi bi-person-square"></i> Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                <i className="bi bi-box-arrow-left"></i> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

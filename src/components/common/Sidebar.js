import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import jobOpening1 from "../../assets/jobOpening1.png";
import jobOpening2 from "../../assets/jobOpening2.png";
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
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light border-bottom border-bottom-lg-0 border-end-lg"
      style={{ backgroundColor: "#A5E5E5" }}
      id="navbarVertical"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-n2"
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
          className={`navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center justify-content-center ${
            leadMenuOpen || activeSubmenu ? "active" : ""
          }`}
          to="/"
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "60px", height: "60px" }}
          />
          <span className="text-dark fs-1 ms-4">ATS</span>
        </NavLink>
        <div className="navbar-user d-lg-none">
          {/* ... user dropdown ... */}
        </div>
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
                <i class="bi bi-calendar3"></i>Job Opening
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/candidates">
                <i class="bi bi-calendar3"></i>Candidates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/applications">
                <i class="bi bi-calendar3"></i>Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/interviews">
                <i class="bi bi-calendar3"></i>Interviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/assessments">
                <i class="bi bi-calendar3"></i>Assessments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">
                <i class="bi bi-calendar3"></i>Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/department">
                <i class="bi bi-calendar3"></i>Department
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/submissions">
                <i class="bi bi-calendar3"></i>Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/offer">
                <i class="bi bi-calendar3"></i>Offer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                <i class="bi bi-calendar3"></i>Users
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

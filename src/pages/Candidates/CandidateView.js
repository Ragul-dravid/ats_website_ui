import React from "react";
import { Link } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import Review from "./Review";

function CandidateView() {
  return (
    <div className="container-fluid minHeight">
      <div className="card shadow border-0 mb-2 top-header">
        <div className="container-fluid py-4">
          <div className="row align-items-center">
            <div className="row align-items-center">
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <h1 className="h4 ls-tight headingColor">Candidate View</h1>
                </div>
              </div>
              <div className="col-auto">
                <div className="hstack gap-2 justify-content-start">
                  <Link to="/candidates">
                    <button type="submit" className="btn btn-sm btn-light">
                      <span>Back</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow border-0 mb-2">
        <div className="d-flex justify-content-between p-3">
          <div className="container-fluid fw-bold fs-5 my-2">Basic Info</div>
          <div className="d-flex">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle py-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaPlus /> Interview
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/interview/formal">
                    Formal Interview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/interview/record">
                    Record Interview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/interview/live">
                    Live Interview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/interview/logan">
                    Log an Intervieww
                  </a>
                </li>
              </ul>
            </div>

            <button className="btn btn-sm btn-button mx-2 py-0">
              <BsFillSendFill />
            </button>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle py-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Submit
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">
                    <Review />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Hiring Manager
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Candidate Name</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Ragul </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Phone</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 678905432 </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Email</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ragul@gmail.com </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Secondary Email</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: raghul@gmail.com </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Description</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: - </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Address Information
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Street</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Thousandlight</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Zip/Postal Code</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 613001</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>City</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Thanjavur </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>State/Province</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: TamilNadu</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Country</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Professional Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Professional Information
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Experience In Years</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 1 Year </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Highest Qualifaction Help</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: M.S.C </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Current Job Title</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Frontend Developer </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Current Employe</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: ECS Cloud </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Expected Salary</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 35000</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Current Salary</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 15000</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Skill Set</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: React js</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Attachment Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Attachment Information
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Resume</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    : resume_CV_2024_Ins_943{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateView;
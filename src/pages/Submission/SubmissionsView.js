import React from "react";
import { Link } from "react-router-dom";

function SubmissionsView() {
  return (
    <div class="container-fluid minHeight">
      <div class="card shadow border-0 mb-2 top-header">
        <div class="container-fluid py-4">
          <div class="row align-items-center">
            <div class="row align-items-center">
              <div class="col">
                <div class="d-flex align-items-center gap-4">
                  <h1 class="h4 ls-tight headingColor">View Submissions</h1>
                </div>
              </div>
              <div class="col-auto">
                <div class="hstack gap-2 justify-content-start">
                  <Link to="/users">
                    <button type="submit" class="btn btn-sm btn-light">
                      <span>Back</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card shadow border-0 mb-2">
        {/* Users Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Submission Information
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
                  <p className="text-muted text-sm">: Ragul</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Submissions ID</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: zR_1_SUB </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Submissions Name</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">:  Ragul React Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Posting Title</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">:  React developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Department Name</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: React Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Status</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Submitted-to-hiring-manager</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Medium</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: --</p>
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
                  <p className="text-muted text-sm">: --</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Submission Owner</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: User01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Submitted By</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: User01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Submitted To</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: User01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Modified By</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: User01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Reviewed By</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: User01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionsView;

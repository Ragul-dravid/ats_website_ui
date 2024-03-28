import React from "react";
import { Link } from "react-router-dom";

function OfferView() {
  return (
    <div class="container-fluid minHeight">
      <div class="card shadow border-0 mb-2 top-header">
        <div class="container-fluid py-4">
          <div class="row align-items-center">
            <div class="row align-items-center">
              <div class="col">
                <div class="d-flex align-items-center gap-4">
                  <h1 class="h4 ls-tight headingColor">View Offers</h1>
                </div>
              </div>
              <div class="col-auto">
                <div class="hstack gap-2 justify-content-start">
                  <Link to="/offer">
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
        {/*  Information */}
        <div className="container-fluid fw-bold fs-5 my-2">Offer Letter</div>

        {/* Basic Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Basic Information
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Posting Title</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: React Js </p>
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
                  <p className="text-muted text-sm">: ECS Cloud </p>
                </div>
              </div>
            </div>
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
          </div>
        </div>

        {/* Employment Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Employment Information
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Compensation Amount</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: $ </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Employee Type</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Permanent</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Expected Joining Date</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 2024 03 23</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Offer Owner</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Ragul</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Other Information
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Expiry Date </b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: 2025 03 23 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferView;

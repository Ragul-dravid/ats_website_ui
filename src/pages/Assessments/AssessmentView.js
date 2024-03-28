import React from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa6";
import { RxDragHandleDots2 } from "react-icons/rx";

function JopOpeningView() {
  return (
    <div class="container-fluid minHeight">
      <div class="card shadow border-0 mb-2 top-header">
        <div class="container-fluid py-4">
          <div class="row align-items-center">
            <div class="row align-items-center">
              <div class="col">
                <div class="d-flex align-items-center gap-4">
                  <h1 class="h4 ls-tight headingColor">Assessment</h1>
                </div>
              </div>
              <div class="col-auto">
                <div class="hstack gap-2 justify-content-start">
                  <Link to="/assessment">
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
        {/* Candidate Assessment */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Candidate Assessment
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Assessment Name</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: React JS</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Type</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Behavioural Interview</p>
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
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="container-fluid fw-bold fs-6 my-2">
              <RxDragHandleDots2 className="mb-1" />Assessment Questionnaire
            </div>
            <div className="mx-3">
              <p className="mb-1">1. How Do You Rate Yourself For This Position?</p>
              <p className="mb-1">2. Are You Willing To Relocate?</p>
              <p className="mb-1">3. What Is Your Salary Expectation?</p>
              <p className="mb-1">4. Why Should We Consider Hiring You?</p>
              <p className="mb-1">5. Is There Anything That You Would Like To Ask Me?</p>
            </div>
          </div>
        </div>
        {/* Recruiter's Assessment Assessment */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Recruiter's Assessment
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Assessment Name</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Java</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Type</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: General</p>
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
                  <p className="text-muted text-sm">: </p>
                </div>
              </div>
            </div>
            <div className="container-fluid fw-bold fs-6 my-2">
              <RxDragHandleDots2 className="mb-1" />Assessment Questionnaire
            </div>
            <div className="mx-3">
              <p className="mb-1">1. How Do You Rate Yourself For This Position?</p>
              <p className="mb-1">2. Are You Willing To Relocate?</p>
              <p className="mb-1">3. What Is Your Salary Expectation?</p>
              <p className="mb-1">4. Why Should We Consider Hiring You?</p>
              <p className="mb-1">5. Is There Anything That You Would Like To Ask Me?</p>
            </div>
          </div>
        </div>
        {/* Interviewer Assessment */}
        <div className="container-fluid fw-bold fs-5 my-2">
          Interviewer Assessment
        </div>
        <div className="container">
          <div className="row mt-2 p-3">
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Assessment Name</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Screening Interview</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Type</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: Behavioural Interview</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start align-items-center">
                  <p className="text-sm">
                    <b>Rating Type</b>
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: <FaRegThumbsUp className='mb-1' color="#1673FF" /> Thumb rating</p>
                </div>
              </div>
            </div>
            <div className="container-fluid fw-bold fs-6 my-2">
              <RxDragHandleDots2 className="mb-1" />Assessment Questionnaire
            </div>
            <div className="mx-3 mb-5">
              <p className="mb-1">1. How Do You Rate Yourself For This Position?</p>
              <p className="mb-1">2. Are You Willing To Relocate?</p>
              <p className="mb-1">3. What Is Your Salary Expectation?</p>
              <p className="mb-1">4. Why Should We Consider Hiring You?</p>
              <p className="mb-1">5. Is There Anything That You Would Like To Ask Me?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JopOpeningView;
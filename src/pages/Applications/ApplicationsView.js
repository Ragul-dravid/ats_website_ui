import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
function ApplicationsView() {
    return (
        <div class="container-fluid minHeight">
            <div class="card shadow border-0 mb-2 top-header">
                <div class="container-fluid py-4">
                    <div class="row align-items-center">
                        <div class="row align-items-center">
                            <div class="col">
                                <div class="d-flex align-items-center gap-4">
                                    <h1 class="h4 ls-tight headingColor">React Developer</h1>
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="hstack gap-2 justify-content-start">
                                    <Link to="/applications">
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
                <div class="hstack gap-2 justify-content-end px-4 pt-4">
                    <div class="dropdown">
                        <button class="btn btn-sm btn-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaPlus />  Interviews
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Formal Interview</a></li>
                            <li><a class="dropdown-item" href="#">Record Interview</a></li>
                            <li><a class="dropdown-item" href="#">Live Interview</a></li>
                            <li><a class="dropdown-item" href="#">Log An Interview</a></li>
                        </ul>
                    </div>
                    <button type="submit" class="btn btn-sm btn-button" >
                        <span className=""><IoIosSend style={{ fontSize: '22px' }} /></span>
                    </button>
                    <button type="submit" class="btn btn-sm btn-button">
                        <span>Submit To Hiring Manager</span>
                    </button>
                </div>
                <div className="container-fluid fw-bold fs-5 my-2">
                    Basic Information
                </div>
                <div className="container">
                    <div className="row mt-2 p-3">
                        <div className="col-md-6 col-12">
                            <div className="row mb-3">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <p className="text-sm">
                                        <b>Application ID</b>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="text text-sm">: ZR_3_APP </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row mb-3">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <p className="text-sm">
                                        <b>Application Name</b>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="text-muted text-sm">: User01 </p>
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
                                    <p className="text text-sm">: 901332312</p>
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
                                    <p className="text-muted text-sm">: User123@Gmail.Com </p>
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
                                    <p className="text-muted text-sm">: -- </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row mb-3">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <p className="text-sm">
                                        <b>Job Opening ID</b>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="text-muted text-sm">: ZR_3_APP </p>
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
                                    <p className="text-muted text-sm">: -- </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row mb-3">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <p className="text-sm">
                                        <b>Assessment Recruiters</b>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="text-muted text-sm">: -- </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row mb-3">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <p className="text-sm">
                                        <b>Account Manager</b>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="text-muted text-sm">: -- </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicationsView;

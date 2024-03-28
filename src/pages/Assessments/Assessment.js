import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import DeleteModel from "../../components/common/DeleteModel";
import Dropdown from 'react-bootstrap/Dropdown';

const Assessment = () => {
    const tableRef = useRef(null);

    const datas = [
        {
            id: 1,
            assessmentName: "React JS",
            noOfQuestions: "05",
            assessmentowner: "User01",
            type: "General",
        },
        {
            id: 2,
            assessmentName: "Java",
            noOfQuestions: "03",
            assessmentowner: "User02",
            type: "Behavioural Interview",
        },
        {
            id: 3,
            assessmentName: "Flutter",
            noOfQuestions: "02",
            assessmentowner: "User01",
            type: "Pre-Screening",
        },
        {
            id: 4,
            assessmentName: "Angular",
            noOfQuestions: "07",
            assessmentowner: "User02",
            type: "Behavioural Screening",
        },
        {
            id: 5,
            assessmentName: "Screening Interview",
            noOfQuestions: "10",
            assessmentowner: "User01",
            type: "Background Screening",
        },
    ];

    useEffect(() => {
        const table = $(tableRef.current).DataTable();

        return () => {
            table.destroy();
        };
    }, []);

    return (
        <div className="container-fluid minHeight">
            <div class="card shadow border-0 mb-2 top-header">
                <div class="container-fluid py-4">
                    <div class="row align-items-center justify-content-between ">
                        <div class="col">
                            <div class="d-flex align-items-center gap-4">
                                <h1 class="h4 ls-tight headingColor ">Assessments</h1>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="hstack gap-2 justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle className="btn btn-sm btn-button" id="dropdown-basic">
                                        Create Assessment
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/assessment/candidateadd">Candidate Assessment</Dropdown.Item>
                                        <Dropdown.Item href="/assessment/recruiteradd">Recruiter's Assessment</Dropdown.Item>
                                        <Dropdown.Item href="/assessment/intervieweradd">Interviewer Assessment</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow border-0 my-2">
                <div className="table-responsive p-2">
                    <table ref={tableRef} className="display table ">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className="text-center" style={{ whiteSpace: "nowrap" }}>
                                    S.NO
                                </th>
                                <th scope="col" className="text-start">ASSESSMENT NAME</th>
                                <th scope="col" className="text-start">NO OF QUESTIONS</th>
                                <th scope="col" className="text-start">ASSESSMENT OWNER</th>
                                <th scope="col" className="text-start">TYPE</th>
                                <th scope="col" className="text-center">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, index) => (
                                <tr key={index}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-start">{data.assessmentName}</td>
                                    <td className="text-start">{data.noOfQuestions}</td>
                                    <td className="text-start">{data.assessmentowner}</td>
                                    <td className="text-start">{data.type}</td>
                                    <td className="text-center">
                                        <Link to="/assessment/view">
                                            <button className="btn btn-sm ps-0">
                                                <FaEye />
                                            </button>
                                        </Link>
                                        <div class="dropdown">
                                            <button class="btn btn-sm dropdown-toggle sortdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FaEdit />
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="/assessment/candidateedit">Candidate Assessment</a></li>
                                                <li><a class="dropdown-item" href="/assessment/recruiteredit">Recruiter's Assessment</a></li>
                                                <li><a class="dropdown-item" href="/assessment/intervieweredit">Interviewer Assessment</a></li>
                                            </ul>
                                        </div>
                                        <DeleteModel />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="card-footer border-0 py-5"></div>
            </div>
        </div>
    );
};

export default Assessment;
import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import DeleteModel from "../../components/common/DeleteModel";
import ApplicationsChange from "./ApplicationsChange";
const Applications = () => {
    const tableRef = useRef(null);

    const datas = [
        {
            id: 1,
            applicationId: "User01",
            applicationName: "Harish",
            postingTitle: "React Js",
            rating: "4.0",
            status: "In_progress",
        },
        {
            id: 2,
            applicationId: "User02",
            applicationName: "Ragavendhar",
            postingTitle: "Java",
            rating: "2.0",
            status: "Active",
        }
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
                                <h1 class="h4 ls-tight headingColor ">Application</h1>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="hstack gap-2 justify-content-end">
                                <Link to="/">
                                    <button type="submit" class="btn btn-sm btn-button">
                                        <span>Create Application</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow border-0 my-2">
                <div className="table-responsive p-2">
                    <table
                        ref={tableRef}
                        className="display table table-hover table-nowrap"
                    >
                        <thead className="table-light">
                            <tr>
                                <th scope="col" style={{ whiteSpace: "nowrap" }}>
                                    S.NO
                                </th>
                                <th scope="col">APPLICATION ID</th>
                                <th scope="col">APPLICATION NAME</th>
                                <th scope="col">POSTING TITLE</th>
                                <th scope="col">RATING</th>
                                <th scope="col">APPLICATION STATUS</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.applicationId}</td>
                                    <td>{data.applicationName}</td>
                                    <td>{data.postingTitle}</td>
                                    <td>
                                        {data.rating === "4.0" ? (
                                            <span className="badge badge-bg-light text-dark border border-grey" style={{ borderRadius: '10px' }}>4.0 <FaStar style={{ color: 'gold' }} /></span>
                                        ) : data.rating === "2.0" ? (
                                            <span className="badge badge-bg-light text-dark border border-grey" style={{ borderRadius: '10px' }}>2.0 <FaStar style={{ color: 'gold' }} /></span>
                                        ) : (
                                            <span></span>
                                        )}
                                    </td>
                                    <td>
                                        {data.status === "In_progress" ? (
                                            <span className="badge text-bg-primary">In progress</span>
                                        ) : data.status === "Active" ? (
                                            <span className="badge text-bg-success">Active</span>
                                        ) : (
                                            <span className="badge text-bg-warning">On Hold</span>
                                        )}
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to="/applications/view">
                                                <button className="btn btn-sm ps-0">
                                                    <FaEye />
                                                </button>
                                            </Link>
                                            <ApplicationsChange />
                                            <DeleteModel />
                                        </div>
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

export default Applications;

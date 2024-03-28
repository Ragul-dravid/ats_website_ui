import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import DeleteModel from "../../components/common/DeleteModel";
import SubmissionsReview from "./SubmissionsReview";

const Submissions = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      submissionsName: "Ragul React Developer",
      postingTitle: "React Developer",
      candidateName: "Ragul",
      dptName: "React Js",
    },
    {
      id: 1,
      submissionsName: "Ragul React Developer",
      postingTitle: "React Developer",
      candidateName: "Ragul",
      dptName: "React Js",
    },
    {
      id: 1,
      submissionsName: "Ragul React Developer",
      postingTitle: "React Developer",
      candidateName: "Ragul",
      dptName: "React Js",
    },
    {
      id: 1,
      submissionsName: "Ragul React Developer",
      postingTitle: "React Developer",
      candidateName: "Ragul",
      dptName: "React Js",
    },
    
  ];

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      select: {
        style: 'multi',
      },
    });
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
                <h1 class="h4 ls-tight headingColor ">Submissions</h1>
              </div>
            </div>
            <div class="col-auto">
              <div class="hstack gap-2 justify-content-end">
                <SubmissionsReview />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card shadow border-0 my-2">
        <div className="table-responsive p-2" id="Table_Css">
          <table ref={tableRef} className="display table ">
            <thead>
              <tr>
                <th scope="col" style={{ whiteSpace: "nowrap" }}>
                    S.No
                </th>
                <th scope="col">SUBMISSION NAME</th>
                <th scope="col">DEPARTMENT NAME</th>
                <th scope="col">POSTING TITLE</th>
                <th scope="col">CANDIDATE NAME</th>
                <th scope="col" className="text-center">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{index+1}</td>
                  <td>{data.submissionsName}</td>
                  <td>{data.dptName}</td>
                  <td>{data.postingTitle}</td>
                  <td>{data.candidateName}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <div>
                      <Link to="/submissions/view">
                        <button className="btn btn-sm">
                          <FaEye />
                        </button>
                      </Link>
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

export default Submissions;

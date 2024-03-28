import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import DeleteModel from "../../components/common/DeleteModel";

const Users = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      empId: "ECS_01",
      empName: "Ragul",
      empEmail: "ragulecs@gmail.com",
      dptName: "React Js",
      worlLocation: "chennai",
    },
    {
      id: 2,
      empId: "ECS_02",
      empName: "Chandru",
      empEmail: "chandruecs@gmail.com",
      dptName: "Laravel",
      worlLocation: "chennai",
    },
    {
      id: 3,
      empId: "ECS_03",
      empName: "Surya",
      empEmail: "suryaecs@gmail.com",
      dptName: "Angular",
      worlLocation: "chennai",
    },
    {
      id: 4,
      empId: "ECS_04",
      empName: "Antony",
      empEmail: "antonyecs@gmail.com",
      dptName: "Java",
      worlLocation: "chennai",
    },
    {
      id: 5,
      empId: "ECS_05",
      empName: "Saravanan",
      empEmail: "saravananecs@gmail.com",
      dptName: "Flatter",
      worlLocation: "chennai",
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
                <h1 class="h4 ls-tight headingColor ">Users</h1>
              </div>
            </div>
            <div class="col-auto">
              <div class="hstack gap-2 justify-content-end">
                <Link to="/users/add">
                  <button type="submit" class="btn btn-sm btn-button">
                    <span>Add New Users</span>
                  </button>
                </Link>
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
                  S.NO
                </th>
                <th scope="col">EMPLOYEE ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL ID</th>
                <th scope="col">DEPARTMENT NAME</th>
                <th scope="col">WORK LOCATION</th>
                <th scope="col" className="text-center">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{data.empId}</td>
                  <td>{data.empName}</td>
                  <td>{data.empEmail}</td>
                  <td>{data.dptName}</td>
                  <td>{data.worlLocation}</td>
                  <td>
                    <div>
                      <Link to="/users/view">
                        <button className="btn btn-sm ps-0">
                          <FaEye />
                        </button>
                      </Link>
                      <Link to="/users/edit">
                        <button className="btn btn-sm">
                          <FaEdit />
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

export default Users;

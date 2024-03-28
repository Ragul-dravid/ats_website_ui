import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import DeleteModel from "../../components/common/DeleteModel";

const Clients = () => {
  const tableRef = useRef(null);

  const datas = [
    {
      id: 1,
      clientName: "Ragul",
      phone: "9876543210",
      email: "ragul0123@gmail.com",
    },
    {
      id: 2,
      clientName: "Antony",
      phone: "9012345678",
      email: "antony1234@gmail.com",
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
                <h1 class="h4 ls-tight headingColor ">Clients</h1>
              </div>
            </div>
            <div class="col-auto">
              <div class="hstack gap-2 justify-content-end">
                <Link to="/clients/add">
                  <button type="submit" class="btn btn-sm btn-button">
                    <span>Create Clients</span>
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
                <th scope="col">CLIENT NAME</th>
                <th scope="col">PHONE</th>
                <th scope="col">EMAIL ID</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.clientName}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>
                    <div className="d-flex">
                      <Link to="/clients/view">
                        <button className="btn btn-sm ps-0">
                          <FaEye />
                        </button>
                      </Link>
                      <Link to="/clients/edit">
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

export default Clients;

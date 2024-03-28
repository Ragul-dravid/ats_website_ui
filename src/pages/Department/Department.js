import React, { useEffect, useRef } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import DeleteModel from "../../components/common/DeleteModel";
import DepartmentAdd from "./DepartmentAdd";
import DepartmentEdit from "./DepartmentEdit";

const Department = () => {
  const tableRef = useRef(null);

  const datas = [
    {
     id: 1,
     departmentName: "React Js",
     departmentLead: "User1",
     parentDepartment: "ECSCloud Infotech Pvt Ltd"
    },
    {
     id: 2,
     departmentName: "Java",
     departmentLead: "User2",
     parentDepartment: "ECSCloud Infotech Pvt Ltd"
    },
    
  ];

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
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
                        <h1 class="h4 ls-tight headingColor ">Department</h1>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="hstack gap-2 justify-content-end">
                       <DepartmentAdd/>
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
                        <th scope="col">DEPARTMENT NAME</th>
                        <th scope="col">DEPARTMENT LEAD</th>
                        <th scope="col">PARENT DEPARTMENT</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{data.departmentName}</td>
                            <td>{data.departmentLead}</td>
                            <td>{data.parentDepartment}</td>
                            <td>
                                <div className="d-flex">
                                  <DepartmentEdit/>
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

export default Department;

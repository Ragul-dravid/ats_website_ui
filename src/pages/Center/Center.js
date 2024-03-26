import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import DeleteModel from "../../components/common/DeleteModel";
import { IoMdEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Center() {
  return (
    <div className="container-fluid minHeight">
      <div class="card shadow border-0 mb-5 products">
        <div class="container-fluid py-4">
          <div class="row align-items-center">
            <div class="col">
              <div class="d-flex align-items-center gap-4">
                <h1 class="h4 ls-tight headingColor">Center Management</h1>
              </div>
            </div>
            <div class="col-auto">
              <div class="hstack gap-2 justify-content-end">
                <Link to="/center/add">
                  <button type="submit" class="btn btn-sm btn-primary">
                    <span>
                      Add <IoMdAdd />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card shadow border-0 mb-7">
        <div class="card-header">
          <label>show</label> &nbsp;
          <button style={{ padding: "5px" }} class="btn btn-light">
            <span>25</span>
            <MdOutlineArrowDropDown />
          </button>
          &nbsp;
          <label className="entry">entries</label>
        </div>
        <div class="table-responsive">
          <table class="table table-hover table-nowrap">
            <thead class="thead-light">
              <tr>
                <th>S.NO</th>
                <th>CENTER NAME</th>
                <th>CENTER MANAGER</th>
                <th>CODE</th>
                <th>UEN NUMBER</th>
                <th className="text-center">EMAIL</th>
                <th>MOBILE</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Arty learning @ AMK</td>
                <td></td>
                <td>ALAMK</td>
                <td>202322705E</td>
                <td>artylearning@gmail.com</td>
                <td>+65 91441497</td>
                <td class="icon">
                  <div className="">
                    <Link to="/center/view">
                      <button className="btn">
                        <IoMdEye />
                      </button>
                    </Link>
                    <Link to="/center/edit">
                      <button className="btn">
                        <FaEdit />
                      </button>
                    </Link>
                      <DeleteModel />
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Arty learning @ HG</td>
                <td>MICHELLE SNG</td>
                <td>ALHG</td>
                <td>202042173K</td>
                <td>artylearning@gmail.com</td>
                <td>+65 87270752</td>
                <td className="icons">
                <div className="">
                    <Link to="/center/view">
                      <button className="btn">
                        <IoMdEye />
                      </button>
                    </Link>
                    <Link to="/center/edit">
                      <button className="btn">
                        <FaEdit />
                      </button>
                    </Link>
                      <DeleteModel />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer border-0 py-5">
          <span class="text-muted text-sm">
            Showing 10 items out of 250 results found
          </span>
        </div>
      </div>
    </div>
  );
}

export default Center;

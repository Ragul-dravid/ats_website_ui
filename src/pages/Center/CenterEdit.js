import React from "react";
import { ImOffice } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { Link } from "react-router-dom";

function CenterEdit() {
  return (
    <div className="container-fluid minHeight">
      <div class="card shadow border-0 mb-5 products">
        <div class="container-fluid py-4">
          <div class="row align-items-center">
            <div class="col">
              <div class="d-flex align-items-center gap-4">
                <h1 class="h4 ls-tight headingColor">Edit Center</h1>
              </div>
            </div>
            <div class="col-auto">
              <div class="hstack gap-2 justify-content-end">
                <Link to="/center">
                  <button type="submit" class="btn btn-sm btn-light">
                    <span>Back</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card shadow border-0 mb-7">
        <div className="container">
          <div class="row py-4">
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">Center Name*</lable>
              <div class="input-group mb-3">
                <span
                  class="input-group-text iconInputBackground"
                  id="basic-addon1"
                >
                  <ImOffice />
                </span>
                <input
                  type="text"
                  class="form-control iconInput form-control-sm"
                  value={"Artylearning@HG"}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Code<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control iconInput form-control-sm "  value={"ALHG"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Center Manager<span class="text-danger">*</span>
              </lable>
              <div class="input-group mb-3">
                <span
                  class="input-group-text iconInputBackground"
                  id="basic-addon1"
                >
                  <GrUserManager />
                </span>
                <select
                  class="form-select iconInput form-select-sm"
                  aria-label="Default select example"
                >
                  <option selected>MICHELLE SNG</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Address<span class="text-danger">*</span>
              </lable>
              <input
                type="text"
                value={"No: 7/37 Rajaji St, Vyasapadi, Singapore"}
                class="form-control iconInput form-control-sm"
                placeholder=""
              />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Zip Code<span class="text-danger">*</span>
              </lable>
              <input
                type="text"
                value={"118560"}
                class="form-control iconInput form-control-sm"
                placeholder=""
              />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Mobile<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control iconInput form-control-sm" Value={"+65 87270752"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">Email*</lable>
              <div class="input-group mb-3">
                <span
                  class="input-group-text iconInputBackground"
                  id="basic-addon1"
                >
                  <MdEmail />
                </span>
                <input
                  type="text"
                  value={"artylearning@gmail.com"}
                  class="form-control iconInput form-control-sm"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">Opening Date*</lable>
              <div class="input-group mb-3">
                <input
                  type="date"
                  value="2024-09-23"
                  class="form-control iconInput form-control iconInput form-control-sm"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                UEN Number<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control iconInput form-control-sm" value={"202042173K"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <p>
                GST <span class="text-danger">*</span>
              </p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input "
                  type="radio"
                  checked
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Tax Registeration Number<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" placeholder="" />
            </div>
            <div class="col-md-6 col-12 mb-2"></div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Bank Name<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" Value="" />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Bank Branch<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" placeholder="" />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Bank Account Number<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" placeholder="" />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Bank Account Name<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" placeholder="" />
            </div>
            <div class="form-floating mb-2">
              <lable>Invoice Notes</lable>
              <input class="form-control" />
            </div>
            <h5 className="mt-4 text-warning mb-3 headingColor">
              Center Registeration fees{" "}
            </h5>
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">Registeration Date*</lable>
              <div class="input-group mb-3">
                <input
                  type="date"
                  value="2024-09-23"
                  class="form-control iconInput form-control-sm"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">Effective Date*</lable>
              <div class="input-group mb-3">
                <input
                  type="date"
                  value="2024-09-23"
                  class="form-control iconInput form-control-sm"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Amount Including(GST)<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" value={"80.00"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Tax Type<span class="text-danger">*</span>
              </lable>
              <select class="form-select form-select-sm" aria-label="Default select example">
                <option></option>
                <option value="1">Taxable</option>
                <option value="2" selected>
                  Non Taxable
                </option>
              </select>
            </div>
            <h5 className="mt-4 text-warning mb-3 headingColor">
              Center Break{" "}
            </h5>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Break Name<span class="text-danger">*</span>
              </lable>
              <input
                type="text"
                class="form-control form-control-sm"
                value={"Eve Of Chinese New Year 2024"}
              />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">From Date*</lable>
              <div class="input-group mb-3">
                <input
                  type="date"
                  value="2024-09-23"
                  class="form-control iconInput form-control-sm"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable className="form-lable">To Date*</lable>
              <div class="input-group mb-3">
                <input
                  type="date"
                  value="2024-09-23"
                  class="form-control iconInput form-control-sm"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <h5 className="mt-4 text-warning mb-3 headingColor">Class Room </h5>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Class Room Number<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" value={"Daisy"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Class Room Code<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" value={"DS"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Class Room type<span class="text-danger">*</span>
              </lable>
              <select class="form-select form-select-sm" aria-label="Default select example">
                <option ></option>
                <option value="1" selected>Small</option>
                <option value="2">Medium</option>
                <option value="3">Big</option>
              </select>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Capacity<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" value={"4"} />
            </div>
            <div class="form-floating">
              <lable>Description</lable>
              <textarea
                class="form-control"
                value={"Daisy Duck Classroom : Pink/Purple"}
                style={{ height: 150 }}
              ></textarea>
            </div>
            <h5 className="mt-4 text-warning mb-3 headingColor">Package </h5>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Package Name<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" value={"AP16"} />
            </div>
            <div class="col-md-6 col-12 mb-2">
              <lable class="">
                Number Of Lesson<span class="text-danger">*</span>
              </lable>
              <input type="text" class="form-control form-control-sm" value={"16"} />
            </div>

            <div class="hstack gap-2 justify-content-start">
              <div className="d-flex justify-content-start gap-3 mt-5">
                <Link to="/center">
                  {" "}
                  <button class="btn btn-sm btn-danger">Cancel</button>
                </Link>
                <Link to="/center">
                  {" "}
                  <button class="btn btn-sm btn-danger">Submit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterEdit;

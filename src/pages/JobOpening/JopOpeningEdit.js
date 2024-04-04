import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import PreviewJobOpening from "./PreviewJobOpening";

function JopOpeningEdit() {
  const [tags, setTags] = useState(["Java","React Js","Angular","Python"]);
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    postingTitle: Yup.string().required("*Posting Title is required"),
    departmentName: Yup.string().required("*Department Name is required"),
    workExperience: Yup.string().required("*Work Experience is required"),
    targetDate: Yup.string().required("*Target Date is required"),
    dateOpend: Yup.string().required("*Date Opend is required"),
    requiredSkills: Yup.array()
    .required("*Required Skills is required")
    .max(10, "Only 10 tags are allowed"),
  });

  const formik = useFormik({
    initialValues: {
      postingTitle: "React Developer",
      departmentName: "React Js",
      numberPositions: "20",
      jobType: "Full Time",
      title: "Developer",
      workExperience: "1-3 year",
      targetDate: "2024-03-03",
      dateOpend: "2024-03-10",
      assignedRecruiter: "User01",
      salary: "20000",
      jobOpeningStatus: "In Progress",
      industry: "Education",
      requiredSkills: [],
      city: "Thanjavur",
      state: "TamilNadu",
      country: "India",
      zip: "613001",
      description: "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript librarycreated by Facebook.React is a tool for building UI components",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Job Opening Datas:", values);
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value && tags.length < 10 && !tags.includes(value)) {
        setTags([...tags, value]);
        formik.setFieldValue("requiredSkills", [...tags, value]);
        setError("");
      }
      e.target.value = "";
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
    formik.setFieldValue(
      "requiredSkills",
      tags.filter((_, i) => i !== index)
    );
    setError("");
  };

  return (
    <div className="container-fluid minHeight m-0">
      <div
        className="card shadow border-0 mb-2 top-header">
        <div className="container-fluid py-4">
          <div className="row align-items-center">
            <div className="col">
              <div className="d-flex align-items-center gap-4">
                <h1 className="h4 ls-tight headingColor">Update Job Opening</h1>
              </div>
            </div>
            <div className="col-auto">
              <div className="hstack gap-2 justify-content-end">
                <Link to="/jobOpening">
                  <button type="submit" className="btn btn-sm btn-light">
                    <span>Back</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="card shadow border-0 my-2">
          <div className="row mt-3 me-2">
            <div className="col-12 text-end">
              <PreviewJobOpening/>
              <button type="submit" className="btn btn-button mx-2">
                Save & Publish
              </button>
              <button type="submit" className="btn btn-button">
                Update
              </button>
            </div>
          </div>

          {/* Job Opening Information */}
          <div className="container fw-bold fs-5 my-4">
            Job Opening Information
          </div>
          <div className="container mb-5">
            <div className="row py-4">
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Posting Title<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="text"
                    name="postingTitle"
                    className={`form-control  ${
                      formik.touched.postingTitle && formik.errors.postingTitle
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("postingTitle")}
                  />
                  {formik.touched.postingTitle &&
                    formik.errors.postingTitle && (
                      <div className="invalid-feedback">
                        {formik.errors.postingTitle}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Department Name<span className="text-danger">*</span>
                </lable>
                <select
                  name="departmentName"
                  {...formik.getFieldProps("departmentName")}
                  className={`form-select    ${
                    formik.touched.departmentName && formik.errors.departmentName
                      ? "is-invalid"
                      : ""
                  }`}>
                  <option selected>None</option>
                  <option value="React Js">React Js</option>
                  <option value="Angular">Angular</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                </select>
                {formik.touched.departmentName && formik.errors.departmentName && (
                <div className="invalid-feedback">
                  {formik.errors.departmentName}
                </div>
              )}
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">Number Positions</lable>
                <div className="mb-3">
                  <input type="text" name="numberPositions" className="form-control" {...formik.getFieldProps("numberPositions")}/>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">Job Type</lable>
                <select className="form-select" name="jobType" {...formik.getFieldProps("jobType")}>
                  <option selected>None</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">Title</lable>
                <select className="form-select " name="title" {...formik.getFieldProps("title")}>
                  <option selected>None</option>
                  <option value="Developer">Developer</option>
                  <option value="Product Lead">Product Lead</option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="Product Manager">Product Manager</option>
                </select>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">
                  Work Experience<span className="text-danger">*</span>
                </lable>
                <select 
                  name="workExperience"
                  {...formik.getFieldProps("workExperience")}
                  className={`form-select    ${
                    formik.touched.workExperience && formik.errors.workExperience
                      ? "is-invalid"
                      : ""
                  }`}>
                  <option selected>None</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-1 year">0-1 year</option>
                  <option value="1-3 year">1-3 year</option>
                  <option value="3-5 year">3-5 year</option>
                </select>
                {formik.touched.workExperience && formik.errors.workExperience && (
                <div className="invalid-feedback">
                  {formik.errors.workExperience}
                </div>
              )}
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Target Date<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input 
                    type="date" 
                    name="targetDate"
                    className={`form-control  ${
                        formik.touched.targetDate && formik.errors.targetDate
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("targetDate")} />

                      {formik.touched.targetDate &&
                    formik.errors.targetDate && (
                      <div className="invalid-feedback">
                        {formik.errors.targetDate}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Date Opend<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input  
                    type="date" 
                    name="dateOpend"
                    className={`form-control  ${
                        formik.touched.dateOpend && formik.errors.dateOpend
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("dateOpend")} />
                      
                      {formik.touched.dateOpend &&
                    formik.errors.dateOpend && (
                      <div className="invalid-feedback">
                        {formik.errors.dateOpend}
                      </div>
                    )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">Assigned Recruiter(s)</lable>
                <div className="mb-3">
                  <input type="text" className="form-control " name="assignedRecruiter" {...formik.getFieldProps("assignedRecruiter")}/>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">Salary</lable>
                <div className="mb-3">
                  <input type="text" className="form-control " name="salary" {...formik.getFieldProps("salary")}/>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">Job Opening Status</lable>
                <select className="form-select " name="jobOpeningStatus" {...formik.getFieldProps("jobOpeningStatus")}>
                  <option selected>None</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Waiting for Approval">
                    Waiting for Approval
                  </option>
                </select>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <lable className="form-lable">Industry</lable>
                <select className="form-select " name="industry" {...formik.getFieldProps("industry")}>
                  <option selected>None</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Education">Education</option>
                  <option value="Comunications">Comunications</option>
                </select>
              </div>
              <div className="col-md-12 col-12 my-2">
                <lable className="form-lable">
                  Required Skills<span className="text-danger">*</span>
                </lable>
                <div className="tags-inp-container border-1 rounded-2 p-2">
                  {tags.map((tags, index) => (
                    <div className="tag-item my-2 mx-1 ">
                      <label className="text">
                        {tags}{" "}
                        <span
                          className="close p-1 rounded-5 "
                          onClick={() => removeTag(index)}
                        >
                          <IoClose
                            className="fs-6 mb-1 bg-white rounded-5"
                            style={{ color: "#57ACC6" }}
                          />
                        </span>
                      </label>
                    </div>
                  ))}
                  {tags.length < 10 && (
                    <input
                      type="text"
                      onKeyDown={handleKeyDown}
                      name="requiredSkills"
                      className="form-control shadow-none p-2 tags-input"
                      placeholder="Add Skills"
                    />
                  )}
                </div>
                {formik.touched.requiredSkills &&
                  formik.errors.requiredSkills && (
                    <div className="invalid-feedback">
                      {formik.errors.requiredSkills}
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="container fw-bold fs-5 mt-3">Address Information</div>
          <div className="container mb-5">
            <div className="row py-4">
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">City</lable>
                <div className="mb-3">
                  <input type="text" className="form-control" name="city" {...formik.getFieldProps("city")}/>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">State/Province</lable>
                <div className="mb-3">
                  <input type="text" className="form-control " name="state" {...formik.getFieldProps("state")}/>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">Country</lable>
                <div className="mb-3">
                  <input type="text" className="form-control " name="country" {...formik.getFieldProps("country")}/>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">Zip/Postal Code</lable>
                <div className="mb-3">
                  <input type="text" className="form-control " name="zip" {...formik.getFieldProps("zip")}/>
                </div>
              </div>
              <div className="col-md-12 col-12 mb-2">
                <lable className="form-lable">Description</lable>
                <div className="mb-3">
                  <textarea type="text" rows={6} className="form-control " name="description" {...formik.getFieldProps("description")}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JopOpeningEdit;

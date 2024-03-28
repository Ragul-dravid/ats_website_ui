import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { FaEdit } from "react-icons/fa";
import * as Yup from "yup";
function DepartmentEdit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validationSchema = Yup.object({
        departmentName: Yup.string().required("*Department Name is required"),
        departmentLead: Yup.string().required("*Department Lead is required"),
        parentDepartment: Yup.string().required("*Parent Department is required"),
    });
    const formik = useFormik({
        initialValues: {
            departmentName: "React Js",
            departmentLead: "User1",
            parentDepartment: "ECSCloud Infotech Pvt Ltd",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("Department datas:", values);
        },
    });
    return (
        <>
            <button
                type="submit"
                class="btn btn-sm ps-0"
                onClick={handleShow}
            >
            <FaEdit />
            </button>

            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title ><p className="headColor">Department</p></Modal.Title>
                </Modal.Header>
                <form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="row">
                            <div class="col-md-6 col-12 mb-2">
                                <lable className="form-lable">Department Name<span class="text-danger">*</span></lable>
                                <div class="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control  ${formik.touched.departmentName && formik.errors.departmentName
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                        {...formik.getFieldProps("departmentName")}
                                    />
                                    {formik.touched.departmentName &&
                                        formik.errors.departmentName && (
                                            <div className="invalid-feedback">
                                                {formik.errors.departmentName}
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mb-2">
                                <lable className="form-lable">Department Lead<span class="text-danger">*</span></lable>
                                <div class="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control  ${formik.touched.departmentLead && formik.errors.departmentLead
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                        {...formik.getFieldProps("departmentLead")}
                                    />
                                    {formik.touched.departmentLead &&
                                        formik.errors.departmentLead && (
                                            <div className="invalid-feedback">
                                                {formik.errors.departmentLead}
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mb-2">
                                <lable className="form-lable">Parent Department<span class="text-danger">*</span></lable>
                                <div class="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control  ${formik.touched.parentDepartment && formik.errors.parentDepartment
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                        {...formik.getFieldProps("parentDepartment")}
                                    />
                                    {formik.touched.parentDepartment &&
                                        formik.errors.parentDepartment && (
                                            <div className="invalid-feedback">
                                                {formik.errors.parentDepartment}
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                        <Modal.Footer className="mt-3">
                            <Button variant="light" className="btn" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit" className="btn btn-button">
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </form>
            </Modal>
        </>
    );
}

export default DepartmentEdit;

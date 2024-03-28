// import React from 'react'

// function SubmissionsReview() {
//   return (
//     <div>SubmissionsReview</div>
//   )
// }

// export default SubmissionsReview

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaStar } from "react-icons/fa";

const validationSchema = Yup.object({});

function SubmissionsReview() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    formik.resetForm();
  };

  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      rating: '',
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Submissions Review:", values);
    },
  });

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-button btn-sm"
          onClick={handleShow}
        >
          Review Submission
        </button>
      </div>
      <Modal show={show} size="lg" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="headColor">Hiring Manager Review</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="container">
              <div className="col-md-12 col-12 mb-2">Rating: {rating}</div>
              <div className="col-md-12 col-12 mb-2">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;

                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        style={{visibility:'hidden'}}
                      />
                      <FaStar
                        className="star"
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={25}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <div className="col-md-12 col-12 mb-2">
                <lable className="form-lable">Comments</lable>
                <div className="mb-3">
                  <textarea type="text" rows={6} className="form-control " name="comments" {...formik.getFieldProps("comments")}/>
                </div>
              </div>
            </div>
            <Modal.Footer>
              <Button type="button" className="btn btn-sm btn-light" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="btn btn-sm btn-button" type="submit">
                Approve
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}

export default SubmissionsReview;

import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaStar } from "react-icons/fa6";

function Review() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = Yup.object({});

  const formik = useFormik({
    initialValues: {
      comments: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <button onClick={handleShow} type="button" className="btn btn-sm border-none shadow-none p-0">
        Review
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            {/* <div className="row">
              <div className="col-md-12 col-12">
                <label className="form-label">Rating</label>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="col-md-12 col-12 mb-2">
                <label className="form-label">Comments</label>
                <div className="mb-3">
                  <div className="form-floating">
                    <textarea
                      rows="5"
                      className="form-control"
                      {...formik.getFieldProps("comments")}
                    />
                  </div>
                </div>
              </div>
            </div> */}
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
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" type="button" onClick={handleClose}>
              Close
            </button>
            <button className="btn btn-primary" type="submit">
             Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Review;

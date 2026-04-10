import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const Review = ({ onClose, id }) => {

  const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset} = useForm({
    defaultValues: {
      review: {
        rating: 3
      }
    }
  });

  //rating value
  const ratingValue = watch("review.rating");

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/listing/${id}/reviews`, data, { withCredentials: true });
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div class="modal-overlay m-1">
        <hr></hr>
        <div className="modal-box">
          <div className="col-12 m-0">
            <h5>Leave a Review</h5>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/*Rating Range*/}
              <div className="mb-2 mt-2">
                <label className="form-label">
                  Rating: <strong>{ratingValue}</strong>
                </label>

                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="form-range"
                  {...register("review.rating", {
                    required: true,
                    valueAsNumber: true
                  })}
                />

                {errors.review?.rating && (
                  <div className="text-danger">Rating is required</div>
                )}
              </div>

              {/*Comment*/}
              <div className="mb-3 mt-2">
                <label className="form-label">Comments</label>

                <textarea
                  className={`form-control ${errors.review?.comment ? "is-invalid" : ""}`}
                  rows="3"
                  {...register("review.comment", {
                    required: "Please submit some comments for review"
                  })}
                />

                {errors.review?.comment && (
                  <div className="invalid-feedback d-block">
                    {errors.review.comment.message}
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-between">

                <button
                  className="btn btn-outline-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <button className="btn btn-danger" onClick={onClose}>
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

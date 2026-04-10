import { React, useState } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { ImageUploader } from './ImageUploader';

export const NewListing = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("listing", JSON.stringify(data));

      selectedImages.forEach((file) => {
        formData.append("images", file);
        formData.append("category", "additional");
      });
      await axios.post(`${process.env.REACT_APP_API_URL}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      navigate("/host/listings");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container p-3">
        <h3>Create a New Listing</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate encType='multipart/form-data'>

          <div className='row d-flex justify-content-between m-0 p-0'>
            <div className='col-md-7 info pt-2 rounded-3'>

              <div className="mb-2">
                {/* TITLE */}
                <label className="mb-0 form-label">Title</label>

                <input
                  type="text"
                  className={`mt-0 form-control ${errors.title ? "is-invalid" : ""}`}
                  placeholder="Add a catchy title"
                  {...register("title", {
                    required: "Title is required", minLength: { value: 3, message: "Title must be at least 3 characters" }
                  })}
                />
                {errors.title && (<div className="invalid-feedback"> {errors.title.message} </div>
                )}
              </div>

              {/* DESCRIPTION */}
              <div className="mb-2">
                <label className="mb-0 form-label">Description</label>
                <textarea
                  className={`mt-0 form-control ${errors.description ? "is-invalid" : ""}`}
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters"
                    }
                  })}
                />
                {errors.description && (<div className="invalid-feedback">{errors.description.message}</div>
                )}
              </div>

              <div className="row ">
                {/* PRICE */}
                <div className='col-md-6 mt-2 mb-2'>
                  <label className="mb-0 form-label">Price</label>
                  <input
                    type="number"
                    className={`form-control ${errors.price ? "is-invalid" : ""}`}
                    {...register("price", {
                      required: "Price is required",
                      min: {
                        value: 1,
                        message: "Price must be greater than 0"
                      }
                    })}
                  />
                  {errors.price && (<div className="invalid-feedback">{errors.price.message}</div>)}
                </div>

                <div className='col-md-3 mt-2 mb-2 '>
                  <label className="mb-0 form-label ">Property Type</label>
                  <select className='from-control mb-2 text-muted select border rounded' {...register("propertyType", { required: true })}>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Hotel</option>
                  </select>
                </div>

                <div className='col-md-3 mb-2 mt-2 '>
                  <label className="mb-0 form-label ">Room Type</label>
                  <select className='propertytype mb-2 text-muted select border rounded' {...register("roomType", { required: true })}>
                    <option>Entire place</option>
                    <option>Private room</option>
                    <option>Shared room</option>
                  </select>
                </div>

                {/* GUESTS */}
                <div className="mb-2 col-md-3">
                  <label className="mb-0 form-label">Guests</label>
                  <input
                    type="number"
                    className={`mt-0 form-control ${errors.guests ? "is-invalid" : ""}`}
                    {...register("guest", {
                      required: "This field is required"
                    })}
                  />
                  {errors.guests && (<div className="invalid-feedback">{errors.guests.message}</div>)}
                </div>

                {/* BEDROOMS */}
                <div className="col-md-3">
                  <label className="mb-0 form-label">Bedrooms</label>
                  <input
                    type="number"
                    className={`mt-0 form-control ${errors.bedrooms ? "is-invalid" : ""}`}
                    {...register("bedroom", {
                      required: "This field is required"
                    })}
                  />
                  {errors.bedrooms && (<div className="invalid-feedback">{errors.bedrooms.message}</div>)}
                </div>


                {/* BEDS */}
                <div className="col-md-3">
                  <label className="mb-0 form-label">Beds</label>
                  <input
                    type="number"
                    className={`mt-0 form-control ${errors.beds ? "is-invalid" : ""}`}
                    {...register("bed", {
                      required: "This field is required"
                    })}
                  />
                  {errors.beds && (<div className="invalid-feedback">{errors.beds.message}</div>)}
                </div>

                {/* BATHROOMS */}
                <div className="col-md-3">
                  <label className="mb-0 form-label">bathrooms</label>
                  <input
                    type="number"
                    className={`mt-0 form-control ${errors.bathrooms ? "is-invalid" : ""}`}
                    {...register("bathroom", {
                      required: "This field is required"
                    })}
                  />
                  {errors.bathrooms &&
                    (<div className="invalid-feedback">{errors.bathrooms.message}</div>)}
                </div>
              </div>

              {/* AMENITIES */}
              <div className="mb-2">
                <label className="form-label">Amenities</label>
                <input
                  type="text"
                  className={`form-control ${errors.amenities ? "is-invalid" : ""}`}
                  {...register("amenities", {
                    required: "Amenities is required"
                  })}
                />
                {errors.amenities &&
                  (<div className="invalid-feedback">{errors.amenities.message}</div>)}
              </div>

              {/* SAFETY ITEMS */}
              <div className="mb-2">
                <label className="mb-0 form-label">Safety items</label>
                <input
                  type="text"
                  className="mt-0 form-control"
                  {...register("safetyItems")}
                />
              </div>

              <h5 className='fw-semibold mt-0'>Address</h5>
              <div className='row g-2 mb-2'>
                <div className='col-md-6'>
                  <div className='form-floating'>
                    <input
                      type="text"
                      placeholder='Country'
                      className={`form-control ${errors.country ? "is-invalid" : ""}`}
                      {...register("country", {
                        required: "Country is required"
                      })}
                    />
                    <label className="">Country/Region</label>
                    {errors.country && (<div className="invalid-feedback">{errors.country.message}</div>)}
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-floating'>
                    <input type="text" placeholder='State'
                      className={`ps-2 form-control ${errors.state ? "is-invalid" : ""}`}
                      {...register("state", {
                        required: "State is required"
                      })}
                    />
                    <label className="">State/Province</label>
                    {errors.state && (<div className="invalid-feedback">{errors.state.message}</div>)}
                  </div>
                </div>
              </div>

              <div className='form-floating mb-2'>
                <input
                  type="text"
                  placeholder='Street'
                  className={`form-control ${errors.street ? "is-invalid" : ""}`}
                  {...register("street", {
                    required: "Street is required"
                  })}
                />
                <label className="">Street</label>
                {errors.street && (<div className="invalid-feedback">{errors.street.message}</div>)}
              </div>

              <div className='row g-2'>
                <div className="col-md-6">
                  <div className='form-floating'>
                    <input
                      type="text"
                      placeholder='City'
                      className={`form-control ${errors.city ? "is-invalid" : ""}`}
                      {...register("city", {
                        required: "City is required"
                      })}
                    />
                    <label className="">City</label>
                    {errors.city && (<div className="invalid-feedback">{errors.city.message}</div>)}
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-floating'>
                    <input
                      type="text"
                      placeholder='PIN code'
                      className={`form-control ${errors.pincode ? "is-invalid" : ""}`}
                      {...register("pincode", {
                        required: "PIN code is required"
                      })}
                    />
                    <label className="">PIN code</label>
                    {errors.pincode &&
                      (<div className="invalid-feedback">{errors.pincode.message}</div>)}
                  </div>
                </div>
              </div>

            </div>

            <div className='col-md-5 ps-4'>
              <ImageUploader setSelectedImages={setSelectedImages} />
            </div>
          </div>

          {/* SUBMIT */}
          <input
            className="btn btn-dark add-btn m-2 "
            disabled={isSubmitting}
            type="submit"
            value={isSubmitting ? "Saving..." : "ADD"}
          />
        </form>
      </div>
    </>
  )
}

{/* </div>
                <h5 className='mb-0 fw-semibold'>Add discounts</h5>
                <small>Help your place stand out to get booked faster</small>
                <div className='p-2 rounded-3 mt-1'>

                  <div className="discount-card address d-flex justify-content-between align-items-center mb-2 pe-2">
                    <div className='d-flex gap-4 p-2'>
                      <span className='badge-box'>20%</span>
                      <div>
                        <h6 className='mb-0'>New listing promotion</h6>
                        <small>Offer 20% off your first 3 bookings</small>
                      </div>
                    </div>

                    <input type="checkbox" {...register("discounts.newListingpromotion")} />
                  </div>

                  <div className="discount-card address d-flex justify-content-between align-items-center mb-2 pe-2">
                    <div className='d-flex gap-4 p-2'>
                      <span className='badge-box'>4%</span>
                      <div>
                        <h6 className='mb-0'>Last-minute discount</h6>
                        <small>For stays booked 14 days before arrival</small>
                      </div>
                    </div>

                    <input type="checkbox" {...register("discounts.lastMinuteDiscount")} />
                  </div>

                  <div className="discount-card address d-flex justify-content-between align-items-center mb-2 pe-2">
                    <div className='d-flex gap-4 p-2'>
                      <span className='badge-box'>10%</span>
                      <div>
                        <h6 className='mb-0'>Weekly discount</h6>
                        <small>For stays of 7 nights or more</small>
                      </div>
                    </div>

                    <input type="checkbox" {...register("discounts.weeklyDiscount")} />
                  </div>

                  <div className="discount-card address d-flex justify-content-between align-items-center mb-2 pe-2">
                    <div className='d-flex gap-4 p-2'>
                      <span className='badge-box'>10%</span>
                      <div>
                        <h6 className='mb-0'>Monthly discount</h6>
                        <small>For stays of 28 nights or more</small>
                      </div>
                    </div>
                    <input type="checkbox" {...register("discounts.monthlyDiscount")} />
                  </div>

                </div> */}








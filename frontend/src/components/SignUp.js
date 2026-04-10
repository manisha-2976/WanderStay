import { React, useState } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const SignUp = () => {
    const { fetchUser } = useContext(AuthContext);
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}//users/signup`, data,
                {
                    withCredentials: true
                }
            );
            await fetchUser();
            navigate("/");
        } catch (err) {
            reset();
            const message = err.response?.data?.message || "Server error";
            setMessage(message)
            console.log("SERVER ERROR:", message);
        }
    };


    return (
        <div>

            <div className="col-4 offset-4 pt-2">
                <h3>SignUp</h3>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        <div className='row'>
                            <div className="mb-2 col-md-6">

                                {/* first name */}
                                <label className="mb-2 form-label">First Name</label>
                                <input
                                    type="text"
                                    className={`mt-0 form-control ${errors.firstName ? "is-invalid" : ""}`}
                                    placeholder="first name"
                                    {...register("firstName", {
                                        required: "first name is required", minLength: { value: 3, message: "First name must be at least 3 characters" }
                                    })}
                                />
                                {errors.firstName && (
                                    <div className="invalid-feedback">
                                        {errors.firstName.message}
                                    </div>
                                )}
                            </div>

                            <div className="mb-2 col-md-6">

                                {/* first name */}
                                <label className="mb-2 form-label">Last Name</label>
                                <input
                                    type="text"
                                    className={`mt-0 form-control ${errors.lastName ? "is-invalid" : ""}`}
                                    placeholder="last name"
                                    {...register("lastName", {
                                        required: "last name is required", minLength: { value: 3, message: "Last name must be at least 3 characters" }
                                    })}
                                />
                                {errors.lastName && (
                                    <div className="invalid-feedback">
                                        {errors.lastName.message}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="mb-2">

                            {/* username */}
                            <label className="mb-2 form-label">Username</label>

                            <input
                                type="text"
                                className={`mt-0 form-control ${errors.username ? "is-invalid" : ""}`}
                                placeholder="username"
                                {...register("username", {
                                    required: "username is required", minLength: { value: 3, message: "Title must be at least 3 characters" }
                                })}
                            />

                            {errors.title && (
                                <div className="invalid-feedback">
                                    {errors.username.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-2">

                            {/* email */}
                            <label className="mb-2 form-label">Email</label>

                            <input
                                type="email"
                                className={`mt-0 form-control ${errors.email ? "is-invalid" : ""}`}
                                placeholder="email"
                                {...register("email", {
                                    required: "email is required"
                                })}
                            />

                            {errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-2">

                            {/* password */}
                            <label className="mb-2 form-label">Password</label>

                            <input
                                type="password"
                                className={`mt-0 form-control ${errors.password ? "is-invalid" : ""}`}
                                placeholder="password"
                                {...register("password", {
                                    required: "password is required"
                                })}
                            />

                            {errors.password && (
                                <div className="invalid-feedback">
                                    {errors.password.message}
                                </div>
                            )}
                        </div>
                    </div>

                    <p className='text-danger'>{message}</p>

                    {/* SUBMIT */}

                    <input
                        className="btn btn-dark add-btn mt-3 mb-3"
                        disabled={isSubmitting}
                        type="submit"
                        value={isSubmitting ? "Saving..." : "ADD"}
                    />



                </form>
            </div>
        </div>

    )
}

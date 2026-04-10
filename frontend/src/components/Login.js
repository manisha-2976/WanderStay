import { React, useState } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
    const { fetchUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data, 
            { withCredentials: true}
            );
            await fetchUser();
            navigate(from, { replace: true });


        } catch (err) {
            console.log(err);
            const message = err.response?.data?.message || "Server error";
            console.log("SERVER ERROR:", message);
        }
    };


    return (
        <div>
            {/* {isSubmitting && <div>Loading...</div>} */}
            <div className="">
                <div className="col-4 offset-4 pt-2">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div>

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
                                className={`mt-0 form-control ${errors.username ? "is-invalid" : ""}`}
                                placeholder="password"
                                {...register("password", {
                                    required: "password is required"
                                })}
                            />

                            {errors.password && 
                            (<div className="invalid-feedback"> {errors.password.message}</div>)}
                        </div>
                        </div>

                        {/* SUBMIT */}
                        
                        <input
                            className="btn btn-dark add-btn mt-3 mb-3"
                            disabled={isSubmitting}
                            type="submit"
                            value={isSubmitting ? "Saving..." : "Login"}
                        />
                       


                    </form>
                </div>
            </div>
        </div>
    )
}

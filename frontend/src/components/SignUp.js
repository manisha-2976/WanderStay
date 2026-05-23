import { useState } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom";
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
            await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, data,
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
        <div className="signup-page">

            <div className="signup-card shadow-sm">
                <h3 className="text-center mb-3">Sign Up</h3>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                placeholder="First name"
                                {...register("firstName", {
                                    required: "First name is required",
                                    minLength: { value: 3, message: "Minimum 3 characters" }
                                })}
                            />
                            {errors.firstName && (
                                <div className="invalid-feedback">{errors.firstName.message}</div>
                            )}
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                placeholder="Last name"
                                {...register("lastName", {
                                    required: "Last name is required",
                                    minLength: { value: 3, message: "Minimum 3 characters" }
                                })}
                            />
                            {errors.lastName && (
                                <div className="invalid-feedback">{errors.lastName.message}</div>
                            )}
                        </div>
                    </div>

                    {/* USERNAME */}
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            placeholder="Username"
                            {...register("username", {
                                required: "Username is required",
                                minLength: { value: 3, message: "Minimum 3 characters" }
                            })}
                        />
                        {errors.username && (
                            <div className="invalid-feedback">{errors.username.message}</div>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is required"
                            })}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required"
                            })}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                    </div>

                    {message && <p className="text-danger small">{message}</p>}

                    {/* BUTTON */}
                    <button
                        className="btn btn-dark w-100 mt-2"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Creating..." : "Create Account"}
                    </button>

                </form>
                <p className="text-center mt-3 mb-0">
                    Already have an account? 
                    <Link className='text-decoration-none' to="/users/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

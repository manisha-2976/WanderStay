import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

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
      await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data,
        { withCredentials: true }
      );
      await fetchUser();
      toast.success("Login successful");
      navigate(from, { replace: true });
    } catch (err) {
      const message = err.response?.data?.message || "Server error";
      toast.error(message);
    }
  };


  return (
    <div className="login-page">
      <div className="login-card shadow-sm">
        <h3 className="mb-3 text-center">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required"
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required"
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* BUTTON */}
          <button
            className="btn btn-dark w-100"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

        </form>
        <p className="text-center mt-3 mb-0">
          Don’t have an account?
          <Link className="text-decoration-none" to="/users/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

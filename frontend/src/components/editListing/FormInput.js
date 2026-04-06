import React from 'react'

export const FormInput = ({ label, name, register, error, rules, type = "text" }) => {
  return (
    <div className="mb-2">
      <label className='fs-6'>{label}</label>

      {type === "textarea" ? (
        <textarea
          {...register(name, rules)}
          className={`form-control border-0 ${error ? "is-invalid" : ""}`}
        />
      ) : (
        <input
          type={type}
          {...register(name, rules)}
          className={`form-control border-0 shadow-none ps-0 fs-6 fw-semibold text-muted ${error ? "is-invalid" : ""}`}
        />
      )}

      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  )
}

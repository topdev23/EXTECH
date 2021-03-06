import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export const FormInput = props => {
  const { error, label, ...others } = props
  const cls = error ? "form-control error" : "form-control"
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input className={cls} {...others} />
      {error && (
        <span className="errorsapn">
          <FontAwesomeIcon icon={faExclamationCircle} /> {error}
        </span>
      )}
    </div>
  )
}

export const Input = props => {
  const { label, ...others } = props
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input className="form-control" {...others} />
    </div>
  )
}

export const FormTextarea = props => {
  const { label, ...others } = props
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <textarea className="form-control" {...others} />
    </div>
  )
}

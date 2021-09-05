import "../../index.css";
import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handelNameInput = (event) => {
    setValues((values) => ({ ...values, name: event.target.value }));
  };
  const handelEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handelPasswordInput = (event) => {
    setValues((values) => ({ ...values, password: event.target.value }));
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    if (values.name && values.email && values.password) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handelSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          className="form-field"
          type="text"
          placeholder=" Enter Name"
          name="name"
          value={values.name}
          onChange={handelNameInput}
        />
        {submitted && !values.name && (
          <span id="name-error">Please enter a name</span>
        )}
        <input
          className="form-field"
          type="text"
          placeholder=" Enter Email"
          name="email"
          value={values.email}
          onChange={handelEmailInput}
        />
        {submitted && !values.email && (
          <span id="email-error">Please enter a valid email address</span>
        )}
        <input
          className="form-field"
          type="text"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={handelPasswordInput}
        />
        {submitted && !values.password && (
          <span id="password-error">Please enter a valid password</span>
        )}

        <button type="submit" className="form-field">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;

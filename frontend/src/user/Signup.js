import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import onlineExam from "./onlineExam.png";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    role:2,
    success: false
  });

  const { firstName,lastName, email, password, role, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstName, lastName, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 text-center">
          <h1 className="text-warning">Online Examination</h1>
          <h5 className="text-dark">An easy way to give exams and monitor your results</h5>          
          <img src={onlineExam} className="img-fluid w-50 rounded-circle" alt=""/>
        </div>
        <div className="col-md-4 text-left bg-white p-3 offset-md-1 rounded shadow p-3 mb-5 mt-5">
          <form>
            <div className="row">
            <div className="form-group col-md-6">
              <label className="text-secondary">First Name</label>
              <input
                className="form-control"
                onChange={handleChange("firstName")}
                type="text"
                value={firstName}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="text-secondary">Last Name</label>
              <input
                className="form-control"
                onChange={handleChange("lastName")}
                type="text"
                value={lastName}
                type="text"
              />
            </div>
            </div>            
            <div className="form-group">
              <label className="text-secondary">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-secondary">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            {/* <div className="form-group">
              <select className="custom-select mt-2 p-1 border-secondary rounded" required>
                <option value="">Select Role</option>
                <option value="1">Teacher</option>
                <option value="2">Student</option>
              </select>
              <button type="button" className="btn btn-sm border-primary rounded-circle ml-2 text-primary" data-toggle="popover" data-placement="top" data-content="A teacher can create question papers and conduct exams. A student can respond to the exams and check out results">?</button>
              </div> */}
            <button onClick={onSubmit} className="btn btn-success w-100 rounded mt-2" type="button">Sign Up</button>            
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-4 offset-sm-7 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-4 offset-sm-7 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="" description="">
      {signUpForm()}
      {successMessage()}
      {errorMessage()} 
      <p className="text-dark">{JSON.stringify(values)}</p>     
    </Base>
  );
};

export default Signup;

import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import {signin, authenticate, isAutheticated, forgotPassword, } from "../auth/helper/authapicalls"
import onlineExam from "../core/onlineExam.png";

export default function ForgotPassword() {

  const [values, setValues] = useState({
    email: "",
    error: "",
  })

  const {email,error} = values;

  const handleChange = name => event => {
    setValues({...values,error:false,[name]:event.target.value});
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    forgotPassword({email}).then(
      data => {
        if(data.error){
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,            
            email: "",
          });
        }
      }
    ).catch(console.log("Error in generating forgot password link"))
  }

  const resetPasswordForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 text-center">
          <h1 className="text-warning">Online Examination</h1>
          <h5 className="text-dark">An easy way to give exams and monitor your results</h5>          
          <img src={onlineExam} className="img-fluid w-50 rounded-circle" alt=""/>
        </div>
        <div className="col-md-4 text-left bg-white p-3 offset-md-1 rounded shadow p-3 mb-5 mt-5">
          <form>            
            <div className="form-group">
              <label className="text-secondary">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>          
            <button onClick={onSubmit} className="btn btn-warning text-white w-100 rounded mt-2 mb-2" type="button">Reset Password</button>                      
            <div className="border border-danger rounded">
            <Link          
          className="nav-link text-danger text-center"
          to="/signin"
        >
        Cancel?
        </Link> 
            </div>
                       
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="" description="">
     {resetPasswordForm()}
    </Base>
  )
}

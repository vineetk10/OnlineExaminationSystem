import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import {signin, authenticate, isAutheticated, } from "../auth/helper"
import onlineExam from "./onlineExam.png";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect:false
  });

  const { email, password, error, loading, didRedirect } = values;
  const {user}= isAutheticated();

  const handleChange = email => event => {
    setValues({ ...values, error: false, [email]: event.target.value });
  };

  const loadingMessage = () => {
    return (
      loading &&(
        <div className="alert alert-info">
          <h2>Loadiing...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
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


  const onSubmit = event =>{
      event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({email,password})
    .then(data =>{
      if(data.error){
        setValues({...values,error:data.error,loading:false})
      }else{
        authenticate(data,() => {
          setValues({...values,didRedirect:true})
        })
      }
    })
    .catch(console.log("Sign in failed"))
  }

  const performRedirect = () =>{
    if(didRedirect){
      if(user && user.role === 1){
        return <p>redirect to admin</p>
      }else{
        return <p>reddirect to user dashboard</p>
      }
    }
    if(isAutheticated){
      return <Redirect to="/"/>;
    }
  }
  const signInForm = () => {
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
            <div className="form-group">
              <label className="text-secondary">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success w-100 rounded mt-2" type="button">Sign Up</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="" description="">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}      
    </Base>
  );
};

export default Signin;

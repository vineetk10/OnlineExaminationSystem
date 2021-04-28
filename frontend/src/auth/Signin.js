import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import {signin, authenticate, isAutheticated, } from "../auth/helper/authapicalls"
import onlineExam from "../core/onlineExam.png";

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
        console.log(data.error)
      }else{
        authenticate(data,() => {
          setValues({...values,didRedirect:true})
          console.log("sign in successful")
        })
      }
    })
    .catch(err=>console.log(err))
  }

  const performRedirect = () =>{
    if(didRedirect){
      if(user && user.role <2){
        return <Redirect to="/"/>
      }else{
        return <p>redirect to user dashboard</p>
      }
    }
    // if(!isAutheticated){
    //   return <Redirect to="/signin"/>;
    // }
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
            <Link          
          className="nav-link text-danger text-center"
          to="/forgotpassword"
        >
        <u>Forgotten Password?</u>
        </Link>   
            <button onClick={onSubmit} className="btn btn-success w-100 rounded mt-2 mb-2" type="button">Sign in</button>                      
            <div className="border border-warning rounded">
            <Link          
          className="nav-link text-warning text-center"
          to="/signup"
        >
        Create an  Account?
        </Link> 
            </div>
                       
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

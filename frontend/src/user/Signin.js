import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import {signin, authenticate, isAutheticated, } from "../auth/helper"

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
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input value={email} className="form-control" onChange={handleChange("email")} type="email" />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input value={password} className="form-control" onChange={handleChange("password")} type="password" />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign In page" description="A page for user to sign in!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-light">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;

import React,{useEffect} from 'react'

const Error = ({errorMessage, setErrorMessage}) => {

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("")
    }, 5000);
   }, [errorMessage])

    return(
      <div className="alert alert-danger mt-3 col-md-4 offset-md-8 text-center"
    style={{display: errorMessage? "" : "none"}}>
      <h4>{errorMessage}</h4>
    </div>
    )    
}

export default Error;
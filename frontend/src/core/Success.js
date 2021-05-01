import React,{useEffect} from 'react'

const Success = ({successMessage,setSuccessMessage}) => {

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("")
    }, 5000);
   }, [successMessage])

    return(
      <div className="alert alert-success mt-3 col-md-4 offset-md-8 text-center"
    style={{display: successMessage? "" : "none"}}>
      <h5>{successMessage}</h5>
    </div>
    )     
}


export default Success;
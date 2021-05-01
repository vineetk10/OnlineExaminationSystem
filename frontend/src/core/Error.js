import React,{useState,useEffect} from 'react'

const Error = (props) => {

    const [errorMessage,setErrorMessage] = useState(props.errorMessage);

    useEffect(() => {
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    });

    return(
      <div className="alert alert-danger mt-3"
    style={{display: errorMessage? "display-block" : "none"}}>
      <h4>{errorMessage}</h4>
    </div>
    )    
}

export default Error;
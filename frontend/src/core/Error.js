import React,{useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Error = ({errorMessage, setErrorMessage,type}) => {

  if(errorMessage.length>0)
  {
    toast(errorMessage, {
      position: "top-right",
      type: "error",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      setErrorMessage("");
  }
  
    return(
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    )     
}

export default Error;
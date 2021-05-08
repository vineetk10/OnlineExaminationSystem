import React,{useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = ({successMessage,setSuccessMessage}) => {

  if(successMessage.length>0)
  {
    toast(successMessage, {
      position: "bottom-center",
      type: "success",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      setSuccessMessage("");
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


export default Success;
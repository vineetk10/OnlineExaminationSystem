import React from "react";

const Base = ({
    title="My Title",
    description="My description",
    className = "text-white p-4",
    children
})=>(
    <div>
       <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>   
                <p className="lead">{description}</p> 
            </div>  
            <div className={className}>{children}</div>
        </div> 
        <footer className="footer bg-light mt-auto py-3">
            <div className="row">
            <div className="col-md-4">
            <div className="container-fluid bg-light text-dark text-center">
                <h6>Nav menu will come here</h6>
            </div>
            </div>
            <div className="col-md-4">                
            <div className="container-fluid bg-light text-dark text-center">
                <h6>If you got any questions, feel free to reach out</h6>
                <button className="btn btn-warning btn-sm rounded">Contact Us</button>
            </div>
            </div>      
            </div>        
        </footer> 
    </div>    
)

export default Base;
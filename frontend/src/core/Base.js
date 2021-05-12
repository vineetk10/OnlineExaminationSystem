import React from "react";

const Base = ({
    title="My Title",
    description="My description",
    className = "text-white p-2",
    children
})=>(
    <div className="page-container">
       <div className="content-wrap">
            <div className="jumbotron bg-white text-warning text-left p-2">
                <h2>{title}</h2>   
                <p>{description}</p>
            </div>  
            <div className={className}>{children}</div>
        </div> 
        <footer className="footer bg-light mt-auto">
            <div className="row">
            <div className="col-md-12">                
            <div className="container-fluid bg-light text-dark text-center">
                <p>If you have any questions, feel free to reach out!</p>
                <button className="btn btn-outline-warning btn-sm rounded">Contact Us</button>
            </div>
            </div>      
            </div>        
        </footer> 
    </div>    
)

export default Base;
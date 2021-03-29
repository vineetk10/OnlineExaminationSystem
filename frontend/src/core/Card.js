import React, {useState} from "react"

const Card = ({paper})=>{
    const paperTitle = paper ? paper.paperTitle : "";
    const subject = paper ? paper.subject : ""; 
    const duration = paper ? paper.duration: "";
    const maxMarks = paper ? paper.maxMarks: "";
    return (
        <div className="card text-white bg-dark border border-info"  style={{width: "18rem"}}>
            <div className="card-header lead">{paperTitle}</div>
            <div className="card-body">
            <p className="lead bg-success font-weight-normal text-wrap">
                Subject : {subject}
                <br/>
                Duration : {duration}
                <br/>
                Max Marks : {maxMarks}
            </p>
            </div>
            <button
                
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                View Question Paper
              </button>
        </div>
    )
}

export default Card
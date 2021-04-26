import React, {useState} from "react"
import { MdModeEdit } from "react-icons/md";
import { IoTime,IoBook } from "react-icons/io5";
const Card = ({paper})=>{
    const paperTitle = paper ? paper.paperTitle : "";
    const subject = paper ? paper.subject : ""; 
    const duration = paper ? paper.duration: "";
    const maxMarks = paper ? paper.maxMarks: "";
    return (
        <div className="card text-dark bg-white shadow"  style={{width: "18rem"}}>
            <div className="card-header"><div className="row">
                <div className="col-md-9">
                <h5 className="card-title">{paperTitle}</h5>
                </div>
                <div className="col-3">
                <button className="btn btn-primary rounded">
                <MdModeEdit></MdModeEdit>
                </button>
                </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row mb-2">
                    <div className="col-md-6">
                    <span><IoBook></IoBook></span> {subject}
                    </div>
                    <div className="col-md-6 text-right">
                    <span><IoTime></IoTime></span> {duration}M
                    </div>
                </div>
            <p className="card-text p-2 bg-light rounded">
                Max Marks : {maxMarks}
            </p>
            </div>
            <div className="row m-2">
            <div className="col-md-6">
            <button className="btn w-100 btn-outline-danger rounded">
                Delete
            </button>
            </div>
            <div className="col-md-6">
            <button className="btn btn-outline-warning w-100 rounded">
                View
            </button>
            </div>
            </div>           
            
        </div>
    )
}

export default Card
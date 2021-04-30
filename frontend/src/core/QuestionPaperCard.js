import React, {useState} from "react"
import { MdDelete } from "react-icons/md";
import { IoTime,IoBook } from "react-icons/io5";
import { Link } from "react-router-dom";
import { deleteQuestionPaper } from '../teacher/helper/questionpaperapicalls';
const QuestionPaperCard = ({paper})=>{

    const paperTitle = paper ? paper.paperTitle : "";
    const subject = paper ? paper.subject : ""; 
    const duration = paper ? paper.duration: "";
    const maxMarks = paper ? paper.maxMarks: "";

    const callQuestionPaperDelete = (questionPaperId)=>{
        deleteQuestionPaper(questionPaperId)
        .then()
    }

    return (
        <div className="card text-dark bg-white shadow"  style={{width: "18rem"}}>
            <div className="card-header"><div className="row">
            <div className="col-md-3">
                <button className="btn btn-danger rounded">
                <MdDelete onClick={()=>callQuestionPaperDelete(paper._id)}></MdDelete>
                </button>
                </div>
                <div className="col-md-9">
                <h5 className="card-title">{paperTitle}</h5>
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
                <Link to={`/editquestionpaper/${paper._id}`} className="btn w-100 btn-outline-primary rounded">
                    Edit
                </Link>
            </div>
            <div className="col-md-6">
            <Link to={`/viewquestionpaper/${paper._id}`} className="btn w-100 btn-outline-warning rounded">
                    View
                </Link>
            </div>
            </div>                       
        </div>
    )
}

export default QuestionPaperCard;
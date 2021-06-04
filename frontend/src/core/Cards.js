import React, { useEffect, useState } from 'react';
import QuestionPaperCard from './QuestionPaperCard';
import "../css/Cards.css";
const Cards =({papers})=>{
    return(
                <div className="row" id="cards">
                    {papers.map((paper,index)=>{
                        return(
                            <div key={index} className="col-4 mb-4">
                                <QuestionPaperCard paper={paper}/>
                             </div>   
                        )
                    })}
                </div>
           
    )
}

export default Cards
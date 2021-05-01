import React, { useEffect, useState } from 'react';
import "../styles.css";
import Base from './Base';
import {IoAddCircleSharp} from 'react-icons/io5'
import QuestionPaperCard from './QuestionPaperCard';
import CreateQuestionPaperModal from './CreateQuestionPaperModal';
import { getQuestionPapers } from './../teacher/helper/questionpaperapicalls';
import {isAutheticated} from '../auth/helper/authapicalls'
const {user,token}= isAutheticated();
const Home = ()=>{

    const [papers,setPapers] = useState([])
    const [error,setError] = useState(false)

    const loadAllPapers = ()=>{
        getQuestionPapers(user._id,token).then(data=>{
            if(data.error){
                setError(data.error)
            }
            else
                setPapers(data);
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        loadAllPapers()
    },[])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Base title="Online Examination" description="My Question Papers">
           <div className="row text-center">
               <div className="header">
                   <div></div>
                <span className="header__logo"><IoAddCircleSharp style={{color:"#FFCA2C"}} size={50} onClick={handleShow}/></span>
               </div>
                <div className="row">
                    {papers.map((paper,index)=>{
                        return(
                            <div key={index} className="col-4 mb-4">
                                <QuestionPaperCard paper={paper}/>
                             </div>   
                        )
                    })}
                </div>
           </div>
           <CreateQuestionPaperModal show ={show} handleClose={handleClose}/>
           
        </Base>
    )
}

export default Home;
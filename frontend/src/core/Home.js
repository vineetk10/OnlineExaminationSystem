import React, { useEffect, useState } from 'react';
import "../styles.css";
import Base from './Base';
import getQuestionPapers from "./helper/coreapicalls"
import Card from "./Card"
import {IoAddCircleSharp} from 'react-icons/io5'
import Create from "../admin/CreateQuestionPaper.js"
import { Button,Modal } from 'react-bootstrap'
const Home = ()=>{

    const [papers,setPapers] = useState([])
    const [error,setError] = useState(false)

    const loadAllPapers = ()=>{
        getQuestionPapers().then(data=>{
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
        <Base title="Online Examination" description="An easy way to give exams and monitor your results">
           <div className="row text-center">
               <div className="header">
                <h1 className=" header__text text-white">All Question Papers</h1>
                <span className="header__logo"><IoAddCircleSharp size={50} onClick={handleShow}/></span>
               </div>
                
                <div className="row">
                    {papers.map((paper,index)=>{
                        return(
                            <div key={index} className="col-4 mb-4">
                                <Card paper={paper}/>
                             </div>   
                        )
                    })}
                </div>
           </div>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create Your Survey</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
        </Base>
    )
}

export default Home;
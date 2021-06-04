import React, { useEffect, useState } from 'react';
import "../styles.css";
import "../css/Home.css";
import Base from './Base';
import {IoAddCircleSharp} from 'react-icons/io5'
import CreateQuestionPaperModal from './CreateQuestionPaperModal';
import { getQuestionPapers } from './../teacher/helper/questionpaperapicalls';
import {isAutheticated} from '../auth/helper/authapicalls'
import Sidebar from "./Sidebar"
import Cards from "./Cards"
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
        <Base title="Online Examination" className="Home" description="My Question Papers">
            
            <Sidebar/>
             <Cards papers={papers}/>
            <span className="header__logo"><IoAddCircleSharp style={{color:"#FFCA2C"}} size={50} onClick={handleShow}/></span>
            
           <CreateQuestionPaperModal show ={show} handleClose={handleClose}/>
           
        </Base>
    )
}

export default Home;
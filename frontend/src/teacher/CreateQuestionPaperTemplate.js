import React,{useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Base from '../core/Base';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {IoAddCircleSharp} from 'react-icons/io5'
const CreateTemplate = ()=>{

    const [questionPaperJson,setQuestionPaperJson] = useState({
        pages: [ 
        ]
    })
    Survey
    .StylesManager
    .applyTheme("modern");
   
    window.survey = new Survey.Model(questionPaperJson);
    
    const AddIntoJson = (type)=>{
        if(type === "pages"){
            /*json.pages.push({"name":"page2"});*/
            var obj = {elements : [{type:"text",name:"Question1"}],name:"page1"}
            setQuestionPaperJson({...questionPaperJson,pages:[...questionPaperJson.pages,obj]});
        }
    }
    return (
        <Base title="Online Examination" description="An easy way to give exams and monitor your results">
            <Container>
            <Row  style={{height: "300px"}}>
                <Col xs={5} style={{backgroundColor:'grey'}}>
                    <div className="header">
                    <h1 className=" header__text text-white">Add a Page</h1>
                    <span className="header__logo"><IoAddCircleSharp size={50} onClick={()=>AddIntoJson("pages")}/></span>
                    </div>
                </Col>
                <Col xs={1} ></Col>
                <Col xs={6} style={{backgroundColor:'white'}}>
                <Survey.Survey json={questionPaperJson}/>
                </Col>
            </Row>
            </Container>
        </Base>
    )   
}

export default CreateTemplate
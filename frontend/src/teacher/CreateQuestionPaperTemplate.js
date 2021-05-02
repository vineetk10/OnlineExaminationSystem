import React,{useState} from 'react'
import { Container,Row,Col,Dropdown,InputGroup,FormControl } from 'react-bootstrap';
import Base from '../core/Base';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {IoAddCircleSharp} from 'react-icons/io5'
const CreateTemplate = ()=>{

    const [textbox,setTextbox] = useState(false);
    const [questionName,setQuestionName] = useState(false);
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
            var obj = {elements : [{type:"text",name:questionName}],name:"page1"}
            setQuestionPaperJson({...questionPaperJson,pages:[...questionPaperJson.pages,obj]});
        }
    }

    const onClickHandler = event => {
        const value = event.target.text;
        if(value=="Textbox")
        {
            setTextbox(true);
        }
      }
      
    const handleChange = name => event => {
        //let errors = values.error;
        //errors[name] =  event.target.value.length === 0 ? [name]+" is compulsory" : '';
        setQuestionName(event.target.value)
    }
    return (
        <Base title="Online Examination" description="An easy way to give exams and monitor your results">
            <Container>
            <Row  style={{height: "100px"}}>
                <Col xs={12} style={{backgroundColor:'grey'}}>
                    <div className="header">
                        <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Choose a question type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={onClickHandler}>Page</Dropdown.Item>
                            <Dropdown.Item onClick={onClickHandler}>Textbox</Dropdown.Item>
                            <Dropdown.Item onClick={onClickHandler}>Radio</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        {textbox &&
                        <div className="textbox_add">
                        <InputGroup className="textbox mb-3">
                            <FormControl
                            placeholder="Question"
                            aria-label="Question"
                            aria-describedby="basic-addon1"
                            onChange={handleChange("paperName")}
                            />
                            <div className="header__logo"><IoAddCircleSharp size={50} onClick={()=>AddIntoJson("pages")}/></div>
                        </InputGroup>
                        
                        </div>}
                    </div>
                </Col>
            </Row>
            <Row  style={{height: "200px"}}>
                <Col xs={12} style={{backgroundColor:'white'}}>
                    <Survey.Survey json={questionPaperJson}/>
                </Col>
            </Row>
            </Container>
        </Base>
    )   
}

export default CreateTemplate
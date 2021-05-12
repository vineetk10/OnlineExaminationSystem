import React, { useState } from 'react'
import { useParams } from 'react-router';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import QuestionMenu from '../teacher/QuestionMenu';
import Base from './Base';

const ViewQuestionPaper = () =>  {

  const params = useParams();

  const [questionPaper, setQuestionPaper] = useState({})

  const getQuestionPaper = () => {
    // get the json data 
    setQuestionPaper({
      elements: [
       { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
      ]
     })
  }
  
  
   var model = new Survey.Model(questionPaper);
   //Define a callback methods on survey complete
   const onComplete=(survey, options) =>{
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
   }
   
  return (
    <Base title="" description="">
      <QuestionMenu paperId = {params.paperId}/>
      <Survey.Survey model={model} onComplete={onComplete}/>
    </Base>
  )
}
export default ViewQuestionPaper

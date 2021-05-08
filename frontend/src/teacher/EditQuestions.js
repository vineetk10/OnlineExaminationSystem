import React from 'react'
import Base from '../core/Base';
import QuestionMenu from './QuestionMenu';
import * as Survey from "survey-react";
import "survey-react/survey.css";
const EditQuestion= () => {

  

  const json = {
    elements: [
     { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
    ]
   };
  
   var model = new Survey.Model(json);
   //Define a callback methods on survey complete
   const onComplete=(survey, options) =>{
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
   }
   
  return (
    <Base title="edit questions" description="">
      <QuestionMenu/>
      <Survey.Survey model={model} onComplete={onComplete}/>
    </Base>
  )
}

export default EditQuestion;

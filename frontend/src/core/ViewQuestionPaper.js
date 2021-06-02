import React, { useState,useEffect } from 'react'
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
      "pages": [
       {
        "name": "page1",
        "elements": [
         {
          "type": "imagepicker",
          "name": "question1",
          "choices": [
           {
            "value": "lion",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
           },
           {
            "value": "giraffe",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
           },
           {
            "value": "panda",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
           },
           {
            "value": "camel",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
           }
          ]
         }
        ]
       }
      ]
     })
  }
  
  const preload = ()=>{
    getQuestionPaper();
  }
  useEffect(preload,[]);
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

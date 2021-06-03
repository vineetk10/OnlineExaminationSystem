import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import QuestionMenu from '../teacher/QuestionMenu';
import Base from './Base';
import {GetPaperJson} from "../core/helper/SurveyCreatorApiCalls"

const ViewQuestionPaper = () =>  {

  const params = useParams();

  const [questionPaper, setQuestionPaper] = useState({})

  const getQuestionPaper = () => {
    // get the json data 
    GetPaperJson(params.paperId)
    .then((paperJson)=>{
      console.log(paperJson);
      setQuestionPaper(JSON.parse(paperJson[0].questionPaperJson))
    })
    .catch((error)=>console.log(error));
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

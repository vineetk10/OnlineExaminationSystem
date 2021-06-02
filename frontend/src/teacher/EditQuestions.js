import React from 'react'
import Base from '../core/Base';
import QuestionMenu from './QuestionMenu';
import "survey-react/survey.css";
import SurveyCreatorView from "../core/SurveyCreatorView"
import { useParams } from 'react-router';


const EditQuestion= () => {

  const params = useParams();

  return (
    <Base title="" description="">
      <QuestionMenu paperId = {params.paperId}/>
      <SurveyCreatorView paperId = {params.paperId}/>
    </Base>    
)
}

export default EditQuestion;

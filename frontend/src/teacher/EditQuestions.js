import React from 'react'
import Base from '../core/Base';
import QuestionMenu from './QuestionMenu';
import "survey-react/survey.css";
const EditQuestion= () => {

  

  return (
    <Base title="edit questions" description="">
      <QuestionMenu/>
      <div id="surveyContainer">
                <div id="creatorElement"></div>
            </div>
    </Base>
  )
}

export default EditQuestion;

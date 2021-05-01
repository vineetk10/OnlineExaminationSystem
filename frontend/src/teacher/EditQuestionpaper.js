import React, { useState,useEffect } from 'react'
import Base from '../core/Base';
import QuestionMenu from './QuestionMenu';
import { getQuestionPaperById, updateQuestionPaperById } from './helper/questionpaperapicalls';
import Error from '../core/Error';
import Success from '../core/Success';

const EditQuestionpaper= ({match}) => {

  const [questionpaper, setQuestionpaper] = useState({
    paperId:"",
    paperName: "",
    subjectName: "",
    duration: "",
    marks:"",
    error: {
            paperName: "Paper Name is compulsory",
            subjectName: "Subject Name is compulsory",
            duration: "Duration is compulsory",
            marks:"Marks is compulsory"
        },
    update:false
  })

  const [errors,setErrors] = useState("")
  const [success,setSuccess] = useState("")

  const {paperName,subjectName,duration,marks,error,update,paperId} = questionpaper

  const preload = (paperId) => {
    getQuestionPaperById(paperId).then(data => {
      console.log(data)
      if(data.error){
        setQuestionpaper({...questionpaper});
        setErrors("Unable to fetch the Paper")
      }else{
        setQuestionpaper({
          ...questionpaper,
          paperId:data._id,
          paperName: data.paperTitle,
          subjectName: data.subject,
          duration: data.duration,
          marks:data.maxMarks,
          error: {
            paperName: "",
            subjectName: "",
            duration: "",
            marks:""
        }
        })
      }
    })
  }

  useEffect(() => {
    preload(match.params.paperId)
  }, [])

  const onSubmit = (event) =>{
    event.preventDefault()
    const refactoredQp = {
      paperTitle:questionpaper.paperName,
      subject:questionpaper.subjectName,
      duration:questionpaper.duration,
      maxMarks: questionpaper.marks
    }
    updateQuestionPaperById(match.params.paperId, refactoredQp).then(data => {
        if(data.error){
          setErrors("Update Failed!")
        }else{
          setErrors("")
          setSuccess("Update Successful!")
          console.log(success)
        }
    })
  }

  const handleChange = name => event => {
    let errors = questionpaper.error;
    errors[name] =  event.target.value.length === 0 ? [name]+" is compulsory" : '';
    setQuestionpaper({...questionpaper,error: errors,[name]:event.target.value,update:true})
}

  const questionPaperForm = () => {
    return(
      <div className="col-md-6 offset-md-3 mt-3 text-center">
          <form>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("paperName")} value={paperName} placeholder="Enter Question Paper Name"/>
                        {error.paperName.length > 0 && 
                        <span className='error'>{error.paperName}</span>}
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("subjectName")} value={subjectName} placeholder="Enter Subject Name"/>
                        {error.subjectName.length>0 && 
                        <span className="error">{error.subjectName}</span>}
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" onChange={handleChange("duration")} value={duration} placeholder="Enter Duration In Minutes"/>
                        {error.duration.length>0 && 
                        <span className="error">{error.duration}</span>}
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" onChange={handleChange("marks")} value={marks} placeholder="Enter Maximum Marks"/>
                        {error.marks.length>0 && 
                        <span className="error">{error.marks}</span>}
                        <br/>
                    </div>
                    {!update && (<button className="btn w-50 btn-warning rounded" disabled onClick={onSubmit}>Update</button>)}
                    {update &&(<button className="btn w-50 btn-warning rounded" onClick={onSubmit}>Update</button>)}
                </form>
      </div>
    )
  }
  return (
    <Base title="" description="">
      <QuestionMenu paperId = {paperId}/>
      {questionPaperForm()}
      <Error errorMessage={errors}/>
      <Success successMessage={success}/>
    </Base>
  )
}

export default EditQuestionpaper;

import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Create from '../teacher/CreateQuestionPaper';

const CreateQuestionPaperModal = ({show,handleClose})=>{
    const [values,setValues] = useState({
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
        success: false
    })

    const {paperName,subjectName,duration,marks,error,success} = values
    const [redirect,setRedirect] = useState(false);

    const getARedirect =(redirect)=>{
        if(redirect){
          return <Redirect to="admin/createTemplate" />
        }
      }

    const handleChange = name => event => {
        let errors = values.error;
        errors[name] =  event.target.value.length === 0 ? [name]+" is compulsory" : '';
        // switch(name)
        // {
        //     case 'paperName':
        //         errors.paperName = event.target.value.length == 0 ? "Paper Name is compulsory" : '';
        //         break;
        //     case 'subjectName':
        //         errors.subjectName = event.target.value.length == 0 ? "Subject Name is compulsory" : '';
        //         break
        //     case 'duration':
        //         errors.duration = event.target.value.length == 0 ? "Duration is compulsory" : '';
        //         break;
        //     case 'marks':
        //         errors.marks = event.target.value.length == 0 ? "Marks is compulsory" : '';
        //         break
        //     default:
        //         break;
        // }
        setValues({...values,error: errors,[name]:event.target.value})
    }

    const ValidateSurveyEntries = (errors)=>{
        let valid = true;
        Object.values(errors).forEach((val)=>{
            if(val.length>0 && valid){
                valid = false;
            }
        })
        return valid;
    }

    const onCreate = event=>{
        if(!ValidateSurveyEntries(values.error))
        {
            console.log("Invalid form");
            return;
        }
        Create({paperTitle:paperName,subject:subjectName,duration,maxMarks:marks})
        setRedirect(true)
    }

    return(
        
    <Modal show={show} onHide={handleClose}>
        {getARedirect(redirect)}
                <Modal.Header closeButton>
                <Modal.Title>Create Your Own Question Paper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("paperName")} placeholder="Enter Question Paper Name"/>
                        {error.paperName.length > 0 && 
                        <span className='error'>{error.paperName}</span>}
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("subjectName")} placeholder="Enter Subject Name"/>
                        {error.subjectName.length>0 && 
                        <span className="error">{error.subjectName}</span>}
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" onChange={handleChange("duration")} placeholder="Enter Duration In Minutes"/>
                        {error.duration.length>0 && 
                        <span className="error">{error.duration}</span>}
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" onChange={handleChange("marks")} placeholder="Enter Maximum Marks"/>
                        {error.marks.length>0 && 
                        <span className="error">{error.marks}</span>}
                        <br/>
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-outline-secondary rounded" onClick={handleClose}>
                    Close
                </button>
                <button onClick={onCreate} className="btn btn-warning rounded">Create Survey</button>
                </Modal.Footer>
        </Modal>
    )
} 

export default CreateQuestionPaperModal;
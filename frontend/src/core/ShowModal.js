import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import {Create} from '../admin/CreateQuestionPaper'

const ShowModal = ({show,handleClose})=>{
    const [values,setValues] = useState({
        paperName: "",
        subjectName: "",
        duration: "",
        marks:"",
        error: "",
        success: false
    })

    const {paperName,subjectName,duration,marks,error,success} = values

    const handleChange = name => event=>{
        setValues({...values,error: false,[name]:event.target.value})
    }

    const onCreate = event=>{
        setValues({...values,error:false})
        Create({paperTitle:paperName,subject:subjectName,duration,maxMarks:marks})
        .then(data=>{
            if(data.error){
                console.log("abc");
                <Redirect to="/admin/createTemplate" />
            }
            else{
                error = ""
                success = true
                
            }
        })
    }

    return(
    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create Your Own Question Paper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("paperName")} placeholder="Enter Question Paper Name"/>
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("subjectName")} placeholder="Enter Subject Name"/>
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" onChange={handleChange("duration")} placeholder="Enter Duration In Minutes"/>
                        <br/>
                    </div>
                    <div className="form-group">
                        <input type="textbox" className="form-control" onChange={handleChange("marks")} placeholder="Enter Maximum Marks"/>
                        <br/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={onCreate} className="btn btn-primary">Create Survey</button>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
    )
} 

export default ShowModal
import {API} from "../../backend"

export const getQuestionPapers = ()=>{
    return fetch(`${API}/questionPapers`,{
        method: "GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

export const getQuestionPaperById = (paperId) => {
    return fetch(`${API}/questionPaper/${paperId}`,{
        method:"GET",
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}
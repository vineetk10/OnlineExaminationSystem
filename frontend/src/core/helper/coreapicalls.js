import {API} from "../../backend"

const getQuestionPapers = ()=>{
    return fetch(`${API}/questionPapers`,{
        method: "GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

export const selectQuestionPaper =(paper,next) => {
    console.log(paper)
    localStorage.setItem("selectedPaper", JSON.stringify(paper));
    next()
}

export default getQuestionPapers


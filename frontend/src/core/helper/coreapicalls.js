import {API} from "../../backend"

const getQuestionPapers = ()=>{
    console.log(API);
    return fetch(`${API}/questionPapers`,{
        method: "GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

export default getQuestionPapers
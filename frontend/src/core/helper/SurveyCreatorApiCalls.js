import {API} from "../../backend"

export const SavePaperJson = (questionPaperId,questionPaperJson)=>{
    return fetch(`${API}/questionPaper/SavePaperJson/${questionPaperId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"questionPaperJson":questionPaperJson})
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}
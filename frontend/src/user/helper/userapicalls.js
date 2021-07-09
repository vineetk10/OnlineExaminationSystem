import {API} from "../../backend"

export const SavePaperResponseJson = (createdBy,paperId,response)=>{
    const userResponse = {
        createdBy:createdBy,
        questionPaperId:paperId,
        responses: response
      }
    return fetch(`${API}/questionPaper/SavePaperResponseJson/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userResponse)
    })
    .then(response=>{
        return response.json();
    }).catch(err=>console.log(err))
}

export const GetAllUsers = ()=>{
    return fetch(`${API}GetAllUsers/`,{
        method: "GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}
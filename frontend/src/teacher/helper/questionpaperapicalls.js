import {API} from "../../backend"

export const getQuestionPapers = (userId,token)=>{
    return fetch(`${API}/questionPapers/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
        body:JSON.stringify({"userId":userId})
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
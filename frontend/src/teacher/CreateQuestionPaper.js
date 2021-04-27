import {API} from "./../backend"
const axios = require('axios')

const Create = async(questionPaper)=>{
     const res = await axios.post(`${API}/questionPaper/create`, questionPaper);
}

export default Create;
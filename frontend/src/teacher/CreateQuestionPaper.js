
import React from 'react'
import {API} from "./../backend"
import { Redirect } from 'react-router-dom'
const axios = require('axios')

export const Create = async(questionPaper)=>{
     const res = await axios.post(`${API}/questionPaper/create`, questionPaper);
}

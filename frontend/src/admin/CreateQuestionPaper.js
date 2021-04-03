
import React from 'react'
import {API} from "./../backend"
import { Redirect } from 'react-router-dom'
const axios = require('axios')

export const Create = async(questionPaper)=>{
     await axios.post(`${API}/questionPaper/create`, questionPaper)
        .then(function (response) {
            console.log("xyz"+response+"");
            return response;
          })
          .catch(err=>console.log(err))
}

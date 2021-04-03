import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import CreateTemplate from "./admin/CreateQuestionPaperTemplate.js"
const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/admin/createTemplate" exact component={CreateTemplate}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
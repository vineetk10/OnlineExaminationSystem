import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import CreateTemplate from "./admin/CreateQuestionPaperTemplate.js"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";

const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/admin/createTemplate" exact component={CreateTemplate}></Route>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/resetpassword/:userId" exact component={ResetPassword}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
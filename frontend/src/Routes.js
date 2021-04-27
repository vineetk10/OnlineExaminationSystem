import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import CreateTemplate from "./admin/CreateQuestionPaperTemplate.js"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
import EditQuestionpaper from './admin/EditQuestionpaper';
import EditQuestion from './admin/EditQuestions';

const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/admin/createTemplate" exact component={CreateTemplate}/>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/resetpassword/:userId" exact component={ResetPassword}/>
                <Route path="/editquestionpaper/:paperId" exact component={EditQuestionpaper} />
                <Route path="/editquestions/:paperId" exact component={EditQuestion} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import EditQuestionpaper from './teacher/EditQuestionpaper';
import EditQuestion from './teacher/EditQuestions';
import TeacherRoute from './auth/helper/TeacherRoutes';
import ViewQuestionPaper from "./core/ViewQuestionPaper"
import Invite from "./teacher/Invite"
const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <TeacherRoute path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/resetpassword/:userId" exact component={ResetPassword}/>
                <Route path="/editquestionpaper/:paperId" exact component={EditQuestionpaper} />
                <Route path="/editquestions/:paperId" exact component={EditQuestion} />
                <Route path="/viewquestionpaper/:paperId/:userId" exact component={ViewQuestionPaper} />
                <TeacherRoute path="/invite" exact component={Invite}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
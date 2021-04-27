import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#000000" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const QuestionMenu = ({ history,paperId }) => (
  <div>
    <ul className="nav nav-tabs bg-warning">
    {/* Teachers Menu */}
    {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/")}
            className="nav-link"
            to="/"
          >
          Teacher Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 2 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            Student Dashboard
          </Link>
        </li>        
      )}
      {isAutheticated() && isAutheticated().user.role === 1  && (
        <li className="nav-item">
        <Link style={currentTab(history, "/editquestionpaper")} className="nav-link" to={`/editquestionpaper/${paperId}`}>
          Edit Paper
        </Link>
      </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 &&(<li className="nav-item">
        <Link style={currentTab(history, "/editquestions")} className="nav-link" to="/editquestions">
          Add/Edit Questions
        </Link>
      </li>)}      
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() => {
              signout(() => {
                history.push("/signin");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(QuestionMenu);

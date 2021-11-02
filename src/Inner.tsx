import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Education from "./components/Education";
import Personal from "./components/Personal";
import DashboardLayout from "./Layout/DashboardLayout";
const Inner = () => {
  return (
    <>
      <DashboardLayout>
        <Router>
          <Switch>
            <Route exact path="/signup/personal" component={Personal} />
            <Route exact path="/signup/education" component={Education} />
            <Redirect from ="/signup" to="/signup/personal"/>
          </Switch>
        </Router>
      </DashboardLayout>
    </>
  );
};

export default Inner;

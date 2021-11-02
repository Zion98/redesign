import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
// import Check from "./components/Check";
import Renew from "./components/Renew";
// import Dashboard from "./Layout/DashboardLayout"
import Congrats from "./components/Congrats"
import Inner from "./Inner";
function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Inner} />
        <Route path="/forgot" component={Forgot} />
        {/* <Route exact path="/check" component={Check} /> */}
        <Route path="/renew" component={Renew} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route path="/congrats" component={Congrats} />
        {/* <Redirect from ="/*" to="/"/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

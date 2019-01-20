import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import HomePage from "./pages/HomePage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={HomePage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

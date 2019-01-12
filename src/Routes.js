import React from "react";
import { Route, Switch } from "react-router-dom";


// FREE
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import HomePage from "./pages/HomePage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

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

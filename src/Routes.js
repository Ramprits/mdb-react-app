import React from "react";
import { Route, Switch } from "react-router-dom";

// FREE
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import HomePage from "./pages/HomePage";
import FruitDetail from "./pages/Fruit-detail";
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={FruitDetail} />

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

import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routes from "./Routes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
            <div className="container">
              <NavbarBrand href="/">Blog</NavbarBrand>
              <NavbarToggler
                onClick={this.toggleCollapse("mainNavbarCollapse")}
              />
              <Collapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <div className="container">
                  <NavbarNav left>
                    <NavItem>
                      <NavLink
                        exact
                        to="/"
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                      >
                        Angular
                      </NavLink>
                    </NavItem>
                  </NavbarNav>
                </div>
                <NavbarNav right>
                  <NavItem>
                    <NavLink
                      exact
                      to="/login"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      exact
                      to="/signup"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      Signup
                    </NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </div>
          </Navbar>
          {this.state.collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <div className="mt-4">
              <Routes />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

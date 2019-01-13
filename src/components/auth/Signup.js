import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBCol, MDBBtn, Card } from "mdbreact";
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  changeHandler = event => {
    console.log(event.target.name);

    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <MDBContainer className="my-3">
        <MDBRow>
          <MDBCol md="6" xs="12" className="offset-md-3">
            <Card className="mx-5">
              <form
                style={{ padding: "1rem" }}
                onSubmit={this.submitHandler}
                noValidate
              >
                <p className="h5 text-center mb-4">Register</p>
                <div className="grey-text">
                  <input
                    name="username"
                    type="text"
                    placeholder="username"
                    className="form-control mb-2"
                    onChange={this.changeHandler}
                  />
                  <input
                    name="email"
                    placeholder="email"
                    type="email"
                    className="form-control mb-2"
                    onChange={this.changeHandler}
                  />

                  <input
                    name="password"
                    className="form-control mb-2"
                    type="Password"
                    placeholder="password"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline type="submit" color="info">
                    Signup <MDBIcon icon="paper-plane-o" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

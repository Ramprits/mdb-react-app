import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBBtn,
  Card
} from "mdbreact";
export default class Login extends Component {
  render() {
    return (
      <MDBContainer className="my-3">
        <MDBRow>
          <MDBCol md="6" xs="12" className="offset-md-3">
            <Card className="mx-5">
              <form style={{ padding: "1rem" }}>
                <p className="h5 text-center mb-4">Welcome back!</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    label="Password"
                    icon="key"
                    group
                    type="Password"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="info">
                    Login <MDBIcon icon="paper-plane-o" className="ml-1" />
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

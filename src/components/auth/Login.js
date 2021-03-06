import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, Card, CardBody } from "mdbreact";
export default class Login extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="offset-md-3 col-12">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center mb-4">Sign in</p>
                  <label
                    htmlFor="defaultFormLoginEmailEx"
                    className="grey-text"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormLoginPasswordEx"
                    className="grey-text"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                  />
                  <div className="text-center mt-4">
                    <MDBBtn color="indigo" type="submit">
                      Login
                    </MDBBtn>
                  </div>
                </form>
              </CardBody>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

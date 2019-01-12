import React from "react";

import "./HomePage.css";

import {
  EdgeHeader,
  FreeBird,
  Col,
  Row,
  CardBody,
  Fa
} from "mdbreact";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <CardBody>
                <h2 className="h2-responsive mb-4">
                  <strong>MDB React Demo App</strong>
                </h2>
                <p>React Bootstrap with Material Design</p>
                <p className="pb-4">
                  This application shows the actual use of MDB React components
                  in the application.
                </p>
                <Row className="d-flex flex-row justify-content-center row">
                  <a
                    className="border nav-link border-light rounded mr-1"
                    href="https://mdbootstrap.com/react/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Fa icon="graduation-cap" className="mr-2" />
                    Official Documentation
                  </a>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
       </div>
    );
  }
}

export default HomePage;

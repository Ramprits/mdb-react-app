import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText
} from "mdbreact";
import Strapi from "strapi-sdk-javascript/build/main";
const API_URL = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(API_URL);

class FruitDetail extends Component {
  state = {
    fruit: {}
  };
  async componentWillMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `
          query {
              fruit(id: "${this.props.match.params.id}") {
                name
                description
                price
                image {
                  url
                  name
                }
              }
            }
            
          `
        }
      });
      this.setState({ fruit: response.data.fruit });
    } catch (error) {
      console.error(error.mesage);
    }
  }
  render() {
    const { fruit } = this.state;
    return (
      <Container className="mt-3">
        <Row>
          <Col key={fruit._id} md="4" className="offset-3">
            <Card className="h-100  w-100">
              {/* <CardImage
                className="img-fluid"
                src={`${API_URL}${fruit.image.url}`}
                waves
              /> */}
              <CardBody>
                <CardTitle>{fruit.name}</CardTitle>
                <CardText>{fruit.description}</CardText>
                <Button type="Button" color="primary" size="sm">
                  Detail..
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FruitDetail;

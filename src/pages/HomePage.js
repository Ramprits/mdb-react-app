import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col,
  Row
} from "mdbreact";
import Strapi from "strapi-sdk-javascript/build/main";
const API_URL = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(API_URL);

class HomePage extends React.Component {
  state = {
    fruits: []
  };
  async componentWillMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query{
      fruits{
        _id
        name
        description
        price
        image{
          url
          name
        }
        user{
          username
        }
      }
    }`
        }
      });
      this.setState({ fruits: response.data.fruits });
    } catch (error) {
      console.error(error.message);
    }
  }
  render() {
    const { fruits } = this.state;
    return (
      <Container className="mt-5">
        <Row>
          {fruits.map(fruit => {
            return (
              <Col key={fruit._id} md="4">
                <Card className="h-100  w-100">
                  <CardImage
                    className="img-fluid"
                    src={`${API_URL}${fruit.image.url}`}
                    waves
                  />
                  <CardBody>
                    <CardTitle>{fruit.name}</CardTitle>
                    <CardText>{fruit.description}</CardText>
                    <Link to={`/${fruit._id}`} className="btn-link" size="sm">
                      Detail..
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default HomePage;

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  let params = useParams();
  const product = products.find((p) => p._id === params.id);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={5}>
          <h3>{product.name}</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.rating} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? `In stock` : `Out of stock`}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-primary d-block w-100"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

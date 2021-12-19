import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-4 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.rating} Reviews`} />
        </Card.Text>
        <Card.Text as="h6">
          <strong>{product.price}$</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

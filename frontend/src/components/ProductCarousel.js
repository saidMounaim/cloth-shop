import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import Loading from "./Loading";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listTopProducts } from "../redux/actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productsTopRated = useSelector((state) => state.productsTopRated);
  const { loading, products, error } = productsTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loading />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>{product.name}</h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;

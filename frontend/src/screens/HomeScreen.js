import React, { useEffect } from "react";
import { listProduct } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";
import Message from "../components/Message";

const HomeScreen = () => {
  let params = useParams();
  const keyword = params.keyword;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          products.map((product, index) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} key={index} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default HomeScreen;

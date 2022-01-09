import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { listProduct } from "../redux/actions/productActions";

const ProductListScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const deleteProductHandler = () => {};

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h3>Products List</h3>
        </Col>
        <Col className="text-end">
          <LinkContainer to="/admin/products/create">
            <Button variant="primary">
              <i className="fas fa-plus"></i> Create Product
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col>
            <Table striped rounded="true" hover className="table-sm">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Brand</td>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <LinkContainer
                        className="ml-1"
                        to={`/admin/product/edit/${product._id}`}
                      >
                        <Button className="btn btn-sm" variant="primary">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        className="btn btn-sm"
                        variant="danger"
                        onClick={() => deleteProductHandler(product._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductListScreen;

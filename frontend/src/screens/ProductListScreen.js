import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Table, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { listProduct, deleteProduct } from "../redux/actions/productActions";

const ProductListScreen = () => {
  let params = useParams();
  const pageNumber = params.pageNumber;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  useEffect(() => {
    dispatch(listProduct("", pageNumber));
  }, [dispatch, successDelete, pageNumber]);

  const deleteProductHandler = (id) => {
    if (window.confirm("Are u sure ?")) {
      dispatch(deleteProduct(id));
    }
  };

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
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col>
            {loadingDelete ? (
              <Loading />
            ) : (
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
            )}
          </Col>
        </Row>
      )}
      <Paginate page={page} pages={pages} isAdmin={true} />
    </>
  );
};

export default ProductListScreen;

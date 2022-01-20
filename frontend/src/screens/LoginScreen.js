import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { login } from "../redux/actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Meta from "../components/Meta";

const LoginScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "";

  useEffect(() => {
    if (userInfo) {
      navigate(`/${redirect}`);
    }
  }, [dispatch, navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") dispatch(login(email, password));
  };

  return (
    <>
      <Meta title="Clothshop | Login" />
      <FormContainer>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          {error && <Message variant="danger">{error}</Message>}
          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button className="mt-3" type="submit" variant="primary">
            {loading ? <Loading /> : `Sign In`}
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;

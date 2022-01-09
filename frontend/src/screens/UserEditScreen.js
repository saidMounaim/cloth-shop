import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loading from "../components/Loading";
import { getUserDetails } from "../redux/actions/userActions";

const UserEditScreen = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let navigate = useNavigate();
  const userId = params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  useEffect(() => {
    if (!user || user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userId, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle");
  };

  return (
    <FormContainer>
      <h2>Edit User</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Message variant="danger">{error}</Message>}
        <Form.Group controlId="name" className="mt-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          {loading ? <Loading /> : `Update`}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UserEditScreen;

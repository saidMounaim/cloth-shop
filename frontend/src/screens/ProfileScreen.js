import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { updateProfile } from "../redux/actions/userActions";

const ProfileScreen = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { successUpdated, loading, error } = userUpdateProfile;

  useEffect(() => {
    if (userInfo?.name) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [dispatch, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(updateProfile({ id: userInfo._id, name, email, password }));
    }
  };

  return (
    <FormContainer>
      <h2>Update Profile</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        {successUpdated && <Message variant="success">Profile Updated</Message>}
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
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mt-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          {loading ? <Loading /> : `Update Profile`}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;

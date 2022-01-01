import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../redux/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) navigate("/shipping");

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={handlePaymentMethod}>
        <Form.Group>
          <Form.Label as="label">Select method</Form.Label>
        </Form.Group>

        <Col>
          <Form.Group>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              value="PayPal"
              name="paymentMethod"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Form.Group>
        </Col>

        {/* <Col>
          <Form.Check
            type="radio"
            label="Stripe"
            id="Stripe"
            value="Stripe"
            name="paymentMethod"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </Col> */}

        <Button className="mt-3" type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;

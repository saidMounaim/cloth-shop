import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartScreen = () => {
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Home
      </Link>
    </>
  );
};

export default CartScreen;

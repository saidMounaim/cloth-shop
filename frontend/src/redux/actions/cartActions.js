import axios from "axios";
import * as actions from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actions.CART_ADD_ITEM,
    payload: {
      product: data.product._id,
      name: data.product.name,
      image: data.product.image,
      price: data.product.price,
      countInStock: data.product.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: actions.CART_REMOVE_ITEM, payload: id });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: actions.CART_SAVE_SHIPPING_ADDRESS, payload: data });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: actions.CART_SAVE_PAYMENT_METHOD, payload: data });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

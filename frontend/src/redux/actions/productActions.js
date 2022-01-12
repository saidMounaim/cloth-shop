import * as actions from "../constants/productConstants";
import axios from "axios";
import { logout } from "./userActions";

export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/products");

    dispatch({ type: actions.PRODUCT_LIST_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({
      type: actions.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    dispatch({ type: actions.PRODUCT_DETAILS_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: actions.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`http://localhost:5000/api/products/${id}`, config);

    dispatch({ type: actions.PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "not authorized, no token") {
      dispatch(logout());
    }
    dispatch({
      type: actions.PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createProduct = (dataProduct) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.PRODUCT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`http://localhost:5000/api/products`, dataProduct, config);

    dispatch({ type: actions.PRODUCT_CREATE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "not authorized, no token") {
      dispatch(logout());
    }
    dispatch({
      type: actions.PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateProduct = (dataProduct) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.PRODUCT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.put(
      `http://localhost:5000/api/products/${dataProduct._id}`,
      dataProduct,
      config
    );

    dispatch({ type: actions.PRODUCT_UPDATE_SUCCESS });
    dispatch({ type: actions.PRODUCT_UPDATE_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "not authorized, no token") {
      dispatch(logout());
    }
    dispatch({
      type: actions.PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};

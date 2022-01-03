import * as actions from "../constants/orderConstants";
import axios from "axios";

export const createOrder = (dataOrder) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.ORDER_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    console.log(userInfo.token);

    const { data } = await axios.post(
      "http://localhost:5000/api/orders",
      dataOrder,
      config
    );

    dispatch({ type: actions.ORDER_CREATE_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: actions.ORDER_CREATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

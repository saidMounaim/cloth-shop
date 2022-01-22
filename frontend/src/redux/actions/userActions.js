import axios from "axios";
import * as actions from "../constants/userConstants.js";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data.user });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: actions.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: actions.USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register",
      {
        name,
        email,
        password,
      },
      config
    );

    dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: data.user });
    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: actions.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userDetailsLoggedIn = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_LOGGED_IN_FAIL });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/users/profile", config);

    dispatch({ type: actions.USER_LOGGED_IN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: actions.USER_LOGGED_IN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({ type: actions.USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: actions.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put("/api/users/profile", user, config);

    dispatch({ type: actions.USER_UPDATE_PROFILE_SUCCESS, payload: data.user });
    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: actions.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/users", config);

    dispatch({ type: actions.USER_LIST_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: actions.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: actions.USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/users/${userData._id}`,
      userData,
      config
    );

    dispatch({ type: actions.USER_UPDATE_SUCCESS });
    dispatch({ type: actions.USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: actions.USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

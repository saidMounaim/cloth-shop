import * as actions from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case actions.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.USER_LOGOUT:
      return {
        userInfo: null,
      };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case actions.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userLoggedInReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGGED_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actions.USER_LOGGED_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actions.USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        successUpdated: true,
        user: action.payload,
      };
    case actions.USER_UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actions.USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case actions.USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.USER_LIST_RESET:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case actions.USER_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case actions.USER_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

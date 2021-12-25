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
        userInfo: action.payload,
      };
    case actions.USER_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case actions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

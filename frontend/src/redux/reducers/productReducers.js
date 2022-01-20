import * as actions from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actions.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case actions.PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case actions.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case actions.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.PRODUCT_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case actions.PRODUCT_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case actions.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case actions.PRODUCT_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.PRODUCT_UPDATE_RESET: {
      return {};
    }
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case actions.PRODUCT_CREATE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productsTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actions.PRODUCT_TOP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.PRODUCT_TOP_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actions.PRODUCT_TOP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

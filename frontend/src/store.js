import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

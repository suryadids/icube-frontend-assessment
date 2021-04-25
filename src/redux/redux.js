import { combineReducers, createStore } from "redux";

// actions
export const putProducts = (products) => {
  return {
    type: "PUT",
    payload: products,
  };
};

// productReducer
const productReducer = (state = [], action) => {
  switch (action.type) {
    case "PUT":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

// reducers
const reducers = combineReducers({
  products: productReducer,
});

// store
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

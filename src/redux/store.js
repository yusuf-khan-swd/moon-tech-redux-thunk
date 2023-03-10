import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;

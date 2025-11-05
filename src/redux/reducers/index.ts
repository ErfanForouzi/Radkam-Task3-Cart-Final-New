import { cart } from "./cart";
import { order } from "./order";
import { combineReducers } from "redux";

export default combineReducers({
  cart,
  order,
});

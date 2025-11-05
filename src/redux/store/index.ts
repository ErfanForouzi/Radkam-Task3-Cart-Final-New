import reducers from "../reducers";
import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartStorageMiddleware } from "../middlewares/cart";
import { orderStorageMiddleware } from "../middlewares/order";

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk, cartStorageMiddleware, orderStorageMiddleware)
  )
);
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

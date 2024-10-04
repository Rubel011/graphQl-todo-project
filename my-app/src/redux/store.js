import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: { counter: counterReducer },
},);

export const { dispatch } = store;
export const useAppSelector = useSelector;

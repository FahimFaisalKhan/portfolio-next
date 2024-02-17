import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slieces/counterSlice";
import dataReducer from "./slieces/dataSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});

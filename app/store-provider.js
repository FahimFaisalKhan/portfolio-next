"use client";

// import { useHeight } from "@/hooks/useHeight";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  // useHeight();
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

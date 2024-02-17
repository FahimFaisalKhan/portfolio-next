"use client";
import { setData } from "@/redux/slieces/dataSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ReduxInitialData = ({ data }) => {
  const dispatch = useDispatch();
  dispatch(setData(data));
  return <></>;
};

export default ReduxInitialData;

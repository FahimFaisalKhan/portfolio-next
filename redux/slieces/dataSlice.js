import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  demoData: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.demoData = action.payload;
    },
  },
});
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;

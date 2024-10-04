import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
  extraReducers: (builder) => {builder.addCase(userLogin.p)},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

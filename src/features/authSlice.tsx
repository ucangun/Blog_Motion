import { createSlice } from "@reduxjs/toolkit";

interface YourState {
  value: number;
}

const initialState: YourState = {
  value: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {} = authSlice.actions;

export default authSlice.reducer;

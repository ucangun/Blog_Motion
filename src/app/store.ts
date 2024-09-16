import { configureStore } from "@reduxjs/toolkit";

// https://redux-toolkit.js.org/tutorials/typescript

const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

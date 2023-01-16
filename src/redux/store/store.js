import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";
import gameSlice from "../modules/gameSlice";

const store = configureStore({
  reducer: { authSlice, gameSlice },
});

export default store;

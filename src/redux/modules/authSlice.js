import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignAPI } from "../../api/axios";

export const __kakaoAuth = createAsyncThunk(
  "authSlice/kakaoAuth",
  async (key, thunkAPI) => {
    const response = await SignAPI.kakaoSign(key);
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLoggedIn: false },
  reducers: {},
  extraReducers: {
    [__kakaoAuth.fulfiled]: (state, { payload }) => {},
  },
});

export default authSlice.reducer;

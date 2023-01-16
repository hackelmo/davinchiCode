import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __a = createAsyncThunk("a", async ({}, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3002/items/`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    console.log(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  userId: "",
  roomId: "",
  isLoading: false,
};

const gameSlice = createSlice({
  name: "GAME_SLICE",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__a.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__a.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__a.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setUserId, setRoomId } = gameSlice.actions;
export default gameSlice.reducer;

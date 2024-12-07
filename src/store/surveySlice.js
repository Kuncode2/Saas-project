import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMetrics = createAsyncThunk("getMetrics", async () => {
  const response = await axios.get("http://localhost:4000/surveys");
  return response.data;
});

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    steps: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMetrics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.plan = action.payload;
      })
      .addCase(getMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default surveySlice.reducer;

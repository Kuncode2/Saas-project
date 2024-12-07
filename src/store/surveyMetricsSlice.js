import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMetrics = createAsyncThunk("surveyMetrics/getMetrics", async () => {
  const response = await axios.get("http://localhost:4000/survey-metrics");
  return response.data;
});

const surveyMetricsSlice = createSlice({
  name: "surveyMetrics",
  initialState: {
    metrics: { active: 0, completed: 0, abandoned: 0 },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.metrics = action.payload;
      })
      .addCase(getMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default surveyMetricsSlice.reducer;

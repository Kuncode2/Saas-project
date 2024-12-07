import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSetupSteps = createAsyncThunk("setupSteps/getSetupSteps", async () => {
  const response = await axios.get("http://localhost:4000/setup-steps");
  return response.data;
});

const setupStepsSlice = createSlice({
  name: "setupSteps",
  initialState: {
    steps: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSetupSteps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSetupSteps.fulfilled, (state, action) => {
        state.loading = false;
        state.steps = action.payload;
      })
      .addCase(getSetupSteps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default setupStepsSlice.reducer;

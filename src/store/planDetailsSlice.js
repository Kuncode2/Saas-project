import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlanDetails = createAsyncThunk("planDetails/getPlanDetails", async () => {
  const response = await axios.get("http://localhost:4000/plan-details");
  return response.data;
});

const planDetailsSlice = createSlice({
  name: "planDetails",
  initialState: {
    plan: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlanDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlanDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.plan = action.payload;
      })
      .addCase(getPlanDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default planDetailsSlice.reducer;

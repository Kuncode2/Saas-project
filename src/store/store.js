import { configureStore } from "@reduxjs/toolkit";
import setupStepsReducer from "./setupStepsSlice";

import surveyMetricsReducer from "./surveyMetricsSlice";
import surveyReducer from "./surveySlice";
import planDetailsReducer from "./planDetailsSlice";

export const store = configureStore({
  reducer: {
    setupSteps: setupStepsReducer,
    surveyMetrics: surveyMetricsReducer,
    survey: surveyReducer,
    planDetails: planDetailsReducer,
  },
});

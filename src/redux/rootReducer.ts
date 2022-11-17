import { combineReducers } from "@reduxjs/toolkit";
import { brokerDataSlice } from "./slices/brokerData";
import { measurementsSlice } from "./slices/measurements";

export const rootReducer = combineReducers({
    brokerData: brokerDataSlice.reducer,
    measurements: measurementsSlice.reducer
});

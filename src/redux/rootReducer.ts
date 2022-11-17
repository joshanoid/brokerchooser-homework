import { combineReducers } from "@reduxjs/toolkit";
import { brokerDataSlice } from "./slices/brokerDataSlice";

export const rootReducer = combineReducers({
    brokerData: brokerDataSlice.reducer
});

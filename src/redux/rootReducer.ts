import { combineReducers } from "@reduxjs/toolkit";
import { Broker } from "../data/brokers";
import { brokerDataSlice } from "./slices/brokerDataSlice";

export const rootReducer = combineReducers({
    brokerData: brokerDataSlice.reducer
});

export type RootState = {
    brokerData: ReadonlyArray<Broker>;
};

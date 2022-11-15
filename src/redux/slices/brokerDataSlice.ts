import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Broker, exampleBrokerData } from "../../data/brokers";
import { RootState } from "../rootReducer";

type BrokerDataState = ReadonlyArray<Broker>;

const initialState: BrokerDataState = exampleBrokerData;

const selectBrokerDataState = (state: RootState) => state.brokerData;

export const selectBrokerData = createSelector(selectBrokerDataState, (brokerData) => brokerData);

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {}
});

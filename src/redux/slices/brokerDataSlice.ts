import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Broker, exampleBrokerData } from "../../data/brokers";
import { RootState } from "../rootReducer";

type BrokerDataState = ReadonlyArray<Broker>;

const initialState: BrokerDataState = exampleBrokerData;

const selectBrokerDataState = (state: RootState) => state.brokerData;

export const selectBrokerData = createSelector(selectBrokerDataState, (brokerData) => brokerData);

export const selectBrokersByName = createSelector(
    [selectBrokerDataState, (_: RootState, name: string) => name],
    (brokers, name) => brokers.filter((broker) => broker.name.toLowerCase().includes(name.toLowerCase()))
);

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {}
});

import { createSelector, createSlice } from "@reduxjs/toolkit";
import { exampleBrokerData } from "../../data/brokers";
import { Broker, BrokerType, RootState } from "../../utils/types";

type BrokerDataState = ReadonlyArray<Broker>;

const initialState: BrokerDataState = exampleBrokerData;

const selectBrokerDataState = (state: RootState) => state.brokerData;

export const selectBrokerData = createSelector(selectBrokerDataState, (brokerData) => brokerData);

export const selectBrokersByName = createSelector(
    [selectBrokerDataState, (_: RootState, name: string) => name],
    (brokers, name) => brokers.filter((broker) => broker.name.toLowerCase().includes(name.toLowerCase()))
);

export const selectTop5BrokersByType = createSelector(
    [selectBrokerDataState, (_: RootState, type: BrokerType) => type],
    (brokers, type) =>
        [...brokers]
            .filter((broker) => broker[type === "stock" ? "isStock" : "isForex"])
            .sort((brokerA, brokerB) => (brokerA.score > brokerB.score ? -1 : 1))
            .slice(0, 5)
);

export const brokerDataSlice = createSlice({
    name: "brokerData",
    initialState,
    reducers: {}
});

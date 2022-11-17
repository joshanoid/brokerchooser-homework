import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MeasurementEvent, Measurements, RootState } from "../../utils/types";

const initialState: Measurements = [];

export const selectMeasurements = createSelector(
    (state: RootState) => state.measurements,
    (measurements) => measurements
);

export const measurementsSlice = createSlice({
    name: "measurements",
    initialState,
    reducers: {
        addMeasurement: (state: Measurements, action: PayloadAction<MeasurementEvent>) => [...state, action.payload]
    }
});

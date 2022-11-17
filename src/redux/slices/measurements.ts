import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendEvent } from "../../logic/event";
import { MeasurementEvent, Measurements, RootState } from "../../utils/types";

const initialState: Measurements = [];

export const addMeasurement = createAsyncThunk("addMeasurement", async (measurement: MeasurementEvent, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    if (
        !state.measurements.find(
            (storedMeasurement) =>
                storedMeasurement.brokerId === measurement.brokerId &&
                storedMeasurement.measurementId === measurement.measurementId &&
                measurement.type === "impression"
        )
    ) {
        sendEvent(measurement);
        return measurement;
    }

    throw new Error("Impression event is already in the store");
});

export const selectMeasurements = createSelector(
    (state: RootState) => state.measurements,
    (measurements) => measurements
);

export const measurementsSlice = createSlice({
    name: "measurements",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addMeasurement.fulfilled, (state, action) => {
            return [...state, action.payload];
        });
    }
});

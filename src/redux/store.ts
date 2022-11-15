import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./rootReducer";

type AppThunkExtra = {};

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: {
            name: "BrokerChooser Homework"
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
    });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export type AppAsyncThunkConfig = {
    state: AppState;
    dispatch: AppDispatch;
    extra: AppThunkExtra;
};

export const useAppDispatch = () => {
    return useDispatch<AppDispatch>();
};

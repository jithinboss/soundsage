import { ThunkAction, Action, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const docuZoneStore = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export type AppDispatch = typeof docuZoneStore.dispatch;
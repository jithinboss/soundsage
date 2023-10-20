import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavigateState {
    navigation: string;
}

const initialState: NavigateState = {
    navigation: ""
}

const NavigateSlice = createSlice({
    name: 'navigate',
    initialState,
    reducers: {
        setNavigate: (state, { payload }: PayloadAction<any>) => {
            state.navigation = payload;
        }
    }
});

export const {
    setNavigate
} = NavigateSlice.actions;

export default NavigateSlice.reducer;
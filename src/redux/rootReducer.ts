import { combineReducers } from "@reduxjs/toolkit";
//slices
import NavigateSlice from './Common/navigationSlice';

const rootReducer = combineReducers({
    navigation: NavigateSlice
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
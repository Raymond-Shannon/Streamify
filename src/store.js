// store.js
import { configureStore } from '@reduxjs/toolkit';
import songsReducer from "./Reducers/songsReducer";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        songs: songsReducer, // Register the songs slice
    },
});

export default store;

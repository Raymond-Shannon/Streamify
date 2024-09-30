// /redux/songReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchSongs } from '../Actions/songsAction'; // Import the async thunk from songAction.js

const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [],
        status: 'idle',  // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        // You can add other synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.songs = action.payload; // Update state with fetched songs
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export the reducer to be used in the store configuration
export default songsSlice.reducer;
// /redux/songAction.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Action: Fetch songs from an API (using async thunk)
export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
    const response = await fetch('http://localhost:3001/songs');
    const data = await response.json();
    return data; // Returns the list of songs
});
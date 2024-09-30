import React, {useEffect} from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchSongs} from "../../Actions/songsAction";


const TopSongsBarChart = () => {

    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs.songs);
    const status = useSelector((state) => state.songs.status); // Access loading status

    const data = [...songs].sort((a, b) => b.count - a.count).splice(0, 5);
    console.log(data);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSongs());
        }
    }, [status, dispatch]);

    return (
        <div>
            <Typography variant="h4" color="info" sx={{fontFamily: "Arial Black"}}>Top 5 Streamed Songs</Typography>
            <ResponsiveContainer width={600} height={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5"/>
                    <XAxis dataKey="songName"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="count" fill="#8884d8" barSize={20}/>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default TopSongsBarChart;
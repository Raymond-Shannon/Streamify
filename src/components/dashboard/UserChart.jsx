import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Typography from "@mui/material/Typography";

const data = [
    {month: 'Jan', totalUsers: 4000, activeUsers: 2400},
    {month: 'Feb', totalUsers: 4300, activeUsers: 2210},
    {month: 'Mar', totalUsers: 4500, activeUsers: 2290},
    {month: 'Apr', totalUsers: 4700, activeUsers: 2000},
    {month: 'May', totalUsers: 4900, activeUsers: 2181},
    {month: 'Jun', totalUsers: 5000, activeUsers: 2500},
    {month: 'Jul', totalUsers: 5100, activeUsers: 2100},
    {month: 'Aug', totalUsers: 5300, activeUsers: 2400},
    {month: 'Sep', totalUsers: 5500, activeUsers: 2350},
    {month: 'Oct', totalUsers: 5600, activeUsers: 2450},
    {month: 'Nov', totalUsers: 5700, activeUsers: 2200},
    {month: 'Dec', totalUsers: 5900, activeUsers: 2300},
];

const UserChart = () => {
    return (
        <div>
            <Typography variant="h4" color="info" sx={{fontFamily: "Arial Black"}}>User Growth Chart</Typography>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="totalUsers" stroke="#8884d8"/>
                    <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};

export default UserChart;
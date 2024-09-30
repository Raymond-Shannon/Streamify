import React from 'react';
import {PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer} from 'recharts';
import Typography from "@mui/material/Typography";

const data = [
    {name: 'Subscription', value: 4000},
    {name: 'Ads', value: 3000},
    {name: 'Other', value: 1000},
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; // Colors for each section of the pie


function RevenueChart(props) {
    return (
        <div>
            <Typography variant="h4" color="info"  sx={{fontFamily: "Arial Black"}}>Revenue Distribution</Typography>
            <ResponsiveContainer width={600} height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        innerRadius={50}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevenueChart;
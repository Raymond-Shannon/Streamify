import React, {useEffect, useState} from 'react';
import {ButtonBase, Card, CardContent, CardMedia, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Create a styled Card component with hover effects and transitions
const InteractiveCard = styled(Card)(({ theme, color }) => ({
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: color,
    '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card on hover
        boxShadow: theme.shadows[6], // Add shadow on hover
    },
}));

function InformationCard(props) {

    const [count, setCount] = useState(0);
    const totalCount = props.description; // Final number to reach
    const incrementSpeed = 20; // Milliseconds delay for each increment
    const incrementValue = props.incrementValue || 1; // Amount to increment by

    console.log(props);

    useEffect(() => {
        let timer;
        if (count < totalCount) {
            timer = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount >= totalCount) {
                        clearInterval(timer); // Stop incrementing when the count reaches totalUsers
                        return totalCount;
                    }
                    return prevCount + incrementValue;
                });
            }, incrementSpeed);
        }

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [count, totalCount]);

    return (
        <ButtonBase style={{width: 400, display: 'block', borderRadius: '12px' }}>
            <InteractiveCard color={props.color} sx={{borderRadius: '12px', padding: '16px', textAlign: 'center', color: "white" }}>

                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        {props.children}{props.title}
                    </Typography>
                    <Typography variant="h3">
                        {count < totalCount ? `+${count}` : totalCount}
                    </Typography>
                </CardContent>

            </InteractiveCard>
        </ButtonBase>
    );
}

export default InformationCard;
import React, {Suspense} from 'react';
import {Card, Stack} from "@mui/material";
import InformationCard from "./dashboard/InformationCard";
import SongTable from "./dashboard/SongTable";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

import image from "../volumetric-musical-background-with-treble-clef-notes-generative-ai.jpg";

const TopSongsBarChart = React.lazy(() => import('./dashboard/TopSongsBarChart'));
const RevenueChart = React.lazy(() => import('./dashboard/RevenueChart'));
const UserChart = React.lazy(() => import('./dashboard/UserChart'));


function Dashboard(props) {


    return (
        <div>

            <div className="image-container">
                <img src={image} style={{width: '100%', height: '600px'}} alt="music"/>
                <div className="animated-text">Music is Everything!</div>
            </div>

            <Stack direction={{xs: 'row'}} spacing={2} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "center", marginTop: "80px"}}>



                <Card sx={{width: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: "15px", padding: "20px"}}>
                    <Suspense fallback={<div>Loading chart...</div>}>
                        <UserChart />
                    </Suspense>
                </Card>
                <InformationCard image_url="./logo192.png" title="TOP ARTIST" description="Shawn Milner" color="#468421"><MilitaryTechIcon /></InformationCard>


                <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "center", alignItems: "center", marginTop: "80px"}}>
                    <InformationCard image_url="./logo192.png" title="TOTAL USERS" description="80" color="#189283"><PeopleAltIcon /></InformationCard>
                    <InformationCard image_url="./logo192.png" title="ACTIVE USERS" description="21" color="#645262"><PersonPinIcon /></InformationCard>
                    <InformationCard image_url="./logo192.png" title="TOTAL STREAMS" description="200" color="#232442"><QueueMusicIcon /></InformationCard>
                    <InformationCard image_url="./logo192.png" title="REVENUE" description="1500" color="#854335" incrementValue={10}><AttachMoneyIcon /></InformationCard>
                </Stack>


                <Stack direction={{xs: 'column', sm: 'row'}} spacing={10} useFlexGap sx={{width: '80%', alignItems: 'center', justifyContent: 'center', marginTop: "80px"}}>
                    <Suspense fallback={<div>Loading chart...</div>}>
                        <RevenueChart />
                    </Suspense>

                    <Suspense fallback={<div>Loading chart...</div>}>
                        <TopSongsBarChart />
                    </Suspense>

                </Stack>

                <SongTable />
            </Stack>
        </div>
    );
}

export default Dashboard;
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingTemplate = () => {
    return <>
        <Box component='h1'>
            Loading the photos...
        </Box>
        <Box sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <CircularProgress />
            <CircularProgress />
            <CircularProgress />
        </Box>
    </>
}

export default LoadingTemplate;
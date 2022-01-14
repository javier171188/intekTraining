import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingTemplate = () => {
    return <Box
        component='div'
        sx={{
            width: "100vw"
        }}
    >
        <Box
            component='h1'
            className="waiting-title"
            sx={{
                textAlign: "center",
                color: "brown",
                marginBottom: "55px"
            }}
        >
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
    </ Box>
}

export default LoadingTemplate;
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/loadingTemplate.css';

const LoadingTemplate = () => {
    return <Box
        component='div'
        className={'waiting-container'}
    >
        <Box
            component='h1'
            className="waiting-title"
        >
            Getting the photos...
        </Box>
        <Box
            className={'waiting-circles'}
        >
            <CircularProgress />
            <CircularProgress />
            <CircularProgress />
        </Box>

    </ Box>
}

export default LoadingTemplate;
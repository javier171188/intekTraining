import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';

const Buttons = ({ page, handlePrevious, handleNext, maxPages }) => {
    return <AppBar position="fixed" color="primary" className="buttons"
        sx={{
            top: 'auto',
            bottom: 0,
            display: 'inline-flex',
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "5px",
        }}
        enableColorOnDark={true}
    >
        <Button
            variant="contained"
            disabled={page === 1}
            onClick={handlePrevious}
            className='previous-button'
        >
            Previous
        </Button>
        Page: {page}
        <Button
            variant="contained"
            onClick={handleNext}
            disabled={page === maxPages}
            className='next-button'
        >
            Next
        </Button>
    </AppBar >
}

export default Buttons;


import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import '../styles/buttons.css';

const Buttons = ({
    page,
    handlePrevious,
    handleNext,
    maxPages,
    flexDirection,
    variant,
    theme }) => {
    return <AppBar position="fixed" color={theme || "primary"} className="buttons"
        sx={{
            flexDirection: flexDirection || "row",
        }}
        enableColorOnDark={true}
    >
        <Button
            variant={variant || "contained"}
            disabled={page === 1}
            onClick={handlePrevious}
            className='previous-button'
            color={theme || "primary"}
        >
            Previous
        </Button>
        Page: {page}
        <Button
            variant={variant || "contained"}
            onClick={handleNext}
            disabled={page === maxPages}
            className='next-button'
            color={theme || "primary"}
        >
            Next
        </Button>
    </AppBar >
}

export default Buttons;


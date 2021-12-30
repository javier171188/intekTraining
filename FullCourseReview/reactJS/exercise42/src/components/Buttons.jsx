import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';

const Buttons = ({ page, handlePrevious, handleNext }) => {
    return <AppBar position="fixed" color="primary"
        sx={{
            top: 'auto',
            bottom: 0,
            display: 'inline-flex',
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "5px",
        }}
    >
        <Button
            variant="contained"
            disabled={page === 1}
            onClick={handlePrevious}
        >
            Previous
        </Button>
        Page: {page}
        <Button
            variant="contained"
            onClick={handleNext}
        >
            Next
        </Button>
    </AppBar >
}

export default Buttons;


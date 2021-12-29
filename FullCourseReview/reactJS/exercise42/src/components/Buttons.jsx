import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';


const Buttons = () => {
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
        <Button variant="contained">Previous</Button>  <Button variant="contained">Next</Button>
    </AppBar >
}

export default Buttons;


import IndividualPhoto from './IndividualPhoto';
import Box from '@mui/material/Box';


const Photos = ({ photos }) => {


    return <Box
        component="div"
        sx={{
            height: "70vh",
            overflow: "scroll",
            display: "block",
            width: "99vw"
        }}>
        {photos.map((p, i) => <IndividualPhoto src={p.src} key={i} {...p} />)}
    </Box>
}

export default Photos;
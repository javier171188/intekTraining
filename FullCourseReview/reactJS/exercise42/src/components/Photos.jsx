import IndividualPhoto from './IndividualPhoto';
import Box from '@mui/material/Box';


const Photos = ({ photos }) => {
    function handleReachButton(event) {
        var node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        if (bottom) {
            console.log("BOTTOM REACHED:", bottom);
        }
    }

    return <Box
        component="div"
        sx={{
            height: "80vh",
            overflow: "scroll",
            display: "block",
            width: "99vw"
        }}
        onScroll={handleReachButton}
    >
        {photos.map((p, i) => <IndividualPhoto src={p.src} key={i} {...p} />)}
    </Box>
}

export default Photos;
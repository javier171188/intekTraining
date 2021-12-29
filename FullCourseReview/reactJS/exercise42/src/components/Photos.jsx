import IndividualPhoto from './IndividualPhoto';
import Box from '@mui/material/Box';

const Photos = () => {
    let mockPhotos = [{
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    ]


    return <Box
        component="div"
        sx={{
            height: "70vh",
            overflow: "scroll",
            display: "block",
            width: "99vw"
        }}>
        {mockPhotos.map((p, i) => <IndividualPhoto src={p.src} key={i} {...p} />)}
    </Box>
}

export default Photos;
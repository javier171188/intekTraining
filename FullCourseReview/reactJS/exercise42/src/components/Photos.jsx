import IndividualPhoto from './IndividualPhoto';
import Box from '@mui/material/Box';

const Photos = () => {
    let mockPhotos = [{ src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    ]


    return <Box
        component="div"
        sx={{
            height: "70vh",
            overflow: "scroll",
            display: "block",
            width: "99vw"
        }}>
        {mockPhotos.map((p, i) => <IndividualPhoto src={p.src} key={i} />)}
    </Box>
}

export default Photos;
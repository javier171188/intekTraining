import Image from 'material-ui-image'
import { Box } from '@material-ui/core';


//Remember to check the sizes height > width?
const IndividualPhoto = (props) => {
    let { src, width, height } = props;
    return <Box sx={{
        width: "30vw",
        height: "30vw",
        border: "solid",
        margin: 5,
        float: "left",
        alignItems: "center"
    }} >
        <Image
            src={src}
            imageStyle={{
                width: "100%",
                height: "auto",
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}
        />
    </Box>
}

export default IndividualPhoto;
import React from 'react';
import Image from 'material-ui-image';
import { Box, Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';
//https://codepen.io/iamsaief/pen/jObaoKo?editors=0100


const IndividualPhoto = (props) => {
    let { src, width, height, borderColor } = props;
    let widthStr = '100%';
    let heightStr = 'auto';
    if (width < height) [widthStr, heightStr] = [heightStr, widthStr];

    let percentageToPlace = "50%";
    let paddingTop = '100%';
    let containerClass = 'normal';

    if (width === height * 2) {
        boxWidth = "calc(60vw + 12px)";
        widthStr = "calc(60vw + 12px)";
        heightStr = "30vw";
        percentageToPlace = '0';
        paddingTop = '0%';
        gridColumn = "span 2";
        containerClass = "wide";
    }
    else if (2 * width === height) {
        widthStr = "30vw";
        heightStr = "calc(60vw + 12px)";
        percentageToPlace = '0';
        gridRow = "span 2";
        containerClass = "tall";
    }
    return <Box className={containerClass}
        sx={{ /*display: 'flex'*/ }}
    >

        {/* <Container sx={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                justify: "center",
            }
        }>*/}
        {<Image
            src={src}
            imageStyle={{
                width: widthStr,
                height: heightStr,
                position: "absolute",
                left: percentageToPlace,
                top: percentageToPlace,
                transform: `translate(-${percentageToPlace}, -${percentageToPlace})`

                //top: "50%",
                //transform: "translateY(-50%)"
            }}
            style={{
                //padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                justify: "center",
                paddingTop,
            }}
        />}
        {/*</Container>*/}

    </Box >
}

export default IndividualPhoto;
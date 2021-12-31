import React from 'react';
import Image from 'material-ui-image';
import { Box } from '@material-ui/core';


const IndividualPhoto = (props) => {
    let { src, width, height } = props;
    let widthStr = '100%';
    let heightStr = 'auto';
    if (width < height) [widthStr, heightStr] = [heightStr, widthStr];

    let boxWidth = "30vw";
    let boxHeight = "30vw";
    let percentageToPlace = "50%";
    let paddingTop = '100%';
    if (width === height * 2) {
        boxWidth = "calc(60vw + 12px)";
        widthStr = "calc(60vw + 12px)";
        heightStr = "30vw";
        percentageToPlace = '0';
        paddingTop = '0%';
    }
    else if (2 * width === height) {
        boxHeight = "calc(60vw + 12px)";
        widthStr = "30vw";
        heightStr = "calc(60vw + 12px)";
        percentageToPlace = '0';
    }
    return <Box sx={{
        width: boxWidth,
        height: boxHeight,
        border: "solid",
        margin: 5,
        float: "left",
        alignItems: "center",
        paddingTop: 0
    }} >
        <Image
            src={src}
            imageStyle={{
                width: widthStr,
                height: heightStr,
                left: percentageToPlace,
                top: percentageToPlace,
                transform: `translate(-${percentageToPlace}, -${percentageToPlace})`
            }}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop
            }}
        />
    </Box>
}

export default IndividualPhoto;
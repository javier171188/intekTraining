import React from 'react';
import Image from 'material-ui-image';
import { Box, Container } from '@material-ui/core';
//https://codepen.io/iamsaief/pen/jObaoKo?editors=0100


const IndividualPhoto = (props) => {
    let { src, width, height, borderColor } = props;
    let widthStr = '103%';
    let heightStr = 'auto';
    let percentageToPlaceV = "50%";
    let percentageToPlaceH = "50%";
    let paddingTop = '100%';
    let containerClass = 'normal';
    if (width < height) {
        [widthStr, heightStr] = [heightStr, widthStr];
        percentageToPlaceV = '10%';
    }



    if (width === height * 2) {
        boxWidth = "calc(60vw + 12px)";
        widthStr = "calc(60vw + 12px)";
        heightStr = "auto";
        percentageToPlaceH = '0';
        percentageToPlaceV = '0';
        paddingTop = '0%';
        gridColumn = "span 2";
        containerClass = "wide";
    }
    else if (2 * width === height) {
        widthStr = "auto";
        heightStr = "calc(60vw + 12px)";
        percentageToPlaceH = '0';
        percentageToPlaceV = '0';
        gridRow = "span 2";
        containerClass = "tall";
    }
    return <Box className={containerClass}   >

        {<Image
            src={src}
            imageStyle={{
                width: widthStr,
                height: heightStr,
                position: "absolute",
                left: percentageToPlaceH,
                top: percentageToPlaceV,
                transform: `translate(-${percentageToPlaceH}, -${percentageToPlaceV})`
            }}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                justify: "center",
                paddingTop,
            }}
        />}
    </Box >
}

export default IndividualPhoto;
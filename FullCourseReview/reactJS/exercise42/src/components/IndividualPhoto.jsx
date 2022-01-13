import React from 'react';
import Image from 'material-ui-image';
import { Box } from '@material-ui/core';


const IndividualPhoto = (props) => {
    let { src, width, height, borderColor } = props;
    let widthStr = '100%';
    let heightStr = 'auto';
    if (width < height) [widthStr, heightStr] = [heightStr, widthStr];

    let boxWidth = "30vw";
    let boxHeight = "30vw";
    let percentageToPlace = "50%";
    let paddingTop = '100%';
    let gridColumn = "span 1";
    let gridRow = "span 1";
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
        boxHeight = "calc(60vw + 12px)";
        widthStr = "30vw";
        heightStr = "calc(60vw + 12px)";
        percentageToPlace = '0';
        gridRow = "span 2";
        containerClass = "tall";
    }
    return <Box className={containerClass}    >
        {/*<Image src={src} className='=imageclass' />*/}
    </Box >
}

export default IndividualPhoto;
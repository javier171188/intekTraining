'use strict';
import React from 'react';
import Image from 'material-ui-image';
import { Box, Container } from '@material-ui/core';
//https://codepen.io/iamsaief/pen/jObaoKo?editors=0100


const IndividualPhoto = (props) => {
    let { src, width, height, borderColor } = props;
    let widthStr = '100%';
    let heightStr = 'auto';
    let percentageToPlaceV = "50%";
    let percentageToPlaceH = "50%";
    let paddingTop = '100%';
    let containerClass = 'normal';
    let gridColumn, gridRow;
    if (width < height) [widthStr, heightStr] = [heightStr, widthStr];




    if (width === height * 2) {
        widthStr = "64vw";
        heightStr = "auto";
        percentageToPlaceH = '0';
        percentageToPlaceV = '0';
        paddingTop = '0%';
        gridColumn = "span 2";
        containerClass = "wide";
        gridColumn = "span 2";
    }
    else if (2 * width === height) {
        widthStr = "auto";
        heightStr = "63.6vw";
        percentageToPlaceH = '0';
        percentageToPlaceV = '0';
        gridRow = "span 2";
        containerClass = "tall";
        gridRow = "span 2";
    }

    return <Box
        component='img'
        className={containerClass}
        src={src}
        sx={{
            gridColumn,
            gridRow,
            borderColor,
            objectFit: "scale-down",
            width: widthStr,
            height: heightStr,
            maxWidth: "100%",
        }
        }
    >

    </Box >

}

export default IndividualPhoto;

/*<Box
        className={containerClass}
        sx={{
            border: "solid",
            borderWidth: "0.3vw",
            gridColumn,
            gridRow,
            borderColor
        }}   >*/

/*<Image
src={src}
imageStyle={{
    /*width: widthStr,
    height: heightStr,
    maxWidth: "100%",
    verticalAlign: "middle",
    display: "inline-block",
    position: "absolute",
    left: percentageToPlaceH,
    top: percentageToPlaceV,
    transform: `translate(-${percentageToPlaceH}, -${percentageToPlaceV})`,
    objectFit: "scale-down"
}}
style={{
    /*display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justify: "center",
    /* paddingTop,
     height: "6%"
    margin: "0",
    gridColumn,
    gridRow,
    border: "solid",
    borderColor
}}
/>*/
'use strict';
import React from 'react';
import Image from 'mui-image';
import { Box } from '@material-ui/core';
import '../styles/individualPhoto.css';
//https://codepen.io/iamsaief/pen/jObaoKo?editors=0100


const IndividualPhoto = (props) => {
    let { src, width, height, borderColor } = props;
    let gridColumn, gridRow;

    if (width === height * 2) {
        gridColumn = "span 2";
    }
    else if (2 * width === height) {
        gridRow = "span 2";
    }

    return <Box
        className='photo-container'
        sx={{
            gridColumn,
            gridRow,
            borderColor,
        }}>
        <Image
            src={src}
            className='photo-image'
            showLoading={true}
            errorIcon={true}
        />
    </Box>
}

export default IndividualPhoto;

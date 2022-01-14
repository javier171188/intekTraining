'use strict';
import React, { Component } from 'react';
import Image from 'material-ui-image';
import { Box, Container } from '@material-ui/core';
//https://codepen.io/iamsaief/pen/jObaoKo?editors=0100


class IndividualPhoto extends Component {
    constructor(givenProps) {
        super();
        this.src = givenProps.src;
        this.width = givenProps.width;
        this.height = givenProps.height;
        this.borderColor = givenProps.borderColor;

        this.widthStr = '100%';
        this.heightStr = 'auto';
        this.percentageToPlaceV = "50%";
        this.percentageToPlaceH = "50%";
        this.paddingTop = '100%';
        this.containerClass = 'normal';
        this.gridColumn, gridRow;
        if (this.width < this.height) [this.widthStr, this.heightStr] = [this.heightStr, this.widthStr];

        if (this.width === this.height * 2) {
            this.widthStr = "64vw";
            this.heightStr = "auto";
            this.percentageToPlaceH = '0';
            this.percentageToPlaceV = '0';
            this.paddingTop = '0%';
            this.gridColumn = "span 2";
            this.containerClass = "wide";
            this.gridColumn = "span 2";
        }
        else if (2 * this.width === this.height) {
            this.widthStr = "auto";
            this.heightStr = "63.6vw";
            this.percentageToPlaceH = '0';
            this.percentageToPlaceV = '0';
            this.gridRow = "span 2";
            this.containerClass = "tall";
            this.gridRow = "span 2";
        }

    }

    render() {
        return <Box
            className={this.containerClass}
            sx={{
                border: "solid",
                borderWidth: "0.3vw",
                gridColumn: this.gridColumn,
                gridRow: this.gridRow
            }}   >

            {<Image
                src={this.src}
                imageStyle={{
                    width: this.widthStr,
                    height: this.heightStr,
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    display: "inline-block",
                    position: "absolute",
                    left: this.percentageToPlaceH,
                    top: this.percentageToPlaceV,
                    transform: `translate(-${this.percentageToPlaceH}, -${this.percentageToPlaceV})`
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    justify: "center",
                    paddingTop: this.paddingTop,
                    height: "6%"
                }}
            />}
        </Box >
    }
}

export default IndividualPhoto;
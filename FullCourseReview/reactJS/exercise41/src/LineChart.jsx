//https://formidable.com/open-source/victory/docs 
//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import data from './mockData.js';


let LineChart = () => (
    <Paper>
        <Chart
            data={data}
        >
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
        </Chart>
    </Paper>
);


export default LineChart;
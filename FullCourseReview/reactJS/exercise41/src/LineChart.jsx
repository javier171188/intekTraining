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
import { connect } from "react-redux";

import { getDataAction } from './redux/actions';

let LineChart = (props) => {
    let { data, getDataAction } = props;
    //setTimeout(getDataAction, 1000);
    return (
        <Paper>
            <Chart data={data}            >
                <ArgumentAxis />
                <ValueAxis />
                <LineSeries valueField="value" argumentField="argument" />
            </Chart>
        </Paper>
    );
}


const mapStateToProps = (state) => ({
    data: state.data
});

const mapDispatchToProps = {
    getDataAction
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
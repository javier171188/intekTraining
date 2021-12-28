//https://formidable.com/open-source/victory/docs 
//https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    Legend,
    Title,

} from '@devexpress/dx-react-chart-material-ui';
import { connect } from "react-redux";

import { getDataAction } from './redux/actions';

let LineChart = (props) => {
    let { data, seriesName, title, width, height } = props;
    return (
        <Paper>
            <Chart
                data={data}
                width={width}
                height={height} >
                <ArgumentAxis />
                <ValueAxis />
                <LineSeries
                    name={seriesName || 'Main Series'}
                    valueField="value"
                    argumentField="argument"
                />
                <Legend />
                <Title text={title} />
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
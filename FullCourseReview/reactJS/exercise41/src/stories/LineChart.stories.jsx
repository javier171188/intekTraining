import React from 'react';
import LineChart from "../LineChart";
import { Provider } from "react-redux";
import store from '../redux/store';

export default {
    title: 'Chart',
    component: LineChart,
    argTypes: {
        height: { control: 'number' },
        width: { control: 'number' },
    },
};

const Template = (args) => (
    <Provider store={store} >
        <LineChart {...args} />
    </Provider>
)

export const Primary = Template.bind({});
Primary.args = {
    seriesName: "Noisy Series",
    title: "Line Chart",
};
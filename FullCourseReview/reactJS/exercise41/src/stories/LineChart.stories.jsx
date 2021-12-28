import React from 'react';
import LineChart from "../LineChart";
import { Provider } from "react-redux";
import store from '../redux/store';

export default {
    title: 'Chart',
    component: LineChart,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = () => (
    <Provider store={store}>
        <LineChart />
    </Provider>
)

export const Primary = Template.bind({});
Primary.args = {
    size: 'small',
    label: 'Button',
};
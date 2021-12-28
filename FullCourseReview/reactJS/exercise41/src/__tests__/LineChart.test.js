/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../__mocks__/ProviderMock';
const LineChart = require('../LineChart');

const chart = shallow(
    <ProviderMock>
        <LineChart />
    </ProviderMock>
);

test("Basic test", () => {
    expect(LineChart).toBeTruthy();
    expect(chart.length).toEqual(1);
});
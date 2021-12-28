/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../__mocks__/ProviderMock';
import { getDataAction } from '../redux/actions';
import reducers from '../redux/reducers';
import LineChart from '../LineChart';
import store from '../redux/store';
import dataState from '../redux/state';

const chart = shallow(
    <ProviderMock>
        <LineChart />
    </ProviderMock>
);

test("Basic test", () => {
    expect(LineChart).toBeTruthy();
    expect(chart.length).toEqual(1);
});

test("Check the action", () => {
    const payload = undefined;
    const expected = {
        type: "GET_NEW_DATA",
        payload
    }
    expect(getDataAction()).toEqual(expected);
})

describe('Check the reducers', () => {
    let state = { x: 1, y: 1 };
    test("Return the default", () => {
        expect(reducers(state, 'ANOTHER_ACTION')).toEqual(state);
    })

    test("Apply SET_NEW_DATA", () => {
        let newState = { data: { x: 1, y: 1 }, x: 1, y: 1 }
        let action = {
            type: 'SET_NEW_DATA',
            payload: { x: 1, y: 1 }
        }
        expect(reducers(state, action)).toEqual(newState);
    })
})

test('Check the saga', () => {
    let initialState = store.getState();
    expect(initialState).toEqual(dataState);
    return new Promise((res, rej) => {
        setTimeout(() => {
            let state = store.getState();
            expect(state.data.length).toEqual(100);
            expect(state.data[0].argument).toEqual(1);
            expect(state.data[99].argument).toEqual(100);
            expect(state).not.toEqual(initialState);
            res();
        }, 1000);
    })
})
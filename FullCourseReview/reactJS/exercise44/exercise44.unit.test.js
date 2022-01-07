/**
 * @jest-environment jsdom
 */
import React from 'react';
import { useEffect } from 'react';
import { render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { useLocalStorage, useSessionStorage, useIndexDB } from './exercise44';

describe('Basic tests', () => {

    test('Test useLocalStorage', () => {
        let initial;
        function TestComponent({ name, value }) {
            const [item, setItem] = useLocalStorage(name, value)

            useEffect(() => {
                initial = JSON.parse(JSON.stringify(item));
                setItem('new value');
            }, [])


            return <h1>Initial value: {initial}</h1>;
        }

        let value = JSON.parse(localStorage.getItem('1'));
        expect(value).toEqual(null);

        act(() => {
            render(<TestComponent name='1' value='First value' />);
        });

        value = JSON.parse(localStorage.getItem('1'));
        expect(value).toEqual('new value');

        let title = screen.getByText('Initial value: First value');

        expect(title).toBeTruthy();
    })

    test('Test useSessionStorage', () => {
        let initial;
        function TestComponent({ name, value }) {
            const [item, setItem] = useSessionStorage(name, value)

            useEffect(() => {
                initial = JSON.parse(JSON.stringify(item));
                setItem('new value');
            }, [])


            return <h1>Initial value: {initial}</h1>;
        }

        let value = JSON.parse(sessionStorage.getItem('1'));
        expect(value).toEqual(null);

        act(() => {
            render(<TestComponent name='1' value='First value' />);
        });

        value = JSON.parse(sessionStorage.getItem('1'));
        expect(value).toEqual('new value');

        let title = screen.getByText('Initial value: First value');

        expect(title).toBeTruthy();
    })

    test('Test useIndexDB', () => {
        let initial;
        function TestComponent({ indexDB }) {
            const [index, setIndex] = useIndexDB('0');

            useEffect(() => {
                initial = JSON.parse(JSON.stringify(index));
                setIndex(indexDB);
            }, [])


            return (<>
                <div>Initial index: {initial}</div>
                <div>Final index: {indexDB}</div>
            </>);
        }

        act(() => {
            render(<TestComponent indexDB='1' />);
        });


        let first = screen.getByText('Initial index: 0');
        let second = screen.getByText('Final index: 1');

        expect(first).toBeTruthy();
        expect(second).toBeTruthy();
    })
})
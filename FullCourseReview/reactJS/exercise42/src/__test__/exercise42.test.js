/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import Gallery from '../components/Gallery';

function wait(time) {
    return new Promise((res, rej) => {

    }, time)
}

describe('<Gallery />', () => {
    const gallery = mount(<Gallery />);
    test('Render the component', () => {
        expect(gallery.length).toEqual(1);
    });

    test('Check the initial state', () => {
        expect(gallery.find('img').length).toEqual(0);
    })


})
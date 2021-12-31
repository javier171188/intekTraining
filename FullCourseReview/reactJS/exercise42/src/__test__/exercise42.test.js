/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import Gallery from '../components/Gallery';

describe('<Gallery />', () => {
    test('Render the component', () => {
        const gallery = mount(<Gallery />);
        expect(gallery.length).toEqual(1);
    })
})
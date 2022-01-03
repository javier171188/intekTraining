/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import Gallery from '../components/Gallery';
//import { async } from 'regenerator-runtime';
import { act } from "react-dom/test-utils";

function wait(time) {
    return new Promise((res, rej) => setTimeout(res, time)
    )
}

describe('<Gallery />', () => {
    const gallery = mount(<Gallery />);
    let buttons = gallery.find('button');
    let buttonPrev = buttons.find('.previous-button');
    let buttonNext = buttons.find('.next-button');
    let navBar = gallery.find('header');

    test('Check initial state', () => {


        expect(gallery.length).toEqual(1);

        expect(gallery.find('img').length).toEqual(0);

        expect(buttons.length).toEqual(2);


        expect(buttonPrev.text()).toEqual('Previous');
        expect(buttonPrev.props().disabled).toEqual(true);

        expect(buttonNext.text()).toEqual('Next');
        expect(buttonNext.props().disabled).toEqual(false);

        let navBarText = navBar.text().replace('Previous', '').replace('Next', '');
        expect(navBarText).toEqual('Page: 1');
    });

    test('Check one click', () => {
        buttonNext.simulate('click');
        let navBarText = navBar.text().replace('Previous', '').replace('Next', '');
        expect(navBarText).toEqual('Page: 2');

        buttons = gallery.find('button');
        buttonPrev = buttons.find('.previous-button');

        expect(buttonPrev.props().disabled).toEqual(false);
        expect(buttonNext.props().disabled).toEqual(false);
    })


    /*
    test('Check the initial state', async () => {

        //let start = new Date().getTime();
        await act(async () => {
            expect(gallery.find('img').length).toEqual(0);
            //await wait(3000);
            //expect(gallery.find('img').length).toEqual(10);
        })
        //let finish = new Date().getTime();
        //expect(finish).toBeGreaterThan(start + 3000);

    })

*/
})
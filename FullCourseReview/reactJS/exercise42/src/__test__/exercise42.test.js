/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import Gallery from '../components/Gallery';
import getPhotos from '../utils/getPhotos';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
//import { async } from 'regenerator-runtime';
import { act, Simulate } from "react-dom/test-utils";
import { async } from 'regenerator-runtime';

function wait(time) {
    return new Promise((res, rej) => setTimeout(res, time)
    )
}

describe('<Gallery />', () => {

    /*    const gallery = mount(<Gallery getPhotos={getPhotos} />);
        let buttons = gallery.find('button');
        let buttonPrev = buttons.find('.previous-button');
        let buttonNext = buttons.find('.next-button');
        let navBar = gallery.find('header');
        test('Check initial state', () => {
            expect(gallery.length).toEqual(1);
            expect(gallery.find('.photo').length).toEqual(0);
            expect(buttons.length).toEqual(2);
    
            expect(buttonPrev.text()).toEqual('Previous');
            expect(buttonPrev.props().disabled).toEqual(true);
    
            expect(buttonNext.text()).toEqual('Next');
            expect(buttonNext.props().disabled).toEqual(false);
    
            let navBarText = navBar.text().replace('Previous', '').replace('Next', '');
            expect(navBarText).toEqual('Page: 1');
        });*/

    test('Check one click', async () => {
        render(<Gallery getPhotos={getPhotos} />)

        //https://www.youtube.com/watch?v=uemxzfs_uqA
        await waitForElementToBeRemoved(screen.queryByText('Loading the photos...'))
        expect(screen.queryAllByRole('img').length).toBe(10);
        /* buttonNext.simulate('click');
 
         let navBarText = navBar.text().replace('Previous', '').replace('Next', '');
         expect(navBarText).toEqual('Page: 2');
 
         buttons = gallery.find('button');
         buttonPrev = buttons.find('.previous-button');
         buttonNext = buttons.find('.next-button');
 
         expect(buttonPrev.props().disabled).toEqual(false);
         expect(buttonNext.props().disabled).toEqual(false);
 
         //expect(gallery.find('.waiting-title').first().text()).toEqual('loading');
         await waitForElementToBeRemoved(() => { //gallery.queryByText('Loading the photos...') 
             gallery.find('.waiting-title').first().text();
         });
         expect(gallery.find('.photo').length).toEqual(10);
        */
    })

    /*test('Check last page', () => {
        for (let i = 1; i <= 10; i++) {
            buttonNext.simulate('click');
        }
        let navBarText = navBar.text().replace('Previous', '').replace('Next', '');
        expect(navBarText).toEqual('Page: 10');

        buttons = gallery.find('button');
        buttonPrev = buttons.find('.previous-button');
        buttonNext = buttons.find('.next-button');

        expect(buttonPrev.props().disabled).toEqual(false);
        expect(buttonNext.props().disabled).toEqual(true);
    })*/


    /*test('Check the photos loading when reaching the bottom', () => {
        let photos = gallery.find('#photos').first();
        //wait(1000);
        Simulate.scroll(photos.getDOMNode(), { deltaY: 500 })
        //photos.simulate('scroll', { deltaY: -5000 });
        const bottom = photos.scrollHeight - photos.scrollTop === photos.clientHeight;
        //expect([photos.scrollHeight, photos.scrollTop, photos.clientHeigh]).toEqual([])
        expect(photos.text()).toEqual(true);
    })*/

})

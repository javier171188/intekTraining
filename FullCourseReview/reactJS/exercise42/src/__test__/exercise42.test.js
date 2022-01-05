/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import Gallery from '../components/Gallery';
import getPhotos from '../utils/getPhotos';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
//https://docs.cypress.io/guides/getting-started/writing-your-first-test#Add-a-test-file
// node_modules/.bin/cypress open

describe('<Gallery />', () => {
    describe('Check initial State', () => {
        test('Check before loading photos', () => {
            const gallery = mount(<Gallery getPhotos={getPhotos} />);
            let buttons = gallery.find('button');
            let buttonPrev = buttons.find('.previous-button');
            let buttonNext = buttons.find('.next-button');
            let navBar = gallery.find('header');
            expect(gallery.length).toEqual(1);
            expect(gallery.find('.photo').length).toEqual(0);
            expect(buttons.length).toEqual(2);

            expect(buttonPrev.text()).toEqual('Previous');
            expect(buttonPrev.props().disabled).toEqual(true);

            expect(buttonNext.text()).toEqual('Next');
            expect(buttonNext.props().disabled).toEqual(false);

            let navBarText = navBar.text().replace('Previous', '').replace('Next', '');
            expect(navBarText).toEqual('Page: 1');
        })


        test('Check after loading photos', async () => {
            render(<Gallery getPhotos={getPhotos} />)

            await waitForElementToBeRemoved(screen.queryByText('Loading the photos...'))
            expect(screen.queryAllByRole('img').length).toBe(10);

            let nextButton = screen.queryByText('Next');
            let previousButton = screen.queryByText('Previous');
            expect(nextButton).not.toBeDisabled();
            expect(previousButton).toBeDisabled();

            let navBar = screen.queryByText('Page: 1');
            expect(navBar).toBeTruthy();

        })

    })

    describe('Check clicks', () => {
        test('One click', async () => {
            render(<Gallery getPhotos={getPhotos} />)

            let nextButton = screen.queryByText('Next');
            let previousButton = screen.queryByText('Previous');
            expect(nextButton).not.toBeDisabled();
            expect(previousButton).toBeDisabled();

            fireEvent.click(nextButton);

            await waitForElementToBeRemoved(screen.queryByText('Loading the photos...'))
            expect(screen.queryAllByRole('img').length).toBe(10);
            expect(nextButton).not.toBeDisabled();
            expect(previousButton).not.toBeDisabled();

            let navBar = screen.queryByText('Page: 2');
            expect(navBar).toBeTruthy();
        })
        test('Check click until reach the last page', async () => {
            render(<Gallery getPhotos={getPhotos} />)

            let nextButton = screen.queryByText('Next');
            let previousButton = screen.queryByText('Previous');

            for (let i = 0; i < 10; i++) {
                fireEvent.click(nextButton);
            }
            await waitForElementToBeRemoved(screen.queryByText('Loading the photos...'))
            expect(screen.queryAllByRole('img').length).toBe(10);
            expect(nextButton).toBeDisabled();
            expect(previousButton).not.toBeDisabled();

            let navBar = screen.queryByText('Page: 10');
            expect(navBar).toBeTruthy();
        })
    })

})

import React from 'react';
import Photos from '../components/Photos';

export default {
    title: 'Photos',
    component: Photos,
    argTypes: {
        borderColor: {
            options: ['blue', 'brown', 'green', 'yellow', 'white', 'red', 'pink', 'cyan', 'peru', 'black', 'orange'],
            control: { type: 'radio' },
        }
    }
};

let mockPhotos = [
    {
        src: "https://images.pexels.com/photos/2556000/pexels-photo-2556000.jpeg",
        width: 400, height: 800
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    },
    {
        src: "https://images.pexels.com/photos/7492227/pexels-photo-7492227.jpeg",
        width: 800, height: 400
    },

]
const Template = (args) => (
    <Photos  {...args} page={1} photos={mockPhotos} />
)

export const Primary = Template.bind({});

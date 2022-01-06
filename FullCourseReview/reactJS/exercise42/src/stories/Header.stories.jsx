import React from 'react';
import Header from '../components/Header';

export default {
    title: 'Header',
    component: Header,
    argTypes: {
        fontSize: {
            control: { type: 'number' }
        },
        color: {
            options: ['blue', 'brown', 'green', 'yellow', 'white', 'red', 'pink', 'cyan', 'peru', 'black', 'orange'],
            control: { type: 'radio' },
        },
        textAlign: {
            options: ['left', 'right', 'center'],
            control: { type: 'radio' }
        },
        border: {
            options: ["dotted",
                "dashed",
                "solid",
                "double",
                "groove",
                "ridge",
                "inset",
                "outset",
                "none"],
            control: { type: 'radio' }
        },
        borderColor: {
            options: ['blue', 'brown', 'green', 'yellow', 'white', 'red', 'pink', 'cyan', 'peru', 'black', 'orange'],
            control: { type: 'radio' },
        },
        padding: {
            control: { type: 'number' }
        }
    }
};

const Template = (args) => (
    <Header  {...args} />
)

export const Primary = Template.bind({});

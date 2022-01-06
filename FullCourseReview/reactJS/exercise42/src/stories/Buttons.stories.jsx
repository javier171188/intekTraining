import React from 'react';
import Buttons from '../components/Buttons';

export default {
    title: 'Buttons',
    component: Buttons,
    argTypes: {
        variant: {
            options: ['contained', 'text', 'outlined'],
            control: { type: 'radio' },
        },
        flexDirection: {
            options: ['row', 'column'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => (
    <Buttons  {...args} page={1} />
)

export const Primary = Template.bind({});
Primary.args = {
    theme: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: "secondary"
};

export const Success = Template.bind({});
Success.args = {
    theme: "success"
};

export const Warning = Template.bind({});
Warning.args = {
    theme: "warning"
};

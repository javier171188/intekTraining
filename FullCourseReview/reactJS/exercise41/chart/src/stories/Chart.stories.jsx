import React from 'react';

import Chart from './Chart';

export default {
    component: Chart,
    title: 'Line Chart',
};

const Template = args => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};
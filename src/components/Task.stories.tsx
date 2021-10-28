import React from 'react';
import Task, { TaskProps } from './Task';
import { Story, Meta } from '@storybook/react';

export default {
    component: Task,
    title: 'Task',
} as Meta

const Template: Story<TaskProps> = (args) => <Task {...args} />;

const DefaultState = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
}

export const Default = Template.bind({});
Default.args = {
    task: {
        ...DefaultState,
    },
}

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...DefaultState,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...DefaultState,
        state: 'TASK_ARCHIVED',
    }
}
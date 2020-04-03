import React from 'react';

import Task from '../Task/Task';
import CreateTask from '../CreateTask/CreateTask';

const TaskHolder = () => (
    <main
        className="
            holder
            ut-paddingVert-4
            ut-paddingHorz-2
        "
    >
        <h1>Things To Do List</h1>

        <Task />

        <CreateTask />
    </main>
);

export default TaskHolder;

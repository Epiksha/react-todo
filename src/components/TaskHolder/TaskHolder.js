import React, { Component } from 'react';

import Task from '../Task/Task';
import CreateTask from '../CreateTask/CreateTask';

class TaskHolder extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [
                {
                    title: 'Set up Git repo for new project',
                    key: 'unique-1',
                },
                {
                    title: 'Set up Git repo for new project',
                    key: 'unique-2',
                },
                {
                    title: 'Set up Git repo for new project',
                    key: 'unique-3',
                },
                {
                    title: 'Set up Git repo for new project',
                    key: 'unique-4',
                },
            ],
    
            isCreateActive: true,
        };
    }

    toggleCreate = () => {
        const { isCreateActive } = this.state;

        this.setState({ isCreateActive: !isCreateActive });
    }

    render() {
        const { tasks, isCreateActive } = this.state;

        return (
            <main className="holder">
                <h1 className="ut-marginTop-3">Things To Do List</h1>

                <div
                    className="ut-padding-2"
                >
                    {tasks.map((task) => (
                        <Task info={task} key={task.key} />
                    ))}
                </div>

                <CreateTask isActive={isCreateActive} toggleActive={this.toggleCreate} />
            </main>
        );
    }
}

export default TaskHolder;

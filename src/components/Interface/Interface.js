import React, { Component } from 'react';

import Task from '../Task/Task';
import CreateTask from '../CreateTask/CreateTask';

class Interface extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [
                {
                    title: 'Set up Git repo for new project',
                    key: 'unique-1',
                    priority: 'low',
                    parent: 'None',
                },
                {
                    title: 'Send project to QA',
                    key: 'unique-2',
                    priority: 'medium',
                    parent: 'None',
                },
                {
                    title: 'Hotfix #38 for project',
                    key: 'unique-3',
                    priority: 'high',
                    parent: 'None',
                },
                {
                    title: 'Prepare for meeting',
                    key: 'unique-4',
                    priority: 'high',
                    parent: 'None',
                },
            ],
    
            isCreateActive: false,
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
                <h1 className="ut-relative ut-marginTop-3 ut-z-1">Things To Do List</h1>

                <div
                    className="ut-padding-2"
                >
                    {tasks.map((task) => (
                        <Task info={task} key={task.key} />
                    ))}
                </div>

                <CreateTask tasks={tasks} isActive={isCreateActive} toggleActive={this.toggleCreate} />
            </main>
        );
    }
}

export default Interface;

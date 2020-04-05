import React, { Component } from 'react';

import Task from '../Task/Task';
import CreateTask from '../CreateTask/CreateTask';

class Interface extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
    
            isCreateActive: true,
        };
    }

    componentDidMount() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        
        if (storedTasks) {
            this.setState({ tasks: storedTasks });
        }
    }

    toggleCreateModal = () => {
        const { isCreateActive } = this.state;

        this.setState({ isCreateActive: !isCreateActive });
    }

    refreshTasks = () => {
        this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) });
    }

    render() {
        const { tasks, isCreateActive } = this.state;

        return (
            <main className="holder">
                <h1 className="ut-relative ut-marginTop-3 ut-z-1">Things To Do List</h1>

                <div className="tasksContainer ut-padding-2">
                    {tasks.map((task) => (
                        <Task taskData={task} key={Math.floor(Math.random() * 100000)} />
                    ))}
                </div>

                <CreateTask
                    tasks={tasks}
                    isActive={isCreateActive}
                    toggleActive={this.toggleCreateModal}
                    refreshTasks={this.refreshTasks}
                />
            </main>
        );
    }
}

export default Interface;

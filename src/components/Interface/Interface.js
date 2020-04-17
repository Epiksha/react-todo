import React, { Component } from 'react';

import Task from '../Task/Task';
import Creator from '../Creator/Creator';

class Interface extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
    
            isCreateActive: false,
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
            <>
                <main className="holder">
                    <h1 className="ut-relative ut-marginVert-3 ut-z-3">Things To Do List</h1>

                    <div className="tasksContainer ut-paddingHorz-2 ut-paddingBottom-3 ut-borderBox">
                        {tasks.map((task) => (
                            <Task
                                taskData={task}
                                tasks={tasks}
                                refreshTasks={this.refreshTasks}
                                key={Math.floor(Math.random() * 100000)}
                            />
                        ))}
                    </div>

                    <Creator
                        tasks={tasks}
                        isActive={isCreateActive}
                        toggleActive={this.toggleCreateModal}
                        refreshTasks={this.refreshTasks}
                    />
                </main>
            </>
        );
    }
}

export default Interface;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PriorityHolder from '../PriorityHolder/PriorityHolder';
import ParentHolder from '../ParentHolder/ParentHolder';

class createTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTask: {
                text: '',
                priority: 'Low',
                parent: 'None',
                isComplete: false,
            },
            warning: false,
        };
    }
    
    handleTextChange = (newText) => {
        const { currentTask } = this.state;

        currentTask.text = newText;
        this.setState(currentTask);
    }

    handlePriorityChange = (newPriority) => {
        const { currentTask } = this.state;
        
        if (newPriority === currentTask.priority) {
            return;
        }

        currentTask.priority = newPriority;
        this.setState(currentTask);
    }

    handleParentChange = (newParent) => {
        const { currentTask } = this.state;

        if (newParent === currentTask.parent) {
            return;
        }

        currentTask.parent = newParent;
        this.setState(currentTask);
    }
    
    saveTask = () => {
        const { currentTask, warning } = this.state;
        const { tasks, toggleActive, refreshTasks } = this.props;

        // Check that text isn't empty
        if (!currentTask.text) {
            this.setState({ warning: true });
            return;
        }
        
        // Remove warning
        if (warning) {
            this.setState({ warning: false });
        }

        // Random key
        currentTask.key = Math.floor(Math.random() * 100000);

        if (currentTask.parent !== 'None') {
            const parentTask = tasks.find((task) => task.text === currentTask.parent);

            if (parentTask.children) {
                parentTask.children.push(currentTask);
            } else {
                parentTask.children = [currentTask];
            }
        } else {
            tasks.push(currentTask);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));

        this.setState({
            currentTask: {
                text: '',
                priority: 'Low',
                parent: 'None',
                isComplete: false,
                key: Math.floor(Math.random() * 100000),
            },
        });

        refreshTasks();
        toggleActive();
    }

    render() {
        const { currentTask, warning } = this.state;
        const { tasks, isActive, toggleActive } = this.props;

        return (
            <>
                <button
                    type="button"
                    className={`
                        button
                        button--create
                        ${isActive ? 'active' : ''}
                    `}
                    onClick={isActive ? this.saveTask : toggleActive}
                >
                    +
                </button>

                <div
                    className={`
                    create
                    ${isActive ? 'active' : ''}
                `}
                >
                    <div
                        className="
                            create__inner
                            ut-borderBox
                            ut-paddingVert-4
                            ut-paddingHorz-2
                        "
                    >
                        <button
                            type="button"
                            className="
                                button
                                button--close
                            "
                            onClick={toggleActive}
                        >
                            Close
                        </button>

                        <textarea
                            name="create"
                            id="js-create"
                            className={`
                                create__text
                                ut-borderBox
                                ut-padding
                                ${warning ? 'create__text--warning' : ''}
                            `}
                            placeholder="What do you need to do?"
                            onChange={(e) => this.handleTextChange(e.target.value)}
                        />

                        <div
                            className={`
                                create__warning
                                ${warning ? 'active' : ''}
                            `}
                        >
                            <p className="create__warning__text">
                                Please add some text before saving.
                            </p>
                        </div>

                        <PriorityHolder
                            tasks={tasks}
                            handlePriorityChange={this.handlePriorityChange}
                            currentPriority={currentTask.priority}
                        />
                        
                        <ParentHolder
                            parents={tasks.map((task) => task.text)}
                            handleParentChange={this.handleParentChange}
                            currentParent={currentTask.parent}
                        />
                    </div>
                </div>
            </>
        );
    }
}

createTask.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
    })).isRequired,
    isActive: PropTypes.bool.isRequired,
    toggleActive: PropTypes.func.isRequired,
    refreshTasks: PropTypes.func.isRequired,
};

export default createTask;

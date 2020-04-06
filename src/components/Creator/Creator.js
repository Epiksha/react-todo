import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreatorUI from '../CreatorUI/CreatorUI';

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

    handlePropertyChange = (value, type = 'text') => {
        const { currentTask } = this.state;

        if ((type === 'priority' || type === 'parent') && value === currentTask[type]) {
            return;
        }

        currentTask[type] = value;
        this.setState(currentTask);
    }

    removeWarning = () => {
        const { warning } = this.state;

        if (warning) {
            this.setState({ warning: false });
        }
    }

    closeCreateModel = () => {
        const { toggleActive } = this.props;

        toggleActive();
        this.removeWarning();
    }
    
    saveTask = () => {
        const { currentTask } = this.state;
        const { tasks, toggleActive, refreshTasks } = this.props;

        // Check that text isn't empty
        if (!currentTask.text) {
            this.setState({ warning: true });
            return;
        }
        
        this.removeWarning();

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

        const emptyCurrent = {
            text: '',
            priority: 'Low',
            parent: 'None',
            isComplete: false,
            key: Math.floor(Math.random() * 100000),
        };

        this.setState({
            currentTask: emptyCurrent,
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
                    <span>+</span>
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
                            onClick={this.closeCreateModel}
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
                            value={currentTask.text}
                            placeholder="What do you need to do?"
                            onChange={(e) => this.handlePropertyChange(e.target.value)}
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

                        <CreatorUI
                            current={currentTask.priority}
                            type="priority"
                            handlePropertyChange={this.handlePropertyChange}
                            tasks={tasks}
                        />
                        
                        <CreatorUI
                            current={currentTask.parent}
                            type="parent"
                            handlePropertyChange={this.handlePropertyChange}
                            tasks={tasks}
                        />

                        {/* <PriorityHolder
                            tasks={tasks}
                            handlePropertyChange={this.handlePropertyChange}
                            currentPriority={currentTask.priority}
                        />
                        
                        <ParentHolder
                            parents={tasks.map((task) => task.text)}
                            handlePropertyChange={this.handlePropertyChange}
                            currentParent={currentTask.parent}
                        /> */}
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

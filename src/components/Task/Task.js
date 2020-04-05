import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Accordion from '../Accordion/Accordion';
import { ReactComponent as ExpandIcon } from '../../assets/icons/chevron.svg';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };
    }

    toggleComplete = (event) => {
        const { taskData, tasks } = this.props;
        const tempTask = taskData;

        if (event.key && event.key !== 'Enter') {
            return;
        }

        taskData.isComplete = !(taskData.isComplete);
        tasks[tasks.indexOf(tempTask)] = taskData;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.forceUpdate();
    }

    toggleExpanded = () => {
        const { isExpanded } = this.state;

        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const { isExpanded } = this.state;
        const { taskData, tasks, refreshTasks } = this.props;

        return (
            <>
                <article
                    className={`
                        task
                        ut-relative
                        ut-borderBox
                        ${taskData.isComplete ? 'active' : ''}
                    `}
                >
                    <h2 
                        className={`
                            task__title
                            task__title--${taskData.priority.toLowerCase()}
                            ut-inlineBlock
                        `}
                    >
                        {taskData.text}
                    </h2>

                    {/* Add Expand button */}
                    {taskData && taskData.children ? (
                        <button
                            type="button"
                            className={`
                                button
                                button--expand
                                ${isExpanded ? 'expanded' : ''}
                            `}
                            onClick={this.toggleExpanded}
                        >
                            <ExpandIcon />
                        </button>
                    ) : ''}

                    <button
                        type="button"
                        className="button button--radio"
                        onClick={(e) => this.toggleComplete(e)}
                        onKeyPress={(e) => this.toggleComplete(e)}
                    >
                        <label
                            htmlFor="new"
                            id={`${taskData.key}-radio`}
                            className=""
                            aria-label="Mark Task Completed."
                        />

                        <input
                            type="radio"
                            id="new"
                            name="new"
                            aria-labelledby={`${taskData.key}-radio}`}
                            className="ut-margin-0"
                        />
                    </button>
                </article>

                {taskData && taskData.children ? (
                    <Accordion
                        taskData={taskData.children}
                        tasks={tasks}
                        refreshTasks={refreshTasks}
                        isExpanded={isExpanded}
                    />
                ) : ''}
            </>
        );
    }
}

Task.propTypes = {
    taskData: PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            key: PropTypes.number.isRequired,
            priority: PropTypes.string.isRequired,
            parent: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired,
        })),
    }).isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    refreshTasks: PropTypes.func.isRequired,
};

export default Task;

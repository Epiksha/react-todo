import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    constructor(props) {
        super(props);

        const { taskData } = props;
        
        this.state = {
            taskData,
        };
    }

    toggleComplete = (event) => {
        if (event.key && event.key !== 'Enter') {
            return;
        }

        const { taskData } = this.state;

        taskData.isComplete = !taskData.isComplete;

        this.setState(taskData);
    }

    render() {
        const { taskData } = this.state;

        return (
            <article
                className={`
                    task
                    ut-relative
                    ut-marginVert
                    ${taskData.isComplete ? 'active' : ''}
                `}
            >
                <h2 
                    className="
                        task__title
                        ut-inlineBlock
                    "
                >
                    {taskData.title}
                </h2>

                <div
                    className="task__radio"
                    role="button"
                    onClick={(e) => this.toggleComplete(e)}
                    onKeyPress={(e) => this.toggleComplete(e)}
                    tabIndex={0}
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
                </div>
            </article>
        );
    }
}

Task.propTypes = {
    taskData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Task;

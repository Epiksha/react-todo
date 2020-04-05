import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Accordion from '../Accordion/Accordion';
import { ReactComponent as ExpandIcon } from '../../assets/icons/chevron.svg';

class Task extends Component {
    constructor(props) {
        super(props);

        const { taskData } = props;
        
        this.state = {
            taskData,
            isExpanded: false,
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

    toggleExpanded = () => {
        const { isExpanded } = this.state;

        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const { taskData, isExpanded } = this.state;

        const ExpandButton = (
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
        );

        return (
            <>
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
                        {taskData.text}
                    </h2>

                    {/* Add Expand button */}
                    {taskData && taskData.children ? ExpandButton : ''}

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

                {taskData && taskData.children ? <Accordion taskData={taskData.children} isExpanded={isExpanded} /> : ''}
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
    }).isRequired,
};

export default Task;

import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ taskData }) => (
    <article
        className="
            task
            ut-relative
            ut-marginVert
        "
    >
        <h2 
            className="
                task__title
                ut-inlineBlock
            "
        >
            {taskData.title}
        </h2>

        <div className="task__radio">
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

Task.propTypes = {
    taskData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    }).isRequired,
};

export default Task;

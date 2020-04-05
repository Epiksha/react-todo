import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const Accordion = ({
    taskData,
    tasks,
    refreshTasks,
    isExpanded,
}) => (
    <ul
        className={`
            accordion
            ${isExpanded ? 'expanded' : ''}
        `}
    >
        {taskData.map((task) => (
            <li
                className="accordion__item"
                key={task.key}
            >
                <Task
                    taskData={task}
                    tasks={tasks}
                    refreshTasks={refreshTasks}
                />
            </li>
        ))}
    </ul>
);

Accordion.propTypes = {
    taskData: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    isExpanded: PropTypes.bool.isRequired,
    refreshTasks: PropTypes.func.isRequired,
};

export default Accordion;

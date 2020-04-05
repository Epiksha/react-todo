import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const Accordion = ({ taskData, isExpanded }) => (
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
    isExpanded: PropTypes.bool.isRequired,
};

export default Accordion;

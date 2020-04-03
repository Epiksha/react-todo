import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ info }) => (
    <article className="task ut-marginVert">
        <h2 className="task__title">{info.title}</h2>
    </article>
);

Task.propTypes = {
    info: PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    }).isRequired,
};

export default Task;

import React from 'react';
import PropTypes from 'prop-types';

const ParentDropdown = ({ tasks }) => (
    <section className="ut-paddingVert">
        <div>
            <select className="dropdown">
                {tasks.map(({ title, key }) => (
                    <option
                        value={title}
                        key={key}
                        aria-label="Select Parent Task"
                    >
                        {title}
                    </option>
                ))}
            </select>
        </div>
    </section>
);

ParentDropdown.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    })).isRequired,
};

export default ParentDropdown;

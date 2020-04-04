import React from 'react';
import PropTypes from 'prop-types';

import ParentDropdown from '../ParentDropdown/ParentDropdown';

const ParentHolder = ({ tasks }) => (
    <section className="ut-paddingVert">
        <div className="label">
            <h4 className="label__text">
                Parent
            </h4>
        </div>

        <div className="ut-inlineBlock ut-width-70 ">
            <ParentDropdown tasks={tasks} />
        </div>
    </section>
);

ParentHolder.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    })).isRequired,
};

export default ParentHolder;

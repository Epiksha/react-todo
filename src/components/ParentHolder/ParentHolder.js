import React from 'react';
import PropTypes from 'prop-types';

import ParentDropdown from '../ParentDropdown/ParentDropdown';

const ParentHolder = ({ parents, currentParent, handleParentChange }) => (
    <section className="ut-paddingVert">
        <div className="label">
            <h4 className="label__text">
                Parent
            </h4>
        </div>

        <div className="ut-inlineBlock ut-width-70 ">
            <ParentDropdown parents={parents} handleParentChange={handleParentChange} currentParent={currentParent} />
        </div>
    </section>
);

ParentHolder.propTypes = {
    parents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    currentParent: PropTypes.string.isRequired,
    handleParentChange: PropTypes.func.isRequired,
};

export default ParentHolder;

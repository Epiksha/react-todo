import React from 'react';
import PropTypes from 'prop-types';

import Priority from '../Priority/Priority';

const PriorityHolder = ({ currentPriority, handlePriorityChange }) => {
    const priorityTypes = ['Low', 'Medium', 'High'];

    const changePriority = (type) => {
        handlePriorityChange(type);
    };

    return (
        <section className="ut-paddingVert">
            <div className="label">
                <h4 className="label__text">
                    Priority
                </h4>
            </div>
    
            <div className="ut-inlineBlock ut-width-70">
                {priorityTypes.map((type) => (
                    <Priority
                        type={type}
                        changePriority={changePriority}
                        currentPriority={currentPriority}
                        key={Math.floor(Math.random() * 100000)}
                    />
                ))}
            </div>
        </section>
    );
};

PriorityHolder.propTypes = {
    currentPriority: PropTypes.string.isRequired,
    handlePriorityChange: PropTypes.func.isRequired,
};

export default PriorityHolder;

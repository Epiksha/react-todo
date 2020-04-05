import React from 'react';
import PropTypes from 'prop-types';

import Priority from '../Priority/Priority';
import Parents from '../Parents/Parents';

const CreatorUI = ({
    current,
    type,
    handlePropertyChange,
    tasks,
}) => {
    const priorities = ['Low', 'Medium', 'High'];

    return (
        <section className="ut-paddingVert">
            <div className="label">
                <h4 className="label__text">
                    {type}
                </h4>
            </div>

            <div className="ut-inlineBlock ut-width-70 ">
                {type === 'priority' ? (
                    priorities.map((priority) => (
                        <Priority
                            priority={priority}
                            handlePropertyChange={handlePropertyChange}
                            current={current}
                            key={Math.floor(Math.random() * 100000)}
                        />
                    ))
                ) : (
                    <Parents
                        parents={tasks.map((task) => task.text)}
                        handlePropertyChange={handlePropertyChange}
                        current={current}
                    />
                )}
            </div>
        </section>
    );
};

CreatorUI.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
    })).isRequired,
    current: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handlePropertyChange: PropTypes.func.isRequired,
};

export default CreatorUI;

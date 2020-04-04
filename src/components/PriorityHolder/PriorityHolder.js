import React from 'react';

import Priority from '../Priority/Priority';

const PriorityHolder = () => {
    const priorityTypes = [
        {
            title: 'Low',
            theme: 'low',
            isActive: false,
        },
        {
            title: 'Medium',
            theme: 'med',
            isActive: false,
        },
        {
            title: 'High',
            theme: 'high',
            isActive: false,
        },
    ];

    const changePriority = () => {
        
    };

    return (
        <section className="ut-paddingVert">
            <div className="label">
                <h4 className="label__text">
                    Priority
                </h4>
            </div>
    
            <div className="ut-inlineBlock ut-width-70">
                {priorityTypes.map(({ title, theme, isActive }, i) => (
                    <Priority
                        title={title}
                        theme={theme}
                        isActive={isActive}
                        index={i}
                        toggleActive={changePriority}
                        key={theme}
                    />
                ))}
            </div>
        </section>
    );
};

export default PriorityHolder;

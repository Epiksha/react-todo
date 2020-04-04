import React, { Component } from 'react';

import Priority from '../Priority/Priority';

class PriorityHolder extends Component {
    priorityTypes = [
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

    constructor() {
        super();

        this.state = {
            
        };
    }

    changePriority = () => {
        
    }

    render() {
        return (
            <section className="priorityHolder ut-paddingVert">
                <div className="priorityHolder__label">
                    <h4 className="priorityHolder__label__text">
                        Priority
                    </h4>
                </div>
        
                <div className="priorityHolder__buttons">
                    {this.priorityTypes.map(({ title, theme, isActive }, i) => (
                        <Priority
                            title={title}
                            theme={theme}
                            isActive={isActive}
                            index={i}
                            toggleActive="changePriority"
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default PriorityHolder;

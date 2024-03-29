import Icon from '../Icon/Icon';
import Plus from '../Plus/Plus';
import AccordionProps from './Accordion.types';

export const Accordion =  ({
    iconType,
    iconPosition = 'left',
    title,
    children
}: AccordionProps): JSX.Element => (
    <details
        className={`
            ${iconType === 'plus' ? 'accordion--plus': ''}
            ${iconPosition === 'right' ? 'accordion--right': ''}
            accordion
        `}
        data-testid="accordion"
    >
        <summary className="accordion__title">
            {iconPosition === 'left' && (
                <>
                    {iconType === 'plus' ? <Plus /> : (
                        <Icon
                            name="icon-arrow-expand"
                            classes="icon--accordion"
                        />
                    )}
                </>
            )}

            <span className="accordion__title__text">{title}</span>

            {iconPosition === 'right' && (
                <>
                    {iconType === 'plus' ? <Plus /> : (
                        <Icon
                            name="icon-arrow-expand"
                            classes="icon--accordion"
                        />
                    )}
                </>
            )}
        </summary>

        <div className="accordion__content">
            {children}
        </div>
    </details>
);

export default Accordion;
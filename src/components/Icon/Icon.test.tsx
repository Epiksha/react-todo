import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component', () => {
    let iconElement: HTMLElement;
    
    beforeEach(() => {
        render(<Icon name="icon-email" />);
        iconElement = screen.getByTestId('icon');
    });

    it('Mounts properly', () => {
        expect(iconElement).toBeInTheDocument();
    });
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from './Home';

describe('Home component', () => {
    let homeElement;
    
    beforeEach(() => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        homeElement = screen.getByTestId('home');
    });

    it('Mounts properly', () => {
        expect(homeElement).toBeInTheDocument();
    });
});

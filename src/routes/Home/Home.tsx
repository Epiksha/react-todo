import { Link } from 'react-router-dom';

export const HomePage = (): JSX.Element => (
    <main
        className="container py-4"
        data-testid="home"
    >
        <Link
            to="/styleguide"
            className="link"
        >
            Styleguide
        </Link>
    </main>
);

export default HomePage;
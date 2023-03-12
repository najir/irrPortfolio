import ApiAuthorzationRoutes from '../components/api-authorization/ApiAuthorizationRoutes';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import PortfolioPage from '../pages/Portfolio';
import IrrResume from '../components/irrResume/App';

const ClientRoutes = [
    {
        index: true,
        page: <HomePage />
    },
    {
        path: '/about',
        page: <AboutPage />
    },
    {
        path: '/blog',
        page: <BlogPage />
    },
    {
        path: '/portfolio',
        page: <PortfolioPage />
    },
    {
        path: '/resume',
        page: <IrrResume />
    },
    ...ApiAuthorzationRoutes
]

export default ClientRoutes;

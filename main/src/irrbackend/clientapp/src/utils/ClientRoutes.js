import ApiAuthorzationRoutes from '../components/api-authorization/ApiAuthorizationRoutes';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import PortfolioPage from '../pages/Portfolio';

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
    ...ApiAuthorzationRoutes
]

export default ClientRoutes;
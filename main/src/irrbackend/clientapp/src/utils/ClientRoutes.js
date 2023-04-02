import ApiAuthorzationRoutes from '../components/api-authorization/ApiAuthorizationRoutes';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import PortfolioPage from '../pages/Portfolio';
import IrrResume from '../components/resume/IrrResume';
import NewBlog from "../pages/NewBlog";
import BlogSingle from '../components/blog/BlogSingle';
import BlogModify from '../components/blog/BlogModify';

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
    {
        requireAuth : true,
        path: '/createblog',
        page: <NewBlog />
    },
    {
        path: '/blog/:blogid',
        page: <BlogSingle />
    },
    {
        path: '/blog/modify/:blogid',
        page: <BlogModify />
    },
    ...ApiAuthorzationRoutes
]

export default ClientRoutes;

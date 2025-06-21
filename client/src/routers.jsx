import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPages from "./pages/ProjectsPage";
import PageNotFound from './pages/PageNotFound';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/projects', element: <ProjectPages /> },
        ]
    },
    { path: '*', element: <PageNotFound /> },
]);
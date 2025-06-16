import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage"

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '*', element: <h4>404 Page Not Found</h4> },
        ]
    }
])
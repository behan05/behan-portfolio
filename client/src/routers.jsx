import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {}
        ]
    }
])
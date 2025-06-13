import { createBrowserRouter } from "react-router-dom";
import Header from "../src/components/header/Header";

export const routers = createBrowserRouter([
    { path: '/', element: <Header /> }
])
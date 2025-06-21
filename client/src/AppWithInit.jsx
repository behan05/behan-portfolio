import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import Initializing from "./initializing/Initializing";

function AppWithInit() {
    const [initialized, setInitialized] = useState(false);

    return (
        <>
            {!initialized && <Initializing onComplete={() => setInitialized(true)} />}
            {initialized && <RouterProvider router={routers} />}
        </>
    );
}

export default AppWithInit;

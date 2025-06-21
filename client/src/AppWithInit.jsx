import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import Initializing from "./initializing/Initializing";
import InteractionTracker from "./InteractionTracker";

function AppWithInit() {
    const [initialized, setInitialized] = useState(false);

    return (
        <>
            {!initialized && <Initializing onComplete={() => setInitialized(true)} />}
            {initialized && (
                <>
                    <InteractionTracker />
                    <RouterProvider router={routers} />
                </>
            )}
        </>
    );
}

export default AppWithInit;


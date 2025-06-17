import { Box, useMediaQuery, useTheme } from "../mui/muiComponents";
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import { useState } from "react";

function Layout() {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [sidebar, setSidebar] = useState(false);

    return (
        <Box
            sx={{
                bgcolor: theme.palette.background.default,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header */}
            <Header />

            {/* Main Area */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    px: isSM ? 1 : 6,
                    pt: 10, // to prevent overlap with fixed header
                    flex: 1,
                    mt: 5
                }}
            >
                {/* Main Content */}
                <Box sx={{ flex: 3 }}>
                    <Outlet />
                </Box>

                {/* Sidebar */}
                {sidebar && (
                    <Box sx={{ flex: 1 }}>
                        <h1>Sidebar</h1>
                    </Box>
                )}

            </Box>

            {/* Footer (Optional) */}
            {/* <Box>Footer</Box> */}
        </Box>
    );
}

export default Layout;

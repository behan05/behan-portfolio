import { Box, useMediaQuery, useTheme } from "../mui/muiComponents";
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from "../components/footer/Footer";

import { useSidebar } from '../context/SidebarContext';
import Sidebar from "../components/sidebar/Sidebar";

function Layout() {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));
    const { sidebarOpen, closeSidebar } = useSidebar();

    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            zIndex: 1,
        }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.15)',
                    zIndex: -2,
                }}
                src={isMd ? "/videos/jellyFish.mp4" : "/videos/jellyFish.mp4"}
                type="video/mp4"
            />

            {/* Optional Dark Overlay */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    zIndex: -1,
                }}
            />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    px: isSM ? 2 : isMd ? 10 : isLg ? 14 : 20,
                    pt: 5,
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Main Area */}
                <Box sx={{ flex: 3 }}>
                    <Outlet />
                </Box>

                {/* Sidebar (optional) */}
                {sidebarOpen && (
                    <Sidebar />
                )}
            </Box>
            {/* Footer */}
            <Footer />
        </Box>
    );
}

export default Layout;

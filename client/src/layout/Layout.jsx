import { Box, useMediaQuery, useTheme } from "../mui/muiComponents";
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import { useState } from "react";
import jellyfish from '../assets/bgVideo/jellyfish.mp4';
import jellyfishForSM from '../assets/bgVideo/jellyfishForSM.mp4';

function Layout() {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));
    const [sidebar, setSidebar] = useState(false);

    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden'
        }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.1)', // Adjust brightness here
                }}
                src={isMd ? jellyfishForSM : jellyfish}
                type="video/mp4"
            />

            {/* Optional Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Extra dark layer
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

                {/* Sidebar */}
                {sidebar && (
                    <Box sx={{ flex: 1 }}>
                        <h1>Sidebar</h1>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default Layout;

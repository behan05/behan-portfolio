import { Box, useMediaQuery, useTheme } from "../mui/muiComponents";
import { keyframes } from "@mui/system";
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from "../components/footer/Footer";

import { useSidebar } from '../context/SidebarContext';
import Sidebar from "../components/sidebar/Sidebar";
import { useMemo } from "react";

function Layout() {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));
    const { sidebarOpen, closeSidebar } = useSidebar();

    const twinkle = keyframes`
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.3; }
    `;

    // Star Background Layout
    const stars = useMemo(() => {
        return Array.from({ length: 100 }).map((_, index) => {
            const size = Math.random() * 2 + 1; // px
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const opacity = Math.random() * 0.6 + 0.2;
            const duration = Math.random() * 6 + 4;
            const delay = Math.random() * 4;

            return (
                <Box
                    key={index}
                    sx={{
                        position: "absolute",
                        top: `${top}%`,
                        left: `${left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        opacity,
                        animation: `${twinkle} ${duration}s infinite ease-in-out`,
                        animationDelay: `${delay}s`,
                        pointerEvents: 'none',
                    }}
                />
            );
        });
    }, [twinkle]);

    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            zIndex: 1,
        }}>

            {/* Star Background Layout */}
            <Box
                sx={{
                    position: "fixed",
                    inset: 0,
                    overflow: "hidden",
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            >
                {stars}
            </Box>

            {/* Ambient Lightning Glow */}
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    overflow: 'hidden',
                }}
            >
                {/* Primary glow */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 20, md: 40 },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: { xs: 180, md: 260 },
                        height: { xs: 180, md: 260 },
                        borderRadius: '50%',
                        background: `radial-gradient(
        circle,
        ${theme.palette.primary.main}55 0%,
        transparent 70%
      )`,
                        filter: 'blur(40px)',
                        opacity: 0.6,
                    }}
                />

                {/* Secondary accent glow */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 60, md: 100 },
                        left: 'calc(50% + 120px)',
                        width: 160,
                        height: 160,
                        borderRadius: '50%',
                        background: `radial-gradient(
        circle,
        ${theme.palette.secondary.main}44 0%,
        transparent 75%
      )`,
                        filter: 'blur(50px)',
                        opacity: 0.45,
                    }}
                />

                {/* Subtle vertical beam */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 2,
                        height: 160,
                        background: `linear-gradient(
        to bottom,
        transparent,
        ${theme.palette.primary.main}66,
        transparent
      )`,
                        opacity: 0.3,
                    }}
                />
            </Box>

            {/* Header */}
            <Header />

            {/* Main Content */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    px: isSM ? 2 : isMd ? 8 : isLg ? 10 : 30,
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

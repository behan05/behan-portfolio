import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Button, Stack, Link, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import gsap from 'gsap';
import CarouselCard from './CarouselCard';
import CustomButton from '../button/CustomButton';

const items = [
    {
        id: 1,
        title: 'Brandora Digital Solutions',
        description: `A responsive and modern digital agency website built using React and Material UI, showcasing services, portfolio, and a call-to-action for clients and businesses.`,
        link: `https://brandora-agency.vercel.app`,
        sourceCode: `https://github.com/behan05/brandora-digital-solutions`,
        image: '/projectImages/brandora660px.png'
    },
    {
        id: 2,
        title: 'Admin Dashboard',
        description: `A modern and responsive Admin Dashboard built with React and Material UI (MUI v5). Features a customizable AppBar, Sidebar, and reusable components.`,
        link: `https://react-admin-panel-behan.vercel.app/`,
        sourceCode: `https://github.com/behan05/material-ui-admin-dashboard`,
        image: '/projectImages/admin660px.png'
    },
    {
        id: 3,
        title: 'Pairly Chat',
        description: `A full-stack real-time chat application currently supporting secure text-based private messaging. In the next version, it will include video chat in Couple Mode only to ensure user privacy and safety. Built with React, Node.js, Express, Socket.IO, and MongoDB.`,
        link: `https://pairly.chat`,
        sourceCode: ``,
        image: '/projectImages/chat600px.png'
    },
    {
        id: 4,
        title: 'Production Grade Dashboard',
        description: `An enterprise-ready dashboard template built with React and Material UI, featuring scalable architecture, responsive design, and data-driven UI components.`,
        link: `#`,
        sourceCode: `#`,
        image: '/projectImages/productionDashboard600px.png'
    },
    {
        id: 5,
        title: 'NewsNest (News App)',
        description: `A Next.js news application created to explore the App Router, URL-based state management, and live API integration with a clean reading experience.`,
        link: `#`,
        sourceCode: `https://github.com/behan05/news-app`,
        image: '/projectImages/newsapp600px.png'
    },
];

const Carousel3D = () => {
    const theme = useTheme();
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(2);
    const isSm = useTheme().breakpoints.down('sm');
    const isMd = useTheme().breakpoints.down('md');
    const isLg = useTheme().breakpoints.down('lg');
    
    const rotateCarousel = (direction) => {
        const newIndex = (currentIndex + direction + items.length) % items.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const cards = containerRef.current.children;
        const angle = 50;

        Array.from(cards).forEach((card, i) => {
            const offset = i - currentIndex;
            const transform = `perspective(1000px) translateX(${offset * 260}px) rotateY(${offset * -angle}deg) scale(${offset === 0 ? 1 : 0.8})`;
            gsap.to(card, {
                duration: 0.6,
                transform,
                zIndex: offset === 0 ? 10 : 1,
                ease: 'power3.out',
            });
        });
    }, [currentIndex]);

    const current = items[currentIndex];

    return (
        <>
            <Stack maxWidth={800} mt={10}>
                <Typography
                    variant="h4"
                    color="text.primary"
                    gutterBottom
                >
                    Featured Projects 3D
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    A selection of real-world applications I’ve designed, developed, and deployed using the MERN stack and modern technologies.
                </Typography>
            </Stack>

            <Box sx={{ textAlign: 'center', px: 2 }}>
                <Box
                    sx={{
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 5,
                        px: 2,
                        overflow: 'hidden'
                    }}
                >
                    {/* Prev Button */}
                    <CustomButton
                        onClick={() => rotateCarousel(-1)}
                        variant="outlined"
                        sx={{
                            py: 0.6,
                            px: 2.5,
                            borderRadius: 999,
                            fontSize: '0.85rem',
                            letterSpacing: 1,
                            textTransform: 'uppercase',

                            color: theme.palette.text.primary,
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',

                            border: `1px solid ${theme.palette.primary.main}`,
                            boxShadow: '0 0 10px rgba(0,229,255,0.15)',
                            zIndex: 2,

                            transition: 'all 0.3s ease',

                            '&:hover': {
                                background: 'rgba(0,229,255,0.15)',
                                boxShadow: '0 0 18px rgba(0,229,255,0.35)',
                                transform: 'translateY(-2px)',
                            },

                            '&:active': {
                                transform: 'translateY(0)',
                                boxShadow: '0 0 8px rgba(0,229,255,0.25)',
                            },
                        }}
                    >
                        Prev
                    </CustomButton>

                    {/* Carousel */}
                    <Box
                        ref={containerRef}
                        sx={{
                            position: 'relative',
                            width: { xs: '300px', md: '400px', lg: '500px' },
                            height: { xs: '300px', md: '350px', lg: '400px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            perspective: '1200px',
                            overflow: 'visible',
                            zIndex: 1,
                        }}
                    >
                        {items.map((item) => (
                            <CarouselCard key={item.id} item={item} />
                        ))}
                    </Box>

                    {/* Next Button */}
                    <CustomButton
                        onClick={() => rotateCarousel(1)}
                        variant="outlined"
                        sx={{
                            py: 0.6,
                            px: 2.5,
                            borderRadius: 999,
                            fontSize: '0.85rem',
                            letterSpacing: 1,
                            textTransform: 'uppercase',

                            color: theme.palette.text.primary,
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',

                            border: `1px solid ${theme.palette.primary.main}`,
                            boxShadow: '0 0 10px rgba(0,229,255,0.15)',
                            zIndex: 2,

                            transition: 'all 0.3s ease',

                            '&:hover': {
                                background: 'rgba(0,229,255,0.15)',
                                boxShadow: '0 0 18px rgba(0,229,255,0.35)',
                                transform: 'translateY(-2px)',
                            },

                            '&:active': {
                                transform: 'translateY(0)',
                                boxShadow: '0 0 8px rgba(0,229,255,0.25)',
                            },
                        }}

                    >
                        Next
                    </CustomButton>
                </Box>


                <Box sx={{ mt: 6, maxWidth: 700, mx: 'auto' }}>
                    <Typography variant="h5" sx={{ color: '#e0e0e0', mb: 1 }}>
                        {current.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#aaa', mb: 2 }}>
                        {current.description}
                    </Typography>

                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={2}
                        useFlexGap
                        flexWrap="wrap"
                        my={4}
                    >
                        <CustomButton
                            component={Link}
                            href={current.link}
                            target="_blank"
                            rel="noopener"
                            variant="outlined"
                            disabled={current.link === '#'}
                            startIcon={<VisibilityIcon />}
                            sx={{
                                bgcolor: 'transparent', color: 'text.primary'
                            }}
                        >
                            Visit Site
                        </CustomButton>

                        <CustomButton
                            component={Link}
                            href={current.sourceCode}
                            target="_blank"
                            rel="noopener"
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            sx={{
                                bgcolor: 'transparent', color: 'text.primary'
                            }}
                        >
                            Source Code
                        </CustomButton>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Carousel3D;

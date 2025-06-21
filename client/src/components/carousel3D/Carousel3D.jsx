import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Button, Stack, Link, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import gsap from 'gsap';
import CarouselCard from './CarouselCard';
import jellyFish from "../../assets/images/jellyFish.jpg";
import jellyFish2 from "../../assets/images/jellyFish2.jpg";
import jellyFish3 from "../../assets/images/jellyFish3.jpg";

const items = [
    {
        id: 1,
        title: 'Brandora Digital Solutions',
        description: `A responsive and modern digital agency website built using React and Material UI, showcasing services, portfolio, and a call-to-action for clients and businesses.`,
        link: `https://brandora-agency.vercel.app`,
        sourceCode: `https://github.com/behan05/brandora-digital-solutions`,
        image: jellyFish
    },
    {
        id: 2,
        title: 'Real Time Chat App',
        description: `A full-stack real-time chat application with user authentication, private messaging, and socket-based communication built using React, Node.js, Express, Socket.IO, and MongoDB.`,
        link: `#`,
        sourceCode: `https://github.com/behan05/real-time-chat-app`,
        image: jellyFish2
    },
    {
        id: 3,
        title: 'Typing Speed Tester',
        description: `A full-stack typing speed tester app with real-time performance tracking, accuracy analysis, and leaderboard support, built using React, Node.js, Express, and MongoDB.`,
        link: `#`,
        sourceCode: `https://github.com/behan05/typing-speed-tester`,
        image: jellyFish3
    },
    {
        id: 4,
        title: 'Admin Dashboard',
        description: `A modern and responsive Admin Dashboard built with React and Material UI (MUI v5). Features a customizable AppBar, Sidebar, and reusable components.`,
        link: `https://react-admin-panel-behan.vercel.app/`,
        sourceCode: `https://github.com/behan05/material-ui-admin-dashboard`,
        image: jellyFish
    },
    {
        id: 5,
        title: 'Mitravue',
        description: `MitraVue — All-in-one codebase for a modern Indian random video chat platform, using React, MUI, GSAP, WebRTC, Node.js, and AI/ML integration.`,
        link: `#`,
        sourceCode: `https://github.com/behan05/mitravue`,
        image: jellyFish2
    },
];

const Carousel3D = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(2);

    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))

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
                    <Button
                        onClick={() => rotateCarousel(-1)}
                        variant="outlined"
                        sx={{
                            bgcolor: 'transparent',
                            minWidth: '80px',
                            zIndex: 2,
                            color: 'text.primary',
                        }}
                    >
                        Prev
                    </Button>

                    {/* Carousel */}
                    <Box
                        ref={containerRef}
                        sx={{
                            position: 'relative',
                            width: { xs: '100%', sm: '600px', md: '900px' },
                            height: { xs: '300px', sm: '380px', md: '500px' },
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
                    <Button
                        onClick={() => rotateCarousel(1)}
                        variant="outlined"
                        sx={{
                            color: 'text.primary',
                            bgcolor: 'transparent',
                            minWidth: '80px',
                            zIndex: 2,
                        }}
                    >
                        Next
                    </Button>
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
                        <Button
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
                        </Button>

                        <Button
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
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Carousel3D;

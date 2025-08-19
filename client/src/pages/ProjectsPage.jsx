// ProjectsPage.jsx
import React, { useRef } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from '../mui/muiComponents';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import components
import Carousel3D from "../components/carousel3D/Carousel3D"
import ProjectCards from '../components/ProjectCrads';
import RactangleFlower from '../components/ractangleFlower/RactangleFlower';

const cardItems = [
    {
        id: 1,
        title: 'Brandora Digital Solutions',
        description: `A responsive and modern digital agency website built using React and Material UI, showcasing services, portfolio, and a call-to-action for clients and businesses.`,
        link: `https://brandora-agency.vercel.app`,
        sourceCode: `https://github.com/behan05/brandora-digital-solutions`,
        image: '/projectImages/brandoraBigImg.png'
    },
    {
        id: 2,
        title: 'Admin Dashboard',
        description: `A modern and responsive Admin Dashboard built with React and Material UI (MUI v5). Features a customizable AppBar, Sidebar, and reusable components.`,
        link: `https://react-admin-panel-behan.vercel.app/`,
        sourceCode: `https://github.com/behan05/material-ui-admin-dashboard`,
        image: '/projectImages/adminBigImg.png'
    },
    {
        id: 3,
        title: 'Real Time Chat App',
        description: `A full-stack real-time chat application with user authentication, private messaging, and socket-based communication built using React, Node.js, Express, Socket.IO, and MongoDB.`,
        link: `https://connect-link-three.vercel.app/`,
        sourceCode: `https://github.com/behan05/real-time-chat-app`,
        image: '/projectImages/chatBigImg.png'
    },
    {
        id: 4,
        title: 'Typing Speed Tester',
        description: `A full-stack typing speed tester app with real-time performance tracking, accuracy analysis, and leaderboard support, built using React, Node.js, Express, and MongoDB.`,
        link: `#`,
        sourceCode: `https://github.com/behan05/typing-speed-tester`,
        image: '/projectImages/comingSoon.png'
    },
    {
        id: 5,
        title: 'Mitravue',
        description: `MitraVue — All-in-one codebase for a modern Indian random video chat platform, using React, MUI, GSAP, WebRTC, Node.js, and AI/ML integration.`,
        link: `#`,
        sourceCode: `https://github.com/behan05/mitravue`,
        image: '/projectImages/comingSoon.png'
    },
];

function ProjectsPage() {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.from('.project-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.project-card',
        start: 'top 90%',
      },
    });

    gsap.fromTo(carouselRef.current, {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: carouselRef.current,
        top: "10%",
      }
    })
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      px: isSm ? 0 : 2,
      overflow: 'hidden'
    }}>
      <Box component="section" textAlign="center">
        <Typography
          ref={headingRef}
          variant="h2"
          fontWeight="bold"
          gutterBottom
        >
          Projects
        </Typography>
        <Typography
          ref={paragraphRef}
          variant="h6"
          color="text.secondary"
          maxWidth="sm"
          mx="auto"
        >
          Welcome to my project showcase! Below are some of the best works I've built from frontend interfaces to full-stack applications, each project reflects my journey, passion, and skill growth in web development.
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          display: 'grid',
          gridTemplateColumns: (isSm || isMd) ? '1fr' : 'repeat(2, 1fr)',
          gap: 3,
        }}
      >
        {cardItems.map((item) => (
          <ProjectCards key={item.id} item={item} />
        ))}
      </Box>

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack mb={-10} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* ===  Carousel3D  === */}
      <Stack ref={carouselRef}>
        <Carousel3D />
      </Stack>
    </Box>
  );
}

export default ProjectsPage;

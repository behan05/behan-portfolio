import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from '../mui/muiComponents';

// Project Images
import jellyFish from "../assets/images/jellyFish.jpg";
import jellyFish2 from "../assets/images/jellyFish2.jpg";
import jellyFish3 from "../assets/images/jellyFish3.jpg";

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// import caroset3D component
import Carouset3D from "../components/carousel3D/Carousel3D"

const cardItems = [
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
]

function ProjectsPage() {

  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  
  const headingRef = useRef();
  const paragraphRef = useRef();


  useGSAP(() => {
    // Animate heading
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

    // Animate paragraph
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
  }, []);

  return (
    <Container>
      {/* header section */}
      <Box textAlign="center">
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
          Welcome to my project showcase! Below are some of the best works I've built — from frontend interfaces to full-stack applications, each project reflects my journey, passion, and skill growth in web development.
        </Typography>
      </Box>


      {/* Future: Add animated project cards here */}
      <Box sx={{

      }}>

      </Box>

      {/* Future: Add animated project cards here with 3D look */}
      <Carouset3D />
    </Container>
  );
}

export default ProjectsPage;

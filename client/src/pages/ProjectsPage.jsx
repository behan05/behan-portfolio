import { useRef } from 'react';
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
    title: 'Pairly Chat',
    description: `A real-time full-stack chat application focused on privacy and security. Supports secure private messaging with future plans for couple-only video chat. Built using React, Node.js, Express, Socket.IO, and MongoDB.`,
    link: `https://pairly.chat`,
    sourceCode: `https://github.com/behan05/pairly`,
    image: '/projectImages/chatBigImg.png'
  },
  {
    id: 2,
    title: 'Admin Dashboard',
    description: `A modern and responsive admin dashboard built with React and Material UI (MUI v5), featuring a customizable layout, sidebar navigation, and reusable UI components.`,
    link: `https://react-admin-panel-behan.vercel.app/`,
    sourceCode: `https://github.com/behan05/material-ui-admin-dashboard`,
    image: '/projectImages/adminBigImg.png'
  },
  {
    id: 3,
    title: 'Brandora Digital Solutions',
    description: `A modern digital agency website built with React and Material UI, designed to showcase services, portfolio, and client-focused call-to-actions.`,
    link: `https://brandora-agency.vercel.app`,
    sourceCode: `https://github.com/behan05/brandora-digital-solutions`,
    image: '/projectImages/brandoraBigImg.png'
  },
  {
    id: 4,
    title: 'Production Grade Dashboard',
    description: `An enterprise-ready dashboard template built with React and Material UI, featuring scalable architecture, responsive design, and data-driven UI components.`,
    link: `#`,
    sourceCode: `#`,
    image: '/projectImages/productionDashboardBig.png'
  },
  {
    id: 5,
    title: 'NewsNest (News App)',
    description: `A Next.js news application created to explore the App Router, URL-based state management, and live API integration with a clean reading experience.`,
    link: `#`,
    sourceCode: `https://github.com/behan05/news-app`,
    image: '/projectImages/newsappBigImg.png'
  },
];

function ProjectsPage() {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

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
      overflow: 'hidden',
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
          gridTemplateColumns: isSm  ? '1fr' : (isMd || isLg) ? 'repeat(2, 0.8fr)' : 'repeat(3, 1fr)',
          gap: 2,
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

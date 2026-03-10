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
    title: 'Pairly - Real-Time Chat Platform',
    description: `Full-stack real-time chat platform built independently from architecture to production. Features Socket.IO messaging, JWT authentication, MongoDB data models, and a comprehensive admin dashboard. Live for real users across multiple countries. 395+ commits.`,
    link: `https://pairly.chat`,
    sourceCode: `https://github.com/behan05/pairly`,
    image: '/projectImages/chatBigImg.png'
  },
  {
    id: 2,
    title: 'Chat App Admin Dashboard',
    description: `Production-ready admin dashboard template for chat applications. Features real-time analytics, user management, content moderation, security controls, and billing management. Built with React and Material UI - clean dark UI, fully responsive and API-ready.`,
    link: `https://chat-platform-admin.vercel.app/`,
    sourceCode: `https://github.com/behan05/chat-platform-admin`,
    image: '/projectImages/productionDashboardBig.png'
  },
  {
    id: 3,
    title: 'Brandora - Digital Agency Platform',
    description: `Full-stack digital agency web application built with React, Node.js, Express, and MongoDB. Features GSAP animations, fully responsive design, and backend APIs for newsletter and contact forms. Deployed on Vercel and Render.`,
    link: `https://brandora-agency.vercel.app`,
    sourceCode: `https://github.com/behan05/brandora-digital-solutions`,
    image: '/projectImages/brandoraBigImg.png'
  },
  {
    id: 4,
    title: 'React Admin Dashboard',
    description: `Modern and responsive admin dashboard built with React and Material UI v5. Features customizable layout, sidebar navigation, reusable UI components, and clean data visualization - ready for real-world integration.`,
    link: `https://react-admin-panel-behan.vercel.app/`,
    sourceCode: `https://github.com/behan05/material-ui-admin-dashboard`,
    image: '/projectImages/adminBigImg.png'
  },
  {
    id: 5,
    title: 'NewsNest - Next.js News App',
    description: `News application built with Next.js App Router featuring URL-based state management, live API integration, and a clean reading experience. Built to explore modern Next.js patterns in a real-world context.`,
    link: `https://newsnestnow.vercel.app/`,
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
          gridTemplateColumns: isSm ? '1fr' : (isMd || isLg) ? 'repeat(2, 0.8fr)' : 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {cardItems.map((item) => (
          <ProjectCards key={item.id} item={item} />
        ))}
      </Box>

      {!isMd && (
        <>
          {/* === Decorative Rotating Rectangle Graphic === */}
          <Stack mb={-10} justifyContent="center">
            <RactangleFlower />
          </Stack>

          {/* ===  Carousel3D  === */}
          <Stack ref={carouselRef}>
            <Carousel3D />
          </Stack>
        </>
      )}

    </Box>
  );
}

export default ProjectsPage;

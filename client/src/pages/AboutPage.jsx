import { Box, Stack, Grid, useMediaQuery, useTheme, Typography, Button, IconButton } from "../mui/muiComponents";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCloud,
  FaBolt, // used as GSAP icon
} from 'react-icons/fa';

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiMui,
  SiDjango,
  SiReactrouter,
  SiNextdotjs
} from 'react-icons/si';
import { GitHub, LinkedIn, Email, Contacts, X } from '@mui/icons-material';

// Animation
import { } from "@gsap/react";
import { } from "gsap/ScrollTrigger";
import gsap from "gsap";

// image
import behan from '../assets/images/behan.png'

// component.
import Capabilities from '../components/capabilities/Capabilities';
import { Divider } from "@mui/material";


const skills = [
  { label: "React.js", icon: <FaReact color="#61DBFB" /> },
  { label: "Material UI", icon: <SiMui color="#007FFF" /> },
  { label: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
  { label: "JavaScript (ES6+)", icon: <FaJs color="#F7DF1E" /> },
  { label: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { label: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { label: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { label: "Socket.IO", icon: <SiSocketdotio color="#010101" /> },
  { label: "GSAP", icon: <FaBolt color="#88CE02" /> },
  { label: "Git & GitHub", icon: <FaGitAlt color="#F1502F" /> },
  { label: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
  { label: "CSS3 / SCSS", icon: <FaCss3Alt color="#264de4" /> },

  { label: "Python", icon: <FaPython color="#3776AB" /> },
  { label: "Django", icon: <SiDjango color="#092E20" /> },
  { label: "AWS", icon: <FaCloud color="#FF9900" /> },
  { label: "React Router", icon: <SiReactrouter color="#CA4245" /> },
  { label: "Next.js", icon: <SiNextdotjs color="#000000" /> },
];

function AboutPage() {

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      component={'section'}
      sx={{
        position: 'relative',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 6, md: 15 },
        px: { xs: 2, md: 4 },
      }}>

      {/* Hero */}
      <Box sx={{
        py: 6,
        textAlign: 'center',
      }}>

        <Typography variant={isSm ? 'h4' : 'h2'} color="text.primary" gutterBottom>
          I Build Thoughtful, Scalable Web Experiences
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: { xs: '100%', md: 720 }, mx: 'auto', lineHeight: 1.8 }}
        >
          Full-Stack Developer focused on modern React, clean backend architecture,
          and real-time systems — building products that balance performance,
          privacy, and user experience.
        </Typography>

      </Box>

      {/* == Short Introduction (Who You Are) == */}
      <Box
        component={'section'}
        sx={{
          display: 'flex',
          flexDirection: (isSm || isMd) ? 'column' : 'row',
          gap: isLg ? 6 : 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Profile Image */}
        <Stack
          sx={{
            overflow: 'hidden',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            component="img"
            src={behan}
            sx={{
              width: { xs: 160, sm: 220, md: 320 },
              height: { xs: 160, sm: 220, md: 320 },
              objectFit: "cover",
              borderRadius: '50%',
              transition: "0.5s",
              "&:hover": { transform: "scale(1.05)" }
            }}
          />

          {/* Divider */}
          <Divider sx={{
            mt: 1,
            mb: 1,
          }}>
            <Typography variant="subtitle1" color="text.secondary">
              collaborating or hiring?
            </Typography>
          </Divider>
          <Stack direction="row" spacing={1}>
            {[
              { icon: <GitHub />, href: 'https://github.com/behan05', external: true },
              { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/behan-kumar-25151b2ba/', external: true },
              { icon: <X />, href: 'https://x.com/Behankumar05', external: true },
              { icon: <Email />, href: 'mailto:behankrbth@outlook.com', external: true },
              { icon: <Contacts />, to: '/contact', external: false },
            ].map((item, i) => (
              <IconButton
                key={i}
                component={item.external ? 'a' : Link}
                href={item.external ? item.href : undefined}
                to={!item.external ? item.to : undefined}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                sx={{
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 0 12px rgba(0,229,255,0.35)',
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        {/* Intro */}
        <Stack flex={1} spacing={3} textAlign={'justify'} sx={{ px: { xs: 0, md: 2 } }}>
          <Typography variant="h4">Behan Kumar</Typography>

          <Typography color="primary.main" fontWeight={600}>
            Full-Stack Engineer • MERN • Real-Time Applications
          </Typography>

          <Typography color="text.secondary">
            I design and build modern web applications with a strong focus on
            scalability, maintainability, and user experience.
          </Typography>

          <Typography color="text.secondary">
            I’m the creator of <strong>Pairly.chat</strong>, a real-time communication
            platform built with privacy, safety, and meaningful interactions in mind.
          </Typography>

        </Stack>
      </Box>

      {/* == Tech Stack / Skills (What You Use) == */}
      <Box>
        <Stack maxWidth={800}>
          <Typography
            variant={isSm ? "h4" : "h3"}
            color="text.primary"
            gutterBottom
          >
            Tech Stack / Skills
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Tools, technologies, and frameworks I work with to build fast, responsive, and scalable web applications.
          </Typography>
        </Stack>
        <Grid container spacing={2} mt={3}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'text.primary',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  py: 1,
                  px: 2,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textAlign: 'center',
                  transition: '0.3s',
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                {skill.icon}
                {skill.label}
              </Box>
            </Grid>
          ))}
        </Grid>


      </Box>

      {/* == Value == */}
      <Box>
        <Typography variant="h3" gutterBottom>
          Engineering Values
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mt: 2,
          }}
        >
          {[
            'Clean, maintainable, and scalable codebases',
            'Security-first mindset and privacy-aware systems',
            'Clear communication and team collaboration',
            'Continuous learning and engineering discipline',
          ].map((text, i) => (
            <Typography key={i} color="text.secondary" lineHeight={1.8}>
              {text}
            </Typography>
          ))}
        </Box>

      </Box>

      {/* == My Journey / Experience (My Story) == */}
      <Box>
        <Typography variant="h3" gutterBottom>
          Professional Journey
        </Typography>

        <Stack
          spacing={2}
          sx={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 2,
            p: { xs: 3, md: 4 },
          }}
        >
          <Typography color="text.secondary">
            My journey began with frontend development and expanded into full-stack
            engineering as I designed APIs, real-time systems, and deployment pipelines.
          </Typography>

          <Typography color="text.secondary">
            I work extensively with the MERN stack, Socket.IO, Redux Toolkit, GSAP,
            and modern tooling like Git, Vite, Postman, and cloud deployments.
          </Typography>

          <Typography color="text.secondary">
            Currently, I’m enhancing <strong>Pairly.chat</strong> with advanced,
            privacy-first real-time communication features.
          </Typography>
        </Stack>
      </Box>

      {/* What i am looking for */}
      <Box>
        <Typography variant="h3" gutterBottom>
          What I’m Looking For
        </Typography>

        <Stack spacing={2} maxWidth={800}>
          <Typography color="text.secondary">
            • Full-time, internship, or contract roles in product-focused teams
          </Typography>
          <Typography color="text.secondary">
            • Environments that value clean architecture and collaboration
          </Typography>
          <Typography color="text.secondary">
            • Teams building meaningful, scalable digital products
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default AboutPage;
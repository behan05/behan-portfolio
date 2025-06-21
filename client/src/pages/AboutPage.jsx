import React from 'react';

import { Box, Stack, Grid, Chip, Paper, useMediaQuery, useTheme, Typography, Button } from "../mui/muiComponents";
import { Link } from "react-router-dom";
import RactangleFlower from "../components/ractangleFlower/RactangleFlower";
import { MdEmail } from 'react-icons/md';
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
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiMui,
  SiDjango,
  SiReactrouter
} from 'react-icons/si';


// Animation
import { } from "@gsap/react";
import { } from "gsap/ScrollTrigger";
import gsap from "gsap";

// image
import behan from '../assets/images/behan.png'

// component.
import Capabilities from '../components/capabilities/Capabilities';


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
      }}>

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
        <Stack p={2} sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(192, 194, 196, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
          overflow: 'hidden',
          border: `1px dotted ${theme.palette.primary.main}`,
          borderRadius: 1,
        }}>
          <Stack
            component={'img'}
            src={behan}
            maxHeight={500}
            maxWidth={400}
            title='Image Converted by AI Tool.'
            sx={{
              objectFit: 'cover',
              borderRadius: 1,
              boxShadow: `0 0 4px ${theme.palette.primary.main}`,
              transition: `all 0.5s ease`,
              "&:hover": {
                transform: `scale(1.3) rotateZ(-5deg)`
              }
            }}
          />
        </Stack>

        {/* Intro */}
        <Stack flex={1} spacing={3} textAlign={'justify'}>
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            Hi, I'm Behan 👋
          </Typography>

          <Typography variant="body1" color="text.secondary">
            I build web apps with code — and a bit of heart. 💙
          </Typography>

          <Typography variant="body1" color="text.secondary">
            From smooth interfaces to smart backends, I turn ideas into experiences people enjoy using.
          </Typography>

          <Typography variant="body1" color="text.secondary" gutterBottom>
            I’m not here just to code. I’m here to create, connect, and contribute something that matters.
          </Typography>
          <Typography
            color="text.secondary"
            component={'a'}
            href={'#journey'}
            sx={{
              fontStyle: 'italic',
              fontWeight: 700
            }}
          >
            Know about my journey...
          </Typography>

          <Button
            component={Link}
            to={'/contact'}
            variant="outlined"
            sx={{
              width: 'fit-content',
              color: "text.primary",
              bgcolor: 'transparent',
            }}
          >
            Let’s Connect
          </Button>
        </Stack>
      </Box>

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={5} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* == Tech Stack / Skills (What You Use) == */}
      <Box>
        <Stack maxWidth={800}>
          <Typography
            variant="h4"
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
                  padding: '10px 16px',
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

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={5} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* == My Journey / Experience (My Story) == */}
      <Box>
        <Stack maxWidth={800}>
          <Typography
            variant='h4'
            color='text.primary'
            gutterBottom
            id="journey"
          >
            My Journey
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Everyone has a story — here’s mine, built with trial, error, passion, and lots of late-night debugging.
          </Typography>

        </Stack>

        <Stack
          alignItems="flex-start"
          spacing={2}
          sx={{
            bgcolor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            p: { xs: 3, sm: 4 },
            backdropFilter: 'blur(14px)',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            borderBottom: `1px dotted ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            My development journey has been fueled by curiosity, consistency, and the desire to turn ideas into impactful digital experiences.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            I’ve built a strong foundation in the MERN stack — MongoDB, Express.js, React, and Node.js — and expanded my toolkit with technologies like Redux Toolkit, GSAP, Socket.IO, MUI, and custom APIs. Tools like Git, GitHub, Postman, Vite, and Render support my workflow and deployment.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Along the way, I’ve tackled challenges like mastering backend architecture, improving communication in English, and understanding complex concepts like middleware, async behavior, and WebSocket events. Each challenge has helped me grow sharper and more capable.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            One of my recent builds is a DevTool that tracks and logs API performance in real time — designed to support debugging and improve developer efficiency. I’m also exploring advanced topics in React performance, user experience, and secure backend flows.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            I’m excited to join a team where I can contribute, learn, and build production-grade systems that actually make a difference. If you're building something meaningful — I’d love to be part of it.
          </Typography>
        </Stack>

      </Box>

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={5} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* == What i am Good At / Capabilities == */}
      <Box>
        <Capabilities />
      </Box>

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={5} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* == What You’re Looking For == */}
      <Box mb={8}>
        <Stack maxWidth={800}>
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            What I'm Looking For
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            I'm seeking exciting opportunities where I can contribute, grow, and build meaningful digital products with purpose-driven teams 🚀
          </Typography>
        </Stack>

        <Stack
          spacing={2}
          alignItems="flex-start"
          sx={{
            bgcolor: 'rgba(255,255,255,0.02)',
            p: { xs: 3, sm: 4 },
            backdropFilter: 'blur(14px)',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            borderBottom: `1px dotted ${theme.palette.primary.main}`
          }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            💼 I’m actively looking for opportunities to help build modern, scalable web applications — whether it’s a full-time role, internship, or freelance project.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            🛠️ I enjoy working with technologies like React, Node.js, MongoDB, WebSockets, and GSAP — but I’m also excited to explore new stacks and tools that push my growth.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            🤝 I value teams that believe in clean code, creative problem-solving, and continuous learning. I’m eager to collaborate, contribute, and build products that truly help people.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            ✨ If you're working on something impactful and need a developer with passion, curiosity, and commitment — I’d love to join your journey.
          </Typography>
        </Stack>
      </Box>

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={5} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* == Personal Touch  == */}
      <Box>
        <Stack spacing={2} maxWidth={800}>
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            The Human Behind the Developer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            When I’m not building apps, I’m fueling curiosity, chasing ideas, and enjoying the simple things that inspire better code — and a better life.
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          alignItems="flex-start"
          sx={{
            bgcolor: 'rgba(255,255,255,0.02)',
            p: { xs: 3, sm: 4 },
            backdropFilter: 'blur(8px)',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            borderBottom: `1px dotted ${theme.palette.primary.main}`
          }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            🌱 Outside of development, I spend time learning about design systems, watching tech documentaries, and reflecting on how technology shapes human lives. I believe creativity and empathy go hand in hand with engineering.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            🎧 I recharge by listening to music, sketching ideas in notebooks, or reading about startups and digital innovation. These habits help me come back to code with fresh energy and new perspectives.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            🤝 Whether it's mentoring beginners, collaborating with teammates, or just sharing ideas — I find joy in growing *together*. At the core, I’m a builder who loves learning, not just coding.
          </Typography>
        </Stack>
      </Box>

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack mt={5} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* == Call-to-Action == */}
      <Box sx={{ mt: 8 }}>
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          sx={{
            bgcolor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            p: { xs: 4, sm: 6 },
            borderBottom: `1px dotted ${theme.palette.primary.main}`,
            backdropFilter: 'blur(14px)',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)'
          }}
        >
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            Let’s Build Something Great Together 🚀
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, lineHeight: 1.8 }}
          >
            Whether you’re hiring, collaborating, or just curious about my work — I’m always open to meaningful conversations. Let’s connect and explore how we can work together!
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            to={"/contact"}
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              mt: 1
            }}
            startIcon={<MdEmail />}
          >
            Get in Touch
          </Button>

          <Stack direction="row" spacing={3} mt={2}>
            <a href="mailto:behankrbth@outlook.com" target="_blank" rel="noopener noreferrer">
              <MdEmail size={28} color="#ddd" style={{ cursor: 'pointer' }} />
            </a>
            <a href="https://github.com/behan05" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} color="#ddd" style={{ cursor: 'pointer' }} />
            </a>
            <a href="https://www.linkedin.com/in/behan-kumar-b73660351/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} color="#0077b5" style={{ cursor: 'pointer' }} />
            </a>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default AboutPage;
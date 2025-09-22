// Footer.js
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    gsap.fromTo(
      footer,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <Box
      ref={footerRef}
      component="footer"
      sx={{
        mt: 10,
        py: 6,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(192, 194, 196, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
        color: 'text.secondary',
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h6" color="text.primary">
          Behan • Full Stack Developer
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
            component={Link}
            href="https://github.com/behan05"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHub />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/behan-kumar-25151b2ba/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:behankrbth@outlook.com"
            color="inherit"
          >
            <Email />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Behan. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

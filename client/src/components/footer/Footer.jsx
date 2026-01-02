import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack, IconButton, Link, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email, Forum, X } from '@mui/icons-material';
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
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <Box
      ref={footerRef}
      component="footer"
      sx={{
        mt: 12,
        py: 8,
        px: 2,
        borderRadius: { lg: 2, md: 2, sm: 0, xs: 0 },
        background: `
        linear-gradient(
        180deg,
        #0f172a 0%,
        #020617 100%
        )`,

        boxShadow: `
        inset 0 0 0 1px rgba(255,255,255,0.05),
        0 20px 40px rgba(0,0,0,0.6)`,
        borderTop: '1px solid',
        borderColor: 'divider',
        color: 'text.secondary',
        textAlign: 'center',
      }}
    >
      <Stack spacing={3} alignItems="center" maxWidth={900} mx="auto">

        <Typography variant="h6" color="text.primary" letterSpacing={1}>
          Behan • Full Stack Engineer
        </Typography>

        <Typography
          variant="body2"
          sx={{
            maxWidth: 600,
            fontStyle: 'italic',
            opacity: 0.85,
            lineHeight: 1.8,
          }}
        >
          “Great software is not built by chance — it’s crafted with clarity,
          consistency, and care.”
        </Typography>

        <Divider
          sx={{
            width: 80,
            borderColor: 'primary.main',
            opacity: 0.4,
          }}
        />

        <Stack direction="row" spacing={2}>
          {[
            { icon: <GitHub />, link: 'https://github.com/behan05' },
            { icon: <LinkedIn />, link: 'https://www.linkedin.com/in/behan-kumar-25151b2ba/' },
            { icon: <Forum />, link: 'https://dev.to/behan05' },
            { icon: <X />, link: 'https://x.com/Behankumar05' },
            { icon: <Email />, link: 'mailto:behankrbth@outlook.com' },
          ].map((item, i) => (
            <IconButton
              key={i}
              component={Link}
              href={item.link}
              target="_blank"
              rel="noopener"
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

        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Behan. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

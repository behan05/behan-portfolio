import React, { useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  useTheme,
} from '../mui/muiComponents';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectCards({ item }) {
  const theme = useTheme();
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        p: 2,
        bgcolor: 'rgba(32, 5, 63, 0.09)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 0 20px rgba(13, 3, 22, 0.1)',
        borderBottom: `1px dotted ${theme.palette.primary.main}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        overflow: 'hidden',
        borderRadius: 2,
        transition: 'bgcolor 0.3s ease',
        ":hover": {
          bgcolor: 'rgba(81, 8, 165, 0.09)',
        },
      }}
    >
      <Stack
        component={'img'}
        src={item.image}
        alt={item.title}
        width={'100%'}
        height={{ xs: 200, sm: 300, md: 370 }}
        sx={{
          objectFit: 'cover',
          filter: 'saturate(110%) contrast(110%)',
          boxShadow: `0 0 1px ${theme.palette.primary.main}`,
          borderRadius: 1,
          transition: 'transform 0.3s ease',
          ":hover": {
            transform: 'scale(1.03)',
          },
        }}
        onError={(e) => (e.target.src = '/fallback.jpg')}
      />

      <Stack maxWidth={600} mx="auto">
        <Typography variant="h5" textAlign="center" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body2" textAlign="center" gutterBottom>
          {item.description}
        </Typography>

        <Stack mt={2} direction="row" flexWrap="wrap" gap={1} justifyContent="center">
          <Button
            variant="outlined"
            target="_blank"
            rel="noopener"
            component={Link}
            to={item.link}
            disabled={item.link === '#'}
            startIcon={<VisibilityIcon />}
            sx={{
              bgcolor: 'transparent',
              color: 'text.primary',
              borderColor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'primary.contrastText',
                borderColor: 'primary.main',
              },
            }}
          >
            Visit Site
          </Button>

          <Button
            variant="outlined"
            target="_blank"
            rel="noopener"
            component={Link}
            to={item.sourceCode}
            startIcon={<GitHubIcon />}
            sx={{
              bgcolor: 'transparent',
              color: 'text.primary',
              borderColor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'primary.contrastText',
                borderColor: 'primary.main',
              },
            }}
          >
            Source Code
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProjectCards;

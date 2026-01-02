import { useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  useTheme,
} from '../mui/muiComponents';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomButton from '../components/button/CustomButton';
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
        p: 1,
        background: `
        linear-gradient(
        180deg,
        #0f172a 0%,
        #020617 100%)`,
        boxShadow: `
        inset 0 0 0 1px rgba(255,255,255,0.05),
        0 20px 40px rgba(0,0,0,0.6)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflow: 'hidden',
        width: '100%',
        borderRadius: 2,
        transition: 'bgcolor 0.3s ease',
        ":hover": {
          bgcolor: 'rgba(81, 8, 165, 0.09)',
        },
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          width: '100%',
          height: 250,
          objectFit: 'cover',
          borderRadius: 1,
          filter: 'saturate(110%) contrast(110%)',
          boxShadow: `0 0 1px ${theme.palette.primary.main}`,
          transition: 'transform 0.3s ease',
          display: 'block',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        }}
        onError={(e) => (e.currentTarget.src = '/fallback.jpg')}
      />

      <Stack maxWidth={600} mx="auto">
        <Typography variant="h5" textAlign="center" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" textAlign="center" gutterBottom>
          {item.description}
        </Typography>

        <Stack mt={2} direction="row" flexWrap="wrap" gap={1} justifyContent="center">
          <CustomButton
            variant="outlined"
            target="_blank"
            rel="noopener"
            component={Link}
            to={item.link}
            disabled={item.link === '#'}
            startIcon={<VisibilityIcon />}
          >
            Visit Site
          </CustomButton>

          <CustomButton
            variant="outlined"
            target="_blank"
            rel="noopener"
            component={Link}
            to={item.sourceCode}
            startIcon={<GitHubIcon />}
          >
            Source Code
          </CustomButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProjectCards;

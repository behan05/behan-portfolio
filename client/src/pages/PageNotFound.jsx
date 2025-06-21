import React from 'react';
import { Box, Typography, Button, Container } from '../mui/muiComponents';
import { useNavigate } from 'react-router-dom';
import dog1 from '../assets/sadAnimalsImg/animal1.jpg';
import dog2 from '../assets/sadAnimalsImg/animal2.jpg';
import dog3 from '../assets/sadAnimalsImg/animal3.jpg';
import dog4 from '../assets/sadAnimalsImg/animal4.jpg';
import dog5 from '../assets/sadAnimalsImg/animal5.jpg';
import dog6 from '../assets/sadAnimalsImg/animal6.jpg';

import bgImg from '../assets/images/jellyFish.jpg';

const sadAnimalImages = [dog1, dog2, dog3, dog4, dog5, dog6];

const PageNotFound = () => {
    const navigate = useNavigate();
    const randomImage = sadAnimalImages[Math.floor(Math.random() * sadAnimalImages.length)];

    return (

        <Container
            maxWidth="sm"
            sx={{
                minWidth: '100%',
                minHeight: '100vh',
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: 8,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h2" fontWeight="bold" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
                This poor animal is as lost as you are.
            </Typography>

            <Box
                component="img"
                src={randomImage}
                alt="Sad animal"
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 2,
                    boxShadow: 3,
                    mb: 4,
                    mx: 'auto',
                }}
            />

            <Button
                variant="outlined"
                onClick={() => navigate('/')}
                sx={{
                    mt: 2,
                    bgcolor: 'transparent',
                    color: 'text.primary',
                }}
            >
                Back to Home
            </Button>
        </Container>

    );
};

export default PageNotFound;

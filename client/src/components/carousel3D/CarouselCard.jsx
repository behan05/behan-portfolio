import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CarouselCard = ({ item }) => {
    return (
        <Box
            component={Link}
            to={item.link}
            sx={{
                width: { xs: '200px', sm: '240px', md: '280px' },
                height: { xs: '280px', sm: '340px', md: '400px' },
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'absolute',
                transformStyle: 'preserve-3d',
                backgroundColor: 'transparent',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                component="img"
                src={item.image}
                alt={item.title}
                title={item.title}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'scale-down',
                }}
            />
        </Box>
    );
};

export default CarouselCard;

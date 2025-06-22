import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CarouselCard = ({ item }) => {
    return (
        <Box
            component={Link}
            to={item.link}
            sx={{
                width: '280px',
                height: '400px',
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
                    objectFit: 'scale-down', // scales down if large, else original size
                }}
            />
        </Box>
    );
};

export default CarouselCard;

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
                backgroundColor: '#111',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
        >
            <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                title={item.title}
            />
        </Box>
    );
};

export default CarouselCard;

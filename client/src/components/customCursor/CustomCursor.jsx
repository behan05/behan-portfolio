import React from 'react';
import { Box } from "../../mui/muiComponents";

function CustomCursor() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', move)
    }, []);

    return (
        <Box sx={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            position: 'fixed',
            width: '20px',
            height: '20px',
            backgroundColor: '#fffce1',
            borderRadius: '50%',
            pointerEvents: 'none',
            mixBlendMode: 'difference',
            zIndex: 9999,
        }}>
        </Box>
    )
}

export default CustomCursor;
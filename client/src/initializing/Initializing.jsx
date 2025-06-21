import { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import gsap from 'gsap';

function InitializingScreen({ onComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Animate out
            gsap.to('.init-box', {
                opacity: 0,
                duration: 0.5,
                onComplete,
            });
        }, 2500); // 2.5 sec delay for effect

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <Box
            className="init-box"
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#text.secondary',
                color: 'text.primary',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
            }}
        >
            <Typography textAlign={'center'} variant="h6" sx={{ mb: 2, letterSpacing: 2 }}>
                INITIALIZING...
            </Typography>
            <Typography textAlign={'center'} variant="h6" sx={{ mb: 2, letterSpacing: 2 }}>
                Till then please increase your screen brightness for a better experience.
            </Typography>
            <CircularProgress size={32} sx={{ color: 'wranning.main' }} />
        </Box>
    );
}

export default InitializingScreen;

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
        }, 1000); // 2.5 sec delay for effect

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <Box
            className="init-box"
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                bgcolor: 'background.default',
                color: 'text.primary',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                px: 2,
                textAlign: 'center',
                fontFamily: 'monospace',
            }}
        >
            <Typography
                variant="overline"
                sx={{
                    letterSpacing: 3,
                    opacity: 0.7,
                }}
            >
                Initializing
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    maxWidth: 480,
                    lineHeight: 1.6,
                    opacity: 0.85,
                }}
            >
                Please increase your screen brightness for a better visual experience.
            </Typography>

            <CircularProgress
                size={36}
                thickness={4}
                sx={{
                    mt: 1,
                    color: 'warning.main',
                }}
            />
        </Box>
    );

}

export default InitializingScreen;

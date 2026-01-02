import React, { useRef } from 'react';
import { Box, Typography } from '../../mui/muiComponents';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function Slider() {
    const sliderTextsPart1 = [
        "Full Stack Web Development",
        "Scalable System Design (HLD & LLD)",
        "Robust & Secure REST APIs",
        "Real-Time Chat & Video Apps",
        "Responsive UI/UX Design",
        "Authentication & Authorization Systems",
        "Component-Driven Frontend (React.js)",
        "State Management with Redux Toolkit",
        "Performance Optimization & Lazy Loading",
        "Pixel-Perfect UI with MUI & GSAP"
    ];

    const sliderTextsPart2 = [
        "MERN Stack Project Architecture",
        "Clean Code & Scalable Folder Structure",
        "MongoDB Schema Design & Indexing",
        "Express.js Backend Engineering",
        "Cloud Deployment on AWS & Render",
        "API Integration (Postman & Third-Party)",
        "DevTools & Git Collaboration",
        "End-to-End Testing & Debugging",
        "Modern CI/CD Ready Codebase",
        "Production-Ready Applications"
    ];

    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useGSAP(() => {
        gsap.to(row1Ref.current, {
            x: '-50%',
            repeat: -1,
            duration: 40,
            ease: 'linear'
        });

        gsap.to(row2Ref.current, {
            x: '-50%',
            repeat: -1,
            duration: 35,
            ease: 'linear'
        });
    }, []);

    const commonStyles = {
        whiteSpace: 'nowrap',
        display: 'inline-block',
        paddingRight: '4rem',
        fontWeight: 600,
        fontSize: '1.2rem',
        textShadow: `0 0 0.1rem`,
    };

    return (
        <Box sx={{ overflow: 'hidden', py: 4, my: 2, position: 'relative' }}>
            {/* Row 1 */}
            <Box sx={{ overflow: 'hidden', position: 'relative', width: '100%', height: '2.5rem' }}>
                <Box ref={row1Ref} sx={{
                    display: 'flex',
                    position: 'absolute',
                    willChange: 'transform',
                    width: 'max-content',
                }}>
                    {[...sliderTextsPart1, ...sliderTextsPart1].map((text, i) => (
                        <Typography key={i} sx={commonStyles} color="text.primary">
                            {text}
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ overflow: 'hidden', position: 'relative', width: '100%', height: '2.5rem', mt: 2 }}>
                <Box ref={row2Ref} sx={{
                    display: 'flex',
                    position: 'absolute',
                    willChange: 'transform',
                    width: 'max-content',
                }}>
                    {[...sliderTextsPart2, ...sliderTextsPart2].map((text, i) => (
                        <Typography key={i} sx={commonStyles} color="text.primary">
                            {text}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Slider;

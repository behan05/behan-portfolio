import React, { useEffect, useRef, useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    Stack
} from "../../mui/muiComponents";
import CustomButton from '../button/CustomButton';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

// Plug useGSAP
gsap.registerPlugin(useGSAP, ScrollTrigger);

import { WorkOutlineIcon, VisibilityIcon } from '../../icons/icons';

// Icons List
const iconFiles = [
    'axios.svg',
    'codepen.svg',
    'css.svg',
    'django.svg',
    'express.svg',
    'git.svg',
    'github.svg',
    'greensock.svg',
    'htmx.svg',
    'javascript.svg',
    'mongodb.svg',
    'mongoose.svg',
    'mui.svg',
    'postman.svg',
    'python.svg',
    'react.svg',
    'reactrouter.svg',
    'redux.svg',
    'render.svg',
    'sass.svg',
    'socketdotio.svg',
    'tsnode.svg',
    'vite.svg'
]

function HeroSection() {

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    const [index, setIndex] = useState(0);
    const iconRef = useRef(null);

    // Technologies list items Animation
    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(iconRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                onComplete: () => {
                    setIndex((prev) => (prev + 1) % iconFiles.length);
                    gsap.fromTo(iconRef.current, {
                        opacity: 0,
                        scale: 0.8,
                    },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.4,
                        }
                    )
                }
            })
        }, 2000);

        return () => clearInterval(interval);
    }, [index]);

    let currentIcon = `/icons/${iconFiles[index]}`;

    // Subtitle text Animate.
    const subtitle = `I build full-stack web applications using the MERN stack, combining seamless frontend experiences with scalable backend architectures. From crafting clean UIs to deploying on cloud platforms like AWS, I turn ideas into fast, secure, and production-ready digital solutions.`;

    // Split paragraph into words
    const words = subtitle.split(' ');
    const subtitleRef = useRef(null);

    // heading text Animation
    const headingRef = useRef(null);

    // CTA animation
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);

    useEffect(() => {
        if (!subtitleRef.current) return;
        if (!headingRef.current) return;
        if (!btnRef1.current) return;
        if (!btnRef2.current) return;
        subtitleRef.current.textContent = ' ';

        const tl = gsap.timeline();

        // Wrap each word in a span
        words.forEach((word) => {
            const span = document.createElement('span');
            span.textContent = word + " ";
            span.style.opacity = 0;
            span.style.display = 'inline-block';
            span.style.whiteSpace = 'pre';
            span.style.textAlign = 'justify';
            subtitleRef.current.appendChild(span);
        });

        // header animation 
        tl.from(headingRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'linear'
        })


        // Animate all span children of the paragraph
        tl.to(subtitleRef.current.children, {
            opacity: 1,
            y: 20,
            stagger: 0.1,
            duration: 0.3,
            ease: 'power2.out',
        });

        // CTA Button Animation.

        tl.from(btnRef1.current, {
            opacity: 0,
            y: 40
        })
        tl.from(btnRef2.current, {
            opacity: 0,
            y: 40
        })

    }, []);

    return (
        <Box sx={{
            display: 'flex',
            gap: 8,
            flexDirection: (isSm || isMd) ? 'column' : 'row '
        }}>
            {/* Left Box */}
            <Box flex={1}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: 4,
                    order: isMd ? 1 : 0,
                }}>

                {/* Heading */}
                <Typography
                    ref={headingRef}
                    variant='h1'
                    fontFamily={'"Lora", serif'}
                    fontSize={isSm ? '1.9rem' : isLg ? '2.2rem' : '3rem'}
                    textAlign={isSm && 'center'}
                    fontWeight={600}
                    letterSpacing={'0.256348px'}
                    lineHeight={'64.2819px'}
                    pb={'25.6348px'}
                    sx={{
                        tabSize: 4,
                        textSizeAdjust: '100%',
                    }}
                >
                    <Typography
                        component={'span'}
                        variant='h1'
                        gutterBottom
                        fontFamily={'"Lora", serif'}
                        fontSize={isSm ? '1.9rem' : isLg ? '2.2rem' : '3rem'}
                        fontWeight={600}
                        letterSpacing={'0.256348px'}
                        lineHeight={'64.2819px'}
                        pb={'25.6348px'}
                        sx={{
                            tabSize: 4,
                            textSizeAdjust: '100%',
                            textShadow: `0 0 1rem #000`
                        }}
                    >Your Vision,{' '}
                    </Typography>
                    My Code Let's Build Together
                </Typography>

                {/* Subtitle text */}
                <Typography
                    variant='subtitle1'
                    gutterBottom
                    lineHeight={1.8}
                    ref={subtitleRef}
                    textAlign={'justify'}
                /
                >

                {/* Button */}
                <Stack
                    mt={8}
                    justifyContent={isSm ? 'center' : 'flex-start'}
                    direction={'row'}
                    flexWrap={'wrap'}
                    spacing={0}
                    gap={1}
                >

                    <CustomButton
                        ref={btnRef1}
                        startIcon={<WorkOutlineIcon />}
                        variant="outlined"
                        component={Link}
                        to={'/contact'}
                        color='text.primary'
                        sx={{
                            backgroundColor: 'transparent',
                            fontFamily: '"Lora", serif',
                            fontSize: '1.125rem',
                            border: `1px dotted ${theme.palette.primary.main}`,
                        }}
                    >
                        Hire Me
                    </CustomButton>

                    <CustomButton
                        ref={btnRef2}
                        startIcon={<VisibilityIcon />}
                        variant="outlined"
                        component={Link}
                        to={'/projects'}
                        color='text.primary'
                        sx={{
                            backgroundColor: 'transparent',
                            fontFamily: '"Lora", serif',
                            fontSize: '1.125rem',
                            border: `1px dotted ${theme.palette.primary.main}`,
                        }}
                    >
                        View My Work
                    </CustomButton>

                </Stack>

            </Box>

            {/* Right Box */}
            <Box flex={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    order: isMd ? 0 : 1,
                    userSelect: 'none',
                }}>
                <Stack
                    ref={iconRef}
                    component={'img'}
                    src={currentIcon}
                    alt='tech-icon'
                    aria-label='tech-icon'
                    maxHeight={200}
                    maxWidth={200}
                    sx={{
                        background: theme.palette.text.primary,
                        borderRadius: 2,
                        filter: 'brightness(80)',
                        p: 3,
                    }}
                />
            </Box>
        </Box>

    )
}

export default HeroSection
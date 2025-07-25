import React, { useEffect, useRef } from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from "../../mui/muiComponents";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Capabilities() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));

    const sectionRef = useRef(null);
    const boxRefs = useRef([]);

    const capabilitiesData = [
        {
            number: "01",
            label: "Full Stack Web Development",
            description: `I specialize in building complete web applications using the MERN stack (MongoDB, Express, React, Node.js). From clean, responsive UIs to secure and scalable backend systems, I handle the full lifecycle of development, including testing, deployment, and performance optimization.`,
        },
        {
            number: "02",
            label: "Real-Time Apps with Socket.IO",
            description: `I develop high-performance real-time applications such as chat systems, collaborative tools, and live streaming platforms using Socket.IO. I focus on low-latency communication, message queuing, and event-based architectures to ensure a smooth and interactive user experience.`,
        },
        {
            number: "03",
            label: "System Design & API Architecture",
            description: `I design scalable system architectures with a strong understanding of high-level and low-level design principles. I implement RESTful APIs with modular routing, request validation, rate limiting, and structured error handling to ensure maintainability and scalability.`,
        },
        {
            number: "04",
            label: "Cloud Deployment & Optimization",
            description: `I deploy production-ready applications on platforms like AWS, Render, and Vercel. I optimize resource usage with environment-based configuration, CDN caching, code splitting, and lazy loading, ensuring fast performance and cost-efficiency across environments.`,
        },
        {
            number: "05",
            label: "UI/UX Design Integration",
            description: `I convert modern UI/UX designs into fully responsive, accessible frontends using React and Material UI (MUI). I emphasize pixel-perfect layouts, smooth animations with GSAP or Framer Motion, and interactive user flows to create intuitive and engaging user experiences.`,
        },
        {
            number: "06",
            label: "Version Control & Team Collaboration",
            description: `I use Git and GitHub for effective version control, code reviews, and branching strategies. I follow best practices for commits, pull requests, and collaborative workflows, ensuring smooth team coordination and continuous integration in multi-developer environments.`,
        }

    ];

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                },
            });

            tl.from(boxRefs.current, {
                opacity: 0,
                y: 50,
                stagger: 0.4,
                duration: 1,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const commonOuterSx = {
        borderBottom: `1px dotted ${theme.palette.primary.main}`,
        p: 2,
        minHeight: 140,
        backdropFilter: "blur(14px)",
        borderRadius: 1,
        backgroundColor: "rgba(192, 194, 196, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
    };

    const numberBoxSx = {
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: "25%",
        borderBottomRightRadius: "25%",
        boxShadow: `inset 2px 2px 1px ${theme.palette.warning.main}`,
        color: theme.palette.text.main,
        letterSpacing: 2,
        backgroundColor: 'transparent',
        border: `1px dotted ${theme.palette.primary.main}`,
    };

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                my: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Stack maxWidth={800}>
                <Typography
                    variant="h4"
                    color="text.primary"
                    gutterBottom
                >
                    What I Do Best
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    These are the areas where I bring the most value — with hands-on experience, real projects, and problem-solving mindset.
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: (isSm || isMd) ? "1fr" : "repeat(2, 1fr)",
                    gap: 4,
                    my: 4
                }}
            >
                {capabilitiesData.map((item, i) => (
                    <Stack
                        key={i}
                        sx={commonOuterSx}
                        ref={(el) => (boxRefs.current[i] = el)}
                    >
                        <Box sx={numberBoxSx}>{item.number}</Box>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            color="text.secondary"
                            my={4}
                            fontSize={"1.2rem"}
                            fontWeight={600}
                        >
                            {item.label}
                        </Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                            color="text.secondary"
                            textAlign={"justify"}
                            lineHeight={1.8}
                        >
                            {item.description}
                        </Typography>
                    </Stack>
                ))}
            </Box>
        </Box>
    );
}

export default Capabilities;

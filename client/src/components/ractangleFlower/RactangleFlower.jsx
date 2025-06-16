import { useRef, useEffect } from 'react';
import ractangle from '../../assets/images/ractangle.png'
import { Stack, useMediaQuery, useTheme } from "../../mui/muiComponents"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerEase(useGSAP)

function RactangleFlower() {

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const ractangleRef = useRef(null);
    // ractangleRef
    useEffect(() => {
        let angle = 0

        const ractangleTimer = setInterval(() => {
            angle += 365

            gsap.to(ractangleRef.current, {
                rotateZ: angle,
                duration: 1,
                ease: 'linear',
                transformOrigin: 'center center',
            });

            return () => clearInterval(ractangleTimer);
        }, 2000);
    }, []);

    return (
        <Stack
            display={(isSm || isMd) ? 'flex' : 'inline-block'}
            justifyContent="center"
            width={'100%'}
            alignItems="center"
            textAlign={(isSm || isMd) ? 'center' : 'left'}
            my={4}
            ml={(!isSm || !isMd) && 4}
        >
            <Stack
                ref={ractangleRef}
                component="img"
                src={ractangle}
                alt="rectangle Image"
                width={isSm ? 50 : 80}
                sx={{
                    userSelect: 'none',
                    mr: 0,
                }}
            />
        </Stack>
    )
}

export default RactangleFlower;
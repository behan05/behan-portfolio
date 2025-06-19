import { useRef, useEffect } from 'react';
import ractangle from '../../assets/images/ractangle.png';
import { Stack, useMediaQuery, useTheme } from "../../mui/muiComponents";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function RactangleFlower() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const ractangleRef = useRef(null);

    useEffect(() => {
        let angle = 0;
        const ractangleTimer = setInterval(() => {
            angle += 365;

            gsap.to(ractangleRef.current, {
                rotateZ: angle,
                duration: 1,
                ease: 'linear',
                transformOrigin: 'center center',
            });
        }, 2000);

        return () => clearInterval(ractangleTimer);
    }, []);

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            width="100%"
        >
            <Stack
                ref={ractangleRef}
                component="img"
                src={ractangle}
                alt="rectangle"
                width={isSm ? 50 : 80}
                sx={{
                    userSelect: 'none',
                }}
            />
        </Stack>
    );
}

export default RactangleFlower;

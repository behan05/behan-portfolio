import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Stack } from "../../mui/muiComponents";
import { Link } from "react-router-dom";


// Register plugin
gsap.registerPlugin(ScrollTrigger);

function RotatingLogo() {

    const logoRef = useRef(null);

    useEffect(() => {
        gsap.to(logoRef.current, {
            rotate: 360,
            boxShadow: 3,
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
            }
        })
    }, []);

    return (
        <Stack flexGrow={1} component={Link} to={'/'}>
            <Stack ref={logoRef} component={'img'} src={'/star.png'} width={50} height={50} alt="logo-image" />
        </Stack>
    )
}

export default RotatingLogo;
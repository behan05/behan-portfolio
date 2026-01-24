import HeroSection from "../components/hero/HeroSection";
import RactangleFlower from "../components/ractangleFlower/RactangleFlower";
import { Box, Stack, useMediaQuery, useTheme } from "../mui/muiComponents";
import Slider from "../components/slider/Slider";
import Capabilities from "../components/capabilities/Capabilities";
import Carousel3D from "../components/carousel3D/Carousel3D";
import Contact from "../components/contact/Contact";

function LandingPage() {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, overflow: 'hidden' }}>

      {/* === Hero Section with Animated Text and Technology Icons === */}
      <HeroSection />

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={8} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* === Horizontal Scrolling Slider Showcasing Technical Skills === */}
      <Slider />

      {/* === Capabilities Section Detailing Services & Expertise === */}
      <Capabilities />

      {!isMd && (
        <>
          {/* === Decorative Rotating Rectangle Graphic === */}
          <Stack justifyContent="center">
            <RactangleFlower />
          </Stack>

          {/* ===  Carousel3D  === */}
          <Carousel3D />
        </>
      )}

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack my={2} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* === Contact === */}
      <Contact />
    </Box>

  )
}

export default LandingPage;
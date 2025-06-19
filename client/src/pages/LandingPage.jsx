import HeroSection from "../components/hero/HeroSection";
import RactangleFlower from "../components/ractangleFlower/RactangleFlower";
import { Box, Stack } from "../mui/muiComponents";
import Slider from "../components/slider/Slider";
import Capabilities from "../components/capabilities/Capabilities";
import Carousel3D from "../components/carousel3D/Carousel3D";

function LandingPage() {

  return (
    <Box>

      {/* === Hero Section with Animated Text and Technology Icons === */}
      <HeroSection />

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack mt={10} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* === Horizontal Scrolling Slider Showcasing Technical Skills === */}
      <Slider />

      {/* === Capabilities Section Detailing Services & Expertise === */}
      <Capabilities />

      {/* === Decorative Rotating Rectangle Graphic === */}
      <Stack mt={10} justifyContent="center">
        <RactangleFlower />
      </Stack>

      {/* ===  Carousel3D  === */}
      <Carousel3D />
    </Box>

  )
}

export default LandingPage;
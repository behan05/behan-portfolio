import HeroSection from "../components/hero/HeroSection";
import RactangleFlower from "../components/ractangleFlower/RactangleFlower";
import { Box, Stack } from "../mui/muiComponents";
import Slider from "../components/slider/Slider";

function LandingPage() {

  return (
    <Box>

      {/* Hero First Page */}
      <HeroSection />
      {/* Show Pices image */}
      <Stack my={2} justifyContent={'center'}>
        <RactangleFlower />
        <Slider />
      </Stack>
    </Box>
  )
}

export default LandingPage;
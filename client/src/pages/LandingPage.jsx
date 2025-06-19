import HeroSection from "../components/hero/HeroSection";
import RactangleFlower from "../components/ractangleFlower/RactangleFlower";
import { Box, Stack } from "../mui/muiComponents";

function LandingPage() {

  return (
    <Box>

      {/* Hero First Page */}
      <HeroSection />
      {/* Show Pices image */}
      <Stack mt={8} justifyContent={'center'}>
        <RactangleFlower />
      </Stack>
    </Box>
  )
}

export default LandingPage;
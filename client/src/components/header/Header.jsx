import { AppBar, Box, Stack, Toolbar, useMediaQuery, useTheme } from "../../mui/muiComponents";
import { NavLink } from 'react-router-dom';
import BehanLogo from "../logo/BehanLogo"

function Header() {
  const theme = useTheme();
  // const isUpToSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // const isUpToMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const pages = ['Home', 'About', 'Projects', 'Contact', 'Blogs', 'Download Resume'];

  return (
    <AppBar>
      <Toolbar>
        {/* Logo Component */}
        <Stack borderRadius={3} boxShadow={3} p={1}>
          <BehanLogo />
        </Stack>

        {/*  */}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
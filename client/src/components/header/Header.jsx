import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,

} from "../../mui/muiComponents";
import {
  MenuIcon,
  HomeIcon,
  InfoIcon,
  WorkspacesIcon,
  ForumIcon,
  ContactsIcon,
  AttachFileIcon,
} from "../../icons/icons";
import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingLogo from "../logo/RotatingLogo";

// Plug useGsap.
gsap.registerPlugin(useGSAP);

function Header() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const pages = [
    { text: 'Home', href: '/', icon: <HomeIcon /> },
    { text: 'About', href: '/about', icon: <InfoIcon /> },
    { text: 'Projects', href: '/projects', icon: <WorkspacesIcon /> },
    { text: 'Contact', href: '/contact', icon: <ContactsIcon /> },
    { text: 'Blogs', href: '/blogs', icon: <ForumIcon /> },
    { text: 'Download Resume', href: '/download-resume', icon: <AttachFileIcon /> },
  ];

  const navRef = useRef(null);
  // console.log(navRef.current.selectorAll);

  useEffect(() => {

  })

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        boxShadow: 'none',
        background: 'inherit',
        py: 1
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {/* Logo Component */}
        <RotatingLogo />

        {/* pages List  */}

        {!isSm ? (

          pages.map((page, index) => (
            <List
              ref={navRef}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }}>
              <ListItem
                component={NavLink}
                to={page.href}
                sx={{
                  px: 2,
                  py: 1,
                  mx: 0.5,
                  boxShadow: `0 0 1px ${theme.palette.text.primary}`,
                  borderTopRightRadius: '16px',
                  borderBottomLeftRadius: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',

                  '&:hover': {
                    borderTopLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    borderTopRightRadius: '0',
                    borderBottomLeftRadius: '0',
                    boxShadow: `0 0 22rem ${theme.palette.text.primary}`,
                    background: 'inherit'
                  },
                  '&:hover .hover-icon': {
                    display: 'inline-block'
                  },

                  '&:hover .MuiListItemText-primary': {
                    fontFamily: '"Edu VIC WA NT Hand Pre", cursive',
                  },
                  '&.active': {
                    fontFamily: '"Edu VIC WA NT Hand Pre", cursive',
                  },
                }}
              >
                <Stack
                  color={theme.palette.text.primary}
                  className="hover-icon"
                  display='none'
                >
                  {page.icon}
                </Stack>
                <ListItemText
                  primary={page.text}
                  primaryTypographyProps={{
                    sx: {
                      color: `${theme.palette.text.primary} !important`,
                    },
                  }}
                />
              </ListItem>
            </List>
          ))

        ) : (
          <IconButton>
            <MenuIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        )}

      </Toolbar>
    </AppBar>
  )
}

export default Header;
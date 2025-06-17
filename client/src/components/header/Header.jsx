import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Tooltip,
  Box,
  Typography,
} from "../../mui/muiComponents";
import {
  MenuIcon,
  HomeIcon,
  InfoIcon,
  WorkspacesIcon,
  ForumIcon,
  ContactsIcon,
  AttachFileIcon,
  FiberManualRecordIcon
} from "../../icons/icons";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../logo/Logo";

// Plug useGSAP
gsap.registerPlugin(useGSAP);

function Header() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const pages = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Intro", href: "/about", icon: <InfoIcon /> },
    { text: "Builds", href: "/projects", icon: <WorkspacesIcon /> },
    { text: "Say Hi", href: "/contact", icon: <ContactsIcon /> },
    { text: "Posts", href: "/blogs", icon: <ForumIcon /> },
    { text: "Resume", href: "/download-resume", icon: <AttachFileIcon /> },
  ];

  const navRef = useRef(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'background-color 0.3s ease',
        py: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >

        <Stack
          component="section"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap={'wrap'}
          flexGrow={1}
        >
          {/* Left: Logo + Status */}
          <Stack direction="row" alignItems="center" gap={2}>
            <Logo />
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              component={NavLink}
              to={'DOTO'}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FiberManualRecordIcon
                aria-label="online indicator"
                sx={{
                  fontSize: '12px',
                  color: theme.palette.success.main,
                  bgcolor: theme.palette.background.default,
                  borderRadius: '50%',
                  animation: 'pulseGlow 1.5s infinite',
                  '@keyframes pulseGlow': {
                    '0%': {
                      filter: `drop-shadow(0 0 0px ${theme.palette.success.main})`,
                    },
                    '50%': {
                      filter: `drop-shadow(0 0 4px ${theme.palette.success.main})`,
                    },
                    '100%': {
                      filter: `drop-shadow(0 0 0px ${theme.palette.success.main})`,
                    },
                  },
                }}
              />
              <Typography variant="body2" role="status" color="text.primary">
                Currently Available
              </Typography>
            </Stack>
          </Stack>

          {/* Right: Pages List */}

          {isSm ? (
            <IconButton edge={'start'}>
              <MenuIcon color='text.primary' />
            </IconButton>
          ) : (
            <List sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {pages.map((navItem, index) => (
                <Tooltip
                  key={index}
                  title={navItem.icon}
                  arrow
                  placement="bottom"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(6px)',
                        color: theme.palette.text.primary,
                        fontSize: 13,
                        px: 1.5,
                        py: 1,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        boxShadow: `0 0 8px rgba(0,0,0,0.1)`,
                      },
                    },
                    arrow: {
                      sx: {
                        color: 'rgba(255, 255, 255, 0.05)',
                      },
                    },
                  }}
                >
                  <Box
                    component={NavLink}
                    to={navItem.href}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: 1,
                      color: theme.palette.text.primary,
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      '&.active': {
                        color: theme.palette.text.secondary,
                        // backgroundColor: theme.palette.success.main,
                        fontWeight: 600,
                        boxShadow: `0 0 4px 0.1px ${theme.palette.success.main}`,
                      },
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        transform: 'translateY(-1px)',
                      },
                      '&.active:hover': {
                      },
                    }}
                  >
                    <Typography variant="body2" textAlign="center" whiteSpace="nowrap">
                      {navItem.text}
                    </Typography>
                  </Box>
                </Tooltip>
              ))}
            </List>
          )}

        </Stack>
      </Toolbar>
    </AppBar >
  );
}

export default Header;

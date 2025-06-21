import {
  AppBar,
  List,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Tooltip,
  Box,
  Typography,
  Button
} from "../../mui/muiComponents";
import {
  MenuIcon,
  HomeIcon,
  InfoIcon,
  WorkspacesIcon,
  ContactsIcon,
  AttachFileIcon,
  FiberManualRecordIcon
} from "../../icons/icons";
import { NavLink } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
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
    { text: "About Me", href: "/about", icon: <InfoIcon /> },
    { text: "My Work", href: "/projects", icon: <WorkspacesIcon /> },
    { text: "Let's Talk", href: "/contact", icon: <ContactsIcon /> },
  ];

  const navRef = useRef(null);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      const links = el.querySelectorAll('.nav-link');

      if (links.length === 0) {
        console.warn("No nav links found.");
        return;
      }

      links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
      });

      gsap.to(links, {
        opacity: 1,
        y: 0,
        stagger: 0.20,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
      });
    });
  }, []);

  // Optional: animate specific links (if needed)
  useEffect(() => {
    const elements = navRef.current?.querySelectorAll('.nav-link');
    if (!elements) return;

    elements.forEach((element) => {
      if (element.textContent.trim().toLowerCase() === "let's talk") {
        const el = element;
        const intervalId = setInterval(() => {
          gsap.fromTo(
            el,
            { rotate: 0, scale: 1 },
            {
              rotate: 10,
              scale: 1.2,
              yoyo: true,
              repeat: 1,
              duration: 0.3,
              ease: "power1.inOut",
            }
          );
        }, 3000);
        return () => clearInterval(intervalId);
      }
    });
  }, []);

  return (
    <AppBar
      position='relative'
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(10px)',
        py: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", flexWrap: "wrap" }}>
        <Stack
          component="section"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap={'wrap'}
          flexGrow={1}
        >
          {/* Logo + Status */}
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
                sx={{
                  fontSize: '12px',
                  color: theme.palette.success.main,
                  borderRadius: '50%',
                  animation: 'pulseGlow 1.5s infinite',
                  '@keyframes pulseGlow': {
                    '0%': { filter: `drop-shadow(0 0 0px ${theme.palette.success.main})` },
                    '50%': { filter: `drop-shadow(0 0 4px ${theme.palette.success.main})` },
                    '100%': { filter: `drop-shadow(0 0 0px ${theme.palette.success.main})` },
                  },
                }}
              />
              <Typography variant="body2" role="status" color="text.primary">
                Currently Available
              </Typography>
            </Stack>
          </Stack>

          {/* Nav List */}
          {isSm ? (
            <IconButton edge={'start'}>
              <MenuIcon color='text.primary' />
            </IconButton>
          ) : (
            <List
              ref={navRef}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                gap: 1
              }}
            >
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
                    className="nav-link"
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: 1,
                      color: theme.palette.text.primary,
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      '&.active': {
                        color: theme.palette.success.main,
                        fontWeight: 600,
                        borderTopLeftRadius: 0,
                        boxShadow: `inset 0 0 4px ${theme.palette.text.secondary}`,
                      },
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    <Typography variant="body2" textAlign="center" whiteSpace="nowrap">
                      {navItem.text}
                    </Typography>
                  </Box>
                </Tooltip>
              ))}

              {/* Resume Download Button */}
              <Tooltip
                title={<AttachFileIcon />}
                arrow
                placement="bottom"
              >
                <Box
                  component="a"
                  href="/Behan_Kumar_Resume.pdf"
                  download
                  className="nav-link"
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 1,
                    color: theme.palette.text.primary,
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  <Typography variant="body2" textAlign="center" whiteSpace="nowrap">
                    Download Resume
                  </Typography>
                </Box>
              </Tooltip>
            </List>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

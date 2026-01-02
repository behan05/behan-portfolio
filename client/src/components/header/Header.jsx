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
} from "../../mui/muiComponents";
import {
  MenuOpenIcon,
  HomeIcon,
  InfoIcon,
  WorkspacesIcon,
  ContactsIcon,
  AttachFileIcon,
  FiberManualRecordIcon,
  DarkModeIcon,
  LightModeIcon
} from "../../icons/icons";

import { NavLink } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../logo/Logo";

// Sidebar
import { useSidebar } from "../../context/SidebarContext";

// Plug useGSAP
gsap.registerPlugin(useGSAP);

function Header() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleSidebar } = useSidebar();
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
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          display: "flex",
          alignItems: "center",
        }}
      >

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {/* LEFT : Logo + Status */}
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Logo />

            <Stack
              direction="row"
              gap={0.5}
              alignItems="center"
              component={NavLink}
              to="/contact"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <FiberManualRecordIcon
                sx={{
                  fontSize: 10,
                  color: theme.palette.success.main,
                  animation: "pulse 1.4s infinite",
                  "@keyframes pulse": {
                    "0%": { opacity: 0.4 },
                    "50%": { opacity: 1 },
                    "100%": { opacity: 0.4 },
                  },
                }}
              />
              <Typography variant="body2" fontWeight={500}>
                Available
              </Typography>
            </Stack>
          </Stack>

          {/* CENTER : Navigation */}
          {isSm ? (
            <IconButton onClick={toggleSidebar}>
              <MenuOpenIcon />
            </IconButton>
          ) : (
            <Stack
              ref={navRef}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              {pages.map((navItem, index) => (
                <Box
                  key={index}
                  component={NavLink}
                  to={navItem.href}
                  className="nav-link"
                  sx={{
                    px: 3,
                    py: 1.5,
                    position: "relative",
                    textDecoration: "none",
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    transition: "color 0.3s ease",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: 4,
                      width: 0,
                      height: 2,
                      backgroundColor: theme.palette.success.main,
                      transform: "translateX(-50%)",
                      transition: "width 0.3s ease",
                    },

                    "&:hover": {
                      color: theme.palette.text.primary,
                    },

                    "&:hover::after": {
                      width: "60%",
                    },

                    "&.active": {
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                    },

                    "&.active::after": {
                      width: "60%",
                    },
                  }}
                >
                  <Typography variant="body2" whiteSpace="nowrap">
                    {navItem.text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}

          {/* RIGHT : Resume */}
          {!isSm && (
            <Tooltip title="Download Resume" arrow>
              <Box
                component="a"
                href="/Behan_Kumar_Resume.pdf"
                download
                className="nav-link"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1.5,
                  borderRadius: 1,
                  border: `1px solid ${theme.palette.divider}`,
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <Typography variant="body2">Resume</Typography>
              </Box>
            </Tooltip>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );

}

export default Header;

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
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
        {/* Logo Component */}
        <Stack
          flexGrow={1}
          component={NavLink}
          to="/"
          justifyContent={'center'}
          alignContent={'center'}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Behan Portfolio Logo"
            sx={{
              width: { xs: 80, sm: 100 },
              userSelect: 'none',
              display: 'block',
            }}
          />
        </Stack>


        {/* Pages List */}
        {!isSm ? (
          pages.map((page, index) => (
            <List
              ref={navRef}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItem
                component={NavLink}
                to={page.href}
                sx={{
                  px: 1,
                  py: 1,
                  mx: 0.5,
                  boxShadow: `0 0 1px ${theme.palette.text.primary}`,
                  borderTopRightRadius: "16px",
                  borderBottomLeftRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    borderTopLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                    borderTopRightRadius: "0",
                    borderBottomLeftRadius: "0",
                    boxShadow: `0 0 22rem ${theme.palette.text.primary}`,
                    background: "inherit",
                  },

                  "&:hover .MuiListItemText-primary": {
                    fontFamily: '"Edu VIC WA NT Hand Pre", cursive',
                  },
                }}
              >
                <Tooltip
                  title={
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 20,
                      color: theme.palette.text.primary,

                    }}>
                      {page.icon}
                    </Box>
                  }
                  placement="top"
                  arrow={true}
                  enterDelay={100}
                  leaveDelay={100}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: theme.palette.background.default,
                        border: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.primary,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1.5,
                      },
                    },
                    arrow: {
                      sx: {
                        color: theme.palette.background.default,
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={page.text}
                    primaryTypographyProps={{
                      sx: {
                        color: `${theme.palette.text.primary} !important`,
                        fontFamily: `"Megrim", system-ui`,
                      },
                    }}
                  />
                </Tooltip>
              </ListItem>
            </List>
          ))
        ) : (
          <IconButton>
            <MenuIcon sx={{
              color: theme.palette.text.primary,
            }} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

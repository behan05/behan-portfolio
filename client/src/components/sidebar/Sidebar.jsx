import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Box,
    useTheme,
} from "../../mui/muiComponents";
import { NavLink } from "react-router-dom";
import {
    HomeIcon,
    InfoIcon,
    WorkspacesIcon,
    ContactsIcon,
    AttachFileIcon,
} from "../../icons/icons";
import { useSidebar } from "../../context/SidebarContext";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const pages = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "About Me", href: "/about", icon: <InfoIcon /> },
    { text: "My Work", href: "/projects", icon: <WorkspacesIcon /> },
    { text: "Let's Talk", href: "/contact", icon: <ContactsIcon /> },
];

function Sidebar() {
    const { sidebarOpen, closeSidebar } = useSidebar();
    const theme = useTheme();
    const listRef = useRef(null);
    const timelineRef = useRef(null);

    // Open animation: wait for DOM to be ready using requestAnimationFrame loop
    useEffect(() => {
        if (!sidebarOpen) return;

        let attempts = 0;

        const waitForItemsAndAnimate = () => {
            const items = listRef.current?.querySelectorAll(".sidebar-item");

            if (!items || items.length === 0) {
                if (attempts < 10) {
                    attempts++;
                    requestAnimationFrame(waitForItemsAndAnimate);
                }
                return;
            }

            // Reset styles
            gsap.set(items, {
                opacity: 0,
                x: -40,
                scale: 0.9,
                rotate: -5,
            });

            // Animate in
            gsap.to(items, {
                opacity: 1,
                x: 0,
                scale: 1,
                rotate: 0,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.08,
                clearProps: "all",
            });
        };

        requestAnimationFrame(waitForItemsAndAnimate);
    }, [sidebarOpen]);

    // Close animation
    const handleCloseWithAnimation = () => {
        const items = listRef.current?.querySelectorAll(".sidebar-item");
        if (!items?.length) return closeSidebar();

        if (timelineRef.current) timelineRef.current.kill();

        timelineRef.current = gsap.timeline({
            onComplete: () => closeSidebar(),
        });

        timelineRef.current.to(items, {
            opacity: 0,
            scale: 0.85,
            rotate: -10,
            x: -50,
            duration: 0.25,
            ease: "power3.inOut",
            stagger: {
                each: 0.06,
                from: "end",
            },
        });
    };

    return (
        <Drawer
            anchor="left"
            open={sidebarOpen}
            onClose={handleCloseWithAnimation}
            ModalProps={{ keepMounted: true }}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 250,
                    bgcolor: "rgba(32, 5, 63, 0.09)",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 0 20px rgba(92, 91, 94, 0.1)",
                    borderBottom: `1px dotted ${theme.palette.primary.main}`,
                    color: "text.primary",
                },
            }}
        >
            <Toolbar />
            <Box
                ref={listRef}
                role="presentation"
                onKeyDown={(e) => {
                    if (e.key === "Escape") handleCloseWithAnimation();
                }}
            >
                <List>
                    {pages.map(({ text, href, icon }, index) => (
                        <ListItem key={index} disablePadding className="sidebar-item">
                            <ListItemButton onClick={closeSidebar} component={NavLink} to={href}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem disablePadding className="sidebar-item">
                        <ListItemButton
                            component="a"
                            onClick={closeSidebar}
                            href="/Behan_Kumar_Resume.pdf"
                            download="Behan_Kumar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ pl: 2 }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <AttachFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Download Resume" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;

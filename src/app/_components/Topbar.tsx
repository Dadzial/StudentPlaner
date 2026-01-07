"use client";
import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";


const pages = ["Home", "Tasks", "Calender", "Notes", "Grades"];
const settings = ["Account","Settings", "Logout"];

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                top: 0,
                left: 0,
                right: 0,
                mx: 2,
                mt: 2,
                width: "calc(100% - 32px)",
                borderRadius: 9,
                overflow: "hidden",
                backgroundColor: "#ffffff",
                color: "#B60A0A",
            }}
        >
            <Container maxWidth={false} disableGutters>
                <Toolbar sx={{ px: 2 }}>

                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <Image
                            src="/app_icon.png"
                            alt="Logo"
                            width={28}
                            height={28}
                            priority
                            style={{
                                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "var(--font-poppins)",
                            fontWeight: 600,
                            color: "inherit",
                            textDecoration: "none",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        StudyFlow
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" },  }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 , }} />

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                href={`/${page.toLowerCase()}`}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "#B60A0A", display: "block" , fontWeight: 700, textTransform:"none" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                                <Avatar
                                    alt="User Avatar"
                                    sx={{
                                        bgcolor: "#B60A0A",
                                        color: "#ffffff",
                                        width: 36,
                                        height: 36,
                                        filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                                    }}
                                />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            sx={{ mt: "45px" }}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

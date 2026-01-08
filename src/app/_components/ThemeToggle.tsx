"use client";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeMode } from "@/app/providers";
import {useTheme} from "@mui/material/styles";

export function ThemeToggle() {
    const theme = useTheme();
    const { mode, toggleMode } = useThemeMode();

    return (
        <IconButton sx={{backgroundColor:"#B60A0A", color: theme.palette.mode === "light" ? "#FFFFFF" : "#343434",}} onClick={toggleMode}>
            {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}

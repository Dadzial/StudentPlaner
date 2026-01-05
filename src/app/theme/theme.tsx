"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: "var(--font-inter), Arial, sans-serif",
    },
});

export default theme;
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
    createTheme({
        palette: {
            mode,
            background: {
                default:
                    mode === "light"
                        ? "radial-gradient(#DADADA, #E6E6E6)"
                        : "radial-gradient(#343434, #1D1C1C)",
                paper: mode === "light" ? "#ffffff" : "#1D1C1C",
            },
            text: {
                primary: mode === "light" ? "#fff" : "#fff",
            },
        },
        typography: { fontFamily: "var(--font-poppins)" },
    });

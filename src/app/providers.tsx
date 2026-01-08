"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState, createContext, useContext } from "react";
import { getTheme } from "@/app/theme/theme";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    mode: ThemeMode;
    toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeContextType | null>(null);

export const useThemeMode = () => {
    const ctx = useContext(ThemeModeContext);
    if (!ctx) throw new Error("useThemeMode outside provider");
    return ctx;
};

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>("light");

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono , Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/theme/theme";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Student-Planer",
    description: " ",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

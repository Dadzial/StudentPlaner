import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AppThemeProvider from "./providers";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
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
        <body className={`${poppins.variable}`}>
        <AppThemeProvider>{children}</AppThemeProvider>
        </body>
        </html>
    );
}

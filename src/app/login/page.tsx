"use client";
import React, { useEffect, useState ,useRef} from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { ThemeToggle } from "@/app/_components/ThemeToggle";
import styles from "./page.module.css";
import { useTheme } from "@mui/material/styles";

interface LoginResponse {
    uid?: string;
    error?: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const errorTimeoutRef = useRef<NodeJS.Timeout | null >(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [formError, setFormError] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/home");
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [router]);


    const showError = (message: string) => {
        if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
        setFormError(message);

        errorTimeoutRef.current = setTimeout(() => {
            setFormError("");
            errorTimeoutRef.current = null;
        }, 2000);
    };

    const handleLogin = async () => {
        setFormError("");

        if (!email && !password) {
            showError("Please enter your email address and password.");
            return;
        }

        if (!email) {
            showError("Please enter your email address.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("The email address format is incorrect.");
            return;
        }

        if (!password) {
            showError("Please enter your password.");
            return;
        }

        if (password.length < 8) {
            showError("Password must contain at least 8 characters.");
            return;
        }

        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data: LoginResponse = await res.json();

            if (!res.ok) {
                setFormError("Invalid email or password.");
                return;
            }

            router.push("/home");
        } catch {
            setFormError("Something went wrong. Please try again later.");
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: theme.palette.background.default,
                }}
            >
                <CircularProgress size="3rem" sx={{ color: "#B60A0A" }} />
            </Box>
        );
    }

    return (
        <div className={styles.page} style={{ background: theme.palette.background.default }}>
            <div className={styles.login}>
                <Paper
                    elevation={6}
                    sx={{
                        width: "900px",
                        height: "500px",
                        display: "flex",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            flex: 6,
                            padding: 6,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 1 }}>
                            <Box component="img" src="/app_icon.png" alt="App Icon" sx={{ width: 48, mb: 0.5 }} />
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                sx={{ color: "#B60A0A", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                            >
                                StudyFlow
                            </Typography>
                            <Typography sx={{ color: "#B60A0A", opacity: 0.7, fontSize: 14 }}>
                                Welcome back! Please enter your details
                            </Typography>
                        </Box>


                        <Typography
                            sx={{
                                color: "#B60A0A",
                                fontSize: "0.85rem",
                                height: "20px",
                                lineHeight: "20px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                mb: 0.5,
                            }}
                        >
                            {formError}
                        </Typography>


                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.9 }}>
                            <Typography sx={{ fontSize: "0.875rem", color: "#B60A0A", fontWeight: 500 }}>
                                Email
                            </Typography>

                            <TextField
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@gmail.com"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#B60A0A",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#B60A0A",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#B60A0A",
                                        },
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#B60A0A",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            <Typography sx={{ fontSize: "0.875rem", color: "#B60A0A", fontWeight: 500 }}>
                                Password
                            </Typography>

                            <TextField
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#B60A0A",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#B60A0A",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#B60A0A",
                                        },
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#B60A0A",
                                    },
                                }}
                            />

                            <Typography
                                onClick={() => router.push("/reset-password")}
                                sx={{
                                    color: "#B60A0A",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    opacity: 0.7,
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                Forgot password?
                            </Typography>
                        </Box>

                        <Button
                            onClick={handleLogin}
                            sx={{
                                mt: 1.5,
                                backgroundColor: "#B60A0A",
                                color: theme.palette.mode === "dark" ? "#343434" : "#ffffff",
                                borderRadius: "12px",
                                px: 5,
                                py: 1.2,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#9E0808" },
                            }}
                        >
                            Log in
                        </Button>

                        <Typography
                            onClick={() => router.push("/register")}
                            sx={{
                                mt: 0.5,
                                color: "#B60A0A",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                opacity: 0.7,
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            Don&#39;t have an account? Sign up
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: 4,
                            position: "relative",
                            backgroundImage: "url('/login_image.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "#D91818", opacity: 0.8 }} />
                    </Box>
                </Paper>
            </div>

            <div className={styles.footer}>
                <ThemeToggle />
                <Typography
                    sx={{
                        fontFamily: "var(--font-poppins)",
                        color: "#B60A0A",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                        fontSize: 14,
                    }}
                    fontWeight={600}
                >
                    © 2025 StudyFlow. All rights reserved.
                </Typography>
            </div>
        </div>
    );
}

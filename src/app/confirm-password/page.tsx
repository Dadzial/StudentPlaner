"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { confirmNewPassword } from "@/lib/firebase/auth";

export default function ConfirmPassword() {
    const router = useRouter();
    const params = useSearchParams();
    const oobCode = params.get("oobCode");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState("");

    const handleConfirmPassword = async () => {
        let valid = true;

        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            valid = false;
        }

        if (!valid) {
            setTimeout(() => setPasswordError(""), 2000);
            return;
        }

        if (!oobCode) {
            setPasswordError("Invalid or expired reset link");
            return;
        }

        try {
            await confirmNewPassword(oobCode, password);
            setSuccess("Password reset successful! Redirecting to login...");
            setTimeout(() => router.push("/login"), 2000);
        } catch (err) {
            setPasswordError("Reset link expired or invalid");
        }
    };

    return (
        <div className={styles.page}>
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
                        justifyContent: "start",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Box
                        component="img"
                        src="/app_icon.png"
                        alt="App Icon"
                        sx={{ width: 48, height: 48 }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "var(--font-poppins)",
                            color: "#B60A0A",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        }}
                        variant="h5"
                        fontWeight={600}
                    >
                        StudyFlow
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--font-poppins)",
                            color:"#B60A0A",
                            opacity: 0.7,
                            fontSize: "14px",
                        }}
                        fontWeight={600}>
                        Confirm Password
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                        {passwordError && (
                            <Typography sx={{ color: "#B60A0A", fontSize: "0.8rem" }}>
                                {passwordError}
                            </Typography>
                        )}
                        {success && (
                            <Typography sx={{ color: "green", fontSize: "0.8rem" }}>
                                {success}
                            </Typography>
                        )}
                        <TextField
                            placeholder="********"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "transparent",
                                    "& fieldset": { borderColor: "#B60A0A" },
                                    "&:hover fieldset": { borderColor: "#B60A0A" },
                                    "&.Mui-focused fieldset": { borderColor: "#B60A0A" },
                                },
                                "& .MuiInputBase-input": { color: "#B60A0A" },
                            }}
                        />
                    </Box>

                    <Button
                        sx={{
                            backgroundColor: "#B60A0A",
                            color: "#FFFFFF",
                            borderRadius: "12px",
                            px: 5,
                            py: 1.2,
                            fontWeight: 600,
                            textTransform: "none",
                            boxShadow: "0 4px 10px rgba(182, 10, 10, 0.4)",
                            "&:hover": {
                                backgroundColor: "#9E0808",
                                boxShadow: "0 6px 14px rgba(182, 10, 10, 0.5)",
                            },
                        }}
                        onClick={handleConfirmPassword}
                    >
                        Confirm Password
                    </Button>

                    <Typography
                        onClick={() => router.push("/login")}
                        sx={{
                            color: "#B60A0A",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            opacity: 0.7,
                            userSelect: "none",
                            transition: "color 0.2s ease",
                            "&:hover": { color: "#9E0808", textDecoration: "underline" },
                        }}
                    >
                        Back to login
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
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#D91818",
                            opacity: 0.8,
                        }}
                    />
                </Box>
            </Paper>
        </div>
    );
}

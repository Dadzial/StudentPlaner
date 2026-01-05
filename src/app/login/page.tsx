"use client";
import styles from "./page.module.css"
import { Box, Paper, Typography , TextField , Button } from "@mui/material";

export default function Login () {
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
                        gap: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="/app_icon.png"
                        alt="App Icon"
                        sx={{
                            width: 48,
                            height: 48,
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "var(--font-poppins)",
                            color:"#B60A0A",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",

                        }}
                        variant="h5" fontWeight={600}>
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
                        Welcome back! Please enter your  details
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                        <Typography
                            sx={{
                                fontSize: "0.875rem",
                                color: "#B60A0A",
                                fontWeight: 500,
                            }}
                        >
                            Username
                        </Typography>

                        <TextField
                            variant="outlined"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "transparent",
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
                        <Typography
                            sx={{
                                fontSize: "0.875rem",
                                color: "#B60A0A",
                                fontWeight: 500,
                            }}
                        >
                            Password
                        </Typography>

                        <TextField
                            variant="outlined"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "transparent",
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
                            sx={{
                                color: "#B60A0A",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                opacity:0.7,
                                userSelect: "none",
                                transition: "color 0.2s ease",
                                "&:hover": {
                                    color: "#9E0808",
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            Forgot password ?
                        </Typography>
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
                    >
                        Log in
                    </Button>
                    <Typography
                        sx={{
                            color: "#B60A0A",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            opacity:0.7,
                            userSelect: "none",
                            transition: "color 0.2s ease",
                            "&:hover": {
                                color: "#9E0808",
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Don&#39;t have account ? Sign up
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
                            opacity:0.8
                        }}
                    />
                </Box>
            </Paper>
        </div>
    );
}
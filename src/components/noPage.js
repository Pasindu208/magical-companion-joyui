import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Navbar from "./navbar";

const floatingAnimation = {
    '@keyframes float': {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0px)' }
    }
};

const shakeAnimation = {
    '@keyframes shake': {
        '0%, 100%': { transform: 'translateX(0)' },
        '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
        '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
    }
};

const NoPage = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}>
            <Navbar />
            <Typography 
                level="h1" 
                fontSize="3rem" 
                marginBottom="3rem"
                sx={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    ...floatingAnimation,
                }}>
                <span style={{
                    display: 'inline-block',
                    animation: 'float 3s ease-in-out infinite',
                }}>4</span>
                <span style={{
                    display: 'inline-block',
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '0.2s',
                }}>0</span>
                <span style={{
                    display: 'inline-block',
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '0.4s',
                }}>4</span>
            </Typography>
            <Typography 
                level="h2" 
                marginBottom={2}
                sx={{
                    animation: 'shake 0.5s ease-in-out',
                    ...shakeAnimation
                }}>
                Uh-oh! You've wandered off the Marauder's Map 🗺️📜.
            </Typography>
            <Typography marginBottom={2}>
                Mischief Managed? Not quite. It seems the page you're looking
                for has vanished into thin air, like a disapparated wizard.
                Perhaps try summoning it again or use the navigation to return
                to safer grounds!
            </Typography>
            <Link
                component={RouterLink}
                to="/"
                variant="soft"
                color="success"
                style={{
                    textDecoration: "none",
                    // color: "#007bff",
                    marginTop: "20px",
                }}>
                Back to Hogwarts 🏰
            </Link>
        </div>
    );
};

export default NoPage;

import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Navbar from "./navbar";

const waveAnimation = `
  @keyframes waveFloat {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;

export default function UnderConstruction() {
    return (
        <div>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    textAlign: "center",
                }}>
                <div
                    style={{
                        fontSize: "3rem",
                        marginBottom: "3rem",
                        display: "flex",
                        gap: "0.5rem",
                    }}>
                    {["🚧", "🧙‍♂️", "🧪"].map((emoji, index) => (
                        <span
                            key={index}
                            style={{
                                animation: "waveFloat 2s ease-in-out infinite",
                                animationDelay: `${index * 0.2}s`,
                            }}>
                            {emoji}
                        </span>
                    ))}
                </div>
                <style>{waveAnimation}</style>
                <Typography level="h2" marginBottom={2}>
                    We're Brewing Something Magical
                </Typography>
                <Typography marginBottom={2}>
                    ⚗️ Our team of witches and wizards is currently working on a
                    spell to make this page appear. For now, it's as elusive as
                    the Room of Requirement! Check back later for magical
                    updates.
                </Typography>
                <Link
                    component={RouterLink}
                    to="/"
                    variant="soft"
                    color="success"
                    style={{
                        textDecoration: "none",
                        marginTop: "20px",
                    }}>
                    Back to Hogwarts 🏰
                </Link>
            </Box>
        </div>
    );
}

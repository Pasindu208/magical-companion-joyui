import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Navbar from "./navbar";

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
            <Typography level="h1" fontSize="3rem" marginBottom="3rem">
                404
            </Typography>
            <Typography level="h2" marginBottom={2}>
                Uh-oh! You've wandered off the Marauder's Map.
            </Typography>
            <Typography marginBottom={2}>
                🗺️ Mischief Managed? Not quite. It seems the page you're looking
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

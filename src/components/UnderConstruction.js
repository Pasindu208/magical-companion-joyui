import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Navbar from "./navbar";

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
                    height: "100%",
                    gap: 2,
                    pt: "120px",
                    // mx: '1',
                    textAlign: "center",
                }}>
                <div
                    style={{
                        fontSize: "3rem",
                        marginBottom: "3rem",
                    }}>
                    🚧👷🏾🪄
                </div>
                <Typography level="h2">Page Under Construction</Typography>
                <Typography>
                    We're working hard to bring you something magical. Please
                    check back later!
                </Typography>
            </Box>
        </div>
    );
}

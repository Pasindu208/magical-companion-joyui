import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";

export default function ModeToggle() {
    const { mode, setMode } = useColorScheme();

    return (
        <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            sx={{
                borderRadius: "50%",
                padding: "8px",
                minWidth: "40px",
                minHeight: "40px",
                mr: 0,  // add margin right
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'background.level1',
            }}>
            {mode === "dark" ? (
                <span style={{ fontSize: "20px" }}>🌙</span>
            ) : (
                <span style={{ fontSize: "20px" }}>☀️</span>
            )}
        </IconButton>
    );
}

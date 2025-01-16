import { Padding } from "@mui/icons-material";

export const navbarContainerStyles = {
    width: "100%",
    height: { xs: "100px", sm: "70px", md: "80px" }, // responsive height
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: { xs: 1, sm: 1.5, md: 2 }, // responsive padding
    borderBottom: "1px solid",
    borderColor: "divider",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    overflow: "hidden",
    backgroundColor: "background.level2",
    mx: 0,
    marginBottom: "200px", // Add space below navbar
    boxSizing: "border-box",
};

export const brandBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
};

export const brandTextStyles = {
    background: (theme) =>
        theme.palette.mode === "dark"
            ? "linear-gradient(270deg, rgb(237, 237, 238) 0%, rgb(98, 100, 203) 50%, rgb(237, 237, 238) 100%)"
            : "linear-gradient(270deg, rgb(22, 22, 132) 0%, rgb(114, 116, 164) 50%, rgb(22, 22, 132) 100%)",
    backgroundSize: "200% auto",
    animation: "gradient 7s ease infinite",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
    textDecoration: "none",
    "@keyframes gradient": {
        "0%": {
            backgroundPosition: "0% center",
        },
        "100%": {
            backgroundPosition: "-200% center",
        },
    },
};
